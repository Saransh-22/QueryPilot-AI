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

        new_connection = DatabaseConnection(
            user_id=current_user.id,
            db_type=data.db_type,
            host=data.host,
            port=data.port,
            database_name=data.database_name,
            username=data.username,
            password=data.password,
            schema=schema_json,
        )

        db.add(new_connection)
        db.commit()
        db.refresh(new_connection)
        return True, "Database Connected Successfully"

    except Exception as e:
        db.rollback()
        return False, str(e)