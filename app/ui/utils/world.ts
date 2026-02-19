import type { KAPLAYCtx } from "kaplay";
import { MapGenerator } from "./map-generator";
import { RenderChunk } from "./chunk-manager";
import { TileFrame, TileTypes } from "@/app/lib/definitions";

export class WorldManager {
    private canvas: KAPLAYCtx;
    public chunkManager: RenderChunk;
    public mapGenerator: MapGenerator;
    private mapData: TileFrame[][];

    constructor(canvas: KAPLAYCtx, canvasWidth: number, canvasHeight: number, tileSize: number, tileFrames: TileTypes ) {
        this.canvas = canvas;
        this.mapGenerator = new MapGenerator(canvasWidth, canvasHeight, tileSize);
        const mapData = this.mapGenerator.createDefaultMap() || this.mapGenerator.getMap("map");
        this.mapData = mapData;
        this.chunkManager = new RenderChunk(canvas, mapData, tileFrames, tileSize, 10);
    }

    public setTile(x: number, y: number, tileId: number) {
        this.chunkManager.setTile(x, y, tileId);
    }

    public updateChunks(playerPos: { x: number, y: number }) {
        this.chunkManager.update(playerPos);
    }

    public getTile(x: number, y: number): number {
        return this.mapData[y]?.[x] ?? 0;
    }
}

export class CameraController {
    private canvas: KAPLAYCtx;
    private isMoving = false;

    constructor(canvas: KAPLAYCtx) {
        this.canvas = canvas;
    }

    getPosition() {
        return this.canvas.getCamPos();
    }

    setPosition(x: number, y: number) {
        this.canvas.setCamPos(x, y);
    }

    async moveTo(targetX: number, targetY: number, duration = 0.5) {
        if (this.isMoving) return;

        this.isMoving = true;

        const start = this.canvas.getCamPos();
        let elapsed = 0;

        return new Promise<void>((resolve) => {
            const move = this.canvas.onUpdate(() => {
                elapsed += this.canvas.dt();

                const t = Math.min(elapsed / duration, 1);
                const ease = t * t * (3 - 2 * t);

                const x = start.x + (targetX - start.x) * ease;
                const y = start.y + (targetY - start.y) * ease;

                this.canvas.setCamPos(x, y);

                if (t >= 1) {
                    move.cancel();
                    this.isMoving = false;
                    resolve();
                }
            });
        });
    }
}