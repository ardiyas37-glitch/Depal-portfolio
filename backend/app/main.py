from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routes import articles, categories, authors, search

app = FastAPI(
    title=settings.APP_NAME,
    description="REST API for the Depal full-stack developer portfolio (articles, categories, authors, search).",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(articles.router, prefix=settings.API_V1_PREFIX)
app.include_router(categories.router, prefix=settings.API_V1_PREFIX)
app.include_router(authors.router, prefix=settings.API_V1_PREFIX)
app.include_router(search.router, prefix=settings.API_V1_PREFIX)


@app.get("/")
def root():
    """Health check / API index."""
    return {
        "name": settings.APP_NAME,
        "status": "ok",
        "docs": "/docs",
        "endpoints": [
            f"{settings.API_V1_PREFIX}/articles",
            f"{settings.API_V1_PREFIX}/categories",
            f"{settings.API_V1_PREFIX}/authors",
            f"{settings.API_V1_PREFIX}/search",
        ],
    }
