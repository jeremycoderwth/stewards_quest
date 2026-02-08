"use client";

import { useGameStore } from "@/app/lib/store/store-data";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import Mechanics from "@/app/ui/game/mechanics";

export default function Page() {
    const router = useRouter();
    const character = useGameStore((s) => s.selectedCharacter);

    useEffect(() => {
        if (!character) {
            router.push("/game/selection");
        }
    }, [router, character]);

    if (!character) return null;

    return (    
        <main>
            <div className="bg-black/25 p-4 rounded-lg mb-6">
                <h1 className="text-green-200 font-bold lg:text-4xl text-center mb-2">Game Mechanics</h1>
                <p className="text-blue-200 lg:text-sm text-center font-semibold">Playing as: {character.name}</p>
            </div>
            
            <Mechanics />
        </main>
    );
}