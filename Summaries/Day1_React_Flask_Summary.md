
# 🗓️ Day 1 – React + Flask Fullstack Integration Summary (Ans's Journey)

## 🎯 Goal:
Build your first fullstack interaction between a React frontend and a Flask backend.

---

## 🧱 Concepts Covered

### ✅ Frontend (React)
- Created `VanakamCard.js` component
- Used `useState()` to manage local message state
- Created a `<button>` with `onClick={handleClick}`
- Used `fetch()` to call a Flask API
- Displayed returned message in JSX

### ✅ Backend (Flask)
- Created `app.py` Flask app
- Defined `/api/greet` route that returns JSON (`{"message": "Vanakkam da Flask!"}`)
- Enabled CORS with `flask-cors` so React can access Flask backend

### ✅ API Integration Flow
1. Button click triggers `handleClick()`
2. `fetch()` sends GET request to Flask
3. Flask route matches `/api/greet` and runs `greet()` function
4. Returns JSON message
5. React receives it, updates `msg` state
6. React displays it in UI

---

## 💥 Key Learnings

| Layer       | What Happens                                 |
|-------------|-----------------------------------------------|
| Frontend    | Sends a GET request using `fetch()`          |
| Server      | Flask receives the request on port 5000      |
| Flask Router| Matches `/api/greet` to `greet()`            |
| Backend     | Runs `greet()` and returns a Python dict     |
| Flask       | Converts it to JSON                          |
| React       | Uses `.then()` and `setMsg()` to display it  |

---

## 🛠️ Tools Used
- React (Frontend)
- Flask (Backend)
- `useState` + `fetch` in React
- `flask-cors` to solve CORS error

---

## 🔥 Outcome:
You successfully built a working fullstack app where React talks to Flask using a real API. 💯

---

Made with ❤️ by **Ans** and strict teaching from ChatGPT 😎
