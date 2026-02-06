"use client";

import { useEffect } from 'react';
import kaplay from 'kaplay';
import { loadAssets } from '@/app/lib/game/contexts'; 
import { registerScenes } from '@/app/kaplay/game/scenes';

export default function GameCanvas() {
    useEffect(() => {
        const k = kaplay({
            width: 380,
            height: 330,
            scale: 1.5,
            crisp: true,
            background: [0, 0, 0, 0], // #000000 for testing
            canvas: document.getElementById('kaplay-container') as HTMLCanvasElement,
        });

        loadAssets(k);
        registerScenes(k);

        // show the character seleection
        k.go('characterSelect');
    }, []);

    return (
        <canvas id="kaplay-container" />
    );
}

