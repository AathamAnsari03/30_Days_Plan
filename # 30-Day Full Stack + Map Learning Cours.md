# 30-Day Full Stack + STT Learning Course

### 👨‍🏫 Audience:

Complete beginners who want to become full-stack developers and build real-world applications using React, TailwindCSS, Python (Flask), Graph Theory, Mapping (Leaflet.js), and Speech-to-Text (STT).

### 🧠 Methodology:

- Learn by Doing
- Project-Based Iterative Learning
- Assignments Every Day (Real-World Context)
- Demo Projects: Day 10–15, Day 20–30
- Every day includes: Frontend + Backend + Mapping + Fullstack Connection

---

## 🗓️ Day 1: Foundations Across Frontend, Backend & Graphs

- **Frontend**: React Intro (Create React App, JSX, Components)
- **Backend**: Python & Flask Setup (pip install flask, run server)
- **Mapping**: No map yet, but connect idea of maps to graph theory (nodes/edges)
- **Fullstack Link**: Understand React and Flask as frontend/backend pair, draw graph as structure
- **Assignment**: Build Hello World app (React + Flask) + sketch a node graph
- **Outcome**: Set up local development for frontend/backend, basic graph concept

## 🗓️ Day 2: Component Practice & Graph Types

- **Frontend**: React JSX, Components, Tailwind Layout (Flex, Grid)
- **Backend**: Flask Templates with Jinja2
- **Mapping**: Learn how directed/undirected graphs relate to roads or links
- **Fullstack Link**: Serve graph data from Flask, display using React components
- **Assignment**: Create directed/undirected graph info cards, JSON from backend
- **Outcome**: Reusable components + backend integration

## 🗓️ Day 3: Weight Input + Flask Forms

- **Frontend**: React form with props to input weights between nodes
- **Backend**: Handle POST in Flask, return response
- **Mapping**: Relate weighted edges to travel time/cost on map
- **Fullstack Link**: Submit weight input → save in Flask → reflect in React
- **Assignment**: Graph weight form connected to Flask
- **Outcome**: POST request handling + real-world weight logic

## 🗓️ Day 4: Paths, Forms & SQLAlchemy

- **Frontend**: useState, controlled inputs
- **Backend**: SQLAlchemy models for paths
- **Mapping**: Relate graph paths to navigation/routing
- **Fullstack Link**: Store paths in DB, retrieve for display
- **Assignment**: Path input + DB store + visual representation
- **Outcome**: Form to DB integration + graph path logic

## 🗓️ Day 5: Euler & Hamiltonian Checkers

- **Frontend**: Validated form in React
- **Backend**: Determine graph type (Euler/Hamilton) from input
- **Mapping**: Euler – walk all roads; Hamilton – visit all locations
- **Fullstack Link**: Analyze user input from frontend in backend and return type
- **Assignment**: Type checker tool (form + response)
- **Outcome**: Algorithmic decision based on input

## 🗓️ Day 6: Full Integration + Leaflet Start

- **Frontend**: Styled form + display success
- **Backend**: Save input to DB, return saved value
- **Mapping**: Display base map using Leaflet.js
- **Fullstack Link**: Data submission → DB → confirmation → show Leaflet base
- **Assignment**: Full data flow + initial map render
- **Outcome**: Build full CRUD base + view static map

## 🗓️ Day 7: Lists + City Map Table

- **Frontend**: React map over data to render table/lists
- **Backend**: Add/Edit/Delete cities and types
- **Mapping**: Convert city data to adjacency matrix
- **Fullstack Link**: Real data shown in styled table, editable
- **Assignment**: Editable list of cities with location types
- **Outcome**: You can handle multi-entry data flows

## 🗓️ Day 8: Auth Setup + Place Data

- **Frontend**: Reusable component for signup
- **Backend**: Hash passwords, store user
- **Mapping**: Assign user access to location-based data
- **Fullstack Link**: Secure graph tools via auth
- **Assignment**: Auth-enabled route + protected place marker form
- **Outcome**: You can build login-based features

## 🗓️ Day 9: Routing & Manual Dijkstra

- **Frontend**: React Router DOM setup for multiple pages
- **Backend**: Flask Sessions + login checks
- **Mapping**: Manual Dijkstra simulation (mock route calc)
- **Fullstack Link**: Simulated route finder across stack
- **Assignment**: Path calc + session-limited dashboard
- **Outcome**: Logic + session persistence + navigation

## 🧱 Day 10–15: Smart Map Assistant

### 🌍 Project Overview:

The Smart Map Assistant is a beginner-friendly full-stack project focused on geolocation, map interaction, and route visualization. The goal is to build an app where users can:

- Login and view an interactive map
- Add and name locations (markers)
- Search locations using geocoding
- Select locations and draw routes (mocked with graph logic)
- Save named routes for reuse

This project lays the foundation for mapping, user interaction, and connecting frontend components to a dynamic Flask backend.

### 🧩 Key Features:

- Interactive Leaflet.js map in React
- Add markers and associate custom names
- Search locations via OpenStreetMap (Nominatim API)
- Visualize path between markers with polylines
- Route saving, loading, and displaying
- Full-stack communication using Flask REST API
- Authenticated access to map features
  (Each day builds on prior)

### Day 10: Setup Base

- Frontend: Login + Map page (React)
- Backend: Flask Auth endpoints
- Mapping: Render Leaflet tile layer
- Connect: Setup communication
- **Outcome**: Working map login skeleton

### Day 11: Place Marker

- Frontend: OnClick form for marker
- Backend: Save marker info to DB
- Mapping: Marker creation
- Connect: React → Flask → DB → render
- **Outcome**: Dynamic map editing

