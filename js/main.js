function displayFeaturedProducts() {

    const container = document.getElementById("featured-products");

    if (!container) {
        return;
    }

    const featuredProducts = products.slice(0, 4);

    container.innerHTML = "";

    featuredProducts.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

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


function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const count = document.getElementById("cart-count");

    if (count) {
        count.textContent = cart.length;
    }
}


displayFeaturedProducts();
updateCartCount();