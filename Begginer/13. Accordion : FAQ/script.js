// =========================
// SELECT ELEMENTS
// =========================

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

// =========================
// ACCORDION LOGIC
// =========================

questions.forEach((question, index) => {

    question.addEventListener("click", () => {

        const answer = answers[index];

        const isOpen = answer.classList.contains("open");

        // CLOSE ALL
        questions.forEach(q => q.classList.remove("active"));
        answers.forEach(a => a.classList.remove("open"));

        // IF IT WAS CLOSED -> OPEN IT
        if (!isOpen) {

            question.classList.add("active");
            answer.classList.add("open");
        }

    });

});
