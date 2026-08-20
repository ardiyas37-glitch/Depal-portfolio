import certificates from "../data/certificates";
import CertificateCard from "../components/CertificateCard";
import "../styles/certificates.css";

export default function Certificates() {
  return (
    <main className="certificates-page">
      <section className="certificates-intro">
        <span className="certificates-eyebrow">
          SERTIFIKAT
        </span>

        <h1>
          Sertifikat &
          <br />
          Pencapaian.
        </h1>

        <p>
          Koleksi sertifikat dan pencapaian
          dari perjalanan belajar dan
          pengembangan skill saya.
        </p>
      </section>

      <section className="certificates-list">
        <div className="certificates-list-header">
          <span>MY CERTIFICATES</span>
          <span>{certificates.length} SERTIFIKAT</span>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </section>
    </main>
  );
}