### Day 12: Geocode Search

- Frontend: Place search bar
- Backend: Call Nominatim
- Mapping: Show search result
- Connect: Search to map marker
- **Outcome**: Geocoding working

### Day 13: Path + Draw Line

- Frontend: Select 2 markers
- Backend: Return mock path
- Mapping: Polyline draw
- Connect: Path = visualized graph
- **Outcome**: Graph on map

### Day 14: Route Save

- Frontend: Save button
- Backend: Route model
- Mapping: Restore old paths
- Connect: Full read/write loop
- **Outcome**: Reusable data

### Day 15: Demo Polish

- Frontend: Icons, colors
- Backend: Serve JSON export
- Mapping: All in one view
- Connect: Showcase-ready app
- **Outcome**: Public-ready feature demo

(Continues like this until Day 30 with frontend, backend, mapping, and fullstack links daily)

## 🗓️ Day 16: JWT Auth Integration

- **Frontend**: Token-based login form, store in localStorage
- **Backend**: Create JWT on login, return to frontend
- **Mapping**: No map change, secure map views via token
- **Fullstack Link**: JWT verification for map and task access
- **Assignment**: Secure login → get JWT → access protected data
- **Outcome**: Stateless login flow using JWT

## 🗓️ Day 17: Protected Routes + User Dashboard

- **Frontend**: Conditionally render dashboard on valid token
- **Backend**: Use JWT decorator to restrict Flask routes
- **Mapping**: Allow only logged-in users to access route search
- **Fullstack Link**: Authenticate and authorize data views
- **Assignment**: View dashboard only when token is valid
- **Outcome**: Basic access control

## 🗓️ Day 18: Task Manager Mini App

- **Frontend**: Task list with add/delete/edit form
- **Backend**: CRUD APIs for tasks, linked to logged-in user
- **Mapping**: Link tasks to coordinates/place names
- **Fullstack Link**: React list + Flask storage + map marker
- **Assignment**: Mini productivity app with map-linked tasks
- **Outcome**: Multi-step data app

## 🗓️ Day 19: Visual Graph with Map Markers

- **Frontend**: Show path in UI and on map
- **Backend**: NetworkX creates route graph image
- **Mapping**: Draw same path with polylines and markers
- **Fullstack Link**: One logic, two views (image + map)
- **Assignment**: Save route → show as NetworkX + Leaflet
- **Outcome**: Dual visualization of graph data

## 🧱 Day 20–30: Route & Task Planner (Showcase Project)

### 🧭 Project Overview:

This project is a smart, interactive **Route & Task Planner Web App** designed for users who manage daily location-based tasks — such as delivery agents, mentors, or field executives. The app allows users to log in, enter tasks with associated locations and deadlines, visualize those tasks on a map, and calculate optimized routes based on different travel modes (walk/drive/cycle). It also supports saving routes, sending notifications, mentor reviews, and exporting reports.

### 🧩 Key Features:

- User authentication using JWT
- Task entry with place and time
- Geocoding using Nominatim API
- Visual task placement on Leaflet.js map
- Route optimization (mock Dijkstra)
- Travel mode & time estimation
- Save/load routes with notifications
- Mentor role with feedback panel
- Data export as CSV/PDF
- Deployable as a full-stack production app

---

### Iterative Final Project: Daily Planning + Optimized Routes

### Day 20: Project Setup

- Frontend: Signup/Login, Dashboard layout
- Backend: User/Task models, Auth APIs
- Mapping: Placeholder map component
- Connect: Structure base app
- **Outcome**: Setup ready

### Day 21: Add Task with Location

- Frontend: Form with location + deadline
- Backend: Save task with place + date
- Mapping: Store place string
- Connect: Task → location
- **Outcome**: Tasks linked to places

### Day 22: Map Tasks

- Frontend: Show today's tasks on map
- Backend: Geocode stored places
- Mapping: Show all task places as markers
- Connect: DB → Geocode → Marker
- **Outcome**: Spatial task planner

### Day 23: Route Optimizer (mock)

- Frontend: Pick date, get route
- Backend: Return task route (Dijkstra)
- Mapping: Draw route on map
- Connect: Path logic on Leaflet
- **Outcome**: Basic daily routing

### Day 24: Travel Mode + Estimation

- Frontend: Choose drive/walk/cycle
- Backend: Time estimate by distance
- Mapping: Color-code by mode
- Connect: Route details shown
- **Outcome**: Time-aware map route

### Day 25: Save & Notify

- Frontend: Save route button
- Backend: Route model + mock email
- Mapping: Restore saved route
- Connect: Alert on route start
- **Outcome**: Smart task alerting

### Day 26: Mentor Access

- Frontend: Mentor dashboard
- Backend: Comment API, mentee-task linkage
- Mapping: View all mentee markers
- Connect: Role-based views
- **Outcome**: Multi-role logic

### Day 27: Export & Download

- Frontend: CSV/PDF export options
- Backend: Generate data export file
- Mapping: Export includes map info
- Connect: Offline usage ready
- **Outcome**: Report-ready data

### Day 28: Prep for Deployment

- Frontend: .env setup, cleanup
- Backend: Flask config, CORS
- Mapping: Static tile fallback
- Connect: Debug & polish
- **Outcome**: Hosting-ready

### Day 29: Deploy to Render/Railway

- Frontend: Connect to live backend
- Backend: Push to Render/Railway
- Mapping: Live marker rendering
- Connect: Full flow live
- **Outcome**: Public URL deployed app

### Day 30: Final Demo

- Frontend: Walkthrough screen
- Backend: Show API logs, console
- Mapping: Use case story
- Connect: Feature highlight video
- **Outcome**: Full project showcase recorded
