export interface Vendor {
  id: string;
  name: string;
  category: string;
  description: string;
  market: string;
}

export interface MarketInfo {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  description: string;
  history: string;
  highlights: string[];
  stats: { label: string; value: string }[];
  vendors: Vendor[];
}

export const markets: MarketInfo[] = [
  {
    id: "terminal",
    name: "Terminal Market",
    subtitle: "Super",
    slug: "terminal-market",
    description:
      "The Iloilo Terminal Market, locally known as 'Super,' is one of the city's most iconic commercial hubs. After extensive redevelopment, it now stands as a modern marketplace that preserves the vibrant spirit of Ilonggo trade and culture.",
    history:
      "Originally established as a transit hub for goods and passengers, the Terminal Market earned its nickname 'Super' from its role as a supermarket of sorts for the city. The redevelopment has transformed it into a state-of-the-art facility while maintaining its cultural significance as a gathering place for vendors and shoppers alike.",
    highlights: [
      "Complete structural renovation with modern facilities",
      "Dedicated sections for fresh produce, dry goods, and cooked food",
      "Improved ventilation and sanitation systems",
      "Vendor-friendly stall designs with proper drainage",
      "Accessible pathways for persons with disabilities",
    ],
    stats: [
      { label: "Vendors", value: "500+" },
      { label: "Stalls", value: "400+" },
      { label: "Daily Visitors", value: "10,000+" },
      { label: "Years of History", value: "50+" },
    ],
    vendors: [
      { id: "v1", name: "Nena's Fresh Produce", category: "Fresh Produce", description: "Fresh fruits and vegetables daily", market: "terminal" },
      { id: "v2", name: "Tatay's Seafood", category: "Seafood", description: "Freshly caught fish from Iloilo Strait", market: "terminal" },
      { id: "v3", name: "Lola's Dried Goods", category: "Dry Goods", description: "Local spices, grains, and dried fish", market: "terminal" },
      { id: "v4", name: "Mila's Kakanin", category: "Cooked Food", description: "Traditional Ilonggo rice cakes", market: "terminal" },
    ],
  },
  {
    id: "central",
    name: "Central Market",
    subtitle: "Tienda Mayor",
    slug: "central-market",
    description:
      "The Central Market, known as Tienda Mayor, is the cultural heart of Iloilo's marketplace tradition. Its modernization reflects the city's commitment to preserving cultural heritage while providing world-class commercial facilities.",
    history:
      "Tienda Mayor has served as Iloilo City's primary marketplace since the Spanish colonial era. The name itself, meaning 'Main Store' in Spanish, speaks to its historical importance. The modernization project has carefully balanced contemporary amenities with the preservation of its storied past.",
    highlights: [
      "Heritage-inspired architectural design",
      "Cultural preservation integrated into modern facilities",
      "Expanded vendor spaces with climate control",
      "Dedicated areas for traditional Ilonggo crafts and textiles",
      "Community spaces for cultural events and gatherings",
    ],
    stats: [
      { label: "Heritage Years", value: "100+" },
      { label: "Vendor Stalls", value: "350+" },
      { label: "Craft Vendors", value: "80+" },
      { label: "Cultural Events/Year", value: "20+" },
    ],
    vendors: [
      { id: "v5", name: "Weaving Traditions", category: "Textiles", description: "Handwoven hablon and patadyong", market: "central" },
      { id: "v6", name: "Ilonggo Spice House", category: "Spices", description: "Local herbs, spices, and condiments", market: "central" },
      { id: "v7", name: "Señora's Antiques", category: "Antiques", description: "Vintage items and colonial-era collectibles", market: "central" },
      { id: "v8", name: "Fresh Corner", category: "Fresh Produce", description: "Farm-fresh vegetables from Iloilo province", market: "central" },
    ],
  },
  {
    id: "jaro",
    name: "Jaro Big Market",
    subtitle: "",
    slug: "jaro-big-market",
    description:
      "The Jaro Big Market is a brand-new, two-level commercial facility that represents the future of public markets in Iloilo City. With 547 kiosks and capacity for over 840 vendors, it is the largest and most modern market in the region.",
    history:
      "The original Jaro market served the district for decades before the city government embarked on an ambitious project to build an entirely new facility. The Jaro Big Market now stands as a testament to Iloilo's commitment to providing vendors with world-class infrastructure and shoppers with a comfortable, modern marketplace experience.",
    highlights: [
      "Brand-new two-level commercial facility",
      "547 modern kiosks with standardized designs",
      "Expanded vendor capacity for over 840 vendors",
      "Modern fire safety and emergency systems",
      "Rooftop parking and loading areas",
      "Energy-efficient lighting and ventilation",
    ],
    stats: [
      { label: "Kiosks", value: "547" },
      { label: "Vendor Capacity", value: "840+" },
      { label: "Levels", value: "2" },
      { label: "Floor Area (sqm)", value: "8,000+" },
    ],
    vendors: [
      { id: "v9", name: "Jaro Fresh Meats", category: "Meat", description: "Quality pork, chicken, and beef", market: "jaro" },
      { id: "v10", name: "Garden Basket", category: "Fresh Produce", description: "Organic vegetables from local farms", market: "jaro" },
      { id: "v11", name: "Seafood Express", category: "Seafood", description: "Daily fresh catch from Guimaras Strait", market: "jaro" },
      { id: "v12", name: "Jaro Delicacies", category: "Cooked Food", description: "Local favorites and ready-to-eat meals", market: "jaro" },
    ],
  },
  {
    id: "lapaz",
    name: "La Paz Public Market",
    subtitle: "",
    slug: "la-paz-public-market",
    description:
      "The La Paz Public Market, famous as the birthplace of the iconic La Paz Batchoy, has undergone a ₱100 million rehabilitation project. The redevelopment focuses on improved sanitation, accessibility, and modernized facilities while preserving its legendary food culture.",
    history:
      "La Paz Market is synonymous with Iloilo's culinary identity. It is where the world-famous La Paz Batchoy originated, a noodle soup dish that has become a symbol of Ilonggo cuisine. The ₱100 million rehabilitation ensures this cultural treasure continues to thrive for generations to come.",
    highlights: [
      "₱100 million comprehensive rehabilitation",
      "Improved sanitation and waste management systems",
      "Enhanced accessibility for all visitors",
      "Dedicated food court area for La Paz Batchoy vendors",
      "Modern drainage and water systems",
      "Upgraded fire safety infrastructure",
    ],
    stats: [
      { label: "Investment", value: "₱100M" },
      { label: "Batchoy Vendors", value: "30+" },
      { label: "Total Vendors", value: "600+" },
      { label: "Daily Visitors", value: "15,000+" },
    ],
    vendors: [
      { id: "v13", name: "Ted's Original Batchoy", category: "Food", description: "The legendary La Paz Batchoy since 1945", market: "lapaz" },
      { id: "v14", name: "Deco's Original Batchoy", category: "Food", description: "Another beloved batchoy institution", market: "lapaz" },
      { id: "v15", name: "La Paz Fresh Goods", category: "Fresh Produce", description: "Daily fresh produce and vegetables", market: "lapaz" },
      { id: "v16", name: "Netong's Pancit Molo", category: "Food", description: "Traditional Ilonggo dumpling soup", market: "lapaz" },
    ],
  },
];

// Application Layer - Services
export const getMarketBySlug = (slug: string): MarketInfo | undefined =>
  markets.find((m) => m.slug === slug);

export const getAllVendors = (): Vendor[] =>
  markets.flatMap((m) => m.vendors);

export const getVendorsByMarket = (marketId: string): Vendor[] =>
  markets.find((m) => m.id === marketId)?.vendors || [];

export const filterVendors = (
  marketId?: string,
  category?: string
): Vendor[] => {
  let vendors = getAllVendors();
  if (marketId) vendors = vendors.filter((v) => v.market === marketId);
  if (category) vendors = vendors.filter((v) => v.category === category);
  return vendors;
};

export const searchVendors = (query: string): Vendor[] => {
  const q = query.toLowerCase();
  return getAllVendors().filter(
    (v) =>
      v.name.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q)
  );
};

export const getCategories = (): string[] => {
  const cats = new Set(getAllVendors().map((v) => v.category));
  return Array.from(cats).sort();
};
