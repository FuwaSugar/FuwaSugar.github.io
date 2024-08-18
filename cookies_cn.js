document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already set their cookie preference
    const cookiePreference = localStorage.getItem('cookieConsent_cn');

    // Check if the session flag for this page visit is set
    const sessionFlag_cn = sessionStorage.getItem("cookieConsentSessionFlag_cn");

    if (!sessionFlag_cn) {
        // If there's no session flag, show the banner and set the session flag
        document.getElementById("cookie-consent-banner").style.display = "block";
        sessionStorage.setItem("cookieConsentSessionFlag_cn", "shown");
    } else if (cookiePreference == "accepted" || cookiePreference == "rejected") {
        // Hide the cookie banner if preference is already set
        document.getElementById('cookie-consent-banner').style.display = 'none';
    }

    document.getElementById('accept-all').addEventListener('click', function() {
        // Save preference to localStorage
        localStorage.setItem('cookieConsent_cn', 'accepted');
        document.getElementById('cookie-consent-banner').style.display = 'none';
    });

    document.getElementById('reject-all').addEventListener('click', function() {
        // Save preference to localStorage
        localStorage.setItem('cookieConsent_cn', 'rejected');
        document.getElementById('cookie-consent-banner').style.display = 'none';
    });
});
