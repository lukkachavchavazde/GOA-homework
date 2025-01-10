document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const dismissButton = document.getElementById('dismiss-button');
    const emailDisplay = document.getElementById('email-display');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value;
  
      // Validate email
      if (!validateEmail(email)) {
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.display = 'block';
        emailInput.classList.add('error');
        return;
      }
  
      errorMessage.style.display = 'none';
      emailInput.classList.remove('error');
      
      // Show success message
      emailDisplay.textContent = email;
      successMessage.style.display = 'block';
    });
  
    dismissButton.addEventListener('click', () => {
      successMessage.style.display = 'none';
      form.reset();
    });
  
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  