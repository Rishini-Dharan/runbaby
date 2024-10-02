
function saveChanges() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const notifications = document.getElementById('notifications').checked;
    const language = document.getElementById('language').value;

    
    console.log('Changes Saved:', {
        name,
        email,
        password,
        role,
        notifications,
        language,
    });

    alert('Changes saved successfully!');
}


function logout() {
    
    alert('Logged out successfully!');
    window.location.href = 'index.html'; 
}
