# 🚀 QueryPilot AI

> **AI-Powered Database Copilot using Large Language Models (LLMs)**

QueryPilot AI is a full-stack AI application that enables users to connect relational databases, understand their schema automatically, generate SQL queries from natural language, explain generated SQL, optimize queries, recommend indexes, and visualize query results using AI.

The project combines **React**, **FastAPI**, **PostgreSQL**, **JWT Authentication**, and **Google Gemini** to create an intelligent database assistant capable of helping users interact with databases without writing SQL manually.

---

# ✨ Features Implemented

## 🔐 Authentication

- User Registration
- Secure Password Hashing (bcrypt)
- JWT Authentication
- Login API
- Protected Backend APIs
- Current User Endpoint (`/api/auth/me`)
- Persistent Login
- Protected Frontend Routes
- Logout

---

## 💻 Frontend

- React + Vite
- Tailwind CSS
- React Router
- Axios API Client
- Authentication Context
- Responsive UI

### Available Pages

- Login
- Signup
- Dashboard
- Chat
- Database
- History
- Settings
- 404 Page

---

## ⚙ Backend

- FastAPI
- SQLAlchemy ORM
- PostgreSQL
- REST APIs
- Layered Architecture
- Pydantic Validation
- JWT Authentication
- Dependency Injection

---

# 🏗 System Architecture

```text
                React Frontend
                       │
                       │ REST API
                       ▼
                FastAPI Backend
                       │
        ┌──────────────┴──────────────┐
        │                             │
 Authentication Module          Database Module
        │
        ▼
 PostgreSQL (Application Database)
```

---

# 🔐 Authentication Flow

```text
Signup
   │
   ▼
POST /api/auth/signup
   │
   ▼
Validate Input
   │
   ▼
Hash Password
   │
   ▼
Store User
   │
   ▼
PostgreSQL
```

---

```text
Login
   │
   ▼
POST /api/auth/login
   │
   ▼
Verify Password
   │
   ▼
Generate JWT
   │
   ▼
Return Access Token
   │
   ▼
Store Token (Frontend)
```

---

```text
Protected Route
      │
      ▼
JWT Exists?
      │
 ┌────┴─────┐
 │          │
Yes         No
 │          │
 ▼          ▼
GET /auth/me
            Redirect Login
 │
 ▼
Dashboard
```

---

# 📂 Project Structure

```
QueryPilot-AI/

├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── llm/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

# 🛠 Technology Stack

## Frontend

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- JWT Authentication
- Passlib (bcrypt)
- Pydantic
- Python 3

## AI / LLM (Upcoming)

- Google Gemini
- LangChain
- SQL Agent
- Prompt Engineering

---

# 📌 Backend Architecture

```text
React

      │

Axios

      │

FastAPI Router

      │

Service Layer

      │

SQLAlchemy ORM

      │

PostgreSQL
```

---

# 📌 Authentication Architecture

```text
React

↓

Login

↓

JWT

↓

localStorage

↓

Authorization Header

↓

FastAPI

↓

JWT Verification

↓

Current User

↓

Protected API
```

---

# 🚧 Upcoming Features

- Database Connection Module
- Automatic Schema Discovery
- Multi-Database Support (PostgreSQL / MySQL)
- Natural Language to SQL
- SQL Query Explanation
- AI Query Optimization
- Index Recommendation
- Safe SQL Execution
- Query History
- Saved Queries
- Interactive Charts & Visualizations
- AI Chat Interface
- Docker Deployment

---

# 🎯 Project Goal

QueryPilot AI is designed to act as an **AI Database Copilot** rather than a simple SQL generator.

The objective is to enable users to interact with relational databases using natural language while providing intelligent assistance through:

- Schema Understanding
- SQL Generation
- SQL Explanation
- Query Optimization
- Secure Execution
- Result Visualization

---

# 👨‍💻 Author

**Saransh Neema**