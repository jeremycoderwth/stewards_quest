"use client";

import Image from 'next/image';
import pixelBg from '@/public/backgrounds/pixel-forest.png';

type GameBackgroundProps = {
    children: React.ReactNode;
    image?: string;
};

export default function GameBackground({ children, image = pixelBg.src }: GameBackgroundProps) {
    return (
        <div>
            <Image 
                src={image}
                alt='Game background'
                fill
                priority
                className='object-cover pixelated'
            />
            <div className='relative z-10 min-h-screen w-full'>
                {children}
            </div>
        </div>
    );
}