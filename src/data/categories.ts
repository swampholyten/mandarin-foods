import type { Category } from "@/lib/types";

export const cuisineCategories: Category[] = [
  {
    id: "sichuan",
    name: "Sichuan Cuisine",
    chineseName: "川菜",
    imageUrl: "/assets/sichuan.jpg",
    description:
      "Sichuan cuisine is known for its bold flavors, particularly the pungency and spiciness resulting from liberal use of garlic and chili peppers, as well as the unique flavor of Sichuan pepper. It originated in the Sichuan Province of southwestern China.",
    characteristics: [
      "Bold and spicy flavors",
      "Liberal use of chili oil",
      "Numbing sensation from Sichuan peppercorns",
      "Complex flavor combinations",
    ],
    commonIngredients: [
      "Sichuan peppercorns",
      "Dried chili peppers",
      "Garlic",
      "Ginger",
      "Broad bean paste",
    ],
  },
  {
    id: "hunan",
    name: "Hunan Cuisine",
    chineseName: "湘菜",
    imageUrl: "/assets/hunan.jpg",
    description:
      "Hunan cuisine, also known as Xiang cuisine, is famous for its hot and spicy flavors, fresh aroma, and deep colors. It shares some similarities with Sichuan cuisine, but Hunan dishes tend to be purely spicy rather than numbing and spicy.",
    characteristics: [
      "Intense spiciness",
      "Fresh and aromatic",
      "Liberal use of chili peppers",
      "Emphasis on seasonal cooking",
    ],
    commonIngredients: [
      "Fresh chili peppers",
      "Smoked and cured goods",
      "Shallots",
      "Garlic",
      "Fermented black beans",
    ],
  },
  {
    id: "cantonese",
    name: "Cantonese Cuisine",
    chineseName: "粤菜",
    imageUrl: "/assets/cantonese.jpg",
    description:
      "Cantonese cuisine comes from Guangdong Province in southern China. It emphasizes freshness of ingredients, subtle and balanced flavors, and a variety of cooking methods. It's one of the most internationally recognized Chinese cuisines.",
    characteristics: [
      "Subtle and balanced flavors",
      "Emphasis on freshness",
      "Wide variety of ingredients",
      "Preference for steaming and stir-frying",
    ],
    commonIngredients: [
      "Fresh seafood",
      "Roasted meats",
      "Rice",
      "Seasonal vegetables",
      "Light sauces",
    ],
  },
  {
    id: "fujian",
    name: "Fujian Cuisine",
    chineseName: "闽菜",
    imageUrl: "/assets/fujian.jpg",
    description:
      "Fujian cuisine is known for its emphasis on umami taste, light but flavorful broths and soups, and expertise in cooking seafood. It features a wide variety of seafood and woodland delicacies from the coastal and mountainous regions of Fujian Province.",
    characteristics: [
      "Umami-rich flavors",
      "Emphasis on soups and broths",
      "Expertise in seafood preparation",
      "Sweet and sour combinations",
    ],
    commonIngredients: [
      "Fresh seafood",
      "Woodland mushrooms",
      "Bamboo shoots",
      "Red rice wine lees",
      "Fish sauce",
    ],
  },
  {
    id: "jiangsu",
    name: "Jiangsu Cuisine",
    chineseName: "苏菜",
    imageUrl: "/assets/jiangsu.jpg",
    description:
      "Jiangsu cuisine, also known as Su cuisine, is one of the most elegant Chinese cuisines, known for its careful selection of ingredients, precise cooking techniques, and artistic presentation. It emphasizes seasonal ingredients and the natural flavors of the food.",
    characteristics: [
      "Meticulous preparation",
      "Artistic presentation",
      "Emphasis on seasonal ingredients",
      "Soft texture and moderate flavors",
    ],
    commonIngredients: [
      "Freshwater fish",
      "River crabs",
      "Poultry",
      "Seasonal vegetables",
      "Refined sauces",
    ],
  },
  {
    id: "zhejiang",
    name: "Zhejiang Cuisine",
    chineseName: "浙菜",
    imageUrl: "/assets/zhejiang.jpg",
    description:
      "Zhejiang cuisine, also known as Zhe cuisine, is characterized by its freshness, tenderness, softness, and smoothness of food with a mellow fragrance. It consists of at least three distinct styles, each characterized by the cooking styles of different cities in the province.",
    characteristics: [
      "Fresh and tender",
      "Not greasy",
      "Emphasis on seafood",
      "Elegant presentation",
    ],
    commonIngredients: [
      "Freshwater fish",
      "Seafood",
      "Bamboo shoots",
      "Tea leaves",
      "Rice wine",
    ],
  },
  {
    id: "anhui",
    name: "Anhui Cuisine",
    chineseName: "徽菜",
    imageUrl: "/assets/anhui.jpg",
    description:
      "Anhui cuisine, also known as Hui cuisine, is known for its use of wild herbs and simple cooking methods. It emphasizes the preservation of the original flavors of the ingredients. Braising and stewing are common cooking techniques in Anhui cuisine.",
    characteristics: [
      "Use of wild herbs and plants",
      "Simple preparation methods",
      "Emphasis on braising and stewing",
      "Preservation of original flavors",
    ],
    commonIngredients: [
      "Wild herbs",
      "Freshwater fish",
      "Mountain-grown vegetables",
      "Bamboo shoots",
      "Ham",
    ],
  },
  {
    id: "shandong",
    name: "Shandong Cuisine",
    chineseName: "鲁菜",
    imageUrl: "/assets/shandong.jpg",
    description:
      "Shandong cuisine, also known as Lu cuisine, is characterized by its emphasis on aroma, freshness, crispness, and tenderness. It's one of the most influential cooking styles in Chinese cuisine, particularly in northern China, Beijing, and the imperial cuisine of China.",
    characteristics: [
      "Bold flavors",
      "Emphasis on aroma",
      "Expertise in seafood preparation",
      "Variety of cooking techniques",
    ],
    commonIngredients: ["Seafood", "Corn", "Peanuts", "Scallions", "Vinegar"],
  },
];
