// JavaScript for Web Development: Client-Side Form Validation Engine
// Validates user input before sending payload to backend REST APIs

// 1. Email Format Validator (RFC 5322 Standard Pattern)
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};

// 2. Strong Password Validator (Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
const validatePasswordStrength = (password) => {
    const errors = [];
    if (password.length < 8) errors.push("Password must be at least 8 characters long.");
    if (!/[A-Z]/.test(password)) errors.push("Password must contain at least one uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must contain at least one lowercase letter.");
    if (!/[0-9]/.test(password)) errors.push("Password must contain at least one number.");
    if (!/[!@#$%^&*]/.test(password)) errors.push("Password must contain at least one special character (!@#$%^&*).");

    return {
        isValid: errors.length === 0,
        errors
    };
};

// 3. User Registration Form Validator
const validateRegistrationForm = ({ username, email, password, confirmPassword }) => {
    const fieldErrors = {};

    if (!username || username.trim().length < 3) {
        fieldErrors.username = "Username must be at least 3 characters long.";
    }

    if (!email || !isValidEmail(email)) {
        fieldErrors.email = "Please provide a valid email address.";
    }

    const passwordCheck = validatePasswordStrength(password || "");
    if (!passwordCheck.isValid) {
        fieldErrors.password = passwordCheck.errors;
    }

    if (password !== confirmPassword) {
        fieldErrors.confirmPassword = "Passwords do not match.";
    }

    return {
        isFormValid: Object.keys(fieldErrors).length === 0,
        fieldErrors
    };
};

// ==========================================
// Executable Demonstration
// ==========================================
console.log("=== Web Form Client-Side Validation Engine ===");

// Invalid registration test
const badForm = {
    username: "ab",
    email: "not-an-email",
    password: "pass",
    confirmPassword: "password"
};
console.log("Validation Result (Invalid Submission):", validateRegistrationForm(badForm));

// Valid registration test
const validForm = {
    username: "sripallav",
    email: "sri@example.com",
    password: "Password@123",
    confirmPassword: "Password@123"
};
console.log("\nValidation Result (Valid Submission):", validateRegistrationForm(validForm));
console.log("===============================================");
