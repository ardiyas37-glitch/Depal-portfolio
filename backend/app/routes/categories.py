from fastapi import APIRouter, HTTPException
from app.services import database

router = APIRouter(prefix="/categories", tags=["Categories"])


@router.get("")
def list_categories():
    """List all categories."""
    return database.get_all_categories()


@router.get("/{slug}")
def get_category(slug: str):
    """Get a single category by its slug."""
    category = database.get_category_by_slug(slug)
    if not category:
        raise HTTPException(status_code=404, detail="Category not found")
    return category
