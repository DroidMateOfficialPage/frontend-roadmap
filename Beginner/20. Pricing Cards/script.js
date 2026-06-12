// UI enhancement only (keeps project clean but modern)

// highlight card on click (fake selection UX)

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

    });
});
