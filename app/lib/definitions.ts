
export type Categories = 'fire' | 'soil pollution' | 'urbanization' | 'nuclear waste';

export type User = {
    id: string;
    name: string;
    password: string;
};

export type Player = {
    id: string;
    name: string;
    character: string;
    // probably will "avatar: string;" if needed
};

export type LevelProgress = {
    id: string;
    player_id: string;
    category: Categories;
    remainingQuestions: number;
    answeredQuestions: number;
    correctAnswer: number;
    incorrectAnswer: number;
    status: 'incomplete' | 'completed';
    rating: number;
    // feeling ko may kulang pa e pero i'll think
};

export type Score = {
    player_id: string;
    score: number;
};

export interface Question {
    id: string;
    category: Categories;
    text: string;
    options: Choice[];
    correctAnswer: number;
};

export type Choice = {
    label: string;
    text: string;
};

export type Category = {
    id: string;
    name: Categories;
    description: string;
    // probably will add image_url if needed
};

