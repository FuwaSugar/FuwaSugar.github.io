function toggleFavorite(dish) {
    // Get existing favorites from local storage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Reference to the favorite button
    let button = document.getElementById('favorite-btn-' + dish);
    
    // Check if the item is already in favorites
    if (favorites.includes(dish)) {
        // Remove the item from favorites
        favorites = favorites.filter(fav => fav !== dish);
        // Update the icon to an empty heart
        button.innerHTML = '<i class="bi bi-heart"></i>';
    } else {
        // Add the item to favorites
        favorites.push(dish);
        // Update the icon to a filled heart
        button.innerHTML = '<i class="bi bi-heart-fill"></i>';
    }

    // Save the updated favorites back to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to initialize the favorite button icon based on the current status
function initializeFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // List of all items to check
    const items = ['behtehsoh','kayatoast','riceball','mooncake','stickyrice','friedrice',
        'cantoneseclaypotchickenrice','chickenrice','assamlaksa','currylaksa','charkwayteow','hokkienmee'];

    
    items.forEach(item => {
        let button = document.getElementById('favorite-btn-' + item);
        if (favorites.includes(item)) {
            button.innerHTML = '<i class="bi bi-heart-fill"></i>';
        } else {
            button.innerHTML = '<i class="bi bi-heart"></i>';
        }
    });
}

// Call this function on page load to initialize the favorite icons
initializeFavorites();