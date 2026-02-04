'use client';

import Button from '@/app/ui/button';

export default function Greeting() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center">
            <div className='bg-black/20 rounded-lg'>
                <h1 className="animate-bounce text-2xl font-bold text-center text-green-400 my-4">Steward&apos;s Quest</h1>
                <p className="text-white uppercase text-sm text-center">capstone project</p>
            </div>
            <div className='animate-pulse'>
                <Button>Start Game</Button>
            </div>
        </div>
    );
}