/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, JournalPost, GalleryItem, Testimonial, Experience } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'breakfast',
    title: 'Slow Mornings',
    subtitle: 'Breakfast & Conversation',
    description: 'Designed for lingering sunlight, freshly baked croissants, silken eggs, and warm conversations that stretch into the late morning.',
    timeSlot: '08:30 AM — 12:00 PM',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'brunch',
    title: 'Weekend Brunch',
    subtitle: 'The Social Ritual',
    description: 'Our signature social gathering. Indulgent sweet plates, crisp bellinis, warm bagels, and modern Lagos rhythm in a sunlit conservatory.',
    timeSlot: 'Saturday & Sunday, 10:00 AM — 04:00 PM',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'lunch',
    title: 'Long Lunches',
    subtitle: 'C-Suite & Conversations',
    description: 'Whether a power meeting or a slow afternoon with friends, our light pasta, crisp salads, and gourmet burgers are paired for lingering.',
    timeSlot: '12:00 PM — 04:30 PM',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'dinner',
    title: 'Dinner Dates & After 5',
    subtitle: 'Intimate Evenings',
    description: 'As the sun sets over Lekki, the lights dim and the atmosphere shifts. Experience flame-kissed T-bone steaks, signature cocktails, and candlelit ambiance.',
    timeSlot: '05:00 PM — 11:00 PM',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- MORNING PLATES ---
  {
    id: 'egg-scrambled',
    name: 'Soft Mushroom & Spinach Scrambled Eggs',
    description: 'Sautéed mushrooms and spinach folded into silky, slow-cooked scrambled eggs with a light, creamy finish. Finished with parmesan and a touch of chilli flakes.',
    price: 15500,
    category: 'Breakfast',
    subCategory: 'Eggs',
    tags: ['Silky', 'Vegetarian'],
    options: ['Toasted Sourdough', 'Mèsi Sweet Bread', 'Thick-Cut Toast'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'egg-chili-oil',
    name: 'Crushed Chili Oil Eggs',
    description: 'Three sunny-side eggs gently fried in aromatic chili oil, finished with a subtle heat and rich flavour. Served over wilted spinach with a light parmesan finish.',
    price: 14000,
    category: 'Breakfast',
    subCategory: 'Eggs',
    tags: ['Spicy', 'Chef Special'],
    options: ['Toasted Sourdough', 'Mèsi Sweet Bread', 'Thick-Cut Toast'],
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'egg-omelette',
    name: 'Signature Omelette',
    description: 'A soft folded omelette filled with sautéed onions, peppers, tomatoes, mushrooms and greens, with melted cheese. Served with sautéed potatoes or toasted bread.',
    price: 18000,
    category: 'Breakfast',
    subCategory: 'Eggs',
    tags: ['Hearty'],
    options: ['Toasted Sourdough', 'Mèsi Sweet Bread', 'Thick-Cut Toast'],
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=600'
  },
  // --- BREAKFAST SOURDOUGH ---
  {
    id: 'sd-avocado',
    name: 'Avocado & Chilli Egg on Sourdough',
    description: 'Crushed avocado layered over toasted sourdough with turkey bacon and chilli oil fried eggs (sunny side up), finished with a rich, aromatic heat.',
    price: 16000,
    category: 'Breakfast',
    subCategory: 'Sourdough',
    tags: ['Popular', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sd-bacon-egg',
    name: 'Bacon & Egg on Sourdough',
    description: 'Cream cheese on toasted sourdough with turkey bacon and poached eggs.',
    price: 16000,
    category: 'Breakfast',
    subCategory: 'Sourdough',
    tags: ['Classic'],
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sd-mushroom-tomato',
    name: 'Mushroom & Tomato on Sourdough',
    description: 'Sautéed mushrooms and red onion with tomatoes and spinach, finished with a fried egg on toasted sourdough. Served with avocado and seasonal fruit.',
    price: 17000,
    category: 'Breakfast',
    subCategory: 'Sourdough',
    tags: ['Vegetarian Friendly'],
    image: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sd-salmon',
    name: 'Smoked Salmon on Sourdough',
    description: 'Toasted sourdough layered with light cream cheese, spinach and soft folded eggs, finished with smoked salmon on top. Served with avocado and seasonal fruit.',
    price: 19500,
    category: 'Breakfast',
    subCategory: 'Sourdough',
    tags: ['Luxury', 'Highly Recommended'],
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=600'
  },
  // --- BREAKFAST PLATES ---
  {
    id: 'plate-house',
    name: 'MÈSI House Breakfast',
    description: 'Eggs cooked to your preference, sausage, turkey bacon, sautéed mushrooms, grilled tomato, baked beans, pan-fried potatoes, served with toasted bread.',
    price: 22000,
    category: 'Breakfast',
    subCategory: 'Breakfast Plates',
    tags: ['Classic Feast'],
    options: ['Toasted Sourdough', 'Mèsi Sweet Bread', 'Thick-Cut Toast']
  },
  {
    id: 'plate-american',
    name: 'American Breakfast',
    description: 'Eggs cooked to your preference, pancakes, turkey bacon, sausage, sautéed potatoes, served with syrup and seasonal fruit.',
    price: 23800,
    category: 'Breakfast',
    subCategory: 'Breakfast Plates',
    tags: ['Indulgent'],
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'plate-nigerian',
    name: 'Nigerian Breakfast',
    description: 'Peppered scrambled eggs or egg sauce, served with bread, yam or plantain, with sausage.',
    price: 17000,
    category: 'Breakfast',
    subCategory: 'Breakfast Plates',
    tags: ['Local Classic', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'plate-steak-eggs',
    name: 'MÈSI Signature Steak & Eggs',
    description: 'Grilled premium steak with eggs cooked to your preference, served with crispy potatoes.',
    price: 24000,
    category: 'Breakfast',
    subCategory: 'Breakfast Plates',
    tags: ['Signature', 'High Protein']
  },
  {
    id: 'plate-shakshuka',
    name: 'Sausage Shakshuka',
    description: 'Sausage in a rich tomato and pepper sauce with eggs, served with toasted bread.',
    price: 18800,
    category: 'Breakfast',
    subCategory: 'Breakfast Plates',
    tags: ['Comfort Food', 'Spicy'],
    options: ['Toasted Sourdough', 'Mèsi Sweet Bread', 'Thick-Cut Toast']
  },
  // --- SWEET & SAVORY PLATES ---
  {
    id: 'sweet-pancake-plate',
    name: 'Pancake Breakfast Plate',
    description: 'Fluffy pancakes or waffles, served with egg, bacon & sausage, and maple syrup.',
    price: 18000,
    category: 'Breakfast',
    subCategory: 'Mèsi Sweet & Savory Plates',
    tags: ['Brunch Fave']
  },
  {
    id: 'sweet-chicken-waffle-burger',
    name: 'Chicken & Waffle Breakfast Burger',
    description: 'Grilled or crispy chicken, egg, cheese, lettuce, tomato, house sauce, served in waffles with sautéed potatoes.',
    price: 20000,
    category: 'Breakfast',
    subCategory: 'Mèsi Sweet & Savory Plates',
    tags: ['Decadent']
  },
  {
    id: 'sweet-french-toast',
    name: 'Cinnamon French Toast',
    description: 'Cubed brioche toast, served with caramelised banana, cream and a salted caramel dip.',
    price: 14000,
    category: 'Breakfast',
    subCategory: 'Mèsi Sweet & Savory Plates',
    tags: ['Sweet', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600'
  },
  // --- BRUNCH BAGELS & CROISSANTS ---
  {
    id: 'brunch-croissant-salmon',
    name: 'Smoked Salmon Croissant',
    description: 'Warm, buttery croissant layered with toasted smoked salmon, spinach, and a fried egg.',
    price: 22000,
    category: 'Brunch',
    subCategory: 'Croissants',
    tags: ['Chic', 'Flaky'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'brunch-bagel-tuna',
    name: 'Spiced Tuna Crunch Bagel',
    description: 'Tuna flakes with crisp bell peppers, fresh cucumbers & onions, lightly seasoned and finished with a gentle kick of spice. Served in a toasted bagel with sweet potato chips.',
    price: 17800,
    category: 'Brunch',
    subCategory: 'Bagels',
    tags: ['Crunchy', 'Savory']
  },
  // --- LIGHT BITES ---
  {
    id: 'light-sweetcorn',
    name: 'Sweetcorn Ribs with Lime & Chilli Dressing',
    description: 'Grilled sweetcorn ribs, cut into strips, and tossed in a zesty lime and chilli dressing with fresh herbs.',
    price: 10000,
    category: 'Light Bites',
    subCategory: 'Plates',
    tags: ['Vegan', 'Light'],
    image: 'https://images.unsplash.com/photo-1551782450-1a14c6ef7400?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'light-croquettes',
    name: 'Chicken Croquettes',
    description: 'Crispy golden croquettes filled with seasoned shredded chicken and a creamy centre, lightly spiced and fried. Served with marinara dip.',
    price: 17000,
    category: 'Light Bites',
    subCategory: 'Plates',
    tags: ['Crispy']
  },
  {
    id: 'light-katsu',
    name: 'Crispy Ebi Katsu',
    description: 'Panko-crusted prawns, with a juicy centre. Served with a dipping sauce and a touch of heat and citrus.',
    price: 15000,
    category: 'Light Bites',
    subCategory: 'Plates',
    tags: ['Coastal', 'Crunchy'],
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'light-squid',
    name: 'Crispy Squid with Chilli & Lime Dressing',
    description: 'Lightly scored squid, fried until crisp and golden. Finished with a fresh chilli and lime dressing.',
    price: 16500,
    category: 'Light Bites',
    subCategory: 'Plates',
    tags: ['Zesty']
  },
  // --- PASTA ---
  {
    id: 'pasta-supreme',
    name: 'Seafood Supreme Pasta',
    description: 'Pasta finished in your choice of creamy or rich tomato sauce, layered with jumbo prawns, calamari, and delicate flakes of fish. Finished with herbs and parmesan. A guest favourite.',
    price: 43000,
    category: 'Pasta',
    subCategory: 'Signature',
    tags: ['Luxury Seafood', 'Guest Favorite'],
    options: ['Penne', 'Spaghetti', 'Tagliatelle'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pasta-alfredo',
    name: 'Creamy Chicken Alfredo',
    description: 'Grilled chicken in a silky parmesan cream sauce with mushrooms and onions, finished with melted cheese.',
    price: 31000,
    category: 'Pasta',
    subCategory: 'Signature',
    tags: ['Comfort', 'Creamy'],
    options: ['Penne', 'Spaghetti', 'Tagliatelle'],
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pasta-rigatoni',
    name: 'Spicy Creamy Rigatoni with Seared Steak Bites',
    description: 'Rigatoni finished in a rich, creamy tomato sauce with a gentle heat, layered with seared steak bites and finished with parmesan and fresh herbs. Prepared with a traditional vodka-infused sauce.',
    price: 33000,
    category: 'Pasta',
    subCategory: 'Hearty',
    tags: ['Spicy', 'Rich', 'Contains Alcohol'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600'
  },
  // --- BURGERS ---
  {
    id: 'burger-mesi',
    name: 'MÈSI Burger',
    description: 'Juicy seasoned beef patties with shredded lettuce, American cheddar cheese, and our signature house sauce, served in a toasted brioche bun.',
    price: 25500,
    category: 'Burgers',
    subCategory: 'Burgers',
    tags: ['Signature', 'Bestseller'],
    options: ['Add Turkey Bacon (+₦4,000)', 'Double Chicken Fillet (+₦6,000)'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'burger-suya-prawn',
    name: "Kay's Suya Prawn Burger",
    description: 'Seasoned prawns layered in a toasted garlic butter brioche bun with fresh/sautéed onions, sliced tomatoes, crushed peanuts, and an oriental drizzle.',
    price: 28000,
    category: 'Burgers',
    subCategory: 'Burgers',
    tags: ['Fusion Cuisine', 'Spicy'],
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600'
  },
  // --- SALADS ---
  {
    id: 'salad-avocado',
    name: 'The Avocado Harvest',
    description: 'Crisp iceberg lettuce with ripe avocado, cherry tomatoes, and shaved parmesan, finished with our signature creamy dressing and served with warm garlic breadsticks.',
    price: 23500,
    category: 'Salads',
    subCategory: 'Plates',
    tags: ['Healthy', 'Crisp'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'salad-plum-halloumi',
    name: 'Plum & Halloumi Salad',
    description: 'Fresh kale and spinach with caramelised plum, grilled halloumi, and toasted cashews, finished with a light honey lime dressing.',
    price: 26000,
    category: 'Salads',
    subCategory: 'Plates',
    tags: ['Sweet & Salty', 'Unique'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600'
  },
  // --- MAINS ---
  {
    id: 'main-oxtail',
    name: 'Caribbean Braised Oxtail',
    description: 'Slow-braised oxtail in a rich, deeply seasoned stew, served with white rice or rice and peas, served with plantain.',
    price: 53000,
    category: 'Mains',
    subCategory: 'Stir Fry & Grill',
    tags: ['Slow Cooked', 'Comfort Luxe'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'main-lamb-chops',
    name: 'Premium Rib Lamb Chops',
    description: 'Grilled lamb chops seasoned with garlic, herbs, and spices, cooked to perfection.',
    price: 55000,
    category: 'Mains',
    subCategory: 'From the Grill',
    tags: ['Premium Cut', 'Flame Grilled'],
    image: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'main-seabass',
    name: 'Chimichurri Grilled Sea Bass',
    description: 'Grilled sea bass fillet seasoned and finished with a fresh chimichurri sauce and sautéed vegetables for a bright, herbed finish.',
    price: 49000,
    category: 'Mains',
    subCategory: 'From the Sea',
    tags: ['Fresh Catch', 'Zesty'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'main-surf-turf',
    name: 'Surf & Turf Plate',
    description: 'Tender fillet steak and grilled prawns, finished with a rich peppercorn sauce, served with sautéed vegetables and your choice of side.',
    price: 58000,
    category: 'Mains',
    subCategory: 'From the Sea',
    tags: ['Decadent Duo', 'Indulgent'],
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600'
  },
  // --- DESSERTS ---
  {
    id: 'sweet-french-brioche',
    name: 'Crème Brûlée Brioche French Toast',
    description: 'Soft brioche French toast with a crisp brûléed sugar top, served warm with vanilla ice cream.',
    price: 15800,
    category: 'Dessert',
    subCategory: 'Indulgent',
    tags: ['Sweet', 'Award Winning'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sweet-puff-pumpkin',
    name: 'Puff Puff Pumpkin',
    description: 'Warm, soft traditional puff-puff served with a rich pumpkin spice caramel sauce.',
    price: 10000,
    category: 'Dessert',
    subCategory: 'Indulgent',
    tags: ['Local Twist', 'Warm']
  },
  // --- THE COCKTAIL BAR ---
  {
    id: 'bar-mimosa',
    name: 'Brunchtime Mimosa',
    description: 'Premium sparkling wine with freshly squeezed orange juice. The ultimate slow morning ritual.',
    price: 12000,
    category: 'Drinks',
    subCategory: 'The Cocktail Bar',
    tags: ['Brunch Classic', 'Alcoholic'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bar-aperol-spritz',
    name: 'Aperol Spritz',
    description: 'Aperol, Prosecco, soda water, and a fresh orange slice.',
    price: 13000,
    category: 'Drinks',
    subCategory: 'The Cocktail Bar',
    tags: ['Refreshing', 'Alcoholic'],
    image: 'https://images.unsplash.com/photo-1578426038144-42b47f63124b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bar-virgin-mojito',
    name: 'Signature Mint Mocktail',
    description: 'Crushed garden mint, fresh lime, sparkling tonic, and a touch of organic cane sugar.',
    price: 10000,
    category: 'Drinks',
    subCategory: 'Mocktails',
    tags: ['Zero Proof', 'Refreshing'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    caption: 'Sunlit afternoon seating in Lekki Phase 1',
    category: 'ambiance'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    caption: 'Freshly baked artisanal croissants and pastries',
    category: 'plating'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800',
    caption: 'Friends raising a toast during our signature weekend brunch',
    category: 'lifestyle'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    caption: 'Expert mixologist crafting an artisanal cocktail at the bar',
    category: 'chef'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    caption: 'The Seafood Supreme Pasta served fresh with shaved parmesan',
    category: 'plating'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    caption: 'Cosy, candlelit evening booth arrangement',
    category: 'ambiance'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800',
    caption: 'Chili oil eggs and fresh espresso on a slow morning',
    category: 'plating'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800',
    caption: 'Delicate plating of our Crème Brûlée Brioche French Toast',
    category: 'plating'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Opeoluwa Taylor',
    role: 'Lekki Resident & Food Critic',
    quote: 'MÈSI feels like stepping into an editorial magazine. The sunlit glass roofing, the slow-poured espresso, and the Crushed Chili Oil Eggs on sourdough make slow weekend mornings absolute bliss.',
    rating: 5,
    date: 'June 2026'
  },
  {
    id: 't2',
    name: 'Ekundayo Olafare',
    role: 'Creative Director',
    quote: 'The design, the music curation, and the food are completely aligned. The Seafood Supreme Pasta is the best coastal-inspired bowl I’ve had in Lagos. It’s luxury without the pretension—pure warmth.',
    rating: 5,
    date: 'May 2026'
  },
  {
    id: 't3',
    name: 'Dr. Dayan Ben',
    role: 'Lagos Lifestyle Editor',
    quote: 'It is rare to find a place that excels at breakfast, business lunch, and cocktails in equal measure. MÈSI Lagos has set a new standard for sophisticated, lifestyle-driven hospitality in Lekki Phase 1.',
    rating: 5,
    date: 'April 2026'
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'post-1',
    title: 'The Art of Slow Mornings: Why Lekki Needs Slow Living',
    excerpt: 'In a city that moves at lightning speed, MÈSI Lagos represents a sanctuary of slow. We discuss our philosophy behind long breakfasts and meaningful conversations.',
    category: 'Philosophy',
    readTime: '4 min read',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    content: [
      'Lagos is a city of incredible ambition, infinite hustle, and relentless energy. But even the most brilliant minds and vibrant souls require a sanctuary to pause, breathe, and reflect.',
      'This is why we created MÈSI Lagos. Designed not as a quick stop for a caffeine fix, but as a space where mornings are deliberately slowed down. It is about holding space for thoughts to form, conversations to linger, and sensory details to be appreciated.',
      'From our low-seated warm ash-wood lounge chairs to the gentle filter of morning sunlight through our double-height conservatory glass, every touchpoint encourages you to linger. We believe that true luxury in modern Lagos isn’t just about fine ingredients—it’s about time itself.'
    ]
  },
  {
    id: 'post-2',
    title: 'Designing the Seafood Supreme: A Coastal Culinary Journey',
    excerpt: 'Our culinary director shares the inspiration behind MÈSI’s most popular pasta bowl, blending Italian technique with pristine coastal ingredients.',
    category: 'Culinary',
    readTime: '5 min read',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    content: [
      'Lagos has a profound, historical relationship with the Atlantic. Our breezes are salted, our coastlines are alive, and our seafood is a source of immense pride.',
      'When designing our Seafood Supreme Pasta, we wanted to honor this coastal heritage while maintaining the delicate, sophisticated simplicity that defines our kitchen. We began with pristine jumbo prawns sourced daily from local fishermen, sweet tender calamari, and delicate flakes of white sea groper.',
      'We toss these coastal delicacies with high-altitude durum wheat tagliatelle, then fold it into a slow-emulsified sauce of white wine, lemon verbena, and cold-pressed olive oil. The result is a clean, bright, yet satisfyingly luxurious plate that immediately transports you to a seaside terrace in Capri, with a subtle modern Lagos warmth.'
    ]
  },
  {
    id: 'post-3',
    title: 'The Evolution of After-Work Social Dining',
    excerpt: 'How MÈSI transitions seamlessly from sunlit business lunches to intimate, dimly-lit cocktail evenings and late-night social dining.',
    category: 'Lifestyle',
    readTime: '3 min read',
    date: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    content: [
      'As the clock strikes five in Lekki Phase 1, the city’s mood shifts. The blue-light glow of laptop screens fades, and the desire for human connection, sensory relief, and conversational rhythm takes over.',
      'At MÈSI Lagos, we designed our architecture to mirror this natural circadian shift. The overhead skylights capture the golden orange gradient of the Lagos sunset, while our custom-engineered low-frequency acoustic soundscape transitions from acoustic jazz to ambient chill house.',
      'Our mixology bar becomes the focal point, where classic cocktails like the Aperol Spritz are served alongside custom botanical mocktails and dry-aged steak bites. It’s an organic transition that turns guests into community members, planning where they will spend the rest of their evening.'
    ]
  }
];
