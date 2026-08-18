from fastapi import APIRouter, HTTPException
from app.services import database

router = APIRouter(prefix="/authors", tags=["Authors"])


@router.get("")
def list_authors():
    """List all authors."""
    return database.get_all_authors()


@router.get("/{author_id}")
def get_author(author_id: str):
    """Get a single author by id."""
    author = database.get_author_by_id(author_id)
    if not author:
        raise HTTPException(status_code=404, detail="Author not found")
    return author
