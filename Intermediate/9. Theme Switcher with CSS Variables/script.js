const buttons = document.querySelectorAll("button[data-theme]");
const body = document.body;

// set theme
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;
        body.setAttribute("data-theme", theme);
    });
});
