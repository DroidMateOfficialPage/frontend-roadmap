// =========================
// QUIZ DATA (JSON ENGINE)
// =========================

const quiz = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "Which language runs in the browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "What CSS stands for?",
        answers: [
            { text: "Color Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style System", correct: false },
            { text: "Computer Style Syntax", correct: false }
        ]
    }
];

// =========================
// STATE
// =========================

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

// =========================
// ELEMENTS
// =========================

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressEl = document.getElementById("progress");
const timerEl = document.getElementById("timer");
const scoreText = document.getElementById("scoreText");

// =========================
// START QUIZ
// =========================

document.getElementById("startBtn").addEventListener("click", () => {
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    loadQuestion();
    startTimer();
});

// =========================
// LOAD QUESTION
// =========================

function loadQuestion() {

    resetState();

    const current = quiz[currentIndex];

    questionEl.textContent = current.question;

    progressEl.textContent = `Question ${currentIndex + 1} / ${quiz.length}`;

    current.answers.forEach(answer => {

        const btn = document.createElement("button");
        btn.textContent = answer.text;

        btn.addEventListener("click", () => selectAnswer(btn, answer.correct));

        answersEl.appendChild(btn);

    });
}

// =========================
// ANSWER HANDLING
// =========================

function selectAnswer(button, correct) {

    clearInterval(timer);

    const buttons = answersEl.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);

    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    setTimeout(nextQuestion, 1000);
}

// =========================
// NEXT QUESTION
// =========================

function nextQuestion() {

    currentIndex++;

    if (currentIndex < quiz.length) {
        loadQuestion();
        resetTimer();
        startTimer();
    } else {
        showResult();
    }
}

// =========================
// TIMER
// =========================

function startTimer() {

    timeLeft = 60;

    timerEl.textContent = `Time: ${timeLeft}s`;

    timer = setInterval(() => {

        timeLeft--;

        timerEl.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            score--; // penalty
            nextQuestion();
        }

    }, 1000);
}

// =========================
// RESET
// =========================

function resetState() {
    answersEl.innerHTML = "";
}

// =========================
// RESULT
// =========================

function showResult() {

    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    scoreText.textContent = `Your score: ${score} / ${quiz.length}`;
}
