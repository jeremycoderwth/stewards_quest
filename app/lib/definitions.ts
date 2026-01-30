
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
    category: string;
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

export type Question = {
    id: string;
    category: string;
    question: string;
    options: string[];
    correctAnswer: string;
};

export type Category = {
    id: string;
    name: string;
    description: string;
    // probably will add image_url if needed
};

