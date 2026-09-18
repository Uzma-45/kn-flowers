let currentCategory = "all";


function displayProducts(productList) {

    const container = document.getElementById("all-products");

    container.innerHTML = "";


    if (productList.length === 0) {

        container.innerHTML = `
            <p class="no-products">
                No flowers found.
            </p>
        `;

        return;
    }


    productList.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ₹${product.price}
                </p>


                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}



function filterProducts(category) {

    currentCategory = category;


    document
        .querySelectorAll(".filter-btn")
        .forEach(function(button) {

            button.classList.remove("active");

        });


    event.target.classList.add("active");


    let filteredProducts;


    if (category === "all") {

        filteredProducts = products;

    } else {

        filteredProducts = products.filter(function(product) {

            return product.category === category;

        });

    }


    displayProducts(filteredProducts);

}



document
    .getElementById("search-input")
    .addEventListener("input", function() {

        const searchText = this.value.toLowerCase();


        let filteredProducts = products.filter(function(product) {

            const matchesSearch =
                product.name.toLowerCase().includes(searchText);


            const matchesCategory =
                currentCategory === "all" ||
                product.category === currentCategory;


            return matchesSearch && matchesCategory;

        });


        displayProducts(filteredProducts);

    });



displayProducts(products);