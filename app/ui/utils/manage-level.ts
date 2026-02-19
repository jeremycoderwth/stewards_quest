import { Level } from './level';
import { KAPLAYCtx } from "kaplay";
import { levels } from "@/app/lib/data";

export class LevelManager {
    private levels: Level[] = [];

    constructor(levels: Level[]) {
        this.levels = levels;
    }

    getLevel(id: number) {
        return this.levels.find((level) => level.id === id);
    }

    completeLevel(id: number) {
        const level = this.getLevel(id);
        if (!level) return;

        level.complete();

        const nextLevel = this.getLevel(id + 1);

        if (nextLevel) {
            nextLevel.unlock();
        }
    }

    getUnlockedLevels() {
        return this.levels.filter((level) => level.unlocked);
    }
}

export class GameManager {
    currentLevelIndex: number = 0;
    score: number = 0;

    constructor(private k: KAPLAYCtx) {
        // empty lang muna
    }

    startLevel(levelIdx: number, score: number) {
        this.currentLevelIndex = levelIdx;
        this.score = score;
        this.k.go("main", levelIdx, score);
    }

    nextLevel() {
        this.currentLevelIndex++;
        this.k.go("main", this.currentLevelIndex);
    }

    getCurrentLevel() {
        return this.currentLevelIndex;
    }

    getNextLevelIdx() {
        const next = this.currentLevelIndex + 1;
        if (next >= levels.length) {
            return null;
        }

        return next;
    }

    restartLevel() {
        this.k.go("main", this.currentLevelIndex);
    }
}

export class ProgressManager {
    private static STORAGE_KEY = "game_progress";

    static getUnlockedLevels(): number {
        const saved = localStorage.getItem(this.STORAGE_KEY);

        if (!saved) return 0;

        return parseInt(saved);
    }

    static unlockLevel(levelIndex: number) {
        const current = this.getUnlockedLevels();

        if (levelIndex > current) {
            localStorage.setItem(this.STORAGE_KEY, levelIndex.toString());
        }
    }

    static reset() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
}