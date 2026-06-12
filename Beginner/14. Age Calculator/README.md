# Age Calculator

A modern age calculator built using HTML, CSS, and JavaScript with Luxon and a custom datepicker (Flatpickr).

This project demonstrates working with external npm packages, date manipulation, and real-world UI validation logic.

---

## 🚀 Project Overview

Age calculation is a common utility feature in many applications such as:

* Registration forms
* Identity verification systems
* User profile dashboards
* HR systems

This project calculates the **exact age in years, months, and days** based on user input.

---

## ✨ Features

* Custom JavaScript datepicker (Flatpickr)
* Accurate date calculations using Luxon
* Years / months / days breakdown
* Input validation (empty + future date check)
* Clean modern UI
* Responsive design
* Module-based JavaScript (ESM)

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES Modules)
* Luxon (date handling)
* Flatpickr (datepicker UI)
* Flexbox

---

## 📦 Dependencies

```bash id="age7"
npm install luxon flatpickr
```

---

## 📂 Project Structure

```text id="age8"
age-calculator/
│
├── index.html
├── style.css
├── script.js
├── package.json
└── README.md
```

---

## 🎯 Learning Objectives

This project helps developers learn:

* Working with npm packages
* Using ES modules in frontend JS
* Date and time manipulation (Luxon)
* Custom input components (datepicker)
* Input validation patterns
* UI feedback design

---

## 🧠 How It Works

1. User selects birthdate via Flatpickr
2. Form submission triggers validation
3. Luxon calculates difference between now and birthdate
4. Result is broken into:

   * Years
   * Months
   * Days
5. Output is displayed instantly

---

## 📱 UX Behavior

* No manual date typing required
* Prevents invalid future dates
* Instant feedback on errors
* Clean and minimal UI

---

## 🔮 Future Improvements

* Live age update (real-time ticking)
* Hour/minute precision mode
* Zodiac sign calculator
* Backend integration (user profiles)
* Save results to localStorage
* Multi-language support

---

## 🚀 Deployment

Can be deployed using:

* Vercel
* Netlify
* GitHub Pages (with bundler)
* Cloudflare Pages

---

## 🧠 Skills Demonstrated

* npm dependency usage
* ES module architecture
* Date/time computation
* UI validation systems
* Frontend utility app design

---

## 📄 License

This project is open for educational and portfolio use.
