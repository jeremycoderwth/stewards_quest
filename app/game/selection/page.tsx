import { ImageButton } from '@/app/ui/starting-page/buttons';
import GameBackground from '@/app/ui/game-background';

import boyCharacter from '@/public/spritesheets/boy.png';
import girlCharacter from '@/public/spritesheets/girl.png';

import leftArrow from '@/public/buttons/ArrowLeft-Thin/Default@2x.png';
import rightArrow from '@/public/buttons/ArrowRight-Thin/Default@2x.png';

export default function Page() {
    return (
        <GameBackground>
            <div>This is character selection page</div>
        </GameBackground>
    );
}