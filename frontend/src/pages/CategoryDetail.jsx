import { Link, useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { useBlog } from "../context/BlogContext";

export default function CategoryDetail() {
  const { slug } = useParams();
  const { categories, articles, isLoading } = useBlog();

  const category = categories.find((item) => item.slug === slug);
  const categoryArticles = articles.filter(
    (article) => article.category === slug
  );

  if (isLoading) {
    return (
      <div className="container">
        <Loading label="Memuat kategori" />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container state-msg">
        <span className="eyebrow">404</span>
        <h2>Kategori tidak ditemukan</h2>

        <Link to="/categories" className="btn btn-secondary">
          Kembali ke kategori
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="category-detail-header">
        <span className="eyebrow">Kategori</span>

        <h1>{category.name}</h1>

        <p
          className="text-muted"
          style={{ maxWidth: 560, margin: "0 auto" }}
        >
          {category.description}
        </p>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        {categoryArticles.length === 0 ? (
          <div className="state-msg">
            <p>Belum ada artikel dalam kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-3">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}