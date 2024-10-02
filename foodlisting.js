
function submitFoodListing() {
   
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;
    const expiryTime = document.getElementById('expiryTime').value;
    const instructions = document.getElementById('instructions').value;

   
    if (foodType && quantity && expiryTime) {
       
        alert(`Food Listing Submitted! \nFood Type: ${foodType} \nQuantity: ${quantity} kg \nExpiration Time: ${expiryTime} \nInstructions: ${instructions || 'No special instructions'}`);

        window.location.href = 'dashboard.html';
    } else {
       
        alert('Please fill in all required fields (Food Type, Quantity, and Expiration Time).');
    }
}


function goBack() {
    
    window.location.href = 'dashboard.html';
}
