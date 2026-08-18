from pydantic import BaseModel


class Category(BaseModel):
    id: str
    name: str
    slug: str
    description: str
    icon: str
