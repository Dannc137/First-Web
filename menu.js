


const categoryContent = document.getElementById("categoryContent");

function renderMenuCategories(categories) {
    categoryContent.innerHTML = "";
    categories.forEach(category => {
        const dishCount = category.items.length

        let categoryCard =`
        <div class="cardDiv">
                <a href="category.html?id=${category.id}" class="card"
                style="background-image: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.00) 0%, rgba(0, 0, 0, 0.66) 100%), url('${category.image}');"
                data-category="appetizers" data-img="/MEDIA/italian dish1.jpg" >
                
                    ${category.tag ? `<div class="tag"><p>${category.tag}</p></div>` : ""}
                    <div class="layer">
                        <div class="aboutmenu">
                        <div class="menuname">
                            <h3>${category.name}</h3>
                        </div>
                        <div class="menudetails">
                            <p>${category.description}</p>
                        </div>
                        </div>
                        <div class="menuBase">
                            <div class="dishnum">
                            <div class="num">${dishCount}<span> items</span></div>
                            </div>
                            <span class="view-menu">View Menu ></span>
                        </div>
                    </div>   
                </a>
            </div>`
        categoryContent.innerHTML += categoryCard;
    });
}

renderMenuCategories(menuData)