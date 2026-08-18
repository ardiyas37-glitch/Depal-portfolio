from fastapi import APIRouter, Query
from app.services import database

router = APIRouter(prefix="/search", tags=["Search"])


@router.get("")
def search(q: str = Query("", description="Search term for articles")):
    """Search articles by title, excerpt, or category."""
    if not q.strip():
        return []
    return database.search_articles(q)
