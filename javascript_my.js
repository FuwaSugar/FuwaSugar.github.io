document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu-item');
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close-btn');
    var popupTitle = document.getElementById('popup-title');
    var restaurantList = document.getElementById('restaurant-list');

    // Buttons for switching menus
    var foodBtn = document.getElementById('food-btn');
    var drinkBtn = document.getElementById('drink-btn');
    var dessertBtn = document.getElementById('dessert-btn');
    var foodList = document.getElementById('food-list');
    var drinkList = document.getElementById('drink-list');
    var dessertList = document.getElementById('dessert-list');

    foodBtn.addEventListener('click', function() {
        foodList.classList.add('active');
        drinkList.classList.remove('active');
        dessertList.classList.remove('active');
        foodBtn.classList.add('active');
        drinkBtn.classList.remove('active');
        dessertBtn.classList.remove('active');
    });

    drinkBtn.addEventListener('click', function() {
        drinkList.classList.add('active');
        foodList.classList.remove('active');
        dessertList.classList.remove('active');
        drinkBtn.classList.add('active');
        foodBtn.classList.remove('active');
        dessertBtn.classList.remove('active');
    });

    dessertBtn.addEventListener('click', function() {
        dessertList.classList.add('active');
        drinkList.classList.remove('active');
        foodList.classList.remove('active');
        dessertBtn.classList.add('active');
        drinkBtn.classList.remove('active');
        foodBtn.classList.remove('active');
    });

    // Example data - replace with dynamic data
    var restaurants = {
        'nasi-lemak': [
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' },
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' }
        ],
        'satay': [
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' }
        ],
        'nasi-kerabu': [
            { name: 'Akif Ayra Cofee', location: '33A, Castle Avenue, BANDAR AGACIA, 31910 Kampar, Perak.', image: 'images/akif_ayra_coffee.jpg' },
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' }
        ],
        'chicken-rendang': [
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' }
        ],
        'lemang': [
            { name: 'Akif Ayra Cofee', location: '33A, Castle Avenue, BANDAR AGACIA, 31910 Kampar, Perak.', image: 'images/akif_ayra_coffee.jpg' },
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' },
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
        ],
        'teh-tarik': [
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' }
        ],
        'sirap-bandung': [
            { name: 'Akif Ayra Cofee', location: '33A, Castle Avenue, BANDAR AGACIA, 31910 Kampar, Perak.', image: 'images/akif_ayra_coffee.jpg' },
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' }
        ],
        'air-jagung': [
            { name: 'Akif Ayra Cofee', location: '33A, Castle Avenue, BANDAR AGACIA, 31910 Kampar, Perak.', image: 'images/akif_ayra_coffee.jpg' },
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' }
        ],
        'milo-dinosaur': [
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' }
        ],
        'pisang-goreng': [
            { name: 'Akif Ayra Cofee', location: '33A, Castle Avenue, BANDAR AGACIA, 31910 Kampar, Perak.', image: 'images/akif_ayra_coffee.jpg' },
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' }
        ],
        'cendol': [
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' }
        ],
        'otak-otak': [
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' },
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
        ],
        'kuih-seri-muka': [
            { name: 'Akif Ayra Cofee', location: '33A, Castle Avenue, BANDAR AGACIA, 31910 Kampar, Perak.', image: 'images/akif_ayra_coffee.jpg' },
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
            { name: 'Restaurant Haji Yahya', location: 'Lot 118057, Jalan Datuk Onn Jaafar, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/restaurant_haji_yahya.jpg' }
        ],
        'bubur-cha-cha': [
            { name: 'Warung Si Nilam', location: 'Jln Idris, Kampung Batu Berangkai, 31900 Kampar, Perak.', image: 'images/warung_si_nilam.jpg' },
            { name: 'Restaurant Karim', location: '59 A, Jalan Perdana 3, Taman Kampar Perdana,, Kampar, Malaysia.', image: 'images/restaurant_karim.jpg' },
            { name: 'Gerai Makanan Rahman Corner', location: '21, Jalan Mustapha Al-Bakri, Taman Jubilee, 30300 Ipoh, Perak.', image: 'images/gerai_makanan_rahman_corner.jpg' },
        ]
    };
    
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var food = item.getAttribute('data-food');
            popupTitle.textContent = item.querySelector('h3').textContent.trim();
            restaurantList.innerHTML = '';
            restaurants[food].forEach(function(restaurant) {
                var li = document.createElement('li');
                var img = document.createElement('img');
                img.src = restaurant.image;
                img.alt = restaurant.name;
                li.appendChild(img);
                li.appendChild(document.createTextNode(`${restaurant.name}, ${restaurant.location}`));
                restaurantList.appendChild(li);
            });
            popup.style.display = 'block';
        });
    });
    

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Initialize with food list active
    foodBtn.click();
});

