# 🚀 QueryPilot AI

> An AI-powered Database Copilot that enables users to connect databases, understand schemas, generate SQL from natural language, execute queries, and explain results using Large Language Models.

---

# 📖 Overview

QueryPilot AI is a Full Stack AI application that bridges the gap between humans and relational databases.

Instead of writing SQL manually, users can simply ask questions in natural language. QueryPilot AI understands the connected database schema, generates optimized SQL queries using AI, executes them safely, and explains the results.

The project follows a production-ready architecture built with **React**, **FastAPI**, **PostgreSQL**, **SQLAlchemy**, **JWT Authentication**, and **Google Gemini**.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- Secure Login
- Auto Login after Signup
- JWT Authentication
- Protected Routes
- Password Hashing (bcrypt)
- Logout
- User Session Management

---

## 🗄 Database Management

- Connect PostgreSQL Databases
- Validate Database Credentials
- Automatic Schema Discovery
- Table & Column Extraction
- Primary Key Detection
- Foreign Key Detection
- Store Database Schema as JSON
- User-specific Database Connections
- Prevent Duplicate Connections
- Rename Database Connections
- Delete Database Connections
- Active Database Selection
- Automatic Active Database Switching
- Global Active Database State

---

## 💻 Frontend

- React + Vite
- Tailwind CSS
- Responsive UI
- Dashboard
- Database Management
- Authentication Pages
- Protected Routes
- Chat Interface (UI Ready)
- History Page
- Settings Page
- Global Auth Context
- Global Database Context
- Automatic UI Refresh

---

## 🤖 AI (Coming Next)

- Natural Language → SQL
- SQL Execution
- SQL Explanation
- Query Optimization
- Interactive Charts
- Query History
- Export Results
- Docker Deployment

---

# 🏗 Project Architecture

```text
                    +----------------------+
                    |      React UI        |
                    +----------+-----------+
                               |
                               |
                        REST API (Axios)
                               |
                               |
                    +----------v-----------+
                    |      FastAPI API     |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                    |                    |
          |                    |                    |
     Authentication      Database Module      AI Module
          |                    |                    |
          |                    |                    |
      JWT Tokens        Schema Discovery      Gemini API
          |                    |                    |
          +--------------------+--------------------+
                               |
                        SQLAlchemy ORM
                               |
                               |
                      PostgreSQL Database
```

---

# 🔐 Authentication Flow

```text
User
   │
   ▼
Signup
   │
   ▼
Password Hashing (bcrypt)
   │
   ▼
PostgreSQL
   │
   ▼
Login
   │
   ▼
JWT Token
   │
   ▼
Protected API
   │
   ▼
Authenticated User
```

---

# 🗄 Database Connection Flow

```text
User
   │
   ▼
JWT Authentication
   │
   ▼
Connect Database
   │
   ▼
Validate Credentials
   │
   ▼
Temporary SQLAlchemy Engine
   │
   ▼
Read Database Schema
   │
   ▼
Convert Schema → JSON
   │
   ▼
Store Connection
   │
   ▼
Active Database
```

---

# 📂 Project Structure

```text
QueryPilot-AI
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   │
│   └── package.json
│
├── backend
│   ├── app
│   │   ├── config
│   │   ├── llm
│   │   ├── models
│   │   ├── routers
│   │   ├── schemas
│   │   ├── services
│   │   ├── utils
│   │   └── main.py
│
└── README.md
```

---

# ⚙ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- JWT Authentication
- Passlib
- bcrypt

### AI

- Google Gemini
- Prompt Engineering

---

# 🚀 Current Development Status

| Module | Status |
|----------|--------|
| Frontend UI | ✅ Complete |
| Authentication | ✅ Complete |
| JWT Security | ✅ Complete |
| PostgreSQL Integration | ✅ Complete |
| Database Connection | ✅ Complete |
| Schema Discovery | ✅ Complete |
| Database CRUD | ✅ Complete |
| Active Database Management | ✅ Complete |
| Global State Management | ✅ Complete |
| Gemini Integration | 🚧 Next Phase |
| Natural Language to SQL | ⏳ Planned |
| SQL Execution | ⏳ Planned |
| Query Explanation | ⏳ Planned |
| Query Optimization | ⏳ Planned |
| Data Visualization | ⏳ Planned |
| Docker Deployment | ⏳ Planned |

---

# 🛣 Development Roadmap

## ✅ Phase 1
- Project Setup
- Backend Structure
- Frontend Structure

## ✅ Phase 2
- Authentication
- JWT Security

## ✅ Phase 3
- PostgreSQL Integration
- Schema Reader

## ✅ Phase 4
- Database Management
- Multiple Database Support
- Active Database Selection
- React Context Integration
- Dashboard Integration
- Chat Integration

## 🚧 Phase 5 (Current)

- Gemini Integration
- Natural Language → SQL
- SQL Execution
- SQL Explanation
- Query Optimization

## 📅 Phase 6

- Charts & Data Visualization
- Query History
- Export Results

## 📅 Phase 7

- Docker
- CI/CD
- AWS Deployment
- Production Release

---

# 👨‍💻 Author

## Saransh Neema

**AI Engineer | Full Stack Developer | Machine Learning Enthusiast**

Building AI-powered developer tools that simplify database interactions through Large Language Models.