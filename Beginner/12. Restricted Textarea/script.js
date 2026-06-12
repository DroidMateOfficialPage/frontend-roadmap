// =========================
// CONFIG
// =========================

const textarea = document.getElementById("textarea");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const MAX = 200;

// =========================
// INPUT EVENT
// =========================

textarea.addEventListener("input", () => {

    let length = textarea.value.length;

    // UPDATE COUNTER
    counter.textContent = length;

    // WARNING STATE
    if (length >= MAX) {

        warning.textContent = "Character limit reached!";
        textarea.classList.add("error");

    } else {

        warning.textContent = "";
        textarea.classList.remove("error");
    }

    // SAFETY (extra guard)
    if (length > MAX) {

        textarea.value = textarea.value.substring(0, MAX);
        counter.textContent = MAX;
    }

});
