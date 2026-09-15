import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import FullscreenButton from "./FullscreenButton";

const NAV_ITEMS = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Saya", to: "/about" },
  { label: "Project", to: "/projects" },
  { label: "Sertifikat", to: "/certificates" },
  { label: "Artikel", to: "/articles" },
  { label: "Kategori", to: "/categories" },
  { label: "Kontak", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function linkClass({ isActive }) {
    return isActive ? "navbar-link active" : "navbar-link";
  }

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : ""} navbar-stagger`}
      >
        <div className="container navbar-inner">
          <NavLink
            to="/"
            className="navbar-logo"
            onClick={() => setIsOpen(false)}
          >
            Depal<span className="dot">.</span>
          </NavLink>

          <nav
            className="navbar-links"
            aria-label="Navigasi utama"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar-cta">
            <FullscreenButton />
            <button
              type="button"
              className={
                isOpen ? "navbar-toggle open" : "navbar-toggle"
              }
              aria-label="Buka menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={
          isOpen ? "navbar-mobile-overlay open" : "navbar-mobile-overlay"
        }
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={isOpen ? "navbar-mobile open" : "navbar-mobile"}
        aria-label="Navigasi mobile"
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}

        <div className="navbar-mobile-footer">
          <Button to="/contact" variant="secondary">
            Hubungi Saya
          </Button>
        </div>
      </nav>
    </>
  );
}
