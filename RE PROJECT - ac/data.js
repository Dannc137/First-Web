// data.js

const menuData = [
  {
    id: 1,
    name: "Appetizers",
    description: "Start your meal with our fresh and flavorful appetizers.",
    image: "/MEDIA/appetizer cover.jpg",
    items: [
      {
      id: 101,
      name: "Garlic Bread",
      description: "Crispy toasted bread topped with garlic butter and herbs.",
      price: "$1800",
      image: "/MEDIA/Garlic Bread - appetizer.jpg"
    },
    {
      id: 102,
      name: "Bruschetta",
      description: "Toasted bread topped with diced tomatoes, basil, and olive oil.",
      price: "$2500",
      image: "/MEDIA/Bruschetta with Tomato - appetizer.jpg"
    },
    {
      id: 103,
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, and basil drizzled with olive oil and balsamic glaze.",
      price: "$2800",
      image: "/MEDIA/Caprese Salad - apetizer.jpg"
    },
    {
      id: 104,
      name: "Arancini",
      description: "Golden fried risotto balls filled with cheese and herbs.",
      price: "$3000",
      image: "/MEDIA/Arancini - apetizer.jpg"
    },
    {
      id: 105,
      name: "Fried Calamari",
      description: "Lightly battered squid rings served with marinara sauce.",
      price: "$3200",
      image: "/MEDIA/Fried Calamari - appetizer.jpg"
    },
    {
      id: 106,
      name: "Stuffed Mushrooms",
      description: "Mushrooms filled with seasoned breadcrumbs, herbs, and cheese.",
      price: "$2700",
      image: "/MEDIA/Stuffed Mushrooms - appetizer.jpg"
    },
    {
      id: 107,
      name: "Antipasto Platter",
      description: "A selection of cured meats, cheeses, olives, and marinated vegetables.",
      price: "$4000",
      image: "/MEDIA/Antipasto Platter - appetizer.jpg"
    },
    {
      id: 108,
      name: "Garlic Parmesan Fries",
      description: "Crispy fries tossed with garlic butter, parmesan, and parsley.",
      price: "$2200",
      image: "/MEDIA/Garlic Parmesan Fries - appetizer.jpg"
    },
    {
      id: 109,
      name: "Mini Meatballs",
      description: "Juicy beef meatballs simmered in rich tomato sauce, topped with parmesan.",
      price: "$3000",
      image: "/MEDIA/Mini Meatballs - appetizer.jpg"
    },
    {
      id: 110,
      name: "Prosciutto-Wrapped Melon",
      description: "Sweet melon wrapped in thin prosciutto slices.",
      price: "$2900",
      image: "/MEDIA/Prosciutto-Wrapped Melon - appetizer.jpg"
    }
  ]
  },
  {
    id: 2,
    name: "Pastas",
    description: "Classic Italian pasta dishes made with love and fresh ingredients.",
    image: "/MEDIA/spagetti bollognaisse pic.jpg",
    items: [
         {
      id: 201,
      name: "Spaghetti Bolognese",
      description: "Traditional spaghetti tossed in a rich and hearty beef ragu.",
      price: "$4200",
      image: "/MEDIA/Spaghetti Bolognese - pasta.jpg"
    },
    {
      id: 202,
      name: "Fettuccine Alfredo",
      description: "Creamy Alfredo sauce with butter, parmesan, and freshly made fettuccine.",
      price: "$4000",
      image: "/MEDIA/Fettuccine Alfredo - pasta.jpg"
    },
    {
      id: 203,
      name: "Penne Arrabbiata",
      description: "Penne pasta in a spicy tomato and garlic sauce, topped with fresh basil.",
      price: "$3800",
      image: "/MEDIA/Penne Arrabbiata - pasta.jpg"
    },
    {
      id: 204,
      name: "Lasagna al Forno",
      description: "Layers of pasta, ragu, béchamel, and cheese baked to a golden perfection.",
      price: "$4800",
      image: "/MEDIA/Lasagna al Forno - pasta.jpg"
    },
    {
      id: 205,
      name: "Pesto Genovese",
      description: "Pasta tossed in fresh basil pesto with parmesan and pine nuts.",
      price: "$4200",
      image: "/MEDIA/Pesto Genovese - pasta.jpg"
    },
    {
      id: 206,
      name: "Spaghetti Carbonara",
      description: "Egg-based sauce with pancetta, parmesan, and black pepper — no cream added.",
      price: "$4500",
      image: "/MEDIA/Spaghetti Carbonara - pasta.jpg"
    },
    {
      id: 207,
      name: "Seafood Linguine",
      description: "Linguine pasta tossed with shrimp, mussels, and calamari in a white wine sauce.",
      price: "$5200",
      image: "/MEDIA/Seafood Linguine - pasta.jpg"
    },
    {
      id: 208,
      name: "Ravioli di Ricotta",
      description: "Homemade ravioli stuffed with ricotta and spinach in a light tomato sauce.",
      price: "$4600",
      image: "/MEDIA/Ravioli di Ricotta - pasta.jpg"
    },
    {
      id: 209,
      name: "Truffle Mushroom Tagliatelle",
      description: "Silky tagliatelle pasta with creamy truffle mushroom sauce and parmesan.",
      price: "$5500",
      image: "/MEDIA/Truffle Mushroom Tagliatelle - pasta.jpg"
    },
    {
      id: 210,
      name: "Gnocchi Sorrentina",
      description: "Soft potato gnocchi baked with tomato sauce, mozzarella, and basil.",
      price: "$4300",
      image: "/MEDIA/Gnocchi Sorrentina - pasta.jpg"
    },
      {
        id: 202,
        name: "Penne Alfredo",
        description: "Creamy Alfredo sauce tossed with penne pasta.",
        price: "$4200",
        image: "/MEDIA/Penne Alfredo - pasta.jpg"
      }
    ]
  },
  {
  id: 3,
  name: "Pizza",
  description: "Hand-stretched, wood-fired pizzas made with authentic Italian ingredients.",
  image: "/MEDIA/pizza cover.jpg",
  items: [
    {
      id: 301,
      name: "Margherita",
      description: "Classic pizza with tomato sauce, fresh mozzarella, and basil leaves.",
      price: "$3800",
      image: "/MEDIA/Margherita Pizza - pizza.jpg"
    },
    {
      id: 302,
      name: "Pepperoni",
      description: "Tomato sauce, mozzarella cheese, and generous slices of spicy pepperoni.",
      price: "$4200",
      image: "/MEDIA/Pepperoni - pizza.jpg"
    },
    {
      id: 303,
      name: "Quattro Formaggi",
      description: "Four cheese blend of mozzarella, gorgonzola, parmesan, and fontina.",
      price: "$4500",
      image: "/MEDIA/Quattro Formaggi Pizza - pizza.jpg"
    },
    {
      id: 304,
      name: "Prosciutto e Rucola",
      description: "Tomato base with mozzarella, prosciutto, fresh arugula, and parmesan shavings.",
      price: "$4800",
      image: "/MEDIA/Prosciutto e Rucola - pizza.jpg"
    },
    {
      id: 305,
      name: "BBQ Chicken",
      description: "Tangy BBQ sauce, grilled chicken, red onions, and mozzarella cheese.",
      price: "$4600",
      image: "/MEDIA/BBQ Chicken - pizza.jpg"
    },
    {
      id: 306,
      name: "Capricciosa",
      description: "Tomato sauce, mozzarella, artichokes, mushrooms, olives, and ham.",
      price: "$4700",
      image: "/MEDIA/Capricciosa - pizza.jpg"
    },
    {
      id: 307,
      name: "Diavola",
      description: "Spicy salami, chili flakes, tomato sauce, and mozzarella — a fiery favorite.",
      price: "$4400",
      image: "/MEDIA/Diavola Pizza - pizza.jpg"
    },
    {
      id: 308,
      name: "Vegetariana",
      description: "Tomato sauce, mozzarella, bell peppers, onions, zucchini, and olives.",
      price: "$4100",
      image: "/MEDIA/Vegetariana - pizza.jpg"
    },
    {
      id: 309,
      name: "Frutti di Mare",
      description: "Seafood pizza with tomato sauce, mozzarella, shrimp, calamari, and mussels.",
      price: "$5200",
      image: "/MEDIA/Frutti di Mare - pizza.jpg"
    },
    {
      id: 310,
      name: "Truffle Mushroom",
      description: "Cream base with mozzarella, mushrooms, truffle oil, and parmesan.",
      price: "$5500",
      image: "/MEDIA/Truffle Mushroom - pizza.jpg"
    }
  ]
},
  {
  id: 4,
  name: "Main Course",
  description: "Hearty and flavorful dishes to satisfy your appetite, crafted with premium ingredients.",
  image: "/MEDIA/mains cover.jpg",
  items: [
    {
      id: 701,
      name: "Grilled Ribeye Steak",
      description: "Juicy ribeye with rosemary potatoes and red wine jus.",
      price: "$9500",
      image: "/MEDIA/Grilled Ribeye Steak - main.jpg"
    },
    {
      id: 702,
      name: "Chicken Parmigiana",
      description: "Crispy chicken topped with marinara and mozzarella, served with pasta.",
      price: "$6800",
      image: "/MEDIA/Chicken Parmigiana - main.jpg"
    },
    {
      id: 703,
      name: "Osso Buco",
      description: "Braised veal shank in tomato-wine sauce with creamy polenta.",
      price: "$9800",
      image: "/MEDIA/Osso Buco - main.jpg"
    },
    {
      id: 704,
      name: "Lamb Chops alla Griglia",
      description: "Grilled lamb chops with roasted veggies and mint sauce.",
      price: "$11000",
      image: "/MEDIA/Lamb Chops alla Griglia - main.jpg"
    },
    {
      id: 705,
      name: "Salmon Fillet al Limone",
      description: "Seared salmon with lemon butter sauce and spinach.",
      price: "$8900",
      image: "/MEDIA/Salmon Fillet al Limone - main.jpg"
    },
    {
      id: 706,
      name: "Stuffed Chicken Florentine",
      description: "Chicken stuffed with spinach and ricotta in white wine sauce.",
      price: "$7200",
      image: "/MEDIA/Stuffed Chicken Florentine - main.jpg"
    },
    {
      id: 707,
      name: "Beef Tenderloin Medallions",
      description: "Tenderloin with mushroom demi-glace and mashed potatoes.",
      price: "$10200",
      image: "/MEDIA/Beef Tenderloin Medallions - main.jpg"
    },
    {
      id: 708,
      name: "Seafood Risotto",
      description: "Creamy rice with shrimp, calamari, and mussels.",
      price: "$8700",
      image: "/MEDIA/Seafood Risotto - main.jpg"
    },
    {
      id: 709,
      name: "Pork Milanese",
      description: "Crispy pork cutlet with arugula and lemon.",
      price: "$6800",
      image: "/MEDIA/Pork Milanese - main.jpg"
    },
    {
      id: 710,
      name: "Eggplant Parmigiana",
      description: "Baked layers of eggplant, marinara, and mozzarella.",
      price: "$6400",
      image: "/MEDIA/Eggplant Parmigiana - main.jpg"
    }
  ]
},
 {
  id: 5,
  name: "Sides",
  description: "Perfect additions to complement your meal.",
  image: "/MEDIA/cover sides.jpg",
  items: [
    {
      id: 901,
      name: "Garlic Parmesan Fries",
      description: "Crispy fries tossed with garlic butter and parmesan.",
      price: "$2500",
      image: "/MEDIA/Garlic Parmesan Fries - sides.jpg"
    },
    {
      id: 902,
      name: "Mixed Green Salad",
      description: "Fresh greens with cherry tomatoes and house dressing.",
      price: "$2200",
      image: "/MEDIA/Mixed Green Salad - sides.jpg"
    },
    {
      id: 903,
      name: "Herbed Rice Pilaf",
      description: "Fluffy rice cooked with herbs and olive oil.",
      price: "$2000",
      image: "/MEDIA/Herbed Rice Pilaf - sides.jpg"
    },
    {
      id: 904,
      name: "Grilled Vegetables",
      description: "Seasonal veggies grilled with olive oil and herbs.",
      price: "$2400",
      image: "/MEDIA/Grilled Vegetables - sides.jpg"
    }
  ]
}
,
   {
  id: 6,
  name: "Alcoholic Drinks",
  description: "A fine selection of wines, cocktails, and spirits to elevate your dining experience.",
  image: "/MEDIA/wine cover.jpg",
  items: [
    // 🍷 Wines
    {
      id: 401,
      name: "Red Wine (Cabernet Sauvignon)",
      description: "Full-bodied red with bold flavors of blackcurrant and oak.",
      price: "$5500",
      image: "/MEDIA/Cabernet Sauvignon - alcohol.jpg"
    },
    {
      id: 402,
      name: "White Wine (Chardonnay)",
      description: "Smooth and crisp with notes of apple and vanilla.",
      price: "$5200",
      image: "/MEDIA/Chardonnay - alcohol.jpg"
    },
    {
      id: 403,
      name: "Rosé Wine",
      description: "Light and refreshing, with delicate hints of berries.",
      price: "$5000",
      image: "/MEDIA/Rosé Wine - alcohol.jpg"
    },
    {
      id: 404,
      name: "Sparkling Wine",
      description: "Bubbly and elegant — perfect for celebrations.",
      price: "$6000",
      image: "/MEDIA/Sparkling Wine - alcohol.jpg"
    },

    // 🍺 Beers & Ciders
    {
      id: 405,
      name: "Lager",
      description: "Golden, smooth, and easy to drink — a classic favorite.",
      price: "$2500",
      image: "/MEDIA/Lager - alcohol.jpg"
    },
    {
      id: 406,
      name: "Pilsner",
      description: "Crisp and light-bodied with a refreshing finish.",
      price: "$2600",
      image: "/MEDIA/Pilsner - alcohol.jpg"
    },
    {
      id: 407,
      name: "Stout",
      description: "Rich and dark with roasted malt and chocolate notes.",
      price: "$2700",
      image: "/MEDIA/Stout - alcohol.jpg"
    },
    {
      id: 408,
      name: "Craft IPA",
      description: "Hoppy and aromatic with bold citrus and floral flavors.",
      price: "$2800",
      image: "/MEDIA/Craft IPA - alcohol.jpg"
    },
    {
      id: 409,
      name: "Apple Cider",
      description: "Sweet, tangy, and sparkling — a refreshing alternative.",
      price: "$2600",
      image: "/MEDIA/Apple Cider - alcohol.jpg"
    },

    // 🍸 Cocktails
    {
      id: 410,
      name: "Mojito",
      description: "A refreshing mix of white rum, mint, lime, sugar, and soda.",
      price: "$3500",
      image: "/MEDIA/Mojito - alcohol.jpg"
    },
    {
      id: 411,
      name: "Margarita",
      description: "Tequila, lime juice, and triple sec served with a salted rim.",
      price: "$3600",
      image: "/MEDIA/Margarita - alcohol.jpg"
    },
    {
      id: 412,
      name: "Pina Colada",
      description: "Creamy blend of rum, coconut, and pineapple juice.",
      price: "$3700",
      image: "/MEDIA/Pina Colada - alcohol.jpg"
    },
    {
      id: 413,
      name: "Old Fashioned",
      description: "A timeless bourbon cocktail with sugar, bitters, and orange zest.",
      price: "$4000",
      image: "/MEDIA/Old Fashioned - alcohol.jpg"
    },
    {
      id: 414,
      name: "Cosmopolitan",
      description: "Vodka, cranberry, lime, and triple sec — sweet and tangy.",
      price: "$3500",
      image: "/MEDIA/Cosmopolitan - alcohol.jpg"
    },
    {
      id: 415,
      name: "Long Island Iced Tea",
      description: "A powerful blend of spirits with a splash of cola.",
      price: "$4200",
      image: "/MEDIA/Long Island Iced Tea - alcohol.jpg"
    },

    // 🥃 Spirits & Liquors
    {
      id: 416,
      name: "Whiskey",
      description: "Smooth, oaky, and complex — best enjoyed neat or on the rocks.",
      price: "$4800",
      image: "/MEDIA/Whiskey - alcohol.jpg"
    },
    {
      id: 417,
      name: "Vodka",
      description: "Clean and crisp — ideal for shots or mixing.",
      price: "$4500",
      image: "/MEDIA/Vodka - alcohol.jpg"
    },
    {
      id: 418,
      name: "Gin",
      description: "Botanical and aromatic — perfect for classic cocktails.",
      price: "$4600",
      image: "/MEDIA/Gin - alcohol.jpg"
    },
    {
      id: 419,
      name: "Rum",
      description: "Sweet and warming — great for tropical blends.",
      price: "$4400",
      image: "/MEDIA/Rum - alcohol.jpg"
    },
    {
      id: 420,
      name: "Tequila",
      description: "Vibrant and bold — pairs perfectly with lime and salt.",
      price: "$4700",
      image: "/MEDIA/Tequila - alcohol.jpg"
    },
    {
      id: 421,
      name: "Brandy",
      description: "Rich and smooth with fruity undertones.",
      price: "$4900",
      image: "/MEDIA/Brandy - alcohol.jpg"
    }
  ]
},
  {
  id: 7,
  name: "Non-Alcoholic Drinks",
  description: "Refreshing juices, sodas, and mocktails for everyone to enjoy.",
  image: "/MEDIA/non alcohol cover.jpg",
  items: [
    {
      id: 501,
      name: "Virgin Mojito",
      description: "Fresh mint, lime, sugar, and soda water — a refreshing classic without the alcohol.",
      price: "$2500",
      image: "/MEDIA/Virgin Mojito - non alcohol.jpg"
    },
    {
      id: 502,
      name: "Shirley Temple",
      description: "Ginger ale mixed with grenadine and a cherry garnish — sweet and bubbly.",
      price: "$2300",
      image: "/MEDIA/Shirley Temple - non alcohol.jpg"
    },
    {
      id: 503,
      name: "Citrus Cooler",
      description: "Zesty blend of orange, lemon, and lime juices served chilled.",
      price: "$2200",
      image: "/MEDIA/Citrus Cooler - non alcohol.jpg"
    },
    {
      id: 504,
      name: "Tropical Punch",
      description: "A fruity mix of pineapple, orange, and passion fruit juices.",
      price: "$2400",
      image: "/MEDIA/Tropical Punch - non alcohol.jpg"
    },
    {
      id: 505,
      name: "Apple Juice",
      description: "Freshly pressed apple juice served chilled.",
      price: "$1800",
      image: "/MEDIA/Apple Juice - non alcohol.jpg"
    },
    {
      id: 506,
      name: "Orange Juice",
      description: "Classic fresh orange juice packed with vitamin C.",
      price: "$1800",
      image: "/MEDIA/Orange Juice - non alcohol.jpg"
    },
    {
      id: 507,
      name: "Pineapple Juice",
      description: "Sweet and tangy pineapple juice served over ice.",
      price: "$1800",
      image: "/MEDIA/Pineapple Juice - non alcohol.jpg"
    },
    {
      id: 508,
      name: "Lemonade",
      description: "Simple and refreshing homemade-style lemonade.",
      price: "$1700",
      image: "/MEDIA/Lemonade - non alcohol.jpg"
    },
    {
      id: 509,
      name: "Soda (Coke / Sprite / Fanta)",
      description: "Chilled soft drinks to complement any meal.",
      price: "$1500",
      image: "/MEDIA/Soda - non alcohol.jpg"
    },
    {
      id: 510,
      name: "Mocktail Spritzer",
      description: "Fruity juice topped with sparkling water and fresh garnish.",
      price: "$2600",
      image: "/MEDIA/Mocktail Spritzer - non alcohol.jpg"
    }
  ]
},
  {
  id: 8,
  name: "Hot Beverages",
  description: "Warm up with our comforting teas, coffees, and rich hot chocolates.",
  image: "/MEDIA/hot beverage cover.jpg",
  items: [
    {
      id: 601,
      name: "Espresso",
      description: "Strong and aromatic Italian espresso shot — pure and intense.",
      price: "$1800",
      image: "/MEDIA/Espresso - hot beverage cover.jpg"
    },
    {
      id: 602,
      name: "Cappuccino",
      description: "Espresso topped with steamed milk and a thick layer of foam.",
      price: "$2200",
      image: "/MEDIA/Cappuccino - hot beverages.jpg"
    },
    {
      id: 603,
      name: "Caffè Latte",
      description: "Smooth blend of espresso and steamed milk, lightly foamed.",
      price: "$2300",
      image: "/MEDIA/Caffè Latte - hot beverages.jpg"
    },
    {
      id: 604,
      name: "Macchiato",
      description: "A shot of espresso ‘stained’ with a touch of milk foam.",
      price: "$2000",
      image: "/MEDIA/Macchiato - hot beverages.jpg"
    },
    {
      id: 605,
      name: "Americano",
      description: "Espresso blended with hot water for a smooth, mellow taste.",
      price: "$2100",
      image: "/MEDIA/Americano - hot beverages.jpg"
    },
    {
      id: 606,
      name: "Mocha",
      description: "A cozy mix of espresso, chocolate, and steamed milk topped with cream.",
      price: "$2500",
      image: "/MEDIA/Mocha - hot beverages.jpg"
    },
    {
      id: 607,
      name: "Hot Chocolate",
      description: "Rich and velvety cocoa topped with whipped cream.",
      price: "$2400",
      image: "/MEDIA/Hot Chocolate - hot beverages.jpg"
    },
    {
      id: 608,
      name: "Chai Tea Latte",
      description: "Aromatic spiced black tea with steamed milk and a hint of sweetness.",
      price: "$2300",
      image: "/MEDIA/Chai Tea Latte - hot beverages.jpg"
    },
    {
      id: 609,
      name: "Green Tea",
      description: "Light and soothing with a delicate earthy aroma.",
      price: "$1900",
      image: "/MEDIA/Green tea - hot beverages.jpg"
    },
    {
      id: 610,
      name: "Herbal Infusion",
      description: "Caffeine-free herbal blend for a calming warm sip.",
      price: "$1900",
      image: "/MEDIA/Herbal Infusion - hot beverages.jpg"
    }
  ]
},
  {
  id: 9,
  name: "Cold Beverages",
  description: "Cool off with our chilled smoothies, iced teas, and iced coffees.",
  image: "/MEDIA/cold beverage cover.jpg",
  items: [
    {
      id: 701,
      name: "Iced Lemon Tea",
      description: "Refreshing black tea infused with lemon, served over ice.",
      price: "$2000",
      image: "/MEDIA/Iced Lemon Tea - cold beverage.jpg"
    },
    {
      id: 702,
      name: "Iced Coffee",
      description: "Chilled brewed coffee with a hint of sweetness and cream.",
      price: "$2200",
      image: "/MEDIA/Iced Coffee - cold beverage.jpg"
    },
    {
      id: 703,
      name: "Strawberry Smoothie",
      description: "Blended fresh strawberries with yogurt for a creamy treat.",
      price: "$2500",
      image: "/MEDIA/Strawberry Smoothie - cold beverage.jpg"
    },
    {
      id: 704,
      name: "Mango Smoothie",
      description: "Tropical mango blended to perfection — cool and sweet.",
      price: "$2500",
      image: "/MEDIA/Mango Smoothie - cold beverage.jpg"
    },
    {
      id: 705,
      name: "Chocolate Milkshake",
      description: "Rich chocolate ice cream blended into a thick, creamy shake.",
      price: "$2800",
      image: "/MEDIA/Chocolate Milkshake - cold beverage.jpg"
    },
    {
      id: 706,
      name: "Vanilla Milkshake",
      description: "Classic vanilla flavor, smooth and refreshing.",
      price: "$2700",
      image: "/MEDIA/Vanilla Milkshake - cold beverage.jpg"
    },
    {
      id: 708,
      name: "Italian Soda",
      description: "Fruity soda mixed with sparkling water and a hint of cream.",
      price: "$2300",
      image: "/MEDIA/Italian Soda - beverage.jpg"
    },
    {
      id: 709,
      name: "Cold Brew Tonic",
      description: "Smooth cold brew coffee paired with tonic water for a refreshing twist.",
      price: "$2800",
      image: "/MEDIA/Cold Brew Tonic - cold beverage.jpg"
    },
    {
      id: 710,
      name: "Lemonade Fizz",
      description: "Classic lemonade topped with sparkling water and ice.",
      price: "$2200",
      image: "/MEDIA/Lemonade Fizz - cold beverage.jpg"
    }
  ]
},
  {
    id: 10,
    name: "Dessert",
    description: "End your meal with a sweet treat.",
    image: "/MEDIA/Tiramisu dish.jpg",
    tag: "Featured",
    items: [
      {
        id: 401,
        name: "Tiramisu",
        description: "Classic espresso-soaked layers with creamy mascarpone and cocoa.",
        price: "$3500",
        image: "/MEDIA/Tiramisu dish.jpg"
      },
      {
        id: 402,
        name: "Panna Cotta",
        description: "Silky smooth cream dessert topped with berry coulis.",
        price: "$3000",
        image: "/MEDIA/Panna Cotta - dessert.jpg"
      },
      {
        id: 401,
        name: "Cannoli",
        description: "Crisp pastry shells filled with sweet ricotta cream.",
        price: "$3500",
        image: "/MEDIA/Cannoli - dessert.jpg"
      },
      {
        id: 401,
        name: "Gelato",
        description: "Authentic Italian ice cream with rich, intense flavors.",
        price: "$3500",
        image: "/MEDIA/Gelato - dessert.jpg"
      },
      {
        id: 401,
        name: "Affogato al Caffè",
        description: "Vanilla gelato “drowned” in a shot of hot espresso.",
        price: "$3500",
        image: "/MEDIA/Affogato al Caffè - dessert.jpg"
      },
      {
        id: 401,
        name: "Zabaglione",
        description: "Classic coffee-flavored Italian dessert.",
        price: "$3500",
        image: "/MEDIA/Zabaglione - dessert.jpg"
      },
      {
        id: 401,
        name: "Sfogliatella",
        description: "Flaky pastry filled with sweet ricotta and citrus.",
        price: "$3500",
        image: "/MEDIA/Sfogliatella - dessert.jpg"
      },
      {
        id: 401,
        name: "Bomboloni",
        description: "Soft Italian doughnuts with creamy fillings.",
        price: "$3500",
        image: "/MEDIA/Bomboloni - dessert.jpg"
      },
      {
        id: 401,
        name: "Budino al Cioccolato",
        description: "Rich Italian chocolate pudding often topped with whipped cream or sea salt.",
        price: "$3500",
        image: "/MEDIA/Budino al Cioccolato - dessert.jpg"
      },
      {
        id: 401,
        name: "Semifreddo",
        description: "Decadent chocolate pudding with a smooth finish.",
        price: "$3500",
        image: "/MEDIA/Semifreddo - dessert.jpg"
      },
    ]
  }
];
