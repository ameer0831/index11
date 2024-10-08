const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function(event) {
    let isValid = true;


    clearErrors();


    if (username.value.trim().length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        usernameError.style.display = 'block';
        isValid = false;
    }

    
    if (!validateEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    }

    
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.display = 'block';
        isValid = false;
    }

    
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }

    
    if (!isValid) {
        event.preventDefault();
    }
});

function clearErrors() {
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
