document.addEventListener("DOMContentLoaded", function () {
    // Check if the user's cookie consent choice is stored in localStorage
    const cookieConsent = localStorage.getItem("cookieConsent");

    // Check if the session flag for this page visit is set
    const sessionFlag = sessionStorage.getItem("cookieConsentSessionFlag");

    if (!sessionFlag) {
        // If there's no session flag, show the banner and set the session flag
        document.getElementById("cookieConsentBanner1").style.display = "block";
        sessionStorage.setItem("cookieConsentSessionFlag", "shown");
    } else if (cookieConsent === "accepted" || cookieConsent === "declined") {
        // If the user has made a choice in the past, hide the banner during navigation
        document.getElementById("cookieConsentBanner1").style.display = "none";
    }

    document.getElementById("acceptCookies").addEventListener("click", function () {
        // Store the user's consent choice in localStorage
        localStorage.setItem("cookieConsent", "accepted");
        // Hide the banner
        document.getElementById("cookieConsentBanner1").style.display = "none";
    });

    document.getElementById("declineCookies").addEventListener("click", function () {
        // Store the user's consent choice in localStorage
        localStorage.setItem("cookieConsent", "declined");
        // Hide the banner
        document.getElementById("cookieConsentBanner1").style.display = "none";
    });
});
