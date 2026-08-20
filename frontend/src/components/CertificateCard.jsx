export default function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card">

      <div className="certificate-image">
        <img
          src={certificate.image}
          alt={certificate.title}
          loading="lazy"
        />
      </div>

      <div className="certificate-content">

        <span className="certificate-type">
          {certificate.type}
        </span>

        <h2>
          {certificate.title}
        </h2>

        {certificate.description && (
          <p className="certificate-description">
            {certificate.description}
          </p>
        )}

        <div className="certificate-meta">
          <span>
            {certificate.issuer}
          </span>

          <span>
            {certificate.date}
          </span>
        </div>

      </div>

    </article>
  );
}