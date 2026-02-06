import { create } from 'zustand';

import type { GameState } from '@/app/lib/definitions';

export const useGameStore = create<GameState>((set) => ({
    selectedCharacter: null,
    setCharacter: (char) => set({ selectedCharacter: char }),
}));