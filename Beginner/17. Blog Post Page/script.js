// =========================
// SCROLL PROGRESS BAR
// =========================

const progress = document.querySelector(".progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    const scrolled = (scrollTop / docHeight) * 100;

    progress.style.width = scrolled + "%";
});
