from sqlmodel import SQLModel, Field
from typing import Optional


class Contact(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(max_length=255, nullable=True)
    title: str = Field(max_length=255, nullable=False)
    company: str = Field(max_length=500, nullable=True)
    linkedin_url: Optional[str] = Field(default=None, max_length=255, index=True)
    message: Optional[str] = Field(default=None)
    def __repr__(self):
        return f"<Contact(name='{self.name}', title='{self.title}', company='{self.company}')>"