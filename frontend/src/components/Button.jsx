import { Link } from "react-router-dom";

/**
 * Reusable Button. Renders a <Link> when `to` is provided, otherwise a <button>.
 * variant: "primary" | "secondary" | "ghost"
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  ...rest
}) {
  const className = `btn btn-${variant}`;

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
}
