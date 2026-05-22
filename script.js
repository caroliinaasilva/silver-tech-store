// Function to validate the form
function validateForm() {
    // Get the form information fields
    var name= document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    // validate name and check if name field is empty or not
    if (name == "") {
        alert("Please fill your name");
        return false; //This will prevent form from submission
    }
// check if name contains numbers
var namepattern = /^[A-Za-z\s]+$/;
if (!namepattern.test(name)) {
    alert("Name must contain only letters");
    return false;// This will prevent form from submission
}
// check if phone contains numbers
var phonePattern = /^[0-9]{9,10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 9 or 10 digits.");
        return false;
    }
//  validate email and check if email field is empty or not
var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
if (email == ""){
    alert("enter your email here");
    return false; // This will prevent form from submission
}
// validate message and check if message field is empty or not
if (message == "") {
    alert("Please enter your message");
    return false; // This will prevent form from submission
}
// So once all of the form is ok then it must show that your form is submitted successfully
alert("Form submitted succesfully! Thank you for the message");
return true;
}