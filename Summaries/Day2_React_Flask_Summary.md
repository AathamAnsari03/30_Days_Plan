# ✅ Day 2 Summary – React + Flask (May 3)

Welcome back, **Ans**! 🎓 Today you mastered some important intermediate concepts in **React** and **Flask**.

---

## 🔥 10:00 AM – 11:30 AM: JSX & Components

### 📘 What You Learned:

- JSX is a mix of **HTML + JS** (JavaScript XML).
- Functional Components are JavaScript functions that return JSX.
- JSX allows **JavaScript expressions** inside `{}`.
- `class` becomes `className` because `class` is a JS keyword.
- `props` are used to pass data **from parent to child** component.
- JSX must have **one parent element** to avoid ambiguity.

### ⚠️ Bonus Learning:

- JSX protects against **XSS (Cross-Site Scripting)** attacks – unlike innerHTML.
- JSX uses **Virtual DOM** → compares with real DOM and updates only what’s changed.

---

## 🧠 Key Concepts Explained:

### 🔹 `useState()`:

- Lets you **create state variables** in a functional component.
- Example: `const [count, setCount] = useState(0)`
- `count` → current state; `setCount` → function to update it.

### 🔹 `useEffect()`:

- Lets you run **side effects** like fetch, logging, timer.
- Example: Fetching from API when component mounts or `state` changes.

---

## 💻 11:30 AM – 1:00 PM: TailwindCSS Grid & Card

### 🎨 You Designed:

- A 2x2 **Grid** layout showing:
  - Directed Graph 🎯
  - Undirected Graph 🔁
  - Weighted Graph ⚖️
  - Cyclic Graph 🔄

### Tailwind Features Used:

- `grid`, `grid-cols-2`, `gap-4`, `rounded`, `shadow`, `hover`, `transition`, etc.

---

## 🍜 2:00 PM – 3:30 PM: Flask Templates with Jinja2

### 🎯 Goal:

- Learn how to render dynamic HTML from Flask.

### What You Did:

- `render_template("hello.html", name="Ans")`
- Used Jinja2: `{{ name }}` to show dynamic content.
- URL path `/hello/<username>` passed name dynamically.

### Key Points:

- This is **SSR (Server-Side Rendering)**.
- Not an API – returns **HTML** from backend directly.

---

## 🧪 5:00 PM – 6:00 PM: React–Flask Integration

### 🎯 Mini Project:

- Flask served `/api/graph/<type>` returning graph info JSON.
- React used:
  - `useState()` to track `graphType`
  - `useEffect()` to `fetch()` from Flask
  - Data passed to `GraphInfoCard` component
  - Button used to toggle between graphs

### CORS Issue:

- Solved using Flask-CORS to allow access from React frontend (localhost:3000 → 5000)

---

## 🧠 Bonus:

- You learned about:
  - CORS errors 🔒
  - JSON parsing
  - `fetch().then().then()` chain
  - `useEffect` dependency array

---

# 🌟 Day 2 Completed!

You’re building full-stack skills piece by piece. Proud of your discipline, Ans! 💪
