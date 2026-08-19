import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* =========================
            FOOTER MAIN
        ========================= */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Depal<span>.</span>
            </Link>

            <p>
              Software Engineer yang membangun aplikasi web
              yang bersih, cepat, dan mudah dikembangkan.
            </p>

            <a
              href="https://github.com/ardiyas37-glitch"
              target="_blank"
              rel="noreferrer"
              className="footer-github"
            >
              <span className="footer-github-icon">
                GH
              </span>

              <span>
                github.com/ardiyas37-glitch
              </span>

              <span className="footer-arrow">
                ↗
              </span>
            </a>
          </div>


          {/* Navigasi */}
          <div className="footer-nav">
            <span className="footer-heading">
              Navigasi
            </span>

            <Link to="/">
              Beranda
            </Link>

            <Link to="/about">
              Tentang Saya
            </Link>

            <Link to="/projects">
              Project
            </Link>

            <Link to="/articles">
              Artikel
            </Link>

            <Link to="/contact">
              Kontak
            </Link>
          </div>


          {/* Contact */}
          <div className="footer-contact">
            <span className="footer-heading">
              Hubungi Saya
            </span>

            <p>
              Punya project atau ide yang ingin
              dikembangkan?
            </p>

            <a
              href="mailto:ghdepalar@gmail.com"
              className="footer-email"
            >
              ghdepalar@gmail.com
              <span>↗</span>
            </a>
          </div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================= */}
        <div className="footer-bottom">

          <span>
            © 2026 Depal. Semua hak dilindungi.
          </span>

          <span>
            Built with React & FastAPI
          </span>

        </div>

      </div>
    </footer>
  );
}
