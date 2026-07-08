from datetime import datetime
from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from app.config.database import Base


class DatabaseConnection(Base):
    __tablename__ = "database_connections"
    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    display_name = Column(
        String,
        nullable=False,
    )

    db_type = Column(
        String,
        nullable=False,
    )

    host = Column(
        String,
        nullable=False,
    )

    port = Column(
        Integer,
        nullable=False,
    )

    database_name = Column(
        String,
        nullable=False,
    )

    username = Column(
        String,
        nullable=False,
    )

    password = Column(
        String,
        nullable=False,
    )

    schema = Column(
        Text,
        nullable=True,
    )

    is_active = Column(
        Boolean,
        default=False,
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )