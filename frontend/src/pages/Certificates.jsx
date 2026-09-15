import { useCallback, useEffect, useState } from "react";
import certificates from "../data/certificates";
import CertificateCard from "../components/CertificateCard";
import Reveal from "../components/Reveal";
import "../styles/certificates.css";

export default function Certificates() {
  const [active, setActive] = useState(null);

  const open = useCallback((cert) => setActive(cert), []);
  const close = useCallback(() => setActive(null), []);

  // ESC to close + lock body scroll when lightbox open
  useEffect(() => {
    if (!active) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <div className="certificates-page">
      {/* HERO — konsisten dengan page-header di Projects */}
      <div className="container">
        <Reveal as="section" className="certificates-intro" y={18}>
          <span className="certificates-eyebrow hero-stagger-1">SERTIFIKAT</span>
          <h1 className="hero-stagger-2">
            Sertifikat &<br />
            Pencapaian.
          </h1>
          <p className="hero-stagger-3">
            Koleksi sertifikat dan pencapaian dari perjalanan belajar dan pengembangan skill saya.
            Klik gambar atau tombol <em>View Certificate</em> untuk melihat preview lebih jelas.
          </p>
        </Reveal>
      </div>

      {/* GRID — modern, clean, responsive */}
      <section className="certificates-list">
        <div className="certificates-list-header">
          <span>MY CERTIFICATES</span>
          <span>{String(certificates.length).padStart(2, "0")} SERTIFIKAT</span>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, i) => (
            <Reveal
              key={certificate.id}
              as="div"
              y={22}
              delay={i * 70}
              threshold={0.12}
              className="reveal-cert-wrap"
            >
              <CertificateCard certificate={certificate} onView={open} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIGHTBOX / MODAL — image preview */}
      {active && (
        <div
          className="cert-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${active.title}`}
          onClick={close}
        >
          <div
            className="cert-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cert-lightbox-close"
              onClick={close}
              aria-label="Tutup preview"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="cert-lightbox-media">
              <img src={active.image} alt={active.title} />
            </div>

            <div className="cert-lightbox-meta">
              <span className="cert-lightbox-kicker">
                {active.category || active.type} • {active.issuer} • {active.date}
              </span>
              <h3>{active.title}</h3>
              {active.description && <p>{active.description}</p>}
              <a
                href={active.image}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary cert-lightbox-link"
              >
                Buka gambar asli →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
