"use client";

import { KAPLAYCtx, GameObj, Vec2 } from "kaplay";
import Toast from "@/app/ui/utils/popup";
import { TileTypes } from "@/app/lib/definitions";

export class TileMap {
    private canvas: KAPLAYCtx;
    private mapData: number[][];
    private tileTypes: TileTypes;
    private tileSize: number;
    private tileObjects: GameObj[][] = [];

    constructor(canvas: KAPLAYCtx, mapData: number[][], tileTypes: TileTypes, tileSize: number) {
        this.canvas = canvas;
        this.mapData = mapData;
        this.tileTypes = tileTypes;
        this.tileSize = tileSize;
    }

    render() {
        for (let y = 0; y < this.mapData.length; y++) {
            this.tileObjects[y] = [];

            for (let x = 0; x < this.mapData[y].length; x++) {
                const tileId = this.mapData[y][x];
                const config = this.tileTypes[tileId];
                const { name, frame } = config.sprite;

                const tile = this.canvas.add([
                    this.canvas.sprite(name, { frame }),
                    this.canvas.pos(x * this.tileSize, y * this.tileSize),
                    this.canvas.scale(0.09),
                    this.canvas.anchor("topleft"),
                    "tile"
                ]);

                this.tileObjects[y][x] = tile;
            }
        }
    }

    getTileAt(x: number, y: number) {
        if (this.isOutOfBounds(x, y)) return null;
        return this.mapData[y][x];
    }

    setTileAt(x: number, y: number, newTileId: number) {
        if (this.isOutOfBounds(x, y)) {
            Toast.warning(`Out of Bounds: ${x} and ${y}`);
            return false;
        }

        this.mapData[y][x] = newTileId;

        const oldTile = this.tileObjects[y][x];
        oldTile.destroy();

        const config = this.tileTypes[newTileId];
        console.log(this.tileTypes[newTileId]);
        const { name, frame } = config.sprite;

        const newTile = this.canvas.add([
            this.canvas.sprite(name, { frame }),
            this.canvas.pos(x * this.tileSize, y * this.tileSize),
            this.canvas.scale(0.09),
            this.canvas.anchor("topleft"),
            "tile"
        ]);

        this.tileObjects[y][x] = newTile;
        Toast.success("Changed tile successfully!");
    }

    worldToGrid(pos: Vec2) {
        return {
            x: Math.floor(pos.x / this.tileSize),
            y: Math.floor(pos.y / this.tileSize)
        };
    }

    private isOutOfBounds(xOffset: number, yOffset: number) {
        return (
            yOffset < 0 || yOffset >= this.mapData.length || xOffset < 0 || xOffset >= this.mapData.length
        );
    }
}