# ✅ Day 5 Summary – Aatham Ansari - ok

📅 Date: May 6–7, 2025  
🧑‍💻 Topic: React Editable Table + Flask SQLAlchemy Integration

---

## 🚀 What Aatham Learned & Built

### 🎨 Frontend (React)

- `useState`, `useEffect` usage to manage table data
- Displayed dynamic table of graph paths (start, end, distance)
- Created input fields conditionally based on `editingId`
- Used controlled components: `value` + `onChange` for inputs
- Switched between Edit / Save buttons using ternary logic
- Created modular `DeleteButton` as a separate component

### 🔄 Backend (Flask + SQLAlchemy)

- Flask route for `GET /all-paths` to fetch all data
- Flask route for `POST /add-path` to add new data
- Flask route for `DELETE /delete-path/<id>` to remove a row
- Flask route for `PUT /edit-path/<id>` to update existing row:
  - Accepted JSON from frontend
  - Used `.get(id)` to retrieve
  - Updated fields and committed changes

---

## 📦 Key Concepts Mastered

| Concept               | Description                                     |
| --------------------- | ----------------------------------------------- |
| `PUT` method          | Used to update full existing object             |
| REST API              | Clean way for frontend to interact with backend |
| Conditional rendering | Used to switch between text and `<input>`       |
| Controlled inputs     | Managed form values with React state            |
| Component splitting   | Moved Delete button into a reusable file        |

---

## 🛠 Completed Features

- [x] Add new edge using form
- [x] Display all edges in table
- [x] Delete row using red Delete button
- [x] Edit row in-place using input fields
- [x] Save changes and refresh UI
- [x] Exit edit mode automatically
- [x] Styled table and buttons with modern CSS

---

## ✨ Bonus Learnings

- Difference between `PUT`, `POST`, `GET`, `DELETE`
- How React talks to Flask backend using `fetch`
- How SQLAlchemy ORM updates DB rows using `.get()` + field assignments
- Real-world analogy of REST API = Hotel waiter system 🍽️

---

💡 Aatham completed full CRUD dashboard using Flask + React — Pro-level full-stack flow with clean UI and reusable logic!
