// =========================
// ELEMENTS
// =========================

const languageSelect = document.getElementById("language");
const searchBtn = document.getElementById("searchBtn");
const refreshBtn = document.getElementById("refreshBtn");

const stateEl = document.getElementById("state");
const resultEl = document.getElementById("result");

const repoName = document.getElementById("repoName");
const repoDesc = document.getElementById("repoDesc");
const stars = document.getElementById("stars");
const forks = document.getElementById("forks");
const issues = document.getElementById("issues");
const repoLink = document.getElementById("repoLink");

// =========================
// EVENTS
// =========================

searchBtn.addEventListener("click", fetchRepo);
refreshBtn.addEventListener("click", fetchRepo);

// =========================
// FETCH LOGIC
// =========================

async function fetchRepo() {

    const lang = languageSelect.value;

    setLoading();

    try {

        const url = `https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc`;

        const res = await fetch(url);
        const data = await res.json();

        if (!data.items.length) {
            showEmpty();
            return;
        }

        // RANDOM PICK FROM TOP RESULTS
        const randomRepo = data.items[Math.floor(Math.random() * data.items.length)];

        renderRepo(randomRepo);

    } catch (err) {
        showError();
    }
}

// =========================
// UI STATES
// =========================

function setLoading() {
    stateEl.textContent = "Loading repository...";
    stateEl.classList.remove("hidden");
    resultEl.classList.add("hidden");
}

function showEmpty() {
    stateEl.textContent = "No repositories found.";
}

function showError() {
    stateEl.textContent = "Something went wrong.";
}

// =========================
// RENDER
// =========================

function renderRepo(repo) {

    stateEl.classList.add("hidden");
    resultEl.classList.remove("hidden");

    refreshBtn.classList.remove("hidden");

    repoName.textContent = repo.name;
    repoDesc.textContent = repo.description || "No description available";

    stars.textContent = `⭐ ${repo.stargazers_count}`;
    forks.textContent = `🍴 ${repo.forks_count}`;
    issues.textContent = `🐞 ${repo.open_issues_count}`;

    repoLink.href = repo.html_url;
    repoLink.textContent = "View on GitHub →";
}
