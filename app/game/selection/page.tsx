import GameCanvas from '@/app/ui/game/canvas';

import GameBackground from '@/app/ui/game-background';

export default function Page() {
    return (
        <GameBackground>
            <h1 className='text-white text-center font-semibold lg:text-3xl md:text-xl text-lg pt-8'>Select your Character</h1>
            <p className='text-white lg:text-sm md:text-xs text-[10px] text-center mt-6'>Select your preferred character for the game</p>
            <div className='flex flex-col'>
                <section className='flex flex-row items-center justify-center'>
                    <GameCanvas />
                </section>
            </div>
        </GameBackground>
    );
}