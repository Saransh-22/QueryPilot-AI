from sqlalchemy import create_engine
from sqlalchemy import text

def test_connection(data):
    connection_url = (
        f"postgresql://{data.username}:{data.password}"
        f"@{data.host}:{data.port}/{data.database_name}"
    )

    try:
        engine = create_engine(connection_url)
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        return True, "Connection Successful"

    except Exception as e:
        return False, str(e)