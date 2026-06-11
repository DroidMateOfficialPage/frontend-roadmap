// =========================
// STATE
// =========================

let tasks = [];

// =========================
// ELEMENTS
// =========================

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// =========================
// ADD TASK
// =========================

addBtn.addEventListener("click", () => {

    const text = input.value.trim();

    if (!text) return;

    tasks.push({
        id: Date.now(),
        text,
        completed: false
    });

    input.value = "";

    renderTasks();
});

// =========================
// TOGGLE COMPLETE
// =========================

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }

        return task;
    });

    renderTasks();
}

// =========================
// DELETE TASK
// =========================

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// =========================
// RENDER ENGINE
// =========================

function renderTasks() {

    list.innerHTML = "";

    // pending first, done last
    const sorted = [...tasks].sort((a, b) => a.completed - b.completed);

    sorted.forEach(task => {

        const li = document.createElement("li");
        li.className = `task ${task.completed ? "done" : ""}`;

        li.innerHTML = `
            <span class="text">${task.text}</span>

            <div class="actions">
                <button onclick="toggleTask(${task.id})">✓</button>
                <button onclick="deleteTask(${task.id})">✕</button>
            </div>
        `;

        list.appendChild(li);

    });
}
