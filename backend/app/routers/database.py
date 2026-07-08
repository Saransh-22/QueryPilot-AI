from fastapi import APIRouter
from fastapi import Depends
from fastapi import Path
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.models.user import User
from app.schemas.database import DatabaseConnect
from app.schemas.database import DatabaseResponse
from app.services.database_service import (
    connect_database,
    list_user_databases,
)
from app.utils.dependencies import get_current_user
from app.services.database_service import (
    connect_database,
    list_user_databases,
    delete_database_connection,
    get_active_database,
)
from app.schemas.database import (
    DatabaseConnect,
    DatabaseResponse,
    RenameDatabase,
)

from app.services.database_service import (
    connect_database,
    list_user_databases,
    delete_database_connection,
    rename_database_connection,
    activate_database_connection,
)

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

@router.get("/active")
def active_database(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    database = get_active_database(
        current_user=current_user,
        db=db,
    )
    if database is None:
        return {
            "success": False,
            "database": None,
        }
    return {
        "success": True,
        "database": DatabaseResponse.model_validate(database),
    }

@router.get("/list")
def list_databases(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    databases = list_user_databases(
        current_user=current_user,
        db=db,
    )
    response = [
        DatabaseResponse.model_validate(database)
        for database in databases
    ]
    return {
        "success": True,
        "count": len(response),
        "databases": response,
    }

@router.delete("/{connection_id}")
def delete_database(
    connection_id: int = Path(..., gt=0),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    success, message = delete_database_connection(
        connection_id=connection_id,
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

@router.put("/{connection_id}")
def rename_database(
    connection_id: int,
    data: RenameDatabase,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    success, message = rename_database_connection(
        connection_id=connection_id,
        display_name=data.display_name,
        current_user=current_user,
        db=db,
    )
    return {
        "success": success,
        "message": message,
    }

@router.put("/{connection_id}/activate")
def activate_database(
    connection_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    success, message = activate_database_connection(
        connection_id=connection_id,
        current_user=current_user,
        db=db,
    )

    return {
        "success": success,
        "message": message,
    }