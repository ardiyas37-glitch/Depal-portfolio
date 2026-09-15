import { Link } from "react-router-dom";

function NavIcon({ name }) {
  const icons = {
    home: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12L5 10M5 10L12 3L19 10M19 10L21 12M12 3V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    user: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M5 21v-1a7 7 0 0114 0v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    code: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    document: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    mail: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.7"/>
        <polyline points="22 4 12 13 2 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

function SocialIcon({ name }) {
  const icons = {
    github: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" stroke="currentColor" strokeWidth="1.8"/>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
      </svg>
    ),
    telegram: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M11.572 23.64l-2.58-8.08L3.5 17.5l8.07-2.58L22.43 3.2l-3.63 4.47L6.34 18.32l3.6-1.68z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* =========================
            FOOTER MAIN — 3 COL
        ========================= */}
        <div className="footer-main footer-stagger">

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
              <span className="footer-github-icon">GH</span>
              <span>github.com/ardiyas37-glitch</span>
              <span className="footer-arrow">↗</span>
            </a>
          </div>

          {/* Navigasi */}
          <div className="footer-nav">
            <span className="footer-heading">Navigasi</span>

            <Link to="/" className="footer-nav-link">
              <NavIcon name="home" />
              Beranda
            </Link>

            <Link to="/about" className="footer-nav-link">
              <NavIcon name="user" />
              Tentang Saya
            </Link>

            <Link to="/projects" className="footer-nav-link">
              <NavIcon name="code" />
              Project
            </Link>

            <Link to="/articles" className="footer-nav-link">
              <NavIcon name="document" />
              Artikel
            </Link>

            <Link to="/contact" className="footer-nav-link">
              <NavIcon name="mail" />
              Kontak
            </Link>
          </div>

          {/* Hubungi Saya */}
          <div className="footer-contact">
            <span className="footer-heading">Hubungi Saya</span>

            <div className="footer-contact-card">
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

        </div>

        {/* =========================
            FOOTER BOTTOM
        ========================= */}
        <div className="footer-bottom">
          <span className="footer-bottom-left">
            © 2026 Depal. Semua hak dilindungi.
          </span>

          <span className="footer-bottom-right">
            <a
              href="https://github.com/ardiyas37-glitch"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
            >
              <SocialIcon name="github" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <SocialIcon name="instagram" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <SocialIcon name="linkedin" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="YouTube"
            >
              <SocialIcon name="youtube" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              aria-label="Telegram"
            >
              <SocialIcon name="telegram" />
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
