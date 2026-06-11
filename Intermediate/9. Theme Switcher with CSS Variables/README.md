# Theme Switcher (CSS Variables Only)

A modern theme switcher built without JavaScript using CSS variables and selectors.

---

## 🚀 Overview

This project demonstrates:

- CSS variables (design tokens)
- Theme systems architecture
- State handling using CSS only
- Modern selectors like `:has()`

---

## 🎨 Themes

The app includes 3 themes:

- Default (light)
- Dark
- Neon

Each theme overrides the same token set:
* –color-bg
* –color-surface
* –color-text
* –color-accent

---

## 🧠 Core Concept

Instead of styling components directly:

❌ Bad:
background: white;

✔️ Good:
background: var(--color-surface);

## 📂 Structure
theme-switcher/
│
├── index.html
├── style.css
└── README.md


---

## 🎯 Learning Goals

- CSS design tokens
- Theming architecture
- State without JavaScript
- Modern selector usage
- Scalable UI systems thinking

---

## 💡 UX Concepts Used

- Instant theme switching
- Minimal cognitive load UI
- Consistent design system
- Accessible radio controls

---

## 🔮 Future Upgrades

- Persist theme (localStorage + JS version)
- Smooth theme transitions (animation layer)
- More themes (ocean, cyberpunk, minimal)
- Component-based design system expansion

---

## 🚀 Deployment

- GitHub Pages
- Vercel
- Netlify

---

## 📄 License

Educational use only.
