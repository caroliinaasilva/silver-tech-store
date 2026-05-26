// Select basket container from HTML
var cartContainer = document.getElementById("cart-container");

/*
Retrieve basket information from browser storage.
localStorage allows products to remain available
while moving between pages.
*/
if (cartContainer) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  /*
  Display empty basket message if no products exist.
  */
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your basket is empty.</p>";
  } else {
    displayCart(cart);
  }
}

/*
Generate basket dynamically.

This function creates the basket layout
and calculates the total order value.
*/
function displayCart(cart) {
  var total = 0;

  var html = `
    <div class="basket-table">
      <div class="basket-header">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p></p>
      </div>
  `;

  cart.forEach(function (product, index) {
    /*
    Convert prices into numbers before calculating total.
    */
    total += Number(product.price);

    html += `
      <div class="basket-row">
        <div class="basket-product">
          <img src="../images/${product.image}" alt="${product.name}">
          <div>
            <strong>${product.name}</strong>
          </div>
        </div>
        <p>€${Number(product.price).toFixed(2)}</p>
        <div class="quantity-control">
          <span>1</span>
        </div>
        <p>€${Number(product.price).toFixed(2)}</p>
        <button onclick="removeItem(${index})">🗑️</button>
      </div>
    `;
  });

  html += `
    <div class="basket-total">
      <h2>Total €${total.toFixed(2)}</h2>
      <div class="basket-buttons">
        <a href="products.html" class="btn">← Continue Shopping</a>
        <a href="checkout.html" class="btn">Proceed to Checkout</a>
      </div>
    </div>
    </div>
  `;

  cartContainer.innerHTML = html;
}

/*
Remove selected product from basket and update page.
*/
function removeItem(index) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  /*
  Reload page to refresh basket information.
  */
  location.reload();
}