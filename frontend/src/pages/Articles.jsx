import { useMemo, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { useBlog } from "../context/BlogContext";

export default function Articles() {
  const { articles, categories, isLoading } = useBlog();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") return articles;
    return articles.filter((article) => article.category === activeCategory);
  }, [articles, activeCategory]);

  return (
    <div className="container">
      <div className="page-header">
        <span className="eyebrow">Artikel</span>

        <h1>
          Tulisan tentang kode, arsitektur, dan pengembangan web
        </h1>

        <p className="text-muted">
          Catatan dan tulisan singkat tentang membangun aplikasi web modern
          yang mudah dirawat.
        </p>
      </div>

      <div className="section" style={{ paddingTop: "var(--space-6)" }}>
        <div className="article-filters">
          <button
            className={
              activeCategory === "all"
                ? "filter-chip active"
                : "filter-chip"
            }
            onClick={() => setActiveCategory("all")}
          >
            Semua
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              className={
                activeCategory === category.id
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {isLoading ? (
          <Loading label="Memuat artikel" />
        ) : filteredArticles.length === 0 ? (
          <div className="state-msg">
            <p>Belum ada artikel dalam kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}