import CategoryCard from "../components/CategoryCard";
import Loading from "../components/Loading";
import { useBlog } from "../context/BlogContext";

export default function Categories() {
  const { categories, articles, isLoading } = useBlog();

  function countFor(categoryId) {
    return articles.filter((article) => article.category === categoryId).length;
  }

  return (
    <div className="container">
      <div className="page-header">
        <span className="eyebrow">Kategori</span>

        <h1>Jelajahi berdasarkan topik</h1>

        <p className="text-muted">
          Artikel yang dikelompokkan berdasarkan teknologi dan topik yang
          dibahas.
        </p>
      </div>

      <div className="section" style={{ paddingTop: "var(--space-6)" }}>
        {isLoading ? (
          <Loading label="Memuat kategori" />
        ) : (
          <div className="grid grid-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                count={countFor(category.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}