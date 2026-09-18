function addToCart(productId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) {
        return;
    }

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");
}


function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const count = document.getElementById("cart-count");

    if (count) {
        count.textContent = cart.length;
    }
}