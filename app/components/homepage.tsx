'use client';

import Image from "next/image";
import jungleBackground from '@/public/backgrounds/jungle-landscape.jpg';

export default function Homepage() {
    return (
        <div>
            <Image src={jungleBackground} alt="A pixelated jungle background" />
            <div className="mt-4">

            </div>
        </div>
    );
}