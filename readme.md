# 🚀 QueryPilot AI

> An AI-powered Database Copilot that enables users to connect databases, understand schemas, generate SQL from natural language, execute queries, and explain results using Large Language Models.

---

## 📖 Overview

QueryPilot AI is a Full Stack AI application that bridges the gap between humans and relational databases.

Instead of writing SQL manually, users can simply ask questions in natural language. QueryPilot AI understands the connected database schema, generates optimized SQL queries using AI, executes them safely, and explains the results.

The project is being built with production-grade architecture using React, FastAPI, PostgreSQL, SQLAlchemy, JWT Authentication, and Google's Gemini LLM.

---

# ✨ Features

## ✅ Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Password Hashing (bcrypt)

---

## ✅ Database Management

- Connect PostgreSQL Databases
- Validate Credentials
- Automatic Schema Discovery
- Table & Column Extraction
- Primary Key Detection
- Foreign Key Detection
- Store Database Connections
- User-specific Database Connections

---

## ✅ Frontend

- React + Vite
- Tailwind CSS
- Responsive Dashboard
- Authentication Pages
- Database Management UI
- Chat Interface (UI Ready)
- History Page
- Settings Page

---

## 🔄 Upcoming Features

- Multiple Database Management
- Active Database Selection
- AI SQL Generation
- SQL Execution Engine
- SQL Explanation
- Query Optimization
- Interactive Charts
- Query History
- Export Results
- Docker Deployment

---

# 🏗 Project Architecture

```
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

# 🔄 Authentication Flow

```
User

↓

Signup

↓

Password Hashing (bcrypt)

↓

PostgreSQL

↓

Login

↓

JWT Token

↓

Protected API

↓

Authenticated User
```

---

# 🗄 Database Connection Flow

```
User

↓

JWT Authentication

↓

Connect Database

↓

Temporary SQLAlchemy Engine

↓

Test Connection

↓

Read Database Schema

↓

Convert Schema → JSON

↓

Save Connection

↓

Store Schema

↓

Success
```

---

# 📂 Project Structure

```
QueryPilot-AI/

│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── routes/
│   │   └── styles/
│   │
│   └── package.json
│
├── backend/
│   ├── app/
│   │
│   ├── config/
│   ├── routers/
│   ├── services/
│   ├── schemas/
│   ├── models/
│   ├── utils/
│   ├── llm/
│   └── main.py
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

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- JWT
- Passlib
- bcrypt

## AI

- Google Gemini
- Prompt Engineering

---

# 🚀 Current Development Status

| Module | Status |
|---------|--------|
| Frontend UI | ✅ |
| Authentication | ✅ |
| JWT Security | ✅ |
| PostgreSQL Integration | ✅ |
| Database Connection | ✅ |
| Schema Discovery | ✅ |
| Multiple Databases | 🚧 |
| Gemini Integration | ⏳ |
| Natural Language to SQL | ⏳ |
| SQL Execution | ⏳ |
| Data Visualization | ⏳ |
| Deployment | ⏳ |

---

# 📌 Future Roadmap

- Database Management
- AI SQL Generation
- Query Execution
- AI Query Explanation
- Query Optimization
- Dashboard Analytics
- Docker Deployment
- CI/CD
- Cloud Deployment

---

# 👨‍💻 Author

**Saransh Neema**

AI • Full Stack • Machine Learning • Backend Development

---