import { Question, Categories } from '@/app/lib/definitions';

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
    
];