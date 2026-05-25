// Function used to validate the contact form before submission
function validateForm() {
    // Get values typed by the user and remove extra spaces
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

    /*
    Name validation:
    The name field cannot be empty because the business
    needs to know who is requesting support.
    */
    if (name === "") {
        alert("Please fill in your name.");
        return false;
    }

    /*
    Name pattern:
    This regular expression only accepts letters and spaces.
    It prevents users from submitting names with numbers or symbols.
    */
    var namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(name)) {
        alert("Name must contain only letters.");
        return false;
    }

    /*
    Phone validation:
    The phone number must contain 9 or 10 digits.
    This keeps the contact information usable for follow-up.
    */
    var phonePattern = /^[0-9]{9,10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must be 9 or 10 digits.");
        return false;
    }

    /*
    Email validation:
    This regular expression checks if the email follows
    a normal email format before the form is accepted.
    */
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    /*
    Message validation:
    The message cannot be empty because the team needs
    details about what kind of help the user needs.
    */
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Form submitted successfully! Thank you for the message.");
    return true;
}