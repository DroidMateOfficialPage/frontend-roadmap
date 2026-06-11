const addStory = document.getElementById("addStory");
const fileInput = document.getElementById("fileInput");
const storiesBar = document.getElementById("storiesBar");

const viewer = document.getElementById("viewer");
const storyImage = document.getElementById("storyImage");

let stories = [];
let currentIndex = 0;

const STORAGE_KEY = "stories_v1";

// =========================
// INIT
// =========================

function init() {
    loadStories();
    cleanupExpired();
    renderStories();
}

init();

// =========================
// LOAD / SAVE
// =========================

function saveStories() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
}

function loadStories() {
    stories = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// =========================
// TTL CLEANUP (24h)
// =========================

function cleanupExpired() {

    const now = Date.now();
    const DAY = 24 * 60 * 60 * 1000;

    stories = stories.filter(s => now - s.createdAt < DAY);

    saveStories();
}

// =========================
// ADD STORY FLOW
// =========================

addStory.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", handleUpload);

function handleUpload(e) {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

        const story = {
            id: Date.now(),
            image: reader.result, // base64
            createdAt: Date.now()
        };

        stories.unshift(story);
        saveStories();
        renderStories();
    };

    reader.readAsDataURL(file);
}

// =========================
// RENDER STORIES
// =========================

function renderStories() {

    // remove old except add button
    document.querySelectorAll(".story:not(.add)").forEach(el => el.remove());

    stories.forEach((story, index) => {

        const div = document.createElement("div");
        div.className = "story";

        const img = document.createElement("img");
        img.src = story.image;

        div.appendChild(img);

        div.addEventListener("click", () => openStory(index));

        storiesBar.appendChild(div);
    });
}

// =========================
// STORY VIEWER
// =========================

function openStory(index) {

    currentIndex = index;

    viewer.classList.remove("hidden");

    showStory();

    setTimeout(() => {
        nextStory();
    }, 5000);
}

function showStory() {
    storyImage.src = stories[currentIndex].image;
}

function nextStory() {

    currentIndex++;

    if (currentIndex >= stories.length) {
        closeViewer();
        return;
    }

    showStory();

    setTimeout(nextStory, 5000);
}

function closeViewer() {
    viewer.classList.add("hidden");
}

// =========================
// SWIPE SUPPORT (MOBILE)
// =========================

let startX = 0;

viewer.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

viewer.addEventListener("touchend", e => {

    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextStory();
    }

    if (endX - startX > 50) {
        if (currentIndex > 0) {
            currentIndex--;
            showStory();
        }
    }
});
