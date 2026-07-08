import json
from sqlalchemy import create_engine
from sqlalchemy import text
from sqlalchemy.orm import Session
from app.llm.schema_reader import read_schema
from app.models.database_connection import DatabaseConnection

def connect_database(
    data,
    current_user,
    db: Session,
):
    existing_connection = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.user_id == current_user.id,
            DatabaseConnection.host == data.host,
            DatabaseConnection.port == data.port,
            DatabaseConnection.database_name == data.database_name,
            DatabaseConnection.username == data.username,
        )
        .first()
    )

    if existing_connection:
        return False, "Database is already connected."
    
    connection_url = (
        f"postgresql://{data.username}:{data.password}"
        f"@{data.host}:{data.port}/{data.database_name}"
    )

    try:
        engine = create_engine(connection_url)
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        schema = read_schema(engine)
        schema_json = json.dumps(schema)
        existing_connections = (
            db.query(DatabaseConnection)
            .filter(DatabaseConnection.user_id == current_user.id)
            .count()
        )

        new_connection = DatabaseConnection(
            user_id=current_user.id,
            display_name=data.database_name,
            db_type=data.db_type,
            host=data.host,
            port=data.port,
            database_name=data.database_name,
            username=data.username,
            password=data.password,
            schema=schema_json,
            is_active=(existing_connections == 0),
        )

        db.add(new_connection)
        db.commit()
        db.refresh(new_connection)
        return True, "Database Connected Successfully"

    except Exception as e:
        db.rollback()
        return False, str(e)


def list_user_databases(
    current_user,
    db: Session,
):
    databases = (
        db.query(DatabaseConnection)
        .filter(DatabaseConnection.user_id == current_user.id)
        .order_by(DatabaseConnection.created_at.desc())
        .all()
    )
    return databases

def get_active_database(
    current_user,
    db: Session,
):
    active_database = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.user_id == current_user.id,
            DatabaseConnection.is_active == True,
        )
        .first()
    )
    return active_database

def delete_database_connection(
    connection_id: int,
    current_user,
    db: Session,
):
    connection = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.id == connection_id,
            DatabaseConnection.user_id == current_user.id,
        )
        .first()
    )
    if connection is None:
        return False, "Database connection not found."

    was_active = connection.is_active
    db.delete(connection)
    db.commit()

    if was_active:
        next_connection = (
            db.query(DatabaseConnection)
            .filter(DatabaseConnection.user_id == current_user.id)
            .order_by(DatabaseConnection.created_at.desc())
            .first()
        )

        if next_connection:
            next_connection.is_active = True
            db.commit()

    return True, "Database connection deleted successfully."

def rename_database_connection(
    connection_id: int,
    display_name: str,
    current_user,
    db: Session,
):
    connection = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.id == connection_id,
            DatabaseConnection.user_id == current_user.id,
        )
        .first()
    )
    if connection is None:
        return False, "Database connection not found."

    connection.display_name = display_name
    db.commit()
    return True, "Database renamed successfully."

def activate_database_connection(
    connection_id: int,
    current_user,
    db: Session,
):
    connection = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.id == connection_id,
            DatabaseConnection.user_id == current_user.id,
        )
        .first()
    )

    if connection is None:
        return False, "Database connection not found."

    (
        db.query(DatabaseConnection)
        .filter(DatabaseConnection.user_id == current_user.id)
        .update({"is_active": False})
    )
    connection.is_active = True
    db.commit()
    return True, "Database activated successfully."