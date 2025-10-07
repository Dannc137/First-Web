

// 1️⃣ Get the category ID from the URL
const params = new URLSearchParams(window.location.search);
const categoryId = parseInt(params.get('id'));

// 2️⃣ Find the category object in menuData
const category = menuData.find(cat => cat.id === categoryId);

if (!category) {
  console.error("Category not found");
} else {
  // 3️⃣ Fill header and section titles
  document.getElementById("categoryHeader").textContent = `${category.name} Menu`;
  document.getElementById("categoryTitle").textContent = category.name;
  document.getElementById("categoryDescription").textContent = category.description;

  // 4️⃣ Render menu items dynamically
  const menuContent = document.getElementById("menuContent");
  menuContent.innerHTML = "";

  category.items.forEach(item => {
        let itemCard =  `<div class="menuItem">
                        <img class="itemImage" src="${item.image}" alt="${item.name}" />
                            <div class="itemDescription">
                            <div class="itemHeader">
                                <h4>${item.name}</h4>
                                <span class="price">${item.price}</span>
                            </div>
                            <p>${item.description}</p>
                            </div>
                    </div>`

    menuContent.innerHTML += itemCard;
  });
}
