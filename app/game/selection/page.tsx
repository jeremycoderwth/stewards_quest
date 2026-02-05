import GameCanvas from '@/app/ui/game/canvas';

import { GuiButton } from '@/app/ui/starting-page/buttons';
import GameBackground from '@/app/ui/game-background';

import leftArrow from '@/public/buttons/ArrowLeft-Thin/Default@2x.png';
import rightArrow from '@/public/buttons/ArrowRight-Thin/Default@2x.png';
import playButton from '@/public/buttons/PlayIcon/Default@2x.png';

export default function Page() {
    return (
        <GameBackground>
            <h1 className='text-white text-center font-semibold lg:text-3xl md:text-xl text-lg pt-8'>Select your Character</h1>
            <p className='text-white lg:text-sm md:text-xs text-[10px] text-center mt-6'>Select your preferred character for the game</p>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-between'>
                    <GuiButton 
                    imageSrc={leftArrow.src}
                    className='w-[3.6rem] h-[3.2rem] cursor-pointer bg-contain bg-center relative bg-no-repeat'
                    />
                    <section>
                        <GameCanvas />
                    </section>
                    <GuiButton 
                        imageSrc={rightArrow.src}
                        className='w-[3.6rem] h-[3.2rem] cursor-pointer bg-contain bg-center relative bg-no-repeat'
                    />
                </div>
                <GuiButton 
                    imageSrc={playButton.src}
                    className='w-32 h-[3.2rem] cursor-pointer bg-contain bg-center relative bg-no-repeat'
                />
            </div>
        </GameBackground>
    );
}