$(document).ready(function() {
    // Example API URL
    var apiUrl = 'https://api.example.com/data';

    // Making an AJAX request
    $.ajax({
        url: apiUrl,
        method: 'GET', // or 'POST', 'PUT', 'DELETE' depending on the API
        success: function(data) {
            // Process the data returned from the API
            console.log(data);

            // Example: Display the data on the webpage
            $('#api-data').html(JSON.stringify(data));
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
});

// Contact Us Webpage
// Contact Form and Feedback Form
$(document).ready(function() {
    // Contact Form Submission Handler
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        const contactFormData = $(this).serializeArray(); // Collect form data

        // Display confirmation message
        $('#contactConfirmationMessage').removeClass('hidden');
        // Simulate form reset
        $('#contactForm').trigger('reset');

        // Store form data in local storage
        const formData = contactFormData.reduce((acc, field) => {
            acc[field.name] = field.value;
            return acc;
        }, {});
        formDataStorage.saveLocalStorage(formData);
    });

    // Feedback Form Submission Handler
    $('#feedbackForm').on('submit', function(event) {
        event.preventDefault();
        const feedbackFormData = $(this).serializeArray(); // Collect form data

        // Display confirmation message
        $('#feedbackConfirmationMessage').removeClass('hidden');
        // Simulate form reset
        $('#feedbackForm').trigger('reset');

        // Store feedback data in session storage
        const feedbackData = feedbackFormData.reduce((acc, field) => {
            acc[field.name] = field.value;
            return acc;
        }, {});
        formDataStorage.saveSessionStorage(feedbackData);
    });
});

// Function to auto-expand the textarea
function autoExpandTextarea(textarea) {
    // Reset the height to auto to calculate the new height
    textarea.style.height = 'auto';
    // Set the height to the scrollHeight to expand the textarea
    textarea.style.height = `${textarea.scrollHeight}px`;
}

// Add event listener to the textarea to trigger the auto-expand function
document.addEventListener('DOMContentLoaded', () => {
    const contactMessage = document.getElementById('contactMessage');
    if (contactMessage) {
        contactMessage.addEventListener('input', () => autoExpandTextarea(contactMessage));
        // Initial call to set the height correctly on page load
        autoExpandTextarea(contactMessage);
    }
});

// Unique ID for cookie management
const cookieManager = {
    setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    trackPageActivity() {
        // Store the current page URL in a cookie
        this.setCookie('lastVisitedPage', window.location.href, 1);
    }
};

// Track page activity
cookieManager.trackPageActivity();

// Unique ID for form data storage
const formDataStorage = {
    saveLocalStorage(data) {
        localStorage.setItem('contactFormData', JSON.stringify(data));
    },
    getLocalStorage() {
        return JSON.parse(localStorage.getItem('contactFormData'));
    },
    saveSessionStorage(data) {
        sessionStorage.setItem('feedbackFormData', JSON.stringify(data));
    },
    getSessionStorage() {
        return JSON.parse(sessionStorage.getItem('feedbackFormData'));
    }
};
