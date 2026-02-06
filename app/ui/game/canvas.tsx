"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import kaplay from 'kaplay';
import { loadAssets } from '@/app/lib/game/contexts'; 
import { registerScenes } from '@/app/kaplay/game/scenes';
import { useGameStore } from '@/app/lib/store/store-data';
import type { Character } from '@/app/lib/definitions';

export default function GameCanvas() {
    const router = useRouter();
    const setCharacter = useGameStore((s) => s.setCharacter);

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
        registerScenes(k, {
            onCharacterConfirm: (character: Character) => {
                setCharacter(character);
                router.push("/game/play");
            },
        });

        // show the character seleection
        k.go('characterSelect');
    }, [router, setCharacter]);

    return (
        <canvas id="kaplay-container" />
    );
}

