from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.models.user import User
from app.schemas.database import DatabaseConnect
from app.services.database_service import connect_database
from app.utils.dependencies import get_current_user

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
def connect(
    data: DatabaseConnect,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    success, message = connect_database(
        data=data,
        current_user=current_user,
        db=db,
    )

    if success:
        return {
            "success": True,
            "message": message,
        }

    return {
        "success": False,
        "message": message,
    }