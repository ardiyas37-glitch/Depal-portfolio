import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Saya", to: "/about" },
  { label: "Project", to: "/projects" },
  { label: "Artikel", to: "/articles" },
  { label: "Kategori", to: "/categories" },
  { label: "Kontak", to: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function linkClass({ isActive }) {
    return isActive ? "navbar-link active" : "navbar-link";
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={() => setIsOpen(false)}
        >
          Depal<span className="dot">.</span>
        </NavLink>

        <nav className="navbar-links" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-cta">
          <Button to="/contact" variant="secondary">
            Hubungi Saya
          </Button>

          <button
            type="button"
            className={isOpen ? "navbar-toggle open" : "navbar-toggle"}
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

      <nav
        className={
          isOpen
            ? "navbar-mobile open container"
            : "navbar-mobile container"
        }
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
      </nav>
    </header>
  );
}