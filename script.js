document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous messages
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = '';
    formMessage.classList.remove('error');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'All fields are required.';
        formMessage.classList.add('error');
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        return;
    }

    // If validation passes
    formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
    formMessage.classList.remove('error');

    // Optionally, you can reset the form
    document.getElementById('contactForm').reset();
});