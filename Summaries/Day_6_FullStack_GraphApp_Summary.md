# 📅 Day 6 Summary – Full Stack Graph App (React + Flask)

🗓️ **Date**: May 09, 2025

---

## ✅ What I Built Today

### 🎯 Mini Full Stack Graph App with CRUD:
- React frontend to display and edit graph paths (start, end, distance)
- Flask backend with SQLAlchemy to store paths in SQLite
- Fully dynamic table view with Edit 🖊️, Save 💾, and Delete 🗑️ buttons

---

## ⚙️ React – Frontend Highlights

- [x] Used `useState`, `useEffect` to manage data fetching and editing state
- [x] Implemented `map()` to loop through table data
- [x] Conditional rendering to switch between input fields and text
- [x] Created and used reusable components:
  - `DeleteButton`
  - ✅ `EditSaveButton` – toggles between Edit and Save
- [x] Controlled form input using state

---

## 🧠 Key Learnings

### 🔁 `map()` loop behavior:
- Difference between `index` and `id` when rendering
- Why `key={path.id}` is better than `key={index}`

### 🧱 Component-driven thinking:
- Passing props like `onEdit`, `onSave` to reusable buttons
- Using `isEditing` to control which button to show
- Updating local state when clicking "Edit" to pre-fill inputs

---

## 🐍 Flask – Backend Summary

- API endpoints used:
  - `GET /all-paths`
  - `POST /add-path`
  - `DELETE /delete-path/<id>`
  - `PUT /update-path/<id>`
- Data modeled using SQLAlchemy ORM with `to_dict()` conversion for JSON response

---

## 🛠️ Errors & Fixes

### 🔒 OpenSSL Error in React:
```
Error: error:0308010C:digital envelope routines::unsupported
```

- Fixed using:  
  `export NODE_OPTIONS=--openssl-legacy-provider`

---

## 🌱 What I’ll Do Next (Day 7 Plan Preview)

- Make `GraphForm` more stylish and animated
- Extract form & buttons into separate files for better structure
- Start validation and toast feedback

---

👨‍💻 **Built with love by Aatham Ansari**

