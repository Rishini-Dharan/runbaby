// Function to handle form submission and redirect to dashboard
function submitForm() {
    // Simulate form validation (you can add actual validation here)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const termsChecked = document.getElementById('terms').checked;

    if (name && email && password && role && termsChecked) {
        // If form is valid, redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        // If form is not valid, show an alert
        alert('Please fill in all fields and agree to the terms.');
    }
}
