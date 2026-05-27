function placeOrder() {
  // Retrieve values entered by the user in the checkout form
  var name = document.getElementById("checkout-name").value.trim();
  var email = document.getElementById("checkout-email").value.trim();
  var phone = document.getElementById("checkout-phone").value.trim();
  var address = document.getElementById("checkout-address").value.trim();
  var eircode = document.getElementById("checkout-eircode").value.trim();

  // DOM element for displaying validation messages
  var orderMessage = document.getElementById("orderMessage");
  orderMessage.innerHTML = "";

  // Required field validation
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    address === "" ||
    eircode === ""
  ) {
    orderMessage.innerHTML = "Please complete all checkout fields.";
    return false;
  }

  // Name validation: only letters and spaces are accepted
  var namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(name)) {
    orderMessage.innerHTML = "Name must contain only letters.";
    return false;
  }

  // Email validation: checks if email follows standard email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    orderMessage.innerHTML = "Please enter a valid email address.";
    return false;
  }

  // Phone validation: allows only 9 or 10 digits
  var phonePattern = /^[0-9]{9,10}$/;
  if (!phonePattern.test(phone)) {
    orderMessage.innerHTML = "Phone number must be 9 or 10 digits.";
    return false;
  }

  // Successful checkout: clear basket data and display success message
  localStorage.removeItem("cart");

  orderMessage.innerHTML =
    "Order placed successfully! Thank you for shopping with Silver Tech.";
  orderMessage.style.color = "#3D6FB6";

  return false;
}