// =========================
// SIMPLE UX ENHANCEMENT
// =========================

const table = document.getElementById("pricingTable");

// Highlight column on hover (UX boost, optional requirement-friendly)

const cells = table.querySelectorAll("td, th");

cells.forEach(cell => {

    cell.addEventListener("mouseenter", () => {
        cell.style.background = "rgba(59, 130, 246, 0.15)";
    });

    cell.addEventListener("mouseleave", () => {
        cell.style.background = "";
    });

});
