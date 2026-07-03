# 🚀 QueryPilot AI

> **An AI-Powered Database Copilot that transforms natural language into intelligent SQL insights.**

QueryPilot AI is a full-stack AI application that enables users to securely connect relational databases and interact with them using natural language. Instead of writing SQL manually, users can ask questions in plain English, and the AI will generate SQL queries, explain them, optimize them, and visualize the results.

The project is built using **React**, **FastAPI**, **PostgreSQL**, **SQLAlchemy**, **JWT Authentication**, and will integrate **Google Gemini** for AI-powered database interactions.

---

# 🌟 Features

## 🔐 Authentication

- User Registration
- Secure Password Hashing (bcrypt)
- JWT Authentication
- Login & Logout
- Protected API Endpoints
- Current User API (`/api/auth/me`)
- Persistent Login
- Protected Frontend Routes
- Authentication Context

---

## 🗄 Database Module

- Database Connection API
- PostgreSQL Connectivity Testing
- Dynamic SQLAlchemy Engine
- Connection Validation
- Database Connection Model
- Health Check Endpoint

---

## 💻 Frontend

- React 19
- Vite
- Tailwind CSS
- React Router
- Axios
- Responsive UI

### Pages

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
- Pydantic Validation
- Dependency Injection
- Layered Architecture

---

# 🏗 System Architecture

```text
                    React Frontend
                           │
                           ▼
                      Axios Client
                           │
                           ▼
                     FastAPI Backend
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
 Authentication Module              Database Module
        │                                     │
        ▼                                     ▼
 PostgreSQL (App Database)        User Database Connection
        │
        ▼
 SQLAlchemy ORM
```

---

# 🔐 Authentication Flow

```text
User

↓

Signup

↓

POST /api/auth/signup

↓

Validate Input

↓

Hash Password

↓

Store User

↓

PostgreSQL
```

---

```text
User

↓

Login

↓

POST /api/auth/login

↓

Verify Password

↓

Generate JWT

↓

Return Access Token

↓

Store Token (Frontend)
```

---

```text
User

↓

Open Protected Route

↓

JWT Available?

↓

No ─────────────► Redirect to Login

↓

Yes

↓

GET /api/auth/me

↓

Token Valid?

↓

Yes

↓

Dashboard

↓

No

↓

Remove Token

↓

Redirect Login
```

---

# 🗄 Database Connection Flow

```text
User

↓

Enter Database Credentials

↓

POST /api/database/connect

↓

FastAPI

↓

Create Temporary SQLAlchemy Engine

↓

Test Connection

↓

Success?

↓

Yes

↓

Ready for Schema Discovery

↓

No

↓

Return Error Message
```

---

# 📂 Project Structure

```text
QueryPilot-AI/

├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── config/
│   │   ├── llm/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── docker-compose.yml
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

---

## Backend

- FastAPI
- SQLAlchemy ORM
- PostgreSQL
- JWT Authentication
- Passlib (bcrypt)
- Pydantic

---

## AI (Upcoming)

- Google Gemini
- LangChain
- Prompt Engineering
- SQL Agent

---

# 🚀 Upcoming Features

- Automatic Schema Discovery
- Multi-Database Support (PostgreSQL / MySQL)
- Database Metadata Extraction
- Natural Language to SQL
- AI SQL Explanation
- SQL Optimization
- Index Recommendation
- Safe SQL Execution
- Interactive Charts
- Query History
- Saved Queries
- AI Chat Sessions
- Docker Deployment
- Cloud Deployment

---

# 🎯 Project Goal

QueryPilot AI is designed to become an intelligent **Database Copilot** capable of helping developers, analysts, and non-technical users interact with relational databases using natural language.

The objective is not only to generate SQL but also to:

- Understand database schemas
- Explain generated SQL
- Optimize queries
- Recommend indexes
- Execute queries securely
- Visualize results
- Assist users conversationally

---

# 📈 Current Progress

```text
█████████████████████████░░░░░░░░░░░░░░░░░░░░░░░ 50%

✅ React Frontend
✅ FastAPI Backend
✅ PostgreSQL Integration
✅ JWT Authentication
✅ Protected Routes
✅ Database Connection Module
⏳ Schema Discovery
⏳ Gemini Integration
⏳ SQL Generation
⏳ SQL Explanation
⏳ SQL Optimization
⏳ Data Visualization
⏳ AI Chat
```

---

# 👨‍💻 Author

**Saransh Neema**

---

⭐ If you find this project interesting, consider starring the repository.