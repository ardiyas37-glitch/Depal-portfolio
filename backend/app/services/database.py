"""
Lightweight in-memory data store.

This keeps the backend runnable out of the box without requiring a real
database to be provisioned first. Swap the functions below for real
queries (SQLAlchemy, an ORM, etc.) once a database is connected —
the route layer only depends on this module's function signatures.
"""

CATEGORIES = [
    {
        "id": "javascript",
        "name": "JavaScript",
        "slug": "javascript",
        "description": "Language fundamentals, patterns, and modern ES features used in day-to-day development.",
        "icon": "JS"
    },
    {
        "id": "react",
        "name": "React",
        "slug": "react",
        "description": "Component architecture, hooks, state management, and performance in React apps.",
        "icon": "RX"
    },
    {
        "id": "backend",
        "name": "Backend",
        "slug": "backend",
        "description": "API design, authentication, and server-side architecture for web applications.",
        "icon": "BE"
    },
    {
        "id": "python",
        "name": "Python",
        "slug": "python",
        "description": "Python for web services, tooling, and automation, mostly around FastAPI.",
        "icon": "PY"
    },
    {
        "id": "web-development",
        "name": "Web Development",
        "slug": "web-development",
        "description": "General practices for building fast, accessible, and maintainable websites.",
        "icon": "WD"
    },
    {
        "id": "software-engineering",
        "name": "Software Engineering",
        "slug": "software-engineering",
        "description": "Process, architecture decisions, and lessons on writing code that scales with a team.",
        "icon": "SE"
    }
]

