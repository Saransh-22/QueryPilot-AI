from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config.database import Base, engine
from app.models.user import User
from app.models.database_connection import DatabaseConnection
from app.routers.auth import router as auth_router
from app.routers.database import router as database_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="QueryPilot AI API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(database_router)

# Root Endpoint
@app.get("/")
def root():
    return {
        "message": "Welcome to QueryPilot AI Backend 🚀"
    }