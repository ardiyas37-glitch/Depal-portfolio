import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <article className="card article-card">
      <div className="article-card-meta">
        <span className="tag">
          {article.coverLabel || article.category}
        </span>

        <span>{article.readTime}</span>
      </div>

      <h3>{article.title}</h3>

      <p>{article.excerpt}</p>

      <div className="article-card-footer">
        <span
          className="text-muted"
          style={{ fontSize: "var(--fs-xs)" }}
        >
          {new Date(article.date).toLocaleDateString("id-ID", {
            month: "short",
            day: "numeric",
            year: "numeric"
          })}
        </span>

        <Link
          to={`/articles/${article.slug}`}
          className="article-read-link"
        >
          Baca artikel →
        </Link>
      </div>
    </article>
  );
}