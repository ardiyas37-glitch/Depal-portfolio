import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { useBlog } from "../context/BlogContext";
import { getArticleBySlug } from "../services/api";

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { articles } = useBlog();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);

    getArticleBySlug(slug)
      .then((data) => {
        if (isMounted) {
          setArticle(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setArticle(null);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  function handleBack() {
    navigate(-1);
  }

  if (isLoading) {
    return (
      <div className="container">
        <Loading label="Memuat artikel" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container state-msg">
        <span className="eyebrow">404</span>

        <h2>Artikel tidak ditemukan</h2>

        <Link to="/articles" className="btn btn-secondary">
          ← Kembali ke artikel
        </Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(
      (item) =>
        item.category === article.category &&
        item.slug !== article.slug
    )
    .slice(0, 3);

  return (
    <div className="container">
      {/* Tombol kembali */}
      <div className="article-back">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={handleBack}
        >
          ← Kembali
        </button>
      </div>

      {/* Header artikel */}
      <div className="article-detail-header">
        <span className="tag">
          {article.coverLabel || article.category}
        </span>

        <h1 style={{ marginTop: "var(--space-4)" }}>
          {article.title}
        </h1>

        <div className="article-card-meta">
          <span>{article.author}</span>

          <span>·</span>

          <span>
            {new Date(article.date).toLocaleDateString("id-ID", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          <span>·</span>

          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Isi artikel */}
      <div className="article-detail-body">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Artikel terkait */}
      {relatedArticles.length > 0 && (
        <div className="related-articles">
          <h2>Artikel terkait</h2>

          <div className="grid grid-3">
            {relatedArticles.map((related) => (
              <ArticleCard
                key={related.id}
                article={related}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
