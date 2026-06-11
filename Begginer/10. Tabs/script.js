// =========================
// SELECT ELEMENTS
// =========================

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

// =========================
// TAB SWITCH FUNCTION
// =========================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // REMOVE ACTIVE STATE FROM ALL TABS
        tabs.forEach(t => t.classList.remove("active"));

        // HIDE ALL CONTENT
        contents.forEach(c => c.classList.remove("active"));

        // ACTIVATE CLICKED TAB
        tab.classList.add("active");

        // SHOW CORRESPONDING CONTENT
        const target = document.getElementById("tab-" + tab.dataset.tab);
        target.classList.add("active");

    });

});
