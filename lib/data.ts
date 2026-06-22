// ─── Menu Data ───────────────────────────────────────────────────────────────

export type MenuCategory = "Starters" | "Main Course" | "Desserts" | "Drinks";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Bruschetta al Pomodoro",
    description:
      "Toasted sourdough topped with fresh tomatoes, basil, and a drizzle of extra-virgin olive oil.",
    price: "$9.50",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
    badge: "Chef's Pick",
  },
  {
    id: 2,
    name: "Arancini di Riso",
    description:
      "Golden fried risotto balls filled with mozzarella and slow-cooked ragu, served with marinara.",
    price: "$12.00",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Carpaccio di Manzo",
    description:
      "Thinly sliced raw beef with rocket, shaved Parmesan, capers, and lemon vinaigrette.",
    price: "$15.00",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  },

  // Main Course
  {
    id: 4,
    name: "Osso Buco alla Milanese",
    description:
      "Slow-braised veal shank in white wine and gremolata, served with saffron risotto.",
    price: "$38.00",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    badge: "Signature",
  },
  {
    id: 5,
    name: "Tagliatelle al Tartufo",
    description:
      "Fresh egg pasta ribbons tossed in black truffle cream sauce with Parmigiano Reggiano.",
    price: "$29.00",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Branzino al Forno",
    description:
      "Oven-roasted sea bass with lemon, capers, olives, and a herb crust. Served with seasonal vegetables.",
    price: "$34.00",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Pizza Margherita Verace",
    description:
      "Neapolitan-style pizza with San Marzano tomatoes, buffalo mozzarella, fresh basil, wood-fired.",
    price: "$22.00",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
  },

  // Desserts
  {
    id: 8,
    name: "Tiramisu Classico",
    description:
      "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with fine cocoa powder.",
    price: "$11.00",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 9,
    name: "Panna Cotta al Caramello",
    description:
      "Silky vanilla panna cotta topped with warm salted caramel sauce and toasted almonds.",
    price: "$9.00",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Gelato Artigianale",
    description:
      "Three scoops of house-made gelato. Ask your server for today's flavours.",
    price: "$8.00",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
  },

  // Drinks
  {
    id: 11,
    name: "Aperol Spritz",
    description:
      "The classic Italian aperitivo — Aperol, Prosecco, a splash of soda, and a fresh orange slice.",
    price: "$13.00",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Limonata Fresca",
    description:
      "House-made fresh lemonade with mint, a touch of honey, and sparkling water.",
    price: "$7.00",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
  },
  {
    id: 13,
    name: "Espresso Martini",
    description:
      "Freshly brewed espresso shaken with vodka and coffee liqueur. The perfect after-dinner drink.",
    price: "$15.00",
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
  },
];

// ─── Testimonials Data ────────────────────────────────────────────────────────

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  feedback: string;
  avatar: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Marchetti",
    role: "Food Blogger",
    rating: 5,
    feedback:
      "Absolutely breathtaking. The Osso Buco melted in my mouth and the ambiance was stunning. Brasato is, without question, the finest dining experience in the city.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    date: "May 2025",
  },
  {
    id: 2,
    name: "James Harrington",
    role: "Business Executive",
    rating: 5,
    feedback:
      "I have hosted a dozen client dinners at Brasato and every single time the food and service have been flawless. The wine pairings are outstanding. This is my go-to for important evenings.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    date: "April 2025",
  },
  {
    id: 3,
    name: "Amara Osei",
    role: "Travel Writer",
    rating: 5,
    feedback:
      "As someone who travels the world eating at top restaurants, I can say Brasato holds its own against the best. The truffle tagliatelle alone was worth the trip. Truly unforgettable.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
    date: "June 2025",
  },
  {
    id: 4,
    name: "Luca Ferrante",
    role: "Chef & Restaurateur",
    rating: 5,
    feedback:
      "Coming from a fellow chef, Brasato has genuine soul. The ingredients are impeccably sourced, the technique is refined but not showy. It is the kind of cooking that makes you feel at home.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "March 2025",
  },
  {
    id: 5,
    name: "Priya Nair",
    role: "Event Planner",
    rating: 5,
    feedback:
      "We held our company anniversary dinner at Brasato for 40 guests. The private dining setup was stunning, every dish came out perfectly timed, and the staff went above and beyond. 10/10.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "February 2025",
  },
  {
    id: 6,
    name: "Thomas Blanc",
    role: "Wine Enthusiast",
    rating: 5,
    feedback:
      "The cellar at Brasato is a hidden gem. Over 300 carefully selected labels, and the sommelier took genuine time to understand what I wanted. A phenomenal experience from start to finish.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "January 2025",
  },
];
