export interface WardrobeItem {
  id: string;
  name: string;
  category: "top" | "bottom" | "footwear" | "outerwear" | "accessory";
  color: string;
  style: string[];
  image: string;
  brand?: string;
  occasion?: string[];
  season?: string[];
}

export interface OutfitCard {
  id: string;
  title: string;
  tags: string[];
  items: {
    top?: WardrobeItem;
    bottom?: WardrobeItem;
    footwear?: WardrobeItem;
    outerwear?: WardrobeItem;
  };
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  outfits: OutfitCard[];
  coverImage: string;
}

// Sample wardrobe items with high-quality images on white backgrounds
export const wardrobeItems: WardrobeItem[] = [
  {
    id: "z1",
    name: "Oversized Blazer",
    category: "outerwear",
    color: "Gray",
    style: ["Oversized", "Structured"],
    image:
      "https://static.zara.net/assets/public/a1d9/f098/5e46400ab7cb/60bf77a28e0f/05862456802-e1/05862456802-e1.jpg?ts=1755525998027&w=2240",
    brand: "Zara",
    occasion: ["Work", "Formal"],
    season: ["Fall", "Winter", "Spring"],
  },
  {
    id: "z2",
    name: "High Waist Trousers",
    category: "bottom",
    color: "Black",
    style: ["Wide Leg", "Tailored"],
    image:
      "https://static.zara.net/assets/public/a2e5/2239/2cf345208cef/43093d9053ac/05940102800-e1/05940102800-e1.jpg?ts=1756308175622&w=2240",
    brand: "Zara",
    occasion: ["Work", "Formal"],
    season: ["All"],
  },
  {
    id: "z3",
    name: "Cotton Shirt",
    category: "top",
    color: "White",
    style: ["Classic", "Oversized"],
    image:
      "https://static.zara.net/assets/public/a175/e1a8/ba464edf99a3/e42c35e27eb4/01063305250-000-e1/01063305250-000-e1.jpg?ts=1754985845978&w=1280",
    brand: "Zara",
    occasion: ["Work", "Casual"],
    season: ["All"],
  },
  {
    id: "z4",
    name: "Knit Sweater",
    category: "top",
    color: "Light Gray",
    style: ["Oversized", "Turtleneck"],
    image:
      "https://static.zara.net/assets/public/1d56/d702/49644ec0ad0f/5882263300e9/03332300803-e1/03332300803-e1.jpg?ts=1753371721111&w=1280",
    brand: "Zara",
    occasion: ["Casual", "Weekend"],
    season: ["Fall", "Winter"],
  },
  {
    id: "z5",
    name: "Leather Tote Bag",
    category: "accessory",
    color: "Beige",
    style: ["Minimalist"],
    image:
      "https://static.zara.net/assets/public/0794/7071/a6dd4a5f8f67/6dfb3ece9429/13394620107-e1/13394620107-e1.jpg?ts=1753863947644&w=1900",
    brand: "Zara",
    occasion: ["Work", "Casual"],
    season: ["All"],
  },
  {
    id: "1",
    name: "Knot Detail KnitTop",
    category: "top",
    color: "Black",
    style: ["Crop"],
    image:
      "https://static.zara.net/assets/public/fbe6/5314/179641679db2/07f550da8d09/00794390800-e1/00794390800-e1.jpg?ts=1756988290835&w=1280",
    brand: "",
    occasion: ["Casual", "Date"],
    season: ["Spring", "Summer"],
  },
  {
    id: "2",
    name: "Motif Printed Blouse",
    category: "top",
    color: "Blue",
    style: ["Crop"],
    image:
      "https://static.zara.net/assets/public/b0c7/68d6/602842a58552/8767f2ceba50/08649842406-e1/08649842406-e1.jpg?ts=1755610847963&w=1280",
    brand: "",
    occasion: ["Casual", "Date"],
    season: ["Spring", "Summer"],
  },
  {
    id: "3",
    name: "Cotton Poplin Shirt",
    category: "top",
    color: "Blue",
    style: ["Striped"],
    image:
      "https://static.zara.net/assets/public/8a14/d9ff/3c5641d2817a/391e538be556/08622654401-e1/08622654401-e1.jpg?ts=1755846591034&w=1280",
    brand: "",
    occasion: ["Work", "Casual"],
    season: ["Spring", "Summer", "Fall"],
  },
  {
    id: "4",
    name: "Blue Denim Shorts",
    category: "bottom",
    color: "Blue",
    style: ["Denim"],
    image:
      "https://static.zara.net/assets/public/85f5/b3a2/1dd84ba29285/cce6451cbfd7/08062480427-e1/08062480427-e1.jpg?ts=1741853726420&w=524",
    brand: "",
    occasion: ["Casual", "Weekend"],
    season: ["Spring", "Summer"],
  },
  {
    id: "5",
    name: "Seamless Trousers",
    category: "bottom",
    color: "Brown",
    style: ["Wide Leg"],
    image:
      "https://static.zara.net/assets/public/039e/d269/785f4f51a983/262435e74be1/04365405700-e1/04365405700-e1.jpg?ts=1753359954438&w=1280",
    brand: "",
    occasion: ["Work", "Formal"],
    season: ["All"],
  },
  {
    id: "6",
    name: "Dangle Earrings",
    category: "accessory",
    color: "Golden",
    style: ["Golden"],
    image:
      "https://static.zara.net/assets/public/ff6a/991b/6c134763b20e/9289f1f34e04/02702209303-e1/02702209303-e1.jpg?ts=1756996166367&w=2240",
    brand: "",
    occasion: ["Party", "Date"],
    season: ["All"],
  },
  {
    id: "7",
    name: "One Shoulder Dress",
    category: "top",
    color: "Green",
    style: ["Elegant"],
    image:
      "https://static.zara.net/assets/public/0984/86d0/d20b446db0af/4dfbc355eb0c/01198454500-e1/01198454500-e1.jpg?ts=1753951238639&w=1280",
    brand: "",
    occasion: ["Date", "Party"],
    season: ["Spring", "Summer"],
  },
  {
    id: "8",
    name: "Leather Handbag",
    category: "accessory",
    color: "Brown",
    style: ["Classic"],
    image:
      "https://static.zara.net/assets/public/aa65/ce31/a1ba49eeb963/eb11ce6bf384/13545520700-e1/13545520700-e1.jpg?ts=1743090264705&w=524",
    brand: "",
    occasion: ["Work", "Casual"],
    season: ["All"],
  },
  {
    id: "9",
    name: "Strappy Sandals",
    category: "footwear",
    color: "Brown",
    style: ["Elegant"],
    image:
      "https://static.zara.net/assets/public/e026/fb3a/6a84478abdc7/aed84df38365/11826519105-e1/11826519105-e1.jpg?ts=1738844001082&w=524",
    brand: "",
    occasion: ["Date", "Party"],
    season: ["Spring", "Summer"],
  },
  {
    id: "10",
    name: "Oversized T-Shirt",
    category: "top",
    color: "Gray",
    style: ["Casual"],
    image:
      "https://static.zara.net/assets/public/e977/b793/ea144c6dbd52/754f5ef6009f/06050017803-e1/06050017803-e1.jpg?ts=1754550611933&w=1280",
    brand: "",
    occasion: ["Casual", "Weekend"],
    season: ["All"],
  },
  {
    id: "11",
    name: "Crossbody Sandals",
    category: "footwear",
    color: "Brown",
    style: ["Casual"],
    image:
      "https://static.zara.net/assets/public/b0ff/0009/3e88481b9d7d/cec609f366a5/12700529709-e1/12700529709-e1.jpg?ts=1741607600166&w=524",
    brand: "",
    occasion: ["Casual", "Beach"],
    season: ["Spring", "Summer"],
  },
  {
    id: "12",
    name: "Wide Leg Trousers",
    category: "bottom",
    color: "Cream",
    style: ["Wide Leg"],
    image:
      "https://static.zara.net/assets/public/2192/404f/fa7d4bf7bdc3/6d78f46d4ff9/08372268712-e1/08372268712-e1.jpg?ts=1756217498448&w=1280",
    brand: "",
    occasion: ["Casual", "Work"],
    season: ["All"],
  },
  {
    id: "13",
    name: "White Button Shirt",
    category: "top",
    color: "White",
    style: ["Classic"],
    image:
      "https://static.zara.net/assets/public/cb03/3c6f/a6ee4d76a457/4bab6666a56c/08525395251-e1/08525395251-e1.jpg?ts=1753257250650&w=1280",
    brand: "",
    occasion: ["Work", "Formal"],
    season: ["All"],
  },
  {
    id: "14",
    name: "Black Blazer",
    category: "outerwear",
    color: "Black",
    style: ["Professional"],
    image:
      "https://static.zara.net/assets/public/7c53/c17e/ef874fbe8350/e520354d6f12/00706102800-e1/00706102800-e1.jpg?ts=1753351857589&w=524",
    brand: "",
    occasion: ["Work", "Formal"],
    season: ["All"],
  },
  {
    id: "15",
    name: "Midi Skirt",
    category: "bottom",
    color: "Navy",
    style: ["A-Line"],
    image:
      "https://static.zara.net/assets/public/00ac/c11b/59f642d39dc9/ae6820bb0141/08160399401-e1/08160399401-e1.jpg?ts=1756467090893&w=1280",
    brand: "",
    occasion: ["Work", "Date"],
    season: ["Spring", "Summer", "Fall"],
  },
  {
    id: "16",
    name: "Ankle Boots",
    category: "footwear",
    color: "Black",
    style: ["Classic"],
    image:
      "https://static.zara.net/assets/public/64be/eb39/2c734bf0a62e/b671c557d4d9/13126610800-e1/13126610800-e1.jpg?ts=1755612099179&w=524",
    brand: "",
    occasion: ["Work", "Casual"],
    season: ["Fall", "Winter"],
  },
];

