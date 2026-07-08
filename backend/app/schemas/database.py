from datetime import datetime
from pydantic import BaseModel
from pydantic import ConfigDict

class DatabaseConnect(BaseModel):
    db_type: str
    host: str
    port: int
    database_name: str
    username: str
    password: str

class RenameDatabase(BaseModel):
    display_name: str

class DatabaseResponse(BaseModel):
    id: int
    display_name: str
    db_type: str
    host: str
    port: int
    database_name: str
    is_active: bool
    created_at: datetime
    model_config = ConfigDict(
        from_attributes=True,
    )