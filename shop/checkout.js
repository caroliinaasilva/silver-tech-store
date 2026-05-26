function placeOrder() {
  // Retrieve values entered by the user in the checkout form
  var name = document.getElementById("checkout-name").value.trim();
  var email = document.getElementById("checkout-email").value.trim();
  var phone = document.getElementById("checkout-phone").value.trim();
  var address = document.getElementById("checkout-address").value.trim();
  var eircode = document.getElementById("checkout-eircode").value.trim();
  var card = document.getElementById("checkout-card").value.trim();
  var expiry = document.getElementById("checkout-expiry").value.trim();
  var cvv = document.getElementById("checkout-cvv").value.trim();

  // DOM element for displaying validation messages
  var orderMessage = document.getElementById("orderMessage");
  orderMessage.innerHTML = "";

  // Required field validation
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    address === "" ||
    eircode === "" ||
    card === "" ||
    expiry === "" ||
    cvv === ""
  ) {
    orderMessage.innerHTML = "Please complete all checkout fields.";
    return false;
  }

  // Name validation: Only letters and spaces are accepted
  var namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(name)) {
    orderMessage.innerHTML = "Name must contain only letters.";
    return false;
  }

  // Email validation: Checks if email follows standard email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    orderMessage.innerHTML = "Please enter a valid email address.";
    return false;
  }

  // Phone validation: Allows only 9 or 10 digits
  var phonePattern = /^[0-9]{9,10}$/;
  if (!phonePattern.test(phone)) {
    orderMessage.innerHTML = "Phone number must be 9 or 10 digits.";
    return false;
  }

  // Card validation: Simulates a payment card using a simple 16-digit rule
  var cardPattern = /^[0-9]{16}$/;
  if (!cardPattern.test(card)) {
    orderMessage.innerHTML = "Card number must contain 16 digits.";
    return false;
  }

  // Expiry validation: Requires MM/YY format (e.g., 08/27)
  var expiryPattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
  if (!expiryPattern.test(expiry)) {
    orderMessage.innerHTML = "Expiry date must follow MM/YY format.";
    return false;
  }

  // CVV validation: Requires exactly 3 digits
  var cvvPattern = /^[0-9]{3}$/;
  if (!cvvPattern.test(cvv)) {
    orderMessage.innerHTML = "CVV must contain 3 digits.";
    return false;
  }

  // Successful checkout: Clear basket data and display success message
  localStorage.removeItem("cart");
  orderMessage.innerHTML =
    "Order placed successfully! Thank you for shopping with Silver Tech.";
  orderMessage.style.color = "#3D6FB6";

  return false;
}