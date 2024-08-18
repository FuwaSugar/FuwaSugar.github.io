function toggleFavorite(restaurant) {

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


    let button = document.getElementById('favorite-btn-' + restaurant);


    if (favorites.includes(restaurant)) {

        favorites = favorites.filter(fav => fav !== restaurant);

        button.innerHTML = '<i class="bi bi-heart"></i>';
    } else {

        favorites.push(restaurant);

        button.innerHTML = '<i class="bi bi-heart-fill"></i>';
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}


function initializeFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


    const items = ['CheeMeng', 'HongKee', 'AhLeng', 'DamansaraUhokkienmee', 'SinGuanHoe', 'ChingHanGuan'];


    items.forEach(item => {
        let button = document.getElementById('favorite-btn-' + item);
        if (favorites.includes(item)) {
            button.innerHTML = '<i class="bi bi-heart-fill"></i>';
        } else {
            button.innerHTML = '<i class="bi bi-heart"></i>';
        }
    });
}


initializeFavorites();