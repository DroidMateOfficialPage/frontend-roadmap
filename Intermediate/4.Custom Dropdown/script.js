const dropdown = document.getElementById("dropdown");
const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");
const selectedText = document.getElementById("selectedText");
const options = document.querySelectorAll(".option");

// =========================
// TOGGLE DROPDOWN
// =========================

btn.addEventListener("click", (e) => {
    dropdown.classList.toggle("open");
});

// =========================
// SELECT OPTION
// =========================

options.forEach(option => {

    option.addEventListener("click", () => {

        // remove previous active
        options.forEach(o => o.classList.remove("active"));

        option.classList.add("active");

        selectedText.textContent = option.textContent;

        dropdown.classList.remove("open");

    });

});

// =========================
// CLOSE ON OUTSIDE CLICK
// =========================

document.addEventListener("click", (e) => {

    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }

});
