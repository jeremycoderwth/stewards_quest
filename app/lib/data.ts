import { Question, Categories } from '@/app/lib/definitions';

export const gamePurposeParagraphs = [
    {
        key: 1,
        text: "Purpose: The Steward's Quest was created to support students' academic learning through an engaging and interactive approach."
    }, 
    {
        key: 2,
        text: "It is a digital board game focused on deforestation, designed to make learning both meaningful and enjoyable."
    },
    {
        key: 3,
        text: `This application was developed as a capstone project by Grade 12 students from Group 3, Section St. Gerard, alongside their research study entitled "Developing a Digital Board Game on Deforestation as an Educational Tool for Grade 11 STEM Students." The effectiveness of the game is evaluated by comparing participants' pre-test and post-test results indicating positive learning outcomes through the use of engaging learning resources.`
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

export const fireRelatedQuestions: Question[] = [
    {
        id: 'FIRE-Q1',
        category: 'fire' as Categories,
        text: "Which human activity is responsible for causing wildfires in areas affected by deforestation?",
        options: [
            { label: 'A', text: "logging operations that leave behind tree stumps" },
            { label: 'B', text: "mining activities that disturbs soil layers" },
            { label: 'C', text: "Slash-and-burn agriculture for land clearing" },
            { label: 'D', text: "construction of rural roads through forests" } 
        ],
        correctAnswer: 2
    },
    {
        id: 'FIRE-Q2',
        category: 'fire' as Categories,
        text: "How does deforestation increase the risk of wildfires?",
        options: [
            { label: 'A', text: "It messes with the natural structure of the forest and affects the ground-level conditions" },
            { label: 'B', text: "it reduces tree cover that causes low moisture and increases dryness" },
            { label: 'C', text: "Sit increases rainfall, making lightning strikes more often" },
            { label: 'D', text: "It causes animals to migrate and accidentally start fires" } 
        ],
        correctAnswer: 1
    },
    {
        id: 'FIRE-Q3',
        category: 'fire' as Categories,
        text: "Which factor directly increases the intensity of wildfires?",
        options: [
            { label: 'A', text: "long periods of heat and drought that dry vegetation and reduce natural moisture" },
            { label: 'B', text: "leaving fallen branches and leaves on the ground so they can decompose naturally rs" },
            { label: 'C', text: "building wooden structures in forests that could catch a fire" },
            { label: 'D', text: "planting trees that can provide as fuel for fires" } 
        ],
        correctAnswer: 0
    }
];

export const soilPolutionRelatedQuestions: Question[] = [
    {
        id: 'SOIL-Q1',
        category: 'soil pollution' as Categories,
        text: "What happens to the soil when mining projects empty out the forests?",
        options: [
            { label: 'A', text: "The soil becomes richer" },
            { label: 'B', text: "The soil becomes exposed and easily eroded" },
            { label: 'C', text: "The soil is protected by vegetation" },
            { label: 'D', text: "The soil does not change" } 
        ],
        correctAnswer: 1
    },
    {
        id: 'SOIL-Q2',
        category: 'soil pollution' as Categories,
        text: "Why does deforestation that is caused by mining give out more soil pollution?",
        options: [
            { label: 'A', text: "Trees take in soil nutrients" },
            { label: 'B', text: "Exposed soil is more affected by mining waste and erosion" },
            { label: 'C', text: "Forests prevent mining activities" },
            { label: 'D', text: "Soil pollution happens solely from factories" } 
        ],
        correctAnswer: 1
    },
    {
        id: 'SOIL-Q3',
        category: 'soil pollution' as Categories,
        text: "What type of environment is commonly noticed after mining-related deforestation?",
        options: [
            { label: 'A', text: "Healthy forest soil" },
            { label: 'B', text: "Agricultural land" },
            { label: 'C', text: "Bare and degraded soil" },
            { label: 'D', text: "Wetland formation" } 
        ],
        correctAnswer: 2
    }
];

export const urbanizationRelatedQuestions: Question[] = [
    {
        id: 'URBAN-Q1',
        category: 'urbanization' as Categories,
        text: "Why can urbanization lead to habitat loss?",
        options: [
            { label: 'A', text: "Cities require construction and infrastructure that replace natural land" },
            { label: 'B', text: "Urban areas recycle all their waste efficiently" },
            { label: 'C', text: "Forests naturally disappear as cities grow nearby" },
            { label: 'D', text: "Urbanization reduces human demand for food" } 
        ],
        correctAnswer: 0
    }, {
        id: 'URBAN-Q2',
        category: 'urbanization' as Categories,
        text: "Why can urbanization lead to habitat loss?",
        options: [
            { label: 'A', text: "Transforming land into tourist attractions" },
            { label: 'B', text: "Planting a lot of trees on lands that are already cleared" },
            { label: 'C', text: "Forests being converted into farmlands or plantations" },
            { label: 'D', text: "Advocate for policies that stop illegal logging" } 
        ],
        correctAnswer: 3
    }, {
        id: 'URBAN-Q3',
        category: 'urbanization' as Categories,
        text: "Why does urbanization still cause deforestation even when people no longer live near forests?",
        options: [
            { label: 'A', text: "Forests are protected by companies" },
            { label: 'B', text: "Forests are cleared to supply materials, food, and energy for urban populations" },
            { label: 'C', text: "People consume fewer forest products" },
            { label: 'D', text: "Expanding forests near cities preserves and protects them" } 
        ],
        correctAnswer: 3
    },
];

export const nuclearWasteRelatedQuestions: Question[] = [
    {
        id: 'NUCLEARWASTE-Q1',
        category: 'nuclear waste' as Categories,
        text: `
            How can nuclear waste contribute to deforestation through water pollution?

            Statement 1:
            Nuclear waste can contaminate nearby rivers and groundwater.

            Statement 2:
            Polluted water can damage forest soil and weaken tree growth, contributing to deforestation.
        `,
        options: [
            { label: 'A', text: "Bot statements are TRUE" },
            { label: 'B', text: "Statement 1 is TRUE, Statement 2 is FALSE" },
            { label: 'C', text: "Statement 1 is FALSE , STatement 2 is TRUE" },
            { label: 'D', text: "Both statements are FALSE" }
        ],
        correctAnswer: 0
    }, {
        id: 'NUCLEARWASTE-Q2',
        category: 'nuclear waste' as Categories,
        text: `
            What role does deforestation play in nuclear waste water pollution?

            Statement 1:
            Deforestation increases soil erosion, allowing radioactive pollutants to spread more easily into water sources.

            Statement 2:
            Forests have no role in filtering or protecting water from nuclear contamination.
        `,
        options: [
            { label: 'A', text: "Bot statements are TRUE" },
            { label: 'B', text: "Statement 1 is TRUE, Statement 2 is FALSE" },
            { label: 'C', text: "Statement 1 is FALSE , STatement 2 is TRUE" },
            { label: 'D', text: "Both statements are FALSE" }
        ],
        correctAnswer: 1
    }, {
        id: 'NUCLEARWASTE-Q3',
        category: 'nuclear waste' as Categories,
        text: `
            Which statement best explains long-term environmental damage?

            Statement 1:
            Water pollution from nuclear waste can harm both aquatic ecosystems and nearby forests.

            Statement 2:
            Once forests are polluted by nuclear waste, they recover instantly without long-term effects
        `,
        options: [
            { label: 'A', text: "Bot statements are TRUE" },
            { label: 'B', text: "Statement 1 is TRUE, Statement 2 is FALSE" },
            { label: 'C', text: "Statement 1 is FALSE , STatement 2 is TRUE" },
            { label: 'D', text: "Both statements are FALSE" }
        ],
        correctAnswer: 1
    }
];

export const characters = [
    {
        id: "character01",
        name: "Juan Dela Cruz",
        sprite: "boy"
    },
    {
        id: "character02",
        name: "Jane Mercado",
        sprite: "girl"
    },
];

export const mechanics = [
    {
        key: 1,
        text: "In this quiz, we have 4 categories: Fire, Soil Pollution, Nuclear Waste, and Urbanization. These categories also are represented by its own environment the moment you play the game."
    },
    {
        key: 2,
        text: "Each categories contains 3 questions that you must answer adn choose on the options provided."
    },
    {
        key: 3,
        text: "If you answered a question correctly, you will be able to plant a tree in the environment. If your answer is wrong, a catastrophic event will happen. Be careful and good luck!"
    }
];