document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".restaurant-slider");

    sliders.forEach((slider) => {
        let index = 0;
        const images = slider.querySelectorAll(".restaurant-image");
        const totalImages = images.length;

        function showImage(idx) {
            images.forEach((img, i) => {
                img.classList.toggle("active", i === idx);
            });
        }

        function nextImage() {
            index = (index + 1) % totalImages;
            showImage(index);
        }

        // Automatically switch images every 3 seconds
        setInterval(nextImage, 3000);

        // Optionally, add event listeners for manual sliding
        slider.addEventListener("click", nextImage);
    });
});