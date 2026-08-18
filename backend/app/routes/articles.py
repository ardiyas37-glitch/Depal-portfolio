from fastapi import APIRouter, HTTPException
from app.services import database

router = APIRouter(prefix="/articles", tags=["Articles"])


@router.get("")
def list_articles(category: str | None = None):
    """List all articles, optionally filtered by category id."""
    if category:
        return database.get_articles_by_category(category)
    return database.get_all_articles()


@router.get("/{slug}")
def get_article(slug: str):
    """Get a single article by its slug."""
    article = database.get_article_by_slug(slug)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    return article
