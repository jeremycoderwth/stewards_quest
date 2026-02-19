"use client";

import kaplay, { KAPLAYCtx } from "kaplay";
import { Player } from "@/app/ui/utils/player";
import { loadAssets } from "@/app/lib/game/assets";
import { useEffect, useRef } from "react";
import { useGameStore } from "@/app/lib/store/store-data";
import { nuclearWasteLevel, levels, grassland } from "@/app/lib/data";
import { WorldManager } from "@/app/ui/utils/world";
import { QuizSystem } from '@/app/ui/utils/quiz';
import { Level } from '@/app/ui/utils/level';
import { GameManager, ProgressManager } from '@/app/ui/utils/manage-level'; 
import { RenderChunk } from '@/app/ui/utils/chunk-manager';
import { MapGenerator } from '@/app/ui/utils/map-generator';
import { AffectedArea, LEVELS } from "@/app/lib/definitions";

export default function GameInit() {
    const rootRef = useRef<HTMLDivElement>(null);
    const gameRef = useRef<KAPLAYCtx>(null);
    const selectedChar = useGameStore((state) => state.selectedCharacter);
    const charSprite = selectedChar?.sprite || "boy";
    
    useEffect(() => {
        const rootRefElement = rootRef.current;
        if (!rootRef.current) return;
        if (!charSprite) return;
        if (gameRef.current) return;

        const k = kaplay({
            width: 1300,
            height: 600,
            background: [255, 255, 255],
            global: false,
            debug: true,
            touchToMouse: true,
            pixelDensity: window.devicePixelRatio,
            root: rootRef.current,
            font: "PressStart2P"
        });

        loadAssets(k);

        const progress = new GameManager(k);

        k.scene("main", (levelIndex: number) => {
    
            const currentConfig = levels[levelIndex];

            const levelManager = new Level(nuclearWasteLevel, false);

            const world = new WorldManager(k, currentConfig.worldWidth, currentConfig.worldHeight, currentConfig.tileSize, currentConfig.worldTheme);

            const steward = new Player(k, charSprite, 200);

            const worldPixelWidth = currentConfig.worldWidth * currentConfig.tileSize;
            const worldPixelHeight = currentConfig.worldHeight * currentConfig.tileSize;

            steward.setBounds(worldPixelWidth, worldPixelHeight);

            const waitHelper = (secs: number): Promise<void> => {
                return new Promise(resolve => {
                    setTimeout(resolve, secs * 1000);
                });
            };

            let cameraLocked = false;

            async function showImpactAt(tileX: number, tileY: number) {
                cameraLocked = true;
                const target = k.vec2(tileX * currentConfig.tileSize, tileY * currentConfig.tileSize);
                const start = k.getCamPos();
                const duration = 0.4;
                const startTime = performance.now();

                await new Promise<void>((resolve) => {
                    const move = () => {
                        const elapsed = (performance.now() - startTime) / 1000;
                        const t = Math.min(elapsed / duration, 1);

                        const pos = k.lerp(start, target, t);

                        k.setCamPos(pos);

                        if (t < 1) {
                            requestAnimationFrame(move);
                        } else {
                            setTimeout(() => {
                                resolve();
                            }, 400);
                        }
                    };

                    move();
                });

                await waitHelper(0.5);
                cameraLocked = false;
            }

            const quiz = new QuizSystem(
                k, 
                levelManager, 
                world, 
                currentConfig.questions,
                () => {
                    if (!quiz.isFinished()) return;

                    const currentLevelIdx = progress.getCurrentLevel();
                    ProgressManager.unlockLevel(currentLevelIdx + 1);
                    const currentCateg = levels[currentLevelIdx].id;
                    const nextLevelIdx = progress.getNextLevelIdx();

                    if (nextLevelIdx !== null) {
                        const nextCateg = levels[nextLevelIdx].id;

                        k.go("levelTransition", {
                            completedCateg: currentCateg,
                            nextCateg: nextCateg,
                            nextLevelIdx: nextLevelIdx
                        });
                    } else {
                        k.go("freestyle", levels);
                    }
                }, 
                async (impact: AffectedArea, result: 'correct' | 'wrong') => {
                    if (result === "correct") {
                        await animateRestore(impact.x, impact.y, impact.radius);
                    } else {
                        await animateDamage(impact.x, impact.y, impact.radius);
                    }
                }, 
                () => {
                    k.go("gameOver");
                }
            );

            k.add([
                k.text("Press SPACE to start the Quiz.", { size: 20 }),
                k.pos(k.center().x, 500),
                k.anchor("center"),
                k.fixed(),
                k.color(240, 243, 247),
                k.z(101),
                "ui"
            ]);

            k.onUpdate(() => {
                if (!cameraLocked) {
                    k.setCamPos(steward.getPosition());
                }

                world.updateChunks(steward.getPosition());
            });

            k.onKeyPress("space", () => {
                k.destroyAll("ui");
                quiz.showCurrentQuestion();
            });

            async function animateRestore(cx: number, cy: number, radius: number = 1) {
                let hasDamage = false;
                
                for (let x = cx - radius; x <= cx + radius; x++) {
                    for (let y = cy - radius; y <= cy + radius; y++) {
                        if (world.getTile(x, y) === 1) {
                            hasDamage = true;
                            break;
                        }
                    }
                }

                if (!hasDamage) return;

                await showImpactAt(cx, cy);

                for (let x = cx - radius; x <= cx + radius; x++) {
                    for (let y = cy - radius; y <= cy + radius; y++) {
                        world.setTile(x, y, 0);
                    }
                }
            }

            async function animateDamage(cx: number, cy: number, radius: number = 1) {
                await showImpactAt(cx, cy);
                for (let x = cx - radius; x <= cx + radius; x++) {
                    for (let y = cy - radius; y <= cy + radius; y++) {
                        world.setTile(x, y, 1);
                    }
                }
            }
        });

        k.scene("gameOver", () => {
            const overlay = k.add([
                k.rect(k.width(), k.height()),
                k.color(0, 0, 0),
                k.opacity(0.5),
                k.fixed(),
                "game-over"
            ]);

            overlay.add([
                k.text("GAME OVER", { size: 32 }),
                k.pos(k.center()),
                k.anchor("center"),
                k.fixed(),
                "game-over"
            ]);

            const restartBtn = k.add([
                k.rect(275, 50, { radius: 8 }),
                k.pos(k.center().x, k.center().y + 140),
                k.anchor("center"),
                k.area(),
                k.fixed(),
                "game-over"
            ]);

            restartBtn.add([
                k.text("RESTART LEVEL", { size: 18 }),
                k.color(0, 0, 0),
                k.anchor("center"),
                "game-over"
            ]);

            restartBtn.onClick(() => {
                k.destroyAll("game-over");
                progress.restartLevel();
            });
        });

        k.scene("freestyle", (levels?: LEVELS[]) => {
            const unlocked = ProgressManager.getUnlockedLevels();
            const definedLevels = levels ?? [];

            let currentTree = null;
            let dragOffset = k.vec2(0, 0);
            let isDragging = false;
            let dragSource = null;
            let pressedTree = null;
            let pressStartPos = null;
            const DRAG_THRESHOLD = 5;
            const generatedMap = new MapGenerator(grassland.worldWidth, grassland.worldHeight, grassland.tileSize, 0);
            const mapData = generatedMap.createDefaultMap();
            const grassLandRenderer = new RenderChunk(k, mapData, grassland.worldTheme, grassland.tileSize, 10);
            const planter = new Player(k, charSprite, 200);
            planter.setBounds(
                grassland.worldWidth * grassland.tileSize,
                grassland.worldHeight * grassland.tileSize
            );

            k.add([
                k.text("CONGRATULATIONS! Please plant your preferred trees and have fun", { size: 16, align: "center", font: "PressStart2P" }),
                k.pos(k.center().x, 100),
                k.anchor("center"),
                k.fixed(),
                "freestyle-ui",
                "heading"
            ]);

            const restartBtn = k.add([
                k.rect(220, 60, { radius: 999 }),
                k.pos(k.center().x + 450, k.center().y + 250),
                k.anchor("center"),
                k.area(),
                k.color(200, 50, 50),
                k.fixed(),
                k.z(1005),
                "btn"
            ]);

            restartBtn.add([
                k.text("RESTART GAME", { size: 12, align: "center", font: "PressStart2P" }),
                k.anchor("center"),
                "btn"
            ]);

            restartBtn.onClick(() => {
                ProgressManager.reset();
                k.go("main", 0);
            });

            for (let i = 0; i < unlocked; i++) {
                if (!definedLevels[i]) continue;

                const btn = k.add([
                    k.rect(200, 45, { radius: 15 }),
                    k.pos(k.center().x + 500, 100 + i * 80),
                    k.anchor("center"),
                    k.area(),
                    k.fixed(),
                    k.outline(3),
                    k.color(50, 200, 50),
                    k.z(1005),
                    "btn"
                ]);

                btn.add([
                    k.text(`Level ${i + 1}: ${definedLevels[i].id ?? "Environment"}`, { size: 10, align: "center", width: 190, font: "PressStart2P" }),
                    k.anchor("center"),
                    "btn"
                ]);

                btn.onClick(() => {
                    progress.startLevel(i, 0);
                    k.go("main", i);
                });
            }

            function createBaseTree(x: number, y: number, spriteName: string) {
                const baseTree = k.add([
                    k.sprite(spriteName),
                    k.pos(x, y),
                    k.area({ shape: new k.Rect(k.vec2(0), 50, 70) }),
                    k.anchor("center"),
                    k.fixed(),
                    k.z(1005),
                    "base-tree",
                    { 
                        treeSpriteType: spriteName
                    }
                ]);

                baseTree.onHoverUpdate(() => {
                    if (k.isMouseDown() && !isDragging && !pressedTree) {
                        pressedTree = baseTree;
                        pressStartPos = k.mousePos();
                    }
                });
            }

            k.onUpdate(() => {
                if (pressedTree && !isDragging && k.isMouseDown()) {
                    const mouse = k.mousePos();
                    const dist = mouse.dist(pressStartPos);
                    
                    if (dist > DRAG_THRESHOLD) {
                        isDragging = true;
                        dragSource = pressedTree;

                        currentTree = k.add([
                            k.sprite(pressedTree.treeSpriteType),
                            k.anchor("center"),
                            k.pos(k.toWorld(mouse)),
                            k.area({ shape: new k.Rect(k.vec2(0, 10), 50, 50) }),
                            k.z(5),
                            "draggable"
                        ]);

                        currentTree.onCollide("player", () => {
                            const infoBg = k.add([
                                k.rect(190, 52, { radius: 12 }),
                                k.pos(k.center().x, k.center().y - 100),
                                k.anchor("center"),
                                k.z(2000),
                                k.outline(2),
                                k.color(255, 255,255),
                                k.fixed(),
                                "info"
                            ]);

                            infoBg.add([
                                k.text("Planting trees are helpful to our environment!", { size: 10, align: "center", lineSpacing: 4, width: 180 }),
                                k.anchor("center"),
                                k.color(0, 0, 0),
                                "info"
                            ]);
                        });

                        currentTree.onCollideEnd("player", () => {
                            k.destroyAll("info");
                        });

                        dragOffset = k.vec2(0, 0);
                    }
                }

                if (isDragging && currentTree) {
                    const mouse = k.mousePos();
                    currentTree.pos = k.toWorld(mouse).sub(dragOffset);
                }
            });

            k.onMouseRelease(() => {
                if (isDragging && currentTree) {
                    currentTree.unuse("draggable");
                    currentTree.use("planted-tree");
                }

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

            const worldPixelWidth = grassland.worldWidth * grassland.tileSize;
            const worldPixelHeight = grassland.worldHeight * grassland.tileSize;

            k.onUpdate(() => {
                k.setCamPos(planter.getPosition());
                
                planter.setBounds(
                    worldPixelWidth,
                    worldPixelHeight
                );
                grassLandRenderer.update(planter.getPosition());
            });
        });

        k.scene("levelTransition", (data: { completedCateg: string, nextCateg: string, nextLevelIdx: number }) => {
            // overlay
            const overlay = k.add([
                k.rect(k.width(), k.height()),
                k.color(104, 170, 255),
                k.fixed(),
                k.z(1000),
                "transition-ui"
            ]);

            // message
            overlay.add([
                k.text(`${data.completedCateg.toUpperCase()} LEVEL COMPLETE!`, {
                    size: 24,
                    align: "center",
                    font: "PressStart2P"
                }),
                k.pos(k.center().x, k.center().y - 150),
                k.anchor("center"),
                k.color(255, 255, 255),
                k.fixed(),
                "transition-ui"
            ]);

            // next level message
            overlay.add([
                k.text(`Next Level: ${data.nextCateg.toUpperCase()}`, { size: 20, align: "center", font: "PressStart2P" }),
                k.pos(k.center().x, k.center().y),
                k.anchor("center"),
                k.fixed(),
                k.color(255, 255, 255),
                "transition-ui"
            ]);

            // instruction
            const pressStart = overlay.add([
                k.text("Press SPACE to continue on next level", { size: 24 }),
                k.pos(k.center().x, k.center().y + 200),
                k.anchor("center"),
                k.color(255, 255, 255),
                k.fixed(),
                k.opacity(),
                "transition-ui"
            ]);

            let visible = true;
            k.loop(0.6, () => {
                visible = !visible;
                pressStart.opacity = visible ? 1 : 0;
            });

            k.onKeyPress("space", () => {
                progress.nextLevel();
            });
        });

        const unlocked = ProgressManager.getUnlockedLevels();

        if (unlocked === 0) {
            k.go("main", 0);
        } else {
            k.go("freestyle", levels);
        }

        return () => {
            const canvas = rootRefElement?.querySelector('canvas');

            if (canvas) {
                canvas.remove();
            }

            gameRef.current = null;
        };
    }, []);
    
    return (
        <div ref={rootRef} id="canvas-container"></div>
    );
}