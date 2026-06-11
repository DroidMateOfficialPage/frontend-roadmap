// =========================
// STATE
// =========================

let lanes = [];

// =========================
// ELEMENTS
// =========================

const board = document.getElementById("board");
const input = document.getElementById("subInput");
const addBtn = document.getElementById("addBtn");

// =========================
// INIT (LOCAL STORAGE)
// =========================

window.addEventListener("load", () => {
    const saved = JSON.parse(localStorage.getItem("lanes")) || [];
    saved.forEach(sub => createLane(sub));
});

// =========================
// ADD LANE
// =========================

addBtn.addEventListener("click", () => {

    const sub = input.value.trim().toLowerCase();
    if (!sub) return;

    createLane(sub);
    input.value = "";
});

// =========================
// CREATE LANE
// =========================

async function createLane(subreddit) {

    if (lanes.includes(subreddit)) return;

    const lane = document.createElement("div");
    lane.className = "lane";

    lane.innerHTML = `<h2>r/${subreddit}</h2><p>Loading...</p>`;

    board.appendChild(lane);

    try {

        const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const data = await res.json();

        const posts = data?.data?.children;

        if (!posts) throw new Error("Invalid subreddit");

        lane.innerHTML = `<h2>r/${subreddit}</h2>`;

        posts.slice(0, 8).forEach(p => {

            const post = p.data;

            const el = document.createElement("div");
            el.className = "post";

            el.innerHTML = `
                <a href="https://reddit.com${post.permalink}" target="_blank">
                    ${post.title}
                </a>
                <div class="meta">
                    👤 ${post.author} • 🔼 ${post.ups}
                </div>
            `;

            lane.appendChild(el);

        });

        lanes.push(subreddit);
        saveLanes();

    } catch (err) {
        lane.innerHTML = `<h2>r/${subreddit}</h2><p>Failed to load</p>`;
    }
}

// =========================
// SAVE STATE
// =========================

function saveLanes() {
    localStorage.setItem("lanes", JSON.stringify(lanes));
}
