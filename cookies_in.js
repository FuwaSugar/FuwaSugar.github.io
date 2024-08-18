// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
}

// Function to check cookie consent
function checkCookieConsent() {
    var consent = getCookie("cookieConsent");
    if (consent === "") {
        document.getElementById("cookieConsentBanner").style.display = "block";
    }
}

// Event listener for the Accept button
document.getElementById("acceptCookies").addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 365);
    document.getElementById("cookieConsentBanner").style.display = "none";
});

// Event listener for the Decline button
document.getElementById("declineCookies").addEventListener("click", function () {
    setCookie("cookieConsent", "declined", 365);
    document.getElementById("cookieConsentBanner").style.display = "none";
});

// Run the checkCookieConsent function when the page loads
checkCookieConsent();
