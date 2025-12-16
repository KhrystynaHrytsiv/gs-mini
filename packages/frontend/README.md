# Day 4 — FullStack Demo (Frontend + Backend)

This repository is a **demo sample for Day 4** of the mini-course.  
Goal: show the **full picture of a web service** — how **Frontend → Backend → Database (optional) → Frontend** works.

> It’s not a “perfect production app”. It’s a clear, beginner-friendly **fullstack example**.

---

## What you’ll learn here

- What **Frontend** does (UI + user actions)
- What **Backend** does (API + logic)
- How they communicate via **HTTP requests**
- How data can be stored (optional / simple demo approach)

---

## Tech Stack

- **Frontend:** HTML / CSS / JavaScript *(or React, if you use the React version)*
- **Backend:** Node.js + Express
- **Data:** in-memory array (for simplicity)  
  *(you can replace it with a real DB later: MongoDB/PostgreSQL)*

---

## How it works (Big Picture)

1. User clicks a button on the **Frontend**
2. Frontend sends a request to the **Backend API**
3. Backend processes the request (logic)
4. Backend returns a response (JSON)
5. Frontend shows the result in the UI

---

## API Endpoints (example)

- `GET /api/health` — check that server is running
- `GET /api/profile` — returns demo profile data
- `POST /api/message` — sends a message (demo logic)

> Exact endpoints may differ depending on your implementation — check the `server` folder.

---

## Project Structure

```txt
.
├── client/               # Frontend (UI)
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server/               # Backend (API)
│   ├── index.js
│   └── package.json
└── README.md
