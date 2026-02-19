import { create } from 'zustand';

import type { GameState, Character } from '@/app/lib/definitions';

type CharacterStore = {
    selectedCharacter: Character | null;
    setCharacter: (char: Character) => void;
};

export const useGameStore = create<GameState>((set) => ({
    selectedCharacter: null,
    setCharacter: (char) => set({ selectedCharacter: char }),
}));

export const useCharacterStore = create<CharacterStore>((set) => ({
    selectedCharacter: null,
    setCharacter: (char) => set({ selectedCharacter: char }),
}));