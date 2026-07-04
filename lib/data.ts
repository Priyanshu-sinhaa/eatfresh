export type Product = {
  slug: string;
  name: string;
  category: "Fruit" | "Vegetable";
  price: number;
  image: string;
  tags: string[];
  benefit: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "mango",
    name: "Alphonso Mango",
    category: "Fruit",
    price: 180,
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/109a4fd1062b5976cbf1fa3e4d33f3cc499a8eba.jpg",
    tags: ["Seasonal Special", "Nutritious"],
    benefit: "Rich in Vitamin A & C",
    description: "Hand-picked, sun-ripened Alphonso mangoes sourced directly from organic orchards. A seasonal special loved for its natural sweetness and nutrient density.",
  },
  {
    slug: "spinach",
    name: "Organic Spinach",
    category: "Vegetable",
    price: 40,
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7c45b01b691df6cf80fba47f54d950f563e88c37.jpg",
    tags: ["Low Calorie", "Healthy One"],
    benefit: "High in Iron & Fiber",
    description: "Tender, pesticide-free spinach leaves grown using hydroponic methods. A low-calorie, iron-rich addition to any healthy meal.",
  },
  {
    slug: "strawberry",
    name: "Fresh Strawberries",
    category: "Fruit",
    price: 220,
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/9e468c5e13b4fec2257d6c567884eb470e7fa4f3.jpg",
    tags: ["Seasonal Special", "Antioxidant Rich"],
    benefit: "Packed with Antioxidants",
    description: "Juicy, deep-red strawberries grown organically with zero synthetic pesticides. A nutritious, low-calorie treat bursting with antioxidants.",
  },
  {
    slug: "tomato",
    name: "Vine-Ripened Tomatoes",
    category: "Vegetable",
    price: 50,
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a5b668c9c5a7ce715827e78f259bd5074f55c051.jpg",
    tags: ["Nutritious One", "Farm Fresh"],
    benefit: "High in Lycopene",
    description: "Naturally vine-ripened tomatoes grown in nutrient-rich organic soil. A nutritious, low-calorie staple full of lycopene and vitamin C.",
  },
  {
    slug: "banana",
    name: "Organic Bananas",
    category: "Fruit",
    price: 60,
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/063c86413860e6e8f100b45672ed926e668bb5ec.jpg",
    tags: ["Healthy One", "Energy Booster"],
    benefit: "Great Source of Potassium",
    description: "Naturally ripened, chemical-free bananas — the perfect healthy, energy-boosting snack rich in potassium and fiber.",
  },
  {
    slug: "carrot",
    name: "Crunchy Carrots",
    category: "Vegetable",
    price: 45,
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7c45b01b691df6cf80fba47f54d950f563e88c37.jpg",
    tags: ["Low Calorie", "Nutritious One"],
    benefit: "Rich in Beta-Carotene",
    description: "Sweet, crunchy carrots grown in organic soil beds. Low-calorie, high in beta-carotene, and great for eye health.",
  },
];

export type Recipe = {
  slug: string;
  title: string;
  benefit: string;
  image: string;
  tags: string[];
  ingredients: { name: string; slug: string }[];
  description: string;
};

export const recipes: Recipe[] = [
  {
    slug: "mango-shake",
    title: "Chilled Mango Shake",
    benefit: "Boosts immunity & Vitamin A",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/933ac503d9ab76648ca57762b10a5f3ae268ecff.jpg",
    tags: ["Seasonal Special", "Nutritious One"],
    ingredients: [{ name: "Mango", slug: "mango" }, { name: "Banana", slug: "banana" }],
    description:
      "A creamy, chilled mango shake made with sun-ripened Alphonso mangoes and a hint of banana for natural sweetness. This seasonal special is a nutritious, Vitamin-A-rich treat perfect for summer mornings. Blend ripe mango chunks with chilled milk, a spoon of honey, and a ripe banana until smooth, then serve over ice with a mint garnish.",
  },
  {
    slug: "spinach-detox-soup",
    title: "Spinach Detox Soup",
    benefit: "Low calorie, high iron",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7c45b01b691df6cf80fba47f54d950f563e88c37.jpg",
    tags: ["Low Calorie", "Healthy One"],
    ingredients: [{ name: "Spinach", slug: "spinach" }, { name: "Tomato", slug: "tomato" }],
    description:
      "A comforting low-calorie soup packed with iron-rich spinach and tangy tomatoes. Sauté garlic and onion, add chopped spinach and tomatoes, simmer with vegetable stock, then blend until smooth. Finish with black pepper and a drizzle of olive oil for a nutritious, healthy one-bowl meal.",
  },
  {
    slug: "strawberry-yogurt-bowl",
    title: "Strawberry Yogurt Bowl",
    benefit: "Antioxidant-rich, low calorie",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/3be31e0417a975b428317f6b37eb0915b3821b6e.jpg",
    tags: ["Seasonal Special", "Antioxidant Rich"],
    ingredients: [{ name: "Strawberry", slug: "strawberry" }],
    description:
      "A refreshing bowl layering fresh, organic strawberries with thick yogurt and a scatter of seeds. This seasonal special is naturally low-calorie and rich in antioxidants — simply slice strawberries, layer with yogurt and a drizzle of honey, and top with chia seeds for extra nutrition.",
  },
  {
    slug: "carrot-ginger-soup",
    title: "Carrot Ginger Soup",
    benefit: "Rich in beta-carotene",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/7c45b01b691df6cf80fba47f54d950f563e88c37.jpg",
    tags: ["Nutritious One", "Low Calorie"],
    ingredients: [{ name: "Carrot", slug: "carrot" }],
    description:
      "A velvety soup made from sweet organic carrots and warming ginger. Simmer chopped carrots with ginger, onion, and stock until soft, then blend smooth. A nutritious one, low in calories and rich in beta-carotene for healthy skin and eyes.",
  },
  {
    slug: "banana-oat-smoothie",
    title: "Banana Oat Smoothie",
    benefit: "Energy-boosting fiber",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/063c86413860e6e8f100b45672ed926e668bb5ec.jpg",
    tags: ["Healthy One", "Energy Booster"],
    ingredients: [{ name: "Banana", slug: "banana" }],
    description:
      "A filling breakfast smoothie blending ripe organic bananas with rolled oats, milk, and a touch of cinnamon. This healthy one keeps you full for longer and delivers a natural energy boost without added sugar.",
  },
  {
    slug: "tomato-basil-salad",
    title: "Tomato Basil Salad",
    benefit: "High in lycopene, low calorie",
    image: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a5b668c9c5a7ce715827e78f259bd5074f55c051.jpg",
    tags: ["Low Calorie", "Nutritious One"],
    ingredients: [{ name: "Tomato", slug: "tomato" }],
    description:
      "A light, nutritious one salad combining vine-ripened tomatoes, fresh basil, and a drizzle of olive oil. Slice tomatoes, tear basil leaves, and toss with olive oil, sea salt, and a splash of balsamic for a low-calorie side rich in lycopene.",
  },
];