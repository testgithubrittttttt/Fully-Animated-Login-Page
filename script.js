const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loadingSpinner = document.getElementById('loading');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const closeErrorModal = document.getElementById('closeErrorModal');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    loadingSpinner.style.display = 'block';
    let valid = true;
    
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    
    if (name === '') {
        valid = false;
        document.getElementById('signUpNameError').innerText = 'Name is required.';
    } else {
        document.getElementById('signUpNameError').innerText = '';
    }

    if (email === '') {
        valid = false;
        document.getElementById('signUpEmailError').innerText = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        valid = false;
        document.getElementById('signUpEmailError').innerText = 'Email is invalid.';
    } else {
        document.getElementById('signUpEmailError').innerText = '';
    }

    if (password === '') {
        valid = false;
        document.getElementById('signUpPasswordError').innerText = 'Password is required.';
    } else if (password.length < 6) {
        valid = false;
        document.getElementById('signUpPasswordError').innerText = 'Password must be at least 6 characters long.';
    } else {
        document.getElementById('signUpPasswordError').innerText = '';
    }

    if (valid) {
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            successModal.style.display = 'block';
        }, 2000);
    } else {
        loadingSpinner.style.display = 'none';
    }
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    loadingSpinner.style.display = 'block';
    let valid = true;

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    if (email === '') {
        valid = false;
        document.getElementById('signInEmailError').innerText = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        valid = false;
        document.getElementById('signInEmailError').innerText = 'Email is invalid.';
    } else {
        document.getElementById('signInEmailError').innerText = '';
    }

    if (password === '') {
        valid = false;
        document.getElementById('signInPasswordError').innerText = 'Password is required.';
    } else {
        document.getElementById('signInPasswordError').innerText = '';
    }

    if (valid) {
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            successModal.style.display = 'block';
        }, 2000);
    } else {
        loadingSpinner.style.display = 'none';
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('signInPassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

closeSuccessModal.addEventListener('click', () => {
    successModal.style.display = 'none';
});

closeErrorModal.addEventListener('click', () => {
    errorModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == successModal) {
        successModal.style.display = 'none';
    }
    if (event.target == errorModal) {
        errorModal.style.display = 'none';
    }
});

const passwordStrengthIndicator = document.getElementById('passwordStrength');
document.getElementById('signUpPassword').addEventListener('input', function() {
    const password = this.value;
    const strength = getPasswordStrength(password);
    passwordStrengthIndicator.innerText = `Strength: ${strength}`;
});

function getPasswordStrength(password) {
    if (password.length < 6) {
        return 'Weak';
    }
    if (password.length < 10) {
        return 'Medium';
    }
    return 'Strong';
}
