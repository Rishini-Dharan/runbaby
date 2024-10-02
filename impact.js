


function loadImpactData() {
    
    const mealsDonated = 0; 
    const foodSaved = 0; 
    const peopleFed = 0; 

    
    document.getElementById('meals-donated').innerText = mealsDonated;
    document.getElementById('food-saved').innerText = foodSaved;
    document.getElementById('people-fed').innerText = peopleFed;
}


function goBack() {
    window.location.href = 'dashboard.html'; 
}


window.onload = loadImpactData;
