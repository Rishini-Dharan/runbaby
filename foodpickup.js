// foodpickup.js

// Sample data for available food listings
const foodListings = [
    {
        foodType: 'Vegetables',
        quantity: '10 kg',
        expirationTime: '2024-10-02',
        restaurantName: 'Green Farms'
    },
    {
        foodType: 'Fruits',
        quantity: '5 kg',
        expirationTime: '2024-10-01',
        restaurantName: 'Fresh Orchard'
    },
    {
        foodType: 'Dairy',
        quantity: '15 liters',
        expirationTime: '2024-10-03',
        restaurantName: 'Dairy Delight'
    }
];

// Function to display food listings
function displayFoodListings() {
    const listingsContainer = document.getElementById('foodListings');
    listingsContainer.innerHTML = '';  // Clear previous listings

    foodListings.forEach(listing => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';

        foodItem.innerHTML = `
            <h3>${listing.foodType}</h3>
            <p>Quantity: ${listing.quantity}</p>
            <p>Expiration Time: ${listing.expirationTime}</p>
            <p>Restaurant: ${listing.restaurantName}</p>
        `;

        listingsContainer.appendChild(foodItem);
    });
}

displayFoodListings();



function requestPickup() {
    alert('Pickup request submitted!');
    window.location.href = 'dashboard.html'
}


function viewMap() {
    alert('Viewing map of available pickup locations.');
    
}


