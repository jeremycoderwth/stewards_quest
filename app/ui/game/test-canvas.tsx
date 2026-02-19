/* 
    THIS FILE IS FOR TESTING AND DEBUG PURPOSES. PLEASE DON'T OPEN THIS IN THE BROWSER
*/


"use client";

import kaplay from "kaplay";
import { useEffect } from "react";
import { loadAssets } from "@/app/lib/game/assets";
import { MapGenerator } from '@/app/ui/utils/map-generator';
import { RenderChunk } from '@/app/ui/utils/chunk-manager';
import { levels } from "@/app/lib/data";

export default function PlaygroundCanvas() {
    const fireTiles = {
        0: { sprite: { name: "fire", frame: 3 }, collides: false },
        1: { sprite: { name: "fire", frame: 1 }, collides: false },
        2: { sprite: { name: "fire", frame: 2 }, collides: false },
        3: { sprite: { name: "fire", frame: 0 }, collides: false },
    };
    const soilTiles = {
        0: { sprite: { name: "soil", frame: 2 }, collides: false },
        1: { sprite: { name: "soil", frame: 1 }, collides: false },
        2: { sprite: { name: "soil", frame: 3 }, collides: false },
        3: { sprite: { name: "soil", frame: 0 }, collides: false },
    };

    const tileSize = 800 * 0.08;
    const areaWidth = 2000;
    const areaHeight = 2000;

    useEffect(() => {
        const canvas = kaplay({
            width: 1300,
            height: 600,
            background: [150, 75, 0],
            canvas: document.getElementById("test-canvas") as HTMLCanvasElement,
            font: "PressStart2P",
            touchToMouse: true,
            debug: true,
        });

        loadAssets(canvas);
        
        const generatedMap = new MapGenerator(areaWidth, areaHeight, tileSize, 1);
        const mapData = generatedMap.createDefaultMap();
        
        //const chunkManager = new ChunkManager(10);
        const chunkRenderer = new RenderChunk(canvas, mapData, levels[0].worldTheme, tileSize, 10);

        const boy = canvas.add([
            canvas.sprite("boy"),
            canvas.pos(canvas.center().x, 300),
            canvas.anchor("center"),
            canvas.scale(0.31),
            canvas.area({ shape: new canvas.Rect(canvas.vec2(0, 70), 100, 100) }),
            canvas.body(),
            canvas.z(20),
            "player"
        ]);

        canvas.add([
            canvas.text("CONGRATULATIONS! Please plant your preferred trees and have fun", { size: 16, align: "center" }),
            canvas.pos(canvas.center().x, 100),
            canvas.anchor("center"),
            canvas.fixed(),
            "freestyle-ui",
            "heading"
        ]);

        const restartBtn = canvas.add([
            canvas.rect(220, 60, { radius: 999 }),
            canvas.pos(canvas.center().x + 450, canvas.center().y + 250),
            canvas.anchor("center"),
            canvas.area(),
            canvas.color(200, 50, 50),
            canvas.outline(3),
            canvas.fixed(),
            "btn"
        ]);

        restartBtn.add([
            canvas.text("RESTART GAME", { size: 12, align: "center" }),
            canvas.anchor("center"),
            "btn"
        ]);

        restartBtn.onClick(() => {
            canvas.go("main", 0);
        });

        const btn = canvas.add([
            canvas.rect(120, 45, { radius: 15 }),
            canvas.pos(canvas.center().x + 550, 100 + 1 * 80),
            canvas.anchor("center"),
            canvas.area(),
            canvas.fixed(),
            canvas.outline(3),
            canvas.color(50, 200, 50),
            "btn"
        ]);

        btn.add([
            canvas.text(`Level 1/4`, { size: 12, align: "center" }),
            canvas.anchor("center"),
            "btn"
        ]);

        canvas.onKeyDown("left", () => {
            boy.move(-80, 0);
            if (boy.getCurAnim()?.name !== "move-left") {
                boy.play("move-left");
            }
        });

        canvas.onKeyDown("right", () => {
            boy.move(80, 0);
            if (boy.getCurAnim()?.name !== "move-right") {
                boy.play("move-right");
            }
        });

        canvas.onKeyDown("up", () => {
            boy.move(0, -80);
            if (boy.getCurAnim()?.name !== "move-backward") {
                boy.play("move-backward");
            }
        });

        canvas.onKeyDown("down", () => {
            boy.move(0, 80);
            if (boy.getCurAnim()?.name !== "move-forward") {
                boy.play("move-forward");
            }
        });

        canvas.onKeyRelease("left", () => {
            if (!canvas.isKeyDown("left")) {
                boy.play("idle-left");
            }
        });

        canvas.onKeyRelease("right", () => {
            if (!canvas.isKeyDown("right")) {
                boy.play("idle-right");
            }
        });

        canvas.onKeyRelease("up", () => {
            if (!canvas.isKeyDown("up")) {
                boy.play("idle-backward");
            }
        });

        canvas.onKeyRelease("down", () => {
            if (!canvas.isKeyDown("down")) {
                boy.play("idle-forward");
            }
        });

        // boy.onKeyDown(["left", "a"], (key) => {
        //     if (key === "left" || key === "a") {
        //         boy.play("move-left");
        //         canvas.debug.log(boy.getCurAnim()?.name);
        //         boy.move(-20 * 5, 0);
        //     }
        //     // boy.move(-20 * 5, 0);
        // });

        // boy.onUpdate(() => {
        //     if (canvas.isKeyDown("left")) {
        //         boy.play("move-left");
        //         boy.move(-20 * 5, 0);
        //     }
        //     if (canvas.isKeyDown("right")) {
        //         boy.play("move-right");
        //         boy.move(20 * 5, 0);
        //     }
        //     if (canvas.isKeyDown("up")) {
        //         boy.play("move-backward");
        //         boy.move(0, -20 * 5);
        //     }
        //     if (canvas.isKeyDown("down")) {
        //         boy.play("move-forward");
        //         boy.move(0, 20 * 5);
        //     }

        //     if (canvas.isKeyReleased("left")) {
        //         boy.play("idle-left");
        //     }
        //     if (canvas.isKeyReleased("right")) {
        //         boy.play("idle-right");
        //     }
        //     if (canvas.isKeyReleased("up")) {
        //         boy.play("idle-backward");
        //     }
        //     if (canvas.isKeyReleased("down")) {
        //         boy.play("idle-forward");
        //     }
        // });

        // boy.onKeyDown(["down", "s"], () => {
        //     boy.play("move-forward", { speed: 20 });
        //     boy.move(0, 50);
        // });

        // boy.onKeyRelease(["down", "s"], () => {
        //     boy.play("idle-forward");
        // });

        // boy.onKeyDown(["up", "w"], () => {
        //     boy.play("move-backward", { speed: 20 });
        //     boy.move(0, -50);
        // });

        // boy.onKeyRelease(["up", "w"], () => {
        //     boy.play("idle-backward");
        // });

        // boy.onKeyDown(["left", "a"], () => {
        //     boy.play("move-left", { speed: 20 });
        //     boy.move(-50, 0); 
        // });

        // boy.onKeyRelease(["left", "a"], () => {
        //     boy.play("idle-left");
        // });

        // boy.onKeyDown(["right", "d"], () => {
        //     boy.play("move-right", { speed: 20 });
        //     boy.move(50, 0); 
        // });

        // boy.onKeyRelease(["right", "d"], () => {
        //     boy.play("idle-right");
        // });

        let currentTree = null;
        let dragOffset = canvas.vec2(0, 0);
        let isDragging = false;
        let dragSource = null;
        let pressedTree = null;
        let pressStartPos = null;
        const DRAG_THRESHOLD = 5;

        function createBaseTree(x: number, y: number, spriteName: string) {
            const baseTree = canvas.add([
                canvas.sprite(spriteName),
                canvas.pos(x, y),
                canvas.area({ shape: new canvas.Rect(canvas.vec2(0), 50, 70) }),
                canvas.anchor("center"),
                canvas.fixed(),
                "base-tree",
                { 
                    treeSpriteType: spriteName  // Store sprite name here
                }
            ]);

            // Use onHover to detect when mouse is over this specific tree
            baseTree.onHoverUpdate(() => {
                if (canvas.isMouseDown() && !isDragging && !pressedTree) {
                    // Mouse was pressed down while over THIS tree
                    pressedTree = baseTree;
                    pressStartPos = canvas.mousePos();
                }
            });
        }

        // Global update - runs every frame
        canvas.onUpdate(() => {
            // Check if we should start dragging
            if (pressedTree && !isDragging && canvas.isMouseDown()) {
                const mouse = canvas.mousePos();
                const dist = mouse.dist(pressStartPos);
                
                if (dist > DRAG_THRESHOLD) {
                    // Start dragging
                    isDragging = true;
                    dragSource = pressedTree;

                    // Create new tree with the CORRECT sprite from the pressed tree
                    currentTree = canvas.add([
                        canvas.sprite(pressedTree.treeSpriteType), // Use the stored sprite name
                        canvas.anchor("center"),
                        canvas.pos(canvas.toWorld(mouse)),
                        canvas.area({ shape: new canvas.Rect(canvas.vec2(0, 10), 50, 50) }),
                        canvas.body({ isStatic: true }),
                        canvas.z(5),
                        "draggable"
                    ]);

                    currentTree.onCollide("player", () => {
                        const infoBg = canvas.add([
                            canvas.rect(190, 52, { radius: 12 }),
                            canvas.pos(canvas.center().x, canvas.center().y - 100),
                            canvas.anchor("center"),
                            canvas.z(2000),
                            canvas.outline(2),
                            canvas.color(255, 255,255),
                            canvas.fixed(),
                            "info"
                        ]);

                        infoBg.add([
                            canvas.text("Planting trees are helpful to our environment!", { size: 10, align: "center", lineSpacing: 4, width: 180 }),
                            canvas.anchor("center"),
                            canvas.color(0, 0, 0),
                            "info"
                        ]);
                    });

                    currentTree.onCollideEnd("player", () => {
                        canvas.destroyAll("info");
                    });

                    dragOffset = canvas.vec2(0, 0);
                }
            }

            // Update dragged tree position
            if (isDragging && currentTree) {
                const mouse = canvas.mousePos();
                currentTree.pos = canvas.toWorld(mouse).sub(dragOffset);
            }
        });

        // Global mouse release
        canvas.onMouseRelease(() => {
            if (isDragging && currentTree) {
                // Tree is dropped at current position
                currentTree.unuse("draggable");
                currentTree.use("planted-tree");
            }

            // Reset all drag states
            isDragging = false;
            dragSource = null;
            currentTree = null;
            pressedTree = null;
            pressStartPos = null;
        });
        
        createBaseTree(50, 100, "tree_green_1");
        createBaseTree(50, 200, "tree_teal");
        createBaseTree(50, 300, "tree_rose");
        createBaseTree(50, 400, "tree_yellowish_green");
        createBaseTree(50, 500, "tree_red");

        const getInfo = () => `
            Animation: ${boy.getCurAnim()?.name}
            Frame: ${boy.frame}
            Speed: ${boy.getCurAnim()?.speed}
        `.trim();

        const label = canvas.add([
            canvas.text(getInfo(), { size: 14 }),
            canvas.pos(20),
            canvas.color(255, 255, 255),
            canvas.fixed(),
        ]);

        label.onUpdate(() => {
            label.text = getInfo();
        });

        canvas.onUpdate(() => {
            canvas.setCamPos(boy.pos);
            
            chunkRenderer.update(canvas.getCamPos());
            //fireChunkRenderer.update(canvas.getCamPos());
        });

        canvas.debug.inspect = true;
    }, []);

    return (
        <div>
            <canvas id="test-canvas" />
        </div>
    );
}