
const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

const toggleButtons = document.querySelectorAll('.input-icon-btn');
toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            button.innerHTML = '<i class="ph ph-eye-slash"></i>';
        } else {
            input.type = 'password';
            button.innerHTML = '<i class="ph ph-eye"></i>';
        }
    });
});

const setError = (element, message) => {
    const formGroup = element.closest('.form-group');
    const errorDisplay = formGroup.querySelector('.error');
    errorDisplay.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
};

const setSuccess = (element) => {
    const formGroup = element.closest('.form-group');
    const errorDisplay = formGroup.querySelector('.error');
    errorDisplay.innerText = '';
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
};

const validateInputs = () => {
    let isValid = true;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirm_password.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!emailPattern.test(emailValue)) {
        setError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        isValid = false;
    } else if (!lowercaseRegex.test(passwordValue)) {
        setError(password, 'Password must contain at least one lowercase letter');
        isValid = false;
    } else if (!uppercaseRegex.test(passwordValue)) {
        setError(password, 'Password must contain at least one uppercase letter');
        isValid = false;
    } else if (!specialCharRegex.test(passwordValue)) {
        setError(password, 'Password must contain at least one special character');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue === '') {
        setError(confirm_password, 'Please confirm your password');
        isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirm_password, "Passwords don't match");
        isValid = false;
    } else {
        setSuccess(confirm_password);
    }

    return isValid;
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const data = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        isAnonymous: false 
    };

    try {
        const response = await fetch('https://mindbridge-snlz.onrender.com/api/v1/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            if (response.status === 400 && result.errors) {
                alert('Validation Error: ' + result.errors[0].msg);
            } else {
                alert(result.message || 'Signup failed');
            }
            return;
        }

        if (result.token) {
          console.log('Signup successful, navigating now...');
            localStorage.setItem('userToken', result.token);
            window.location.assign('./signup-success.html');
        }
    } catch (err) {
        console.error('Network/server error:', err);
        alert('A server error occurred. Please try again.');
    }
});
