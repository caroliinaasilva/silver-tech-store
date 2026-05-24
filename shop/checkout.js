function placeOrder() {
    var name = document.getElementById("checkout-name").value.trim();
    var email = document.getElementById("checkout-email").value.trim();
    var address = document.getElementById("checkout-address").value.trim();
    var phone = document.getElementById("checkout-phone").value.trim();

    if (name === "" || email === "" || address === "" || phone === "") {
        alert("Please complete all fields.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var phonePattern = /^[0-9]{9,10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must be 9 or 10 digits.");
        return false;
    }

    localStorage.removeItem("cart");

    alert("Order placed successfully! Thank you for shopping with Silver Tech.");

    window.location.href = "products.html";

    return false;
}