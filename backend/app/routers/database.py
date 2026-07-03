from fastapi import APIRouter
from app.schemas.database import DatabaseConnect
from app.services.database_service import test_connection

router = APIRouter(
    prefix="/api/database",
    tags=["Database"],
)

@router.get("/health")
def health():
    return {
        "message": "Database Module Working"
    }

@router.post("/connect")
def connect_database(data: DatabaseConnect):
    success, message = test_connection(data)
    if success:
        return {
            "success": True,
            "message": message,
        }
    return {
        "success": False,
        "message": message,
    }