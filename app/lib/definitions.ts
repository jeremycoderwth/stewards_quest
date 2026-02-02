
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

export const gamePurposeParagraphs = [
    {
        key: 1,
        text: "Purpose: The Steward&apos;s Quest was created to support students&apos; academic learning through an engaging and interactive approach."
    }, 
    {
        key: 2,
        text: "It is a digital board game focused on deforestation, designed to make learning both meaningful and enjoyable."
    },
    {
        key: 3,
        text: "This application was developed as a capstone project by Grade 12 students from Group 3, Section St. Gerard, alongside their research study entitled &qouot;Developing a Digital Board Game on Deforestation as an Educational Tool for Grade 11 STEM Students.&qouot; The effectiveness of the game is evaluated by comparing participants&apos; pre-test and post-test results indicating positive learning outcomes through the use of engaging learning resources."
    },
];

export const termsAndConditions = [
    {
        key: 1,
        text: "By continuing, you acknowledge that this application is developed as part of a capstone project and is intended to assess its effectiveness through a comparison of pre-test and post-test scores answered by Grade 11 students."
    },
    {
        key: 2,
        text: "Any information gathered through this application will be used solely for research purposes. All data will be kept confidential and stored securely by the researchers. The collected information will not be shared with third parties or used for any purpose other than this study."
    },
    {
        key: 3,
        text: 'Content: By clicking "I Agree" you confirm that, as as selected participant, you understand the purpose of the game and voluntarily agree to participate, play the game, and answer all required assessments.'
    },
];

export const deforestationMeaning = [
    {
        key: 1,
        text: "Deforestation is the process of clearing or converting forested land for other uses such as agriculture, urban development, or logging."
    },
    {
        key: 2,
        text: "This large-scale loss of trees removes natural habitats and disrupts the balance of ecosystems"
    },
    {
        key: 3,
        text: "Scientific research shows that converting forests into plantations, grasslands, or croplands dramatically alters soil properties and reduces crucial ecosystem functions liek carbon storage and nutrient cycling (Qu et al., 2024)"
    },
];