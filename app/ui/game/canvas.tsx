"use client";

import { useEffect } from 'react';
import { InitGame } from '@/app/kaplay/initGame'; 

export default function GameCanvas() {
    useEffect(() => {
        InitGame();
    }, []);

    return (
        <canvas id='game-canvas' />
    );
}

