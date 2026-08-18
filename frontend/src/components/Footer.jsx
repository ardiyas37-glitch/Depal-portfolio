import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="navbar-logo">
            Depal<span className="dot">.</span>
          </span>

          <p>
            Software Engineer yang membangun aplikasi web yang bersih,
            cepat, dan mudah dikembangkan.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="footer-col-title">Situs</span>

            <Link to="/">Beranda</Link>
            <Link to="/about">Tentang</Link>
            <Link to="/articles">Artikel</Link>
            <Link to="/contact">Kontak</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Temukan Saya</span>

            <a
              href="https://github.com/depal"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/depal"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:hello@depal.dev">
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {YEAR} Depal. Semua hak dilindungi.
        </span>

        <span className="text-muted">
          Dibangun dengan React &amp; FastAPI
        </span>
      </div>
    </footer>
  );
}