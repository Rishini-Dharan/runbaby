
function submitInquiry() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    alert(`Inquiry submitted successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  
    document.getElementById('inquiry-form').reset();
}


function goBackToDashboard() {
    window.location.href = 'dashboard.html'; 
}
