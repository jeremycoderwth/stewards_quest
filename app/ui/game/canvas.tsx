"use client";

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import kaplay, { KAPLAYCtx } from 'kaplay';
import { loadAssets } from '@/app/lib/game/contexts'; 
import { registerScenes } from '@/app/kaplay/game/scenes';
import { useGameStore } from '@/app/lib/store/store-data';
import type { Character } from '@/app/lib/definitions';

export default function GameCanvas() {
    const characterSelectRef = useRef<HTMLDivElement>(null);
    const kaplayRef = useRef<KAPLAYCtx>(null);

    const router = useRouter();
    const setCharacter = useGameStore((s) => s.setCharacter);

    useEffect(() => {
        const characterSelectElement = characterSelectRef.current;
        if (!characterSelectElement) return;
        if (kaplayRef.current) return;

        const k = kaplay({
            width: 380,
            height: 330,
            scale: 1.5,
            crisp: true,
            background: [0, 0, 0, 0], // #000000 for testing
            canvas: document.getElementById('kaplay-container') as HTMLCanvasElement,
            root: characterSelectRef.current || undefined,
        });

        kaplayRef.current = k;

        loadAssets(k);
        registerScenes(k, {
            onCharacterConfirm: (character: Character) => {
                setCharacter(character);
                router.push("/game/play");
            },
        });

        // show the character selection
        k.go('characterSelect');

        return () => {
            const canvas = characterSelectElement?.querySelector('canvas');

            if (canvas) {
                canvas.remove();
            }

            kaplayRef.current = null;
        };
    }, [router, setCharacter]);

    return (
        <div ref={characterSelectRef} />
    );
}

