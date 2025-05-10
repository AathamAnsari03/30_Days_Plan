
# 🧠 SQLAlchemy + Flask + React Learning Summary

_A detailed summary of Kathir's learning session on May 6, 2025_

---

## ✅ Concepts Covered:

### 1. SQLAlchemy ORM – Why & How
- ORM = Object Relational Mapper: Write Python classes instead of SQL queries.
- SQLAlchemy ORM maps:
  - Python class ↔ SQL Table
  - Python object ↔ Row
- Helps keep DB code clean, modular, and object-oriented.

---

### 2. Flask + SQLAlchemy Integration
- Setup: 
  - Create Flask app
  - Connect DB with `SQLAlchemy(app)`
  - Define model class with `db.Model`
- CRUD:
  - Add path using `/add-path` route.
  - Retrieve paths using `/all-paths` route.

---

### 3. Common Mistakes & Fixes
- ❌ `data.distance('distance')` → ✅ `data.get('distance')`
- ❌ `to_dict()` outside model → ✅ move inside class
- ❌ Model class changed, but old DB used → ✅ delete `paths.db` and recreate
- ❌ `onSubmit is not a function` in React → ✅ destructure props: `function GraphForm({ onSubmit })`

---

### 4. Frontend (React)
- Sent POST request to Flask to add graph paths.
- Used `useEffect()` to fetch all paths and display them in a table.
- Backend returned JSON like:
```json
[
  { "id": 1, "start": "Erode", "end": "Tirunelveli", "distance": 500 }
]
```

---

### 5. Virtual Environment (venv)
- Isolates dependencies per project.
- Commands:
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  pip install flask sqlalchemy
  deactivate
  ```

---

### 6. SQLAlchemy General Knowledge
- Two ways to use: Core and ORM
- ORM: Uses `Base`, models, and `session`
- CRUD operations:
  - `add()`, `query()`, `filter_by()`, `commit()`, `delete()`
- DB-agnostic: works with SQLite, MySQL, PostgreSQL

---

## 🔄 Next Steps:
- Add delete/edit support to graph path table
- Explore Alembic for DB migrations
- Practice SQLAlchemy Core

---

_Learning partner: ChatGPT_  
_Date: May 6, 2025_
