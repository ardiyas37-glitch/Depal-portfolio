import { Link } from "react-router-dom";

export default function CategoryCard({ category, count = 0 }) {
  return (
    <Link
      to={`/categories/${category.slug}`}
      className="card category-card"
    >
      <div className="category-icon">{category.icon}</div>

      <h3>{category.name}</h3>

      <p>{category.description}</p>

      <span className="category-count">
        {count} artikel
      </span>
    </Link>
  );
}