// Store products retrieved from database
var products = [];

// Select HTML container where products will be displayed
var productsContainer = document.getElementById("products-container");

/*
Request product data from the backend API.
Products are loaded dynamically instead of
being hardcoded into the HTML.
*/
fetch("http://localhost:3000/api/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    products = data;

    // Once products are received, generate product cards
    displayProducts();
  })
  .catch(function (error) {
    console.log("Error loading products:", error);
  });

/*
Generate product cards dynamically
using information received from MySQL.
*/
function displayProducts() {
  if (productsContainer) {
    productsContainer.innerHTML = "";

    products.forEach(function (product) {
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

/*
Save selected product into basket.

localStorage is used so products remain
available while navigating pages.
*/
function addToCart(productId) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  var selectedProduct = products.find(function (product) {
    return product.id === productId;
  });

  cart.push(selectedProduct);

  localStorage.setItem("cart", JSON.stringify(cart));

  // Notify user that product was successfully added
  alert(`${selectedProduct.name} added to basket!`);
}