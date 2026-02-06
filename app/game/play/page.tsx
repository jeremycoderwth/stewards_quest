"use client";

import { useGameStore } from "@/app/lib/store/store-data";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();
    const character = useGameStore((s) => s.selectedCharacter);

    useEffect(() => {
        if (!character) {
            router.push("/game");
        }
    }, [router, character]);

    if (!character) return null;

    return (    
        <main>
            <h1 className="text-green-300 font-bold lg:text-3xl">Quiz Game</h1>
            <p className="text-white">Playing as: {character.name}</p>
        </main>
    );
}