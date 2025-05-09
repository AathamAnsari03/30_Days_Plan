
# ✅ Day 3 Summary – Graph Edge Form (React + Flask Integration)

## 🍿 10:00 AM – 11:30 AM: React Form – Controlled Components

### 📚 Topics Learned:
- `useState` for handling form inputs (`from`, `to`, `weight`)
- Controlled components: each input tied to a `useState`
- `onChange={(e) => setValue(e.target.value)}` to update state
- `onSubmit={(data) => ...}` to pass data from child to parent
- `e.preventDefault()` to stop form from refreshing the page

### 🧠 Concept Recap:
- We created a form in React using controlled inputs.
- Passed form data to parent `App` via `onSubmit`.
- Prevented default form reload using `e.preventDefault()`.

---

## 🥗 2:00 PM – 3:30 PM: Flask Form Handling with POST

### 📚 Topics Learned:
- Used Flask backend to receive JSON data with `request.get_json()`
- Used `fetch(..., { method: "POST" })` from React to send data
- Set headers like `"Content-Type": "application/json"`
- Maintained all `edges` in Flask using a global list

### 🔄 Data Flow Summary:
1. User fills form in React
2. React converts data to JSON & POSTs to Flask
3. Flask receives → appends to `edges` list → sends response back
4. React shows alert and clears form

---

## 🍰 4:00 PM – 5:30 PM: Show Edge List in Table

### 📚 Topics Learned:
- `useEffect(() => { fetch(...) }, [])` to load initial data
- Displayed edges as table using `.map()`
- After each form submit, re-fetched data to update the table

### 🔍 Insights:
- `useEffect` with `[]` runs only once on mount
- Re-fetching after form submit keeps the UI updated
- Clear separation of frontend (React) & backend (Flask)

---

## 🖼️ Diagram:
Included a flowchart showing data flow from form ➝ fetch ➝ Flask ➝ response ➝ update table

---

## ✅ Final Output:
- Form to enter graph edges
- Table shows all edges (auto-refreshes after each submission)
- Frontend + Backend communication via JSON API
