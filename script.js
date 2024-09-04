// Function to check if a string is a valid full name
function isValidFullName(fullName) {
    return fullName.length >= 5;
}

// Function to check if a password is strong
function isStrongPassword(password, fullName) {
    return password.length >= 8 && password !== 'password' && password !== fullName;
}

// Function to validate the form
function validateForm() {
    let isValid = true;

    // Validate full name
    if (!isValidFullName(fullNameInput.value)) {
        fullNameInput.setCustomValidity('Please enter a valid full name.');
        isValid = false;
    } else {
        fullNameInput.setCustomValidity('');
    }

    // Validate email
    if (!containsChar(emailInput.value, '@') || !isValidEmail(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
        isValid = false;
    } else {
        emailInput.setCustomValidity('');
    }

    // Validate phone number
    if (phoneNumberInput.value === '123456789' || !isValidPhoneNumber(phoneNumberInput.value)) {
        phoneNumberInput.setCustomValidity('Please enter a valid phone number.');
        isValid = false;
    } else {
        phoneNumberInput.setCustomValidity('');
    }

    // Validate password
    if (!isStrongPassword(passwordInput.value, fullNameInput.value)) {
        passwordInput.setCustomValidity('Please enter a strong password.');
        isValid = false;
    } else {
        passwordInput.setCustomValidity('');
    }

    // Validate confirm password
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Passwords do not match.');
        isValid = false;
    } else {
        confirmPasswordInput.setCustomValidity('');
    }

    return isValid;
}

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        // Form is valid, submit it
        form.submit();
    }
});

// Add event listener to each input field
fullNameInput.addEventListener('input', () => {
    validateForm();
});

emailInput.addEventListener('input', () => {
    validateForm();
});

phoneNumberInput.addEventListener('input', () => {
    validateForm();
});

passwordInput.addEventListener('input', () => {
    validateForm();
});

confirmPasswordInput.addEventListener('input', () => {
    validateForm();
});
