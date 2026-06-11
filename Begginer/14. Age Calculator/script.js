import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.4.4/build/es6/luxon.js";
import flatpickr from "https://cdn.jsdelivr.net/npm/flatpickr/dist/esm/index.js";

// =========================
// INIT DATEPICKER
// =========================

const input = document.getElementById("birthdate");

flatpickr(input, {
    maxDate: "today",
    dateFormat: "Y-m-d"
});

// =========================
// ELEMENTS
// =========================

const form = document.getElementById("form");
const error = document.getElementById("error");
const result = document.getElementById("result");

// =========================
// FORM SUBMIT
// =========================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const value = input.value;

    // VALIDATION
    if (!value) {
        error.textContent = "Please select a valid birthdate.";
        result.textContent = "";
        return;
    }

    error.textContent = "";

    // LUXON DATE MATH
    const birth = DateTime.fromISO(value);
    const now = DateTime.now();

    if (birth > now) {
        error.textContent = "Birthdate cannot be in the future.";
        result.textContent = "";
        return;
    }

    const diff = now.diff(birth, ["years", "months", "days"]).toObject();

    const years = Math.floor(diff.years);
    const months = Math.floor(diff.months);
    const days = Math.floor(diff.days);

    result.textContent = `You are ${years} years, ${months} months and ${days} days old.`;
});
