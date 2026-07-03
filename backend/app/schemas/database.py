from pydantic import BaseModel


class DatabaseConnect(BaseModel):
    db_type: str
    host: str
    port: int
    database_name: str
    username: str
    password: str