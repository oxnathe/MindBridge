// PASSWORD TOGGLE 
const toggleButtons = document.querySelectorAll('.input-icon');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const input = button.parentElement.querySelector('input');
    if (input.type === 'password') {
      input.type = 'text';
      button.innerHTML = '<i class="ph ph-eye-slash"></i>';
    } else {
      input.type = 'password';
      button.innerHTML = '<i class="ph ph-eye"></i>';
    }
  });
});

const form = document.getElementById('password-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// HELPER FUNCTIONS 
function setError(input, message) {
  const formGroup = input.closest('.form-group');
  const errorDiv = formGroup.querySelector('.error');
  errorDiv.innerText = message;
  formGroup.classList.add('error');
  formGroup.classList.remove('success');
}

function setSuccess(input) {
  const formGroup = input.closest('.form-group');
  const errorDiv = formGroup.querySelector('.error');
  errorDiv.innerText = '';
  formGroup.classList.add('success');
  formGroup.classList.remove('error');
}

// VALIDATION 
function validateInputs() {
  let isValid = true;
  const passwordValue = password.value.trim();
  const confirmValue = confirmPassword.value.trim();

  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;


  if (passwordValue === '') {
    setError(password, 'Password is required');
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

  // Confirm password validation
  if (confirmValue === '') {
    setError(confirmPassword, 'Please confirm your password');
    isValid = false;
  } else if (confirmValue !== passwordValue) {
    setError(confirmPassword, "Passwords don't match");
    isValid = false;
  } else {
    setSuccess(confirmPassword);
  }

  return isValid;
}

// FORM SUBMIT 
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (validateInputs()) {
    const data = {
      password: password.value.trim(),
      confirmPassword: confirmPassword.value.trim(),
    };
  }
});
