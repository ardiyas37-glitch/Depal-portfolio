export default function CertificateCard({ certificate, onView }) {
  const badge = `0${certificate.id.split("-")[1] || ""}`.slice(-2);
  const label = certificate.type || certificate.category || "SERTIFIKAT";
  const canView = Boolean(certificate.image);

  const handleView = () => {
    if (onView && canView) onView(certificate);
  };

  const handleKeyOnImage = (e) => {
    if ((e.key === "Enter" || e.key === " ") && canView) {
      e.preventDefault();
      handleView();
    }
  };

  return (
    <article className="certificate-card" data-number={badge}>
      <div className="certificate-shimmer" aria-hidden="true" />
      <button
        type="button"
        className="certificate-image"
        onClick={handleView}
        onKeyDown={handleKeyOnImage}
        aria-label={`Lihat preview ${certificate.title}`}
        disabled={!canView}
        tabIndex={canView ? 0 : -1}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          loading="lazy"
          decoding="async"
        />
        {canView && (
          <span className="certificate-image-overlay" aria-hidden="true">
            <span className="cert-overlay-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7"/>
              </svg>
              Lihat
            </span>
          </span>
        )}
      </button>

      <div className="certificate-content">
        <span className="certificate-type">{label}</span>

        <h2>{certificate.title}</h2>

        {certificate.description && (
          <p className="certificate-description">{certificate.description}</p>
        )}

        <div className="certificate-meta">
          <span className="cert-issuer">{certificate.issuer}</span>
          <span className="cert-date">{certificate.date}</span>
        </div>

        <div className="certificate-actions">
          <button
            type="button"
            className="cert-view-btn"
            onClick={handleView}
            disabled={!canView}
            aria-label={`View Certificate: ${certificate.title}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7"/>
            </svg>
            View Certificate
          </button>
          <span className="cert-view-hint" aria-hidden="true">Klik gambar untuk preview</span>
        </div>
      </div>
    </article>
  );
}
