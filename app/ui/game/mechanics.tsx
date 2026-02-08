"use client";

import { useEffect, useRef } from "react";
import kaplay, { KAPLAYCtx } from "kaplay";
import { loadAssets } from "@/app/lib/game/contexts";
import { registerMechanicsScenes } from "@/app/kaplay/game/scenes";

export default function Mechanics() {
    const characterSelectRef = useRef<HTMLDivElement>(null);
    const kaplayRef = useRef<KAPLAYCtx>(null);

    useEffect(() => {
        const characterSelectElement = characterSelectRef.current;
        if (!characterSelectElement) return;
        if (kaplayRef.current) return;

        const k = kaplay({
            width: 750,
            height: 400,
            crisp: true,
            background: [6, 43, 2, 0.2], // #000000 for testing
            root: characterSelectRef.current || undefined,
        });

        kaplayRef.current = k;

        loadAssets(k);
        registerMechanicsScenes(k);

        k.go("loading");

        return () => {
            const canvas = characterSelectElement?.querySelector('canvas');

            if (canvas) {
                canvas.remove();
            }

            kaplayRef.current = null;  
        }
    }, []);

    return (
        <div ref={characterSelectRef} className="rounded-lg" />
    );
}