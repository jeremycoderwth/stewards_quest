import type { KAPLAYCtx } from "kaplay";

import boyCharacter from '@/public/spritesheets/boy.png';
import girlCharacter from '@/public/spritesheets/girl-2.png';
import leftArrow from '@/public/buttons/ArrowLeft-Thin/Default@2x.png';
import rightArrow from '@/public/buttons/ArrowRight-Thin/Default@2x.png';

export function loadAssets(k: KAPLAYCtx) {
    k.loadSprite("boy", boyCharacter.src, {
        sliceX: 4,
        sliceY: 4
    });

    k.loadSprite("girl", girlCharacter.src, {
        sliceX: 4,
        sliceY: 4
    });

    k.loadSprite("arrowLeft", leftArrow.src);

    k.loadSprite("arrowRight", rightArrow.src);
}