const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

//    FORM SUBMISSION
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = validateInputs();

     if (isValid) {
       const data = {
            username: username.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            password: password.value.trim(),

        };

      fetch('http://localhost:3000/api/v1/auth/register', {
          method: 'POST',
         headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        .then(response => {
            return response.json().then(data => {
                if (!response.ok) {
                    data.status = response.status;
                    throw data;
                }
                return data;
            });
        })
     .then(data => {
        if(data.token){
           localStorage.setItem("userToken", data.token);
          window.location.href = "signup-success.html"; 
       }
       })
        .catch(error => {
            console.error('Error:', error);

            if (error.status === 400) {
                if (error.errors) {
                    alert("Validation Error: " + error.errors[0].msg);
                } else {
                    alert("Error: " + error.message);
                }
            } else if (error.status === 429) {
                setError(email, error.message || 'Registration failed');
                
            } else {
                alert('A server error occurred. Please try again.');
            }
        });
       }
});

//PASSWORD TOGGLE FEATURE 
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

// VALIDATION HELPER FUNCTIONS
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


// MAIN VALIDATION FUNCTION

const validateInputs = () => {
    let isValid = true; 
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const phoneValue = phone.value.trim();
   const passwordValue = password.value.trim();
   const confirm_passwordValue = confirm_password.value.trim();

  if(usernameValue === ''){
   setError(username, 'Username is required');
      isValid = false; 
  } else{
   setSuccess(username);
 }

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (emailValue === '') {
     setError(email, 'Email is required');
      isValid = false;
    } else if (!pattern.test(emailValue)) {
     setError(email, 'Please enter a valid email address');
      isValid = false;
    } else {
     setSuccess(email);
    }

    if(phoneValue === ''){
       setError(phone, 'Phone is required');
      isValid = false;
    } else{
    setSuccess(phone);
   }

  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

 if (passwordValue === '') {
   setError(password, 'Password is required');
      isValid = false;
    } else if (passwordValue.length < 8) {
  setError(password, 'Password must be at least 8 characters long');
      isValid = false;
    } else if (!lowercaseRegex.test(passwordValue)) {
  setError(password, 'Password must contain at least one lowercase letter');
      isValid = false;
   } else if (!specialCharRegex.test(passwordValue)) {
   setError(password, 'Password must contain at least one special character');
      isValid = false;
 } else if (!uppercaseRegex.test(passwordValue)) {
   setError(password, 'Password must contain at least one uppercase letter');
      isValid = false;
   } else {
    setSuccess(password);
   }

    if (confirm_passwordValue === '') {
    setError(confirm_password, 'Please confirm your password');
      isValid = false;
   } else if (confirm_passwordValue !== passwordValue) {
    setError(confirm_password, "Passwords don't match");
      isValid = false;
    } else {
   setSuccess(confirm_password);
    }

    return isValid;
};

