import { characterSelectScene } from "@/app/kaplay/scenes/character-select";
import { loadingScreen } from '@/app/kaplay/scenes/loading';
import { instructionsScene } from '@/app/kaplay/scenes/instructions';
import type { KAPLAYCtx } from "kaplay";
import type { Character } from "@/app/lib/definitions";

export function registerScenes(k: KAPLAYCtx, callbacks: { onCharacterConfirm: (character: Character) => void }) {
    k.scene("characterSelect", () => characterSelectScene(k, callbacks.onCharacterConfirm));
}

export function registerMechanicsScenes(k: KAPLAYCtx) {
    loadingScreen(k);
    instructionsScene(k);
}