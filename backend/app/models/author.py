from pydantic import BaseModel, EmailStr
from typing import Optional


class Author(BaseModel):
    id: str
    name: str
    role: str
    bio: Optional[str] = None
    email: Optional[EmailStr] = None
    github: Optional[str] = None
    linkedin: Optional[str] = None


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
