// Get form and its fields
const form = document.getElementById('contact-form');
const fields = {
  firstName: document.getElementById('first-name'),
  lastName: document.getElementById('last-name'),
  email: document.getElementById('email'),
  message: document.getElementById('message'),
  consent: document.getElementById('consent'),
};

// Utility to show/hide errors
function toggleError(element, message = '') {
  const errorDiv = element.nextElementSibling;
  if (message) {
    element.classList.add('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  } else {
    element.classList.remove('error');
    errorDiv.style.display = 'none';
  }
}

// Validation logic
function validateField(field, type = 'text') {
  const value = field.value.trim();
  switch (type) {
    case 'text':
      return value !== '' ? '' : 'This field is required';
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value) ? '' : 'Please enter a valid email address';
    case 'checkbox':
      return field.checked ? '' : 'Consent is required';
    default:
      return '';
  }
}

// Form submission handler
form.addEventListener('submit', function (event) {
  event.preventDefault();

  let isValid = true;

  // Validate fields
  const validations = [
    { field: fields.firstName, type: 'text' },
    { field: fields.lastName, type: 'text' },
    { field: fields.email, type: 'email' },
    { field: fields.message, type: 'text' },
    { field: fields.consent, type: 'checkbox' },
  ];

  validations.forEach(({ field, type }) => {
    const error = validateField(field, type);
    toggleError(field, error);
    if (error) isValid = false;
  });

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
    Object.values(fields).forEach((field) => toggleError(field)); // Clear errors
  }
});
