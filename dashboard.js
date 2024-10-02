const userRole = 'restaurant';


window.onload = function() {
    
    document.getElementById('userRole').innerText = userRole.charAt(0).toUpperCase() + userRole.slice(1);

   
    if (userRole === 'restaurant') {
        document.getElementById('restaurantSection').style.display = 'block';
        document.getElementById('ngoSection').style.display = 'none';
    } else if (userRole === 'ngo') {
        document.getElementById('ngoSection').style.display = 'block';
        document.getElementById('restaurantSection').style.display = 'none';
    }
};


function listFood() {
    alert('Listing unsold food...'); 
    
}


function viewHistory() {
    alert('Viewing donation history...');
   
}


function viewAvailableFood() {
    alert('Viewing available food donations...');
   
}


function managePickup() {
    alert('Managing pickup requests...');
   
}


function listFood() {
    window.location.href = 'foodlisting.html'; 
}


function viewAvailableFood() {
    window.location.href = 'foodpickup.html'; 
}


function managePickup() {
    window.location.href = 'foodpickup.html'; 
}



function goToImpactPage() {
    window.location.href = 'impact.html'; 
}


function goToAdminPage() {
    window.location.href = 'admin.html'; 
}


function goToFaqPage() {
    window.location.href = 'faq.html'; 
}
function goToAboutPage(){
    window.location.href="about.html";
}


function viewHistory(){
    alert('No History Found!');
}