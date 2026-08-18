# Depal — Full-Stack Developer Portfolio

A professional personal portfolio for **Depal**, a Software Engineer / Full-Stack Developer. Built as a React + Vite frontend backed by a FastAPI REST API, with an integrated articles/blog section to showcase writing on programming, web development, and software engineering.

The frontend works fully on its own using local dummy data, and automatically switches to the FastAPI backend when it's running — no code changes required either way.

## Tech stack

**Frontend**
- React 18 + Vite
- React Router v6
- Modular CSS (no CSS framework) with a token-based design system
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels)

**Backend**
- Python 3.10+
- FastAPI
- Pydantic models
- In-memory data service (swappable for a real database later)

## Project structure

```
Portofolio/
├── frontend/            React + Vite application
│   ├── public/           Static assets served as-is
│   └── src/
│       ├── assets/        Local images/icons
│       ├── components/    Reusable UI components (Navbar, Footer, cards, etc.)
│       ├── pages/         Route-level pages
│       ├── layouts/       Shared page layout (Navbar + Footer wrapper)
│       ├── services/      api.js — API client with local-data fallback
│       ├── context/       BlogContext — shared articles/categories state
│       ├── data/          Dummy data (articles, categories, projects)
│       └── styles/        Modular CSS files
│
├── backend/              FastAPI application
│   └── app/
│       ├── models/         Pydantic schemas (Article, Category, Author)
│       ├── routes/         API route modules (articles, categories, authors, search)
│       ├── services/       In-memory data store / query functions
│       ├── config.py       Environment-driven settings
│       └── main.py         FastAPI app instance and router wiring
│
├── README.md
└── .gitignore
```

## Running the frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`. It works immediately with local dummy data — the backend is optional.

To point the frontend at a running backend, create `frontend/.env`:

```
VITE_API_BASE_URL=http://localhost:8000/api
```

## Running the backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API runs at `http://localhost:8000`. Interactive docs are available at `http://localhost:8000/docs`.

## Environment variables

**backend/.env**

| Variable        | Description                                  | Default                                              |
|-----------------|-----------------------------------------------|-------------------------------------------------------|
| `ENVIRONMENT`   | `development` or `production`                | `development`                                          |
| `CORS_ORIGINS`  | Comma-separated list of allowed origins       | `http://localhost:5173,http://127.0.0.1:5173`          |
| `DATABASE_URL`  | Reserved for a future real database connection| `sqlite:///./depal.db`                                  |

**frontend/.env** (optional)

| Variable              | Description                          | Default                          |
|-----------------------|---------------------------------------|------------------------------------|
| `VITE_API_BASE_URL`   | Base URL for the FastAPI backend      | `http://localhost:8000/api`        |

## API endpoints

Base path: `/api`

| Method | Endpoint                  | Description                                  |
|--------|----------------------------|-----------------------------------------------|
| GET    | `/api/articles`            | List all articles (optional `?category=` filter) |
| GET    | `/api/articles/{slug}`     | Get a single article by slug                  |
| GET    | `/api/categories`          | List all categories                           |
| GET    | `/api/categories/{slug}`   | Get a single category by slug                 |
| GET    | `/api/authors`             | List all authors                              |
| GET    | `/api/authors/{id}`        | Get a single author by id                     |
| GET    | `/api/search?q=`           | Search articles by title, excerpt, or category|

If the backend is unreachable, the frontend transparently falls back to the local data in `frontend/src/data/`, so the UI always has content to display.

## Notes

- All data (articles, projects, categories) is realistic dummy content for demonstration — no fabricated statistics or claims.
- Design follows a professional minimalist direction: neutral surfaces, a single signal-blue accent, restrained motion, and a code-inspired hero element (a terminal-style code window in the hero).
