const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// =========================
// ENABLE BUTTON LOGIC
// =========================

function checkForm() {

    const valid =
        tempInput.value !== "" &&
        fromUnit.value !== "" &&
        toUnit.value !== "";

    convertBtn.disabled = !valid;
}

tempInput.addEventListener("input", checkForm);
fromUnit.addEventListener("change", checkForm);
toUnit.addEventListener("change", checkForm);

// =========================
// CONVERT LOGIC
// =========================

convertBtn.addEventListener("click", () => {

    let temp = parseFloat(tempInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (from === to) {
        showResult(temp);
        return;
    }

    // Convert to Celsius first
    let celsius;

    if (from === "f") celsius = (temp - 32) * 5/9;
    if (from === "k") celsius = temp - 273.15;
    if (from === "c") celsius = temp;

    // Convert from Celsius to target
    let final;

    if (to === "c") final = celsius;
    if (to === "f") final = (celsius * 9/5) + 32;
    if (to === "k") final = celsius + 273.15;

    showResult(final);

});

// =========================
// UI OUTPUT
// =========================

function showResult(value) {
    result.innerHTML = `
        <h2>${value.toFixed(2)}°</h2>
    `;
}
