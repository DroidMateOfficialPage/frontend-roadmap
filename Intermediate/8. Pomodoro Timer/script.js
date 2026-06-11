let timer;
let isRunning = false;
let sessionCount = 0;

let mode = "work"; // work | short | long

let timeLeft = 25 * 60;

// SETTINGS
const workInput = document.getElementById("workTime");
const shortInput = document.getElementById("shortBreak");
const longInput = document.getElementById("longBreak");

// UI
const timerEl = document.getElementById("timer");
const sessionEl = document.getElementById("sessionType");
const countEl = document.getElementById("count");
const beep = document.getElementById("beep");

// BUTTONS
document.getElementById("startBtn").onclick = startTimer;
document.getElementById("pauseBtn").onclick = pauseTimer;
document.getElementById("resetBtn").onclick = resetTimer;

// =========================
// TIMER CORE
// =========================

function startTimer() {

    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {

        timeLeft--;

        if (timeLeft <= 0) {
            handleSessionEnd();
        }

        updateUI();

    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    pauseTimer();
    mode = "work";
    timeLeft = workInput.value * 60;
    updateUI();
}

// =========================
// SESSION SWITCH LOGIC
// =========================

function handleSessionEnd() {

    beep.play();

    if (mode === "work") {
        sessionCount++;

        if (sessionCount % 4 === 0) {
            mode = "long";
            timeLeft = longInput.value * 60;
        } else {
            mode = "short";
            timeLeft = shortInput.value * 60;
        }

    } else {
        mode = "work";
        timeLeft = workInput.value * 60;
    }

    countEl.textContent = sessionCount;
    updateUI();
}

// =========================
// UI UPDATE
// =========================

function updateUI() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerEl.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (mode === "work") sessionEl.textContent = "Work Session";
    if (mode === "short") sessionEl.textContent = "Short Break";
    if (mode === "long") sessionEl.textContent = "Long Break";
}

// INIT
updateUI();
