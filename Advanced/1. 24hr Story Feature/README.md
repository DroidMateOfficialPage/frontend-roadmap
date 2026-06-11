# 24h Story Feature (Instagram Clone)

A client-side Instagram Stories clone built with vanilla JavaScript.

---

## 🚀 Overview

This project simulates ephemeral content like Instagram/WhatsApp stories.

Key concept:  
Stories exist for 24 hours → then they are automatically removed.

---

## ✨ Features

- Upload image as story
- Convert image to Base64
- Store stories in localStorage
- Auto-delete after 24 hours
- Story viewer with autoplay
- Swipe navigation (mobile)
- Instagram-style UI
- Responsive layout

---

## 🧠 Core Architecture

### 1. Storage Layer
- localStorage persistence
- Base64 image encoding

### 2. Time Layer (TTL system)
expiration = createdAt + 24h
- cleanup runs on app load
- expired stories are filtered out

---

### 3. UI Layer

- story ring bar
- fullscreen viewer
- auto progression timer
- swipe navigation

---

## 📂 Structure
stories-app/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## ⚙️ How It Works

1. User uploads image
2. Image → Base64 via FileReader
3. Stored in localStorage with timestamp
4. On load → expired items removed
5. UI renders active stories
6. Viewer plays each story for 5 seconds

---

## 🎯 Learning Goals

- Client-side persistence
- Time-based data lifecycle
- File handling in browser
- State-driven UI rendering
- Touch events (swipe gestures)

---

## 💡 UX Concepts

- Ephemeral content design
- Fullscreen immersive viewer
- Auto progression system
- Minimal interaction friction

---

## 🔮 Future Upgrades

- Video stories support
- Seen/unseen states
- Backend sync (real Instagram architecture)
- Story reactions
- Upload compression + resizing

---

## 🚀 Deployment

- Vercel
- Netlify
- GitHub Pages

---

## 📄 License

Educational project.
