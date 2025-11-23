# AI Interview Platform (MERN)

This is a full-stack **MERN** project where users can take **AI-powered mock interviews**.  
The system asks questions (planned: via voice), records user responses, and generates a **performance report**.

- 🧠 **Backend:** Node.js, Express, MongoDB, Socket.io (for live interview rooms), AI integration.
- 🎨 **Frontend:** React (Vite), modern UI, connects to backend APIs & sockets.

---

## 🏗 Project Structure (Root)

📁 Backend Structure:
```
backend/
├─ src/
│  ├─ app.js                 # Express app setup
│  ├─ server.js              # Server startup (HTTP + Socket.io)
│  ├─ config/
│  │  ├─ env.js              # Loads environment variables
│  │  └─ db.js               # MongoDB connection
│  ├─ routes/
│  │  ├─ index.js            # Root router (combines all routes)
│  │  ├─ auth.routes.js      # Auth routes (login/register)
│  │  ├─ interview.routes.js # Interview-related routes
│  │  └─ report.routes.js    # Report-related routes
│  ├─ controllers/
│  │  ├─ auth.controller.js
│  │  ├─ interview.controller.js
│  │  └─ report.controller.js
│  ├─ models/
│  │  ├─ user.model.js
│  │  ├─ interviewSession.model.js
│  │  └─ report.model.js
│  ├─ services/
│  │  ├─ ai.service.js       # Communicates with AI model/API
│  │  ├─ interview.service.js
│  │  └─ report.service.js
│  ├─ sockets/
│  │  └─ interview.socket.js # Interview room events (join, question, answer)
│  ├─ middlewares/
│  │  ├─ auth.middleware.js  # JWT auth check
│  │  └─ error.middleware.js # Central error handler
│  ├─ utils/
│  │  ├─ logger.js
│  │  └─ response.js
│  └─ constants/
│     └─ interviewQuestions.js # Default/static questions
├─ .env
├─ .gitignore
└─ package.json
```

📁 Frontend Structure
```
client/
├─ src/
│  ├─ main.jsx                # App entry (ReactDOM)
│  ├─ App.jsx                 # Root app component + routes
│  ├─ routes/                 # Route definitions (if separate)
│  ├─ pages/
│  │  ├─ Home.jsx             # Landing page
│  │  ├─ Login.jsx            # Login page
│  │  ├─ Register.jsx         # Register page
│  │  ├─ Dashboard.jsx        # User dashboard
│  │  ├─ InterviewRoom.jsx    # Live interview room (AI vs user)
│  │  └─ Reports.jsx          # List of interview reports
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Footer.jsx
│  │  ├─ InterviewQuestionCard.jsx
│  │  ├─ InterviewControls.jsx  # Start/End, mic toggle, etc.
│  │  └─ ReportCard.jsx
│  ├─ context/
│  │  └─ AuthContext.jsx      # Stores auth user/token
│  ├─ hooks/
│  │  └─ useAuth.js
│  ├─ services/
│  │  ├─ apiClient.js         # Axios instance (baseURL, interceptors)
│  │  ├─ auth.api.js          # Login/Register API calls
│  │  ├─ interview.api.js     # Interview APIs
│  │  └─ report.api.js        # Report APIs
│  ├─ assets/                 # Logos, images, icons
│  └─ styles/
│     └─ global.css           # Global styles (if needed)
├─ index.html
├─ vite.config.js
└─ package.json
```
🧠 Core Features (Planned)
  1) User authentication (register/login).
  2) Create and join AI interview sessions.
  3) Real-time Q&A with AI (Socket.io).
  4) Voice support (speech-to-text + text-to-speech) – later.
  5) Automatic report generation (score, feedback, strengths/weaknesses).

👨‍💻 Authors
Backend Developer: Shivam Patra
Frontend Developer: Mdsahil