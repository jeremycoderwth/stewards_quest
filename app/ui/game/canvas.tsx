"use client";

import { useEffect } from 'react';
import kaplay from 'kaplay';
import { loadAssets } from '@/app/lib/game/contexts'; 
import { registerScenes } from '@/app/kaplay/game/scenes';

export default function GameCanvas() {
    useEffect(() => {
        const k = kaplay({
            width: 360,
            height: 640,
            scale: 2,
            crisp: true,
            background: [0, 0, 0, 0],
        });

        loadAssets(k);
        registerScenes(k);

        // show the character seleection
        k.go('characterSelect');
    }, []);

    return (
        <div id='kaplay-container' />
    );
}

