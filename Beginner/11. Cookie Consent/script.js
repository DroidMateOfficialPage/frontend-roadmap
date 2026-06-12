// =========================
// SELECT ELEMENTS
// =========================

const banner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptBtn");

// =========================
// CHECK LOCAL STORAGE
// =========================

const consent = localStorage.getItem("cookieConsent");

if (!consent) {

    // SHOW BANNER IF NO CONSENT
    banner.classList.remove("hidden");

}

// =========================
// ACCEPT COOKIES
// =========================

acceptBtn.addEventListener("click", () => {

    // STORE CONSENT
    localStorage.setItem("cookieConsent", "true");

    // HIDE BANNER
    banner.classList.add("hidden");

});
