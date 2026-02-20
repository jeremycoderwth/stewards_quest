import { KAPLAYCtx } from 'kaplay';

// character sprites
import boyCharacter from '@/public/spritesheets/boy.png';
import girlCharacter from '@/public/spritesheets/girl-3.png';
// thin arrows
import leftArrow from '@/public/buttons/ArrowLeft-Thin/Default@2x.png';
import rightArrow from '@/public/buttons/ArrowRight-Thin/Default@2x.png';
// bold arrows
import leftArrowBold from '@/public/buttons/ArrowLeft-Bold/Default@2x.png';
import rightArrowBold from '@/public/buttons/ArrowRight-Bold/Default@2x.png';
// environment tiles
import fireTile from '@/public/tiles/fire_tile.png';
import soilTile from '@/public/tiles/soil_tile.png';
import nuclearWasteTile from '@/public/tiles/nuclear-waste_tile.jpg';
import urbanTile from '@/public/tiles/urbanization_tile.jpg';
// dialog box
import dialog from "@/public/dialog/DialogBox.png";
import choiceBox from "@/public/dialog/ChoiceBox.png";
// trees
import tree_1 from "@/public/trees/TREE 1_GREEN.png";
import tree_2 from "@/public/trees/TREE 2_YELLOWISH GREEN.png";
import tree_3 from "@/public/trees/TREE 3_SANDY GREEN.png";
import tree_4 from "@/public/trees/TREE 5_GREEN.png";
import tree_5 from '@/public/trees/TREE 6_TEAL.png';
import tree_6 from "@/public/trees/TREE 8_PURPLE.png";
import tree_7 from "@/public/trees/TREE 9_ROSE.png";
import tree_8 from '@/public/trees/TREE 15_RED.png';

export function loadAssets(k: KAPLAYCtx) {
    k.loadSprite("boy", boyCharacter.src, {
        sliceX: 4,
        sliceY: 4,
        anims: {
            "idle-forward": { from: 0, to: 0 },
            "idle-backward": { from: 4, to:4 },
            "idle-left": { from: 8, to: 8 },
            "idle-right": { from: 12, to: 12 },
            "move-forward": {
                from: 0,
                to: 3,
                loop: true
            },
            "move-backward": {
                from: 4,
                to: 7,
                loop: true
            },
            "move-left": {
                from: 8,
                to: 11,
                loop: true
            },
            "move-right": {
                from: 12,
                to: 15,
                loop: true
            }
        }
    });

    k.loadSprite("girl", girlCharacter.src, {
        sliceX: 4,
        sliceY: 4,
        anims: {
            "idle": 0,
            "move-forward": {
                from: 0,
                to: 3,
                speed: 6,
                loop: true
            },
            "move-backward": {
                from: 0,
                to: 3,
                speed: 6,
                loop: true
            },
            "move-left": {
                from: 0,
                to: 3,
                speed: 6,
                loop: true
            },
            "move-right": {
                from: 0,
                to: 3,
                speed: 6,
                loop: true
            }
        }
    });

    k.loadSprite("arrowLeft", leftArrow.src);

    k.loadSprite("arrowRight", rightArrow.src);

    k.loadFont("PressStart2P", "/fonts/PressStart2P-vaV7.ttf");

    k.loadSprite("arrowLeftBold", leftArrowBold.src);

    k.loadSprite("arrowRightBold", rightArrowBold.src);

    k.loadSprite("fire", fireTile.src, {
        sliceX: 2,
        sliceY: 2
    });
    k.loadSprite("soil", soilTile.src, {
        sliceX: 2,
        sliceY: 2
    });
    k.loadSprite("nuclearWaste", nuclearWasteTile.src, {
        sliceX: 2,
        sliceY: 2
    });
    k.loadSprite("urbanization", urbanTile.src, {
        sliceX: 2,
        sliceY: 2
    });

    k.loadSprite("dialog", dialog.src);

    k.loadSprite("choiceBox", choiceBox.src);

    k.loadSprite("tree_green_1", tree_1.src);
    k.loadSprite("tree_yellowish_green", tree_2.src);
    k.loadSprite("tree_sandy_green", tree_3.src);
    k.loadSprite("tree_green_2", tree_4.src);
    k.loadSprite("tree_teal", tree_5.src);
    k.loadSprite("tree_purple", tree_6.src);
    k.loadSprite("tree_rose", tree_7.src);
    k.loadSprite("tree_red", tree_8.src);
}