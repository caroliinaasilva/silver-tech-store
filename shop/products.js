var products = [];

var productsContainer = document.getElementById("products-container");

fetch("http://localhost:3000/api/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        products = data;

        displayProducts();
    })
    .catch(function(error) {
        console.log("Error loading products:", error);
    });

function displayProducts() {
    if (productsContainer) {
        productsContainer.innerHTML = "";

        products.forEach(function(product) {
            productsContainer.innerHTML += `
                <div class="product-card">
                    <img src="../images/${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">€${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Basket</button>
                </div>
            `;
        });
    }
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