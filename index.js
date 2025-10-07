// Menu data
const menuItems = [

    // Appetizer
    {
        id: 4,
        name: "Arancini",
        description:  "Golden fried risotto balls filled with mozzarella and ragù",
        price: "$14",
        category: "appetizer",
        image: "/MEDIA/Arancini - apetizer.jpg"
    },
    {
        id: 5,
        name: "Bruschetta with Tomato",
        description: "Grilled bread topped with fresh tomatoes, basil, garlic, and olive oil",
        price: "$16",
        category: "appetizer",
        image: "/MEDIA/Bruschetta with Tomato - appetizer.jpg"
    },
    {
        id: 6,
        name: "Quattro Formaggi Pizza",
        description: "A blend of mozzarella, gorgonzola, parmesan, and provolone cheeses",
        price: "$17",
        category: "pizza",
        image: "/MEDIA/Quattro Formaggi Pizza - pizza.jpg"
    },

    // 🍰 Desserts
    {
        id: 7,
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa",
        price: "$10",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1644158776192-2d24ce35da1d?auto=format&fit=crop&w=1080&q=80"
    },
    {
        id: 8,
        name: "Cannoli",
        description: "Crisp pastry tubes filled with sweet ricotta cream, often studded with chocolate chips or candied fruit.",
        price: "$9",
        category: "desserts",
        image: "/MEDIA/Cannoli - dessert.jpg"
    },
    {
        id: 9,
        name: "Semifreddo",
        description: "A frozen mousse-like dessert made with whipped cream, sugar, and eggs.",
        price: "$8",
        category: "desserts",
        image: "/MEDIA/Semifreddo - dessert.jpg"
    }
];



const menuItemsDiv = document.getElementById("menuItemsDiv");

// Function to render menu items
function renderMenuItems(items) {
    menuItemsDiv.innerHTML = "";
    items.forEach(function(menu) {
        let menuCard = `
            <div class="menuItem">
                <img
                  class="itemImage"
                  src="${menu.image}"
                  alt=""
                />
                <div class="itemDescription">
                  <div class="itemHeader">
                    <h4>${menu.name}</h4>
                    <span class="price">${menu.price}</span>
                  </div>
                  <p>${menu.description}</p>
                </div>
            </div>
        `;
        menuItemsDiv.innerHTML += menuCard;
    });
  setTimeout(() => {
      document.querySelectorAll('.menuItem').forEach(item => {
        item.classList.add('visible');
      });
    }, 50); // slight delay to trigger transition
}

// Initial render (show all)
renderMenuItems(menuItems);

// Category button filtering
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        if (category === 'all') {
            renderMenuItems(menuItems);
        } else {
            const filtered = menuItems.filter(item => item.category === category);
            renderMenuItems(filtered);
        }
        // Update active button style
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// AOS.refresh();

  



