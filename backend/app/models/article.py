from pydantic import BaseModel
from typing import List


class Article(BaseModel):
    id: str
    slug: str
    title: str
    excerpt: str
    category: str
    author: str
    date: str
    readTime: str
    coverLabel: str
    content: List[str]
