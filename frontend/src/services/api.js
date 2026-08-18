import localArticles from "../data/articles";
import localCategories from "../data/categories";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

/**
 * Small fetch wrapper. Any failure (backend not running, network error,
 * non-2xx response) throws, and callers fall back to local dummy data
 * so the UI keeps working without the backend.
 */
async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getArticles() {
  try {
    return await request("/articles");
  } catch {
    return localArticles;
  }
}

export async function getArticleBySlug(slug) {
  try {
    return await request(`/articles/${slug}`);
  } catch {
    return localArticles.find((article) => article.slug === slug) || null;
  }
}

export async function getCategories() {
  try {
    return await request("/categories");
  } catch {
    return localCategories;
  }
}

export async function getCategoryBySlug(slug) {
  try {
    return await request(`/categories/${slug}`);
  } catch {
    return localCategories.find((category) => category.slug === slug) || null;
  }
}

export async function searchArticles(query) {
  try {
    return await request(`/search?q=${encodeURIComponent(query)}`);
  } catch {
    const lowerQuery = query.toLowerCase();
    return localArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerQuery) ||
        article.excerpt.toLowerCase().includes(lowerQuery) ||
        article.category.toLowerCase().includes(lowerQuery)
    );
  }
}

export async function submitContactMessage(payload) {
  try {
    return await request("/contact", {
      method: "POST",
      body: JSON.stringify(payload)
    });
  } catch {
    // No backend available: resolve locally so the UI can still confirm submission.
    return { success: true, offline: true };
  }
}
