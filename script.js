// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true;

    // Validate full name
    if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent = "Name must be at least 5 characters.";
        isValid = false;
    }

    // Validate email
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = "Enter a valid email.";
        isValid = false;
    }

    // Validate phone number
    if (phoneNumber === "123456789" || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate password
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').textContent = "Password must be at least 8 characters and cannot be 'password' or your name.";
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        isValid = false;
    }

    // If all validations pass, submit the form (here you can add form submission code)
    if (isValid) {
        alert("Form submitted successfully!");
        // You can add actual form submission code here (e.g., using AJAX or a simple form.submit())
    }
}

// Function to clear previous error messages
function clearErrors() {
    document.getElementById('fullNameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('phoneNumberError').textContent = "";
    document.getElementById('passwordError').textContent = "";
    document.getElementById('confirmPasswordError').textContent = "";
}

// Attach the validation function to the form's submit event
document.getElementById('registrationForm').addEventListener('submit', validateForm);
