"use client";

import { KAPLAYCtx, GameObj, Vec2 } from "kaplay";
import Toast from "@/app/ui/utils/popup";
import { TILE_SIZE, TileTypes, Chunk } from "@/app/lib/definitions";

export function fireArea(k: KAPLAYCtx) {
    const MAP_OFFSET = k.vec2(500, 0);
    const AreaMap = [
        [2, 2, 2, 2, 2],
        [3, 3, 3, 2, 2],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 2],
        [2, 2, 2, 2, 2]
    ];

    // tiles
    AreaMap.forEach((row, y) => {
        row.forEach((frame, x) => {
            k.add([
                k.sprite("fire", { frame }),
                k.pos(MAP_OFFSET.x + x * TILE_SIZE, MAP_OFFSET.y + y * TILE_SIZE),
                k.anchor("topleft"),   
                k.scale(0.094),
                "fire-area"
            ]);
        });
    });
}

export function soilArea(k: KAPLAYCtx) {
    const MAP_OFFSET = k.vec2(0, 0);
    const AreaMap = [
        [2, 2, 2, 2, 2],
        [2, 3, 3, 3, 2],
        [2, 1, 0, 0, 2],
        [2, 1, 0, 0, 2],
        [2, 2, 2, 2, 2]
    ];

    AreaMap.forEach((row, y) => {
        row.forEach((frame, x) => {
            console.log(x, y);
            k.add([
                k.sprite("soil", { frame }),
                k.pos(MAP_OFFSET.x + x * TILE_SIZE, MAP_OFFSET.y + y * TILE_SIZE),
                k.anchor("topleft"),
                k.scale(0.094),
                "soil-tile"
            ]);
        });
    });
}

export function nuclearWasteArea(k: KAPLAYCtx) {
    const MAP_OFFSET = k.vec2(850, 200);
    const AreaMap = [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3],
        [0, 1, 2, 3, 0]
    ];

    AreaMap.forEach((row, y) => {
        row.forEach((frame, x) => {
            k.add([
                k.sprite("nuclearWaste", { frame }),
                k.pos(MAP_OFFSET.x + x * TILE_SIZE, MAP_OFFSET.y + y * TILE_SIZE),
                k.anchor("topleft"),
                k.scale(0.15),
                "nuclearWaste-tile"
            ]);
        });
    });
}

export function urbanTile(k: KAPLAYCtx) {
    const MAP_OFFSET = k.vec2(250, 350);
    const AreaMap = [
        [0, 1, 2, 3, 0],
        [1, 2, 3, 0, 1],
        [2, 3, 1, 0, 2],
    ];

    AreaMap.forEach((row, x) => {
        row.forEach((frame, y) => {
            k.add([
                k.sprite("urbanization", { frame }),
                k.pos(MAP_OFFSET.x + x * TILE_SIZE, MAP_OFFSET.y + y * TILE_SIZE),
                k.scale(0.2),
                k.anchor("topleft"),
                "urban-tile"
            ]);
        });
    });
}

export function grassLand(k: KAPLAYCtx, x: number, y: number, areaMap: number[][], scale: number) {
    // so this function is for generating land/soil na lalakaran ng character syempre and other. It will accept two parameters: x & y for position ng pag-render sa canvas
    // another param niya is the bitmap kung ilan or gaano kalawak yung ire-render na tile sa canvas
    const tileScale = scale;
    const mapOffset = k.vec2(x, y);
    const bitMap = areaMap;

    bitMap.forEach((row, x) => {
        row.forEach((frame, y) => {
            k.add([
                k.sprite("soil", { frame }),
                k.pos(mapOffset.x + x * (800 * 0.04), mapOffset.y + y * (800 * 0.04)),
                k.anchor("topleft"),
                k.scale(tileScale),
                "land"
            ]);
        });
    });
}

export function forestLand(k: KAPLAYCtx, x: number, y: number, areaMap: number[][], scale: number) {
    // sa function naman na to is for generating the area or land for planting trees and make sure malawak for freestyling ng user
    // naga-accept ng params na: x & y for position, areaMap for area ng ire-render na tile, scale for size ng tile

}

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