import type { KAPLAYCtx } from "kaplay";

// character sprites
import boyCharacter from '@/public/spritesheets/boy.png';
import girlCharacter from '@/public/spritesheets/girl-3.png';
// thin arrows
import leftArrow from '@/public/buttons/ArrowLeft-Thin/Default@2x.png';
import rightArrow from '@/public/buttons/ArrowRight-Thin/Default@2x.png';
// bold arrows
import leftArrowBold from '@/public/buttons/ArrowLeft-Bold/Default@2x.png';
import rightArrowBold from '@/public/buttons/ArrowRight-Bold/Default@2x.png';

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

    k.loadFont("PressStart2P", "../../../../fonts/PressStart2P-vaV7.ttf");

    k.loadSprite("arrowLeftBold", leftArrowBold.src);

    k.loadSprite("arrowRightBold", rightArrowBold.src);
}