ARTICLES = [
    {
        "id": "1",
        "slug": "structuring-scalable-react-projects",
        "title": "Structuring Scalable React Projects",
        "excerpt": "A practical folder and component structure that stays readable once a React codebase grows past a handful of pages.",
        "category": "react",
        "author": "Depal",
        "date": "2026-06-02",
        "readTime": "6 min read",
        "coverLabel": "REACT",
        "content": [
            "Most React projects start clean and become difficult to navigate within a few months. The usual cause isn't the framework, it's a folder structure that grew reactively instead of intentionally.",
            "A structure that separates pages, reusable components, layouts, and data access tends to hold up well. Pages own layout and data fetching for a single route. Components stay presentational and reusable.",
            "Context should be used sparingly, for state that many unrelated components genuinely need. Local state, kept inside the component that owns it, is easier to reason about than state pushed up prematurely.",
            "None of this is unique to React. The same separation shows up in most frontend frameworks. What changes is the syntax, not the underlying discipline."
        ]
    },
    {
        "id": "2",
        "slug": "designing-rest-apis-with-fastapi",
        "title": "Designing REST APIs with FastAPI",
        "excerpt": "Notes on structuring FastAPI routes, models, and services so an API stays predictable as endpoints multiply.",
        "category": "python",
        "author": "Depal",
        "date": "2026-05-18",
        "readTime": "7 min read",
        "coverLabel": "PYTHON",
        "content": [
            "FastAPI rewards a clear separation between routing, data models, and business logic. Routes should describe what an endpoint does, not how the data is stored or validated.",
            "Pydantic models double as documentation. Naming request and response models explicitly makes the API's contract obvious from the code alone.",
            "A thin service layer between routes and the database keeps route handlers short, and reusable if a second interface needs the same logic later.",
            "FastAPI's automatic OpenAPI docs are only as useful as the type hints behind them."
        ]
    },
    {
        "id": "3",
        "slug": "javascript-closures-explained-simply",
        "title": "JavaScript Closures, Explained Simply",
        "excerpt": "Closures show up everywhere in JavaScript, from event handlers to hooks. Here's a grounded way to think about them.",
        "category": "javascript",
        "author": "Depal",
        "date": "2026-04-27",
        "readTime": "5 min read",
        "coverLabel": "JS",
        "content": [
            "A closure is a function that remembers the variables from where it was created, even after that outer function has finished running.",
            "This is why a counter function can keep its own count without a global variable, and why hooks like useState can persist a value between renders.",
            "The common pitfall is closures inside loops capturing a shared variable instead of a fresh one per iteration. Using let instead of var avoids that trap.",
            "Understanding closures makes a lot of 'magic' in JavaScript libraries stop feeling like magic."
        ]
    },
    {
        "id": "4",
        "slug": "what-makes-an-api-actually-scalable",
        "title": "What Makes an API Actually Scalable",
        "excerpt": "Scalability is often treated as a performance problem, but most of it comes down to how a service is designed to change.",
        "category": "backend",
        "author": "Depal",
        "date": "2026-04-09",
        "readTime": "8 min read",
        "coverLabel": "BACKEND",
        "content": [
            "Traffic capacity is one part of scalability, but the more common failure is a service that can't change without breaking its consumers.",
            "Statelessness helps horizontal scaling, but it also simplifies debugging: a failed request can be retried anywhere without side effects.",
            "Caching should be added where data is read far more often than it changes, not everywhere by default.",
            "Scalable doesn't mean handling more requests. It means the system can absorb new requirements without a rewrite."
        ]
    },
    {
        "id": "5",
        "slug": "clean-code-is-a-habit-not-a-rulebook",
        "title": "Clean Code Is a Habit, Not a Rulebook",
        "excerpt": "Naming, function size, and consistency matter more day to day than most of the rules found in style guides.",
        "category": "software-engineering",
        "author": "Depal",
        "date": "2026-03-22",
        "readTime": "6 min read",
        "coverLabel": "ENG",
        "content": [
            "Clean code guides often turn into checklists, but most of what makes code easy to work with comes down to a few habits repeated consistently.",
            "A function name should describe what it does well enough that reading its body becomes optional most of the time.",
            "Consistency across a codebase matters more than any single rule being 'correct'.",
            "Clean code is about respecting the next person who has to read the code, which is often a future version of the same developer."
        ]
    },
    {
        "id": "6",
        "slug": "performance-basics-for-modern-web-apps",
        "title": "Performance Basics for Modern Web Apps",
        "excerpt": "A short list of the performance habits that matter most before reaching for more advanced optimization.",
        "category": "web-development",
        "author": "Depal",
        "date": "2026-03-05",
        "readTime": "5 min read",
        "coverLabel": "WEB",
        "content": [
            "Before advanced techniques, a handful of basics account for most real-world performance issues: unoptimized images, unnecessary re-renders, and render-blocking scripts.",
            "Loading only what a page needs, and deferring the rest, tends to have a bigger impact than micro-optimizing code that already runs fast.",
            "Measuring before optimizing avoids fixing problems that don't exist.",
            "Fast is a feature. Users notice a slow interface even when they can't articulate why something feels off."
        ]
    },
    {
        "id": "7",
        "slug": "state-management-without-overengineering",
        "title": "State Management Without Overengineering",
        "excerpt": "Not every app needs a global store. A practical look at when local state, context, and external libraries each make sense.",
        "category": "react",
        "author": "Depal",
        "date": "2026-02-14",
        "readTime": "6 min read",
        "coverLabel": "REACT",
        "content": [
            "The instinct to reach for a state management library early often adds complexity a project doesn't need yet.",
            "Context is a good fit for state that's genuinely shared and changes infrequently, like theme or authenticated user.",
            "External state libraries earn their place when an app has complex, interdependent state shared across many unrelated parts of the UI.",
            "The right amount of state management is the smallest amount that keeps the code easy to follow."
        ]
    },
    {
        "id": "8",
        "slug": "writing-python-services-that-age-well",
        "title": "Writing Python Services That Age Well",
        "excerpt": "Type hints, clear module boundaries, and small dependencies keep a Python service maintainable years later.",
        "category": "python",
        "author": "Depal",
        "date": "2026-01-27",
        "readTime": "7 min read",
        "coverLabel": "PYTHON",
        "content": [
            "Python's flexibility is convenient early and costly later if a codebase doesn't establish boundaries. Type hints catch a meaningful share of bugs before runtime.",
            "Keeping modules focused on one responsibility makes it easier to change one part without understanding the whole service.",
            "Dependencies are a maintenance cost, not just a convenience.",
            "A service that ages well is one where technical debt is visible, contained, and easy to reason about."
        ]
    }
]

AUTHORS = [
    {
        "id": "depal",
        "name": "Depal",
        "role": "Software Engineer / Full-Stack Developer",
        "bio": "Full-stack developer focused on building clean, scalable web applications with React and FastAPI.",
        "email": "hello@depal.dev",
        "github": "https://github.com/depal",
        "linkedin": "https://linkedin.com/in/depal"
    }
]


def get_all_articles():
    return ARTICLES


def get_article_by_slug(slug: str):
    return next((a for a in ARTICLES if a["slug"] == slug), None)


def get_articles_by_category(category_id: str):
    return [a for a in ARTICLES if a["category"] == category_id]


def get_all_categories():
    return CATEGORIES


def get_category_by_slug(slug: str):
    return next((c for c in CATEGORIES if c["slug"] == slug), None)


def get_all_authors():
    return AUTHORS


def get_author_by_id(author_id: str):
    return next((a for a in AUTHORS if a["id"] == author_id), None)


def search_articles(query: str):
    query_lower = query.lower()
    return [
        a for a in ARTICLES
        if query_lower in a["title"].lower()
        or query_lower in a["excerpt"].lower()
        or query_lower in a["category"].lower()
    ]
