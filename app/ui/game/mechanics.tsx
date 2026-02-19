"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import kaplay, { KAPLAYCtx } from "kaplay";
import { loadAssets } from "@/app/lib/game/assets";
import { loadingScreen } from '@/app/kaplay/scenes/loading';
import { instructionsScene } from '@/app/kaplay/scenes/instructions';

export default function Mechanics() {
    const characterSelectRef = useRef<HTMLDivElement>(null);
    const kaplayRef = useRef<KAPLAYCtx>(null);
    const router = useRouter();

    useEffect(() => {
        const characterSelectElement = characterSelectRef.current;
        if (!characterSelectElement) return;
        if (kaplayRef.current) return;

        const k = kaplay({
            width: 750,
            height: 400,
            crisp: true,
            background: [6, 43, 2, 0.2],
            root: characterSelectRef.current || undefined,
            font: "PressStart2P"
        });

        kaplayRef.current = k;

        loadAssets(k);
        
        loadingScreen(k);
        instructionsScene(k, router);

        k.go("loading");

        return () => {
            const canvas = characterSelectElement?.querySelector('canvas');

            if (canvas) {
                canvas.remove();
            }

            kaplayRef.current = null;  
        }
    });

    return (
        <div ref={characterSelectRef} className="rounded-lg" />
    );
}