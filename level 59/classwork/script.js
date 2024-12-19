document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;
        const inputs = form.querySelectorAll('input, select');
        
        inputs.forEach(input => {
            if (input.type !== 'checkbox' && input.value.trim() === '') {
                input.style.border = '2px solid red';
                isValid = false;
            } else {
                input.style.border = '';
            }
        });

        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            alert('You must agree to the Terms & Conditions to register.');
            isValid = false;
        }

        if (isValid) {
            alert('Registration successful!');
            form.reset();
        }
    });
});
