// =====================
// CONFIG
// =====================

const API_KEY = "YOUR_API_KEY_HERE"; // Visual Crossing API

// =====================
// ELEMENTS
// =====================

const input = document.getElementById("locationInput");
const searchBtn = document.getElementById("searchBtn");
const refreshBtn = document.getElementById("refreshBtn");

const cityEl = document.getElementById("city");
const conditionEl = document.getElementById("condition");
const tempEl = document.getElementById("temp");
const windEl = document.getElementById("wind");
const rainEl = document.getElementById("rain");
const hoursEl = document.getElementById("hours");

// =====================
// INIT (DEFAULT LOCATION)
// =====================

getWeather("London");

// =====================
// EVENTS
// =====================

searchBtn.addEventListener("click", () => {
    if (input.value) getWeather(input.value);
});

refreshBtn.addEventListener("click", () => {
    getWeather(input.value || "London");
});

// =====================
// FETCH WEATHER
// =====================

async function getWeather(location) {

    cityEl.textContent = "Loading...";

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&include=hours`;

    try {

        const res = await fetch(url);
        const data = await res.json();

        renderCurrent(data);
        renderHours(data);

    } catch (err) {
        cityEl.textContent = "Error loading weather";
    }
}

// =====================
// CURRENT WEATHER
// =====================

function renderCurrent(data) {

    const today = data.days[0];

    cityEl.textContent = data.address;
    conditionEl.textContent = today.conditions;
    tempEl.textContent = Math.round(today.temp);
    windEl.textContent = `Wind: ${today.windspeed} km/h`;
    rainEl.textContent = `Rain: ${today.precipprob}%`;
}

// =====================
// HOURLY FORECAST
// =====================

function renderHours(data) {

    hoursEl.innerHTML = "";

    const hours = data.days[0].hours.slice(0, 24);

    hours.forEach(h => {

        const div = document.createElement("div");
        div.className = "hour";

        div.innerHTML = `
            <p>${h.datetime.slice(0, 5)}</p>
            <p><strong>${Math.round(h.temp)}°</strong></p>
        `;

        hoursEl.appendChild(div);

    });
}
