// =========================
// LIGHTBOX FUNCTIONALITY
// =========================

const cards = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

cards.forEach(img => {

    img.addEventListener("click", () => {

        if (!img.alt) return; // skip decorative

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

// close lightbox on click
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
