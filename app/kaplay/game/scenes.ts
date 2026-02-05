import { characterSelectScene } from "@/app/kaplay/scenes/character-select";
import type { KAPLAYCtx } from "kaplay";

export function registerScenes(k: KAPLAYCtx) {
    k.scene("characterSelect", () => characterSelectScene(k));

    k.scene("game", ({ selectedCharacter }) => {
        alert(`Chosen: ${selectedCharacter}`);
    });
}