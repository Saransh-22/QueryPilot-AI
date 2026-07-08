from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.schemas.auth import UserSignup
from app.services.auth_service import register_user
from app.schemas.auth import UserLogin
from app.services.auth_service import login_user
from app.utils.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)

@router.post("/signup")
def signup(
    user: UserSignup,
    db: Session = Depends(get_db),
):
    result = register_user(user, db)
    if result is None:
        raise HTTPException(
            status_code=400,
            detail="Email already registered",
        )
    return result

@router.get("/health")
def health():
    return {
        "message": "Authentication Module Working"
    }

@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db),
):
    result = login_user(
        user.email,
        user.password,
        db,
    )

    if result is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )
    return result

@router.get("/me")
def me(
    current_user: User = Depends(get_current_user),
):
    return {
        "id": current_user.id,
        "full_name": current_user.full_name,
        "email": current_user.email,
    }