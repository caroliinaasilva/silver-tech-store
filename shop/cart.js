var cartContainer = document.getElementById("cart-container");

if (cartContainer) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your basket is empty.</p>";
    } else {
        displayCart(cart);
    }
}

function displayCart(cart) {
    var total = 0;

    cartContainer.innerHTML = `
        <div class="basket-table">
            <div class="basket-header">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p></p>
            </div>
        </div>
    `;

    cart.forEach(function(product, index) {
        total += Number(product.price);

        document.querySelector(".basket-table").innerHTML += `
            <div class="basket-row">
                <div>
                    <strong>${product.name}</strong>
                    <p>${product.description}</p>
                </div>

                <p>€${Number(product.price).toFixed(2)}</p>

                <p>1</p>

                <p>€${Number(product.price).toFixed(2)}</p>

                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    cartContainer.innerHTML += `
        <div class="basket-total">
            <h2>Total: €${total.toFixed(2)}</h2>

            <div>
                <a href="products.html" class="btn">Continue Shopping</a>
                <a href="checkout.html" class="btn">Proceed to Checkout</a>
            </div>
        </div>
    `;
}

function removeItem(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}