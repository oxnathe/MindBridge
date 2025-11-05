// Get form and input elements
const form = document.querySelector('.signup-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Show error under input
function setError(element, message) {
  const formGroup = element.closest('.form-group');
  const errorDiv = formGroup.querySelector('.error');
  errorDiv.innerText = message;
  formGroup.classList.add('error');
  formGroup.classList.remove('success');
}

// Show success border
function setSuccess(element) {
  const formGroup = element.closest('.form-group');
  const errorDiv = formGroup.querySelector('.error');
  errorDiv.innerText = '';
  formGroup.classList.add('success');
  formGroup.classList.remove('error');
}

// Simple validation
function validateInputs() {
  let valid = true;

  if (email.value.trim() === '') {
    setError(email, 'Email is required');
    valid = false;
  } else {
    setSuccess(email);
  }

  if (password.value.trim() === '') {
    setError(password, 'Password is required');
    valid = false;
  } else {
    setSuccess(password);
  }

  return valid;
}

// Handle form submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop form from reloading page

  if (!validateInputs()) {
    return;
  }

  const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };


  // Make API request
  fetch('http://localhost:3000/api/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Response:', data);

      if (data.success || data.token) {
        localStorage.setItem('token', data.token);

        window.location.href = '/Frontend/pages/dashboard.html';
      } else {

        if (data.message) {
          alert(data.message);
        } else {
          alert('Login failed. Please check your email or password.');
        }
      }
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Something went wrong. Please try again later.');
    });
});

// Password toggle button
const toggleButtons = document.querySelectorAll('.password-toggle-btn');
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