// Sample outfit cards
export const outfitCards: OutfitCard[] = [
  {
    id: "outfit-1",
    title: "Business Casual",
    tags: ["Work", "Professional"],
    items: {
      top: wardrobeItems[0], // Blue Button-Up Shirt
      bottom: wardrobeItems[1], // Black Dress Pants
      footwear: wardrobeItems[2], // Brown Leather Boots
    },
  },
  {
    id: "outfit-2",
    title: "Weekend Comfort",
    tags: ["Casual", "Relaxed"],
    items: {
      top: wardrobeItems[3], // Black Sweater
      bottom: wardrobeItems[4], // Blue Denim Jeans
      footwear: wardrobeItems[5], // White Sneakers
    },
  },
  {
    id: "outfit-3",
    title: "Date Night",
    tags: ["Elegant", "Evening"],
    items: {
      top: wardrobeItems[6], // Green Midi Dress
      footwear: wardrobeItems[10], // Brown Sandals
    },
  },
  {
    id: "outfit-4",
    title: "Spring Layers",
    tags: ["Layered", "Transitional"],
    items: {
      top: wardrobeItems[11], // White T-Shirt
      outerwear: wardrobeItems[8], // Gray Cardigan
      bottom: wardrobeItems[4], // Blue Denim Jeans
      footwear: wardrobeItems[5], // White Sneakers
    },
  },
];

// Sample collections
export const collections: Collection[] = [
  {
    id: "collection-1",
    name: "Work Essentials",
    description: "Professional outfits for the office",
    coverImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    outfits: [outfitCards[0], outfitCards[3]],
  },
  {
    id: "collection-2",
    name: "Casual Weekends",
    description: "Comfortable looks for relaxed days",
    coverImage:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    outfits: [outfitCards[1], outfitCards[2]],
  },
];

// Filter options
export const filterOptions = {
  categories: ["All", "Top", "Bottom", "Footwear", "Outerwear"],
  colors: [
    "All",
    "Black",
    "White",
    "Blue",
    "Gray",
    "Brown",
    "Green",
    "Navy",
    "Beige",
  ],
  styles: ["All", "Casual", "Formal", "Business", "Athletic", "Elegant"],
  occasions: ["All", "Work", "Casual", "Date", "Party", "Exercise", "Beach"],
  seasons: ["All", "Spring", "Summer", "Fall", "Winter"],
};
