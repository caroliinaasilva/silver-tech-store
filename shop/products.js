var products = [
    {
        id: 1,
        name: "Easy Smartphone",
        description: "Simple smartphone designed for seniors.",
        price: 299.99
    },
    {
        id: 2,
        name: "Senior Tablet",
        description: "Large screen tablet with easy navigation.",
        price: 249.99
    },
    {
        id: 3,
        name: "Emergency Smart Button",
        description: "Quick emergency assistance device.",
        price: 59.99
    },
    {
        id: 4,
        name: "Large Button Remote",
        description: "Accessible remote control with large buttons.",
        price: 35.99
    }
];

var productsContainer = document.getElementById("products-container");

if (productsContainer) {
    productsContainer.innerHTML = "";

    products.forEach(function(product) {
        productsContainer.innerHTML += `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">€${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Basket</button>
            </div>
        `;
    });
}

function addToCart(productId) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    var selectedProduct = products.find(function(product) {
        return product.id === productId;
    });

    cart.push(selectedProduct);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(selectedProduct.name + " added to basket!");
}