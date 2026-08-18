import Button from "../components/Button";

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    place: "Freelance / Proyek Independen",
    period: "2024 — Sekarang",
    description:
      "Merancang dan membangun aplikasi web untuk tim kecil dan klien individu, mencakup antarmuka frontend, REST API, serta perancangan struktur basis data."
  },
  {
    role: "Web Developer",
    place: "Proyek Pribadi & Open Source",
    period: "2022 — 2024",
    description:
      "Membangun dan mengembangkan berbagai proyek pribadi untuk mempelajari praktik frontend dan backend modern, mulai dari arsitektur komponen hingga desain API."
  }
];

const TECH_STACK = [
  "JavaScript",
  "React",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Git",
  "Docker",
  "REST APIs"
];

export default function About() {
  return (
    <div className="container">
      <div className="page-header">
        <span className="eyebrow">Tentang</span>

        <h1>Depal</h1>

        <p className="text-muted" style={{ maxWidth: 640 }}>
          Software Engineer dan Full-Stack Developer yang berfokus pada
          membangun aplikasi web yang mudah dirawat dan siap berkembang.
        </p>
      </div>

      <div className="section about-grid grid grid-2">
        <div>
          <h2>Profil</h2>

          <p>
            Saya adalah full-stack developer yang bekerja di sisi frontend
            maupun backend aplikasi web — mulai dari membangun antarmuka
            menggunakan React hingga merancang REST API dengan FastAPI dan
            memodelkan data yang digunakan di dalamnya. Saya berusaha menulis
            kode yang tetap mudah dipahami seiring berkembangnya sebuah proyek,
            bukan hanya kode yang bisa berjalan hari ini.
          </p>

          <p>
            Sebagian besar pekerjaan saya berfokus pada pengembangan web
            modern: frontend berbasis komponen, desain API yang bersih, serta
            layanan kecil dengan struktur yang baik daripada sistem besar yang
            sulit dipahami.
          </p>

          <h2 style={{ marginTop: "var(--space-7)" }}>
            Filosofi Pengembangan
          </h2>

          <p>
            Perangkat lunak yang baik adalah perangkat lunak yang mudah diubah.
            Saya berusaha mengutamakan penamaan yang jelas, fungsi yang kecil,
            dan struktur yang konsisten daripada solusi yang terlalu rumit —
            tujuannya adalah menghasilkan kode yang dapat dipahami dan
            dilanjutkan oleh developer berikutnya, termasuk saya sendiri
            beberapa bulan kemudian, tanpa banyak kesulitan.
          </p>
        </div>

        <div>
          <h2>Pengalaman</h2>

          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <div key={item.role} className="timeline-item">
                <span className="timeline-period">{item.period}</span>

                <h3>{item.role}</h3>

                <span
                  className="text-muted"
                  style={{ fontSize: "var(--fs-sm)" }}
                >
                  {item.place}
                </span>

                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "var(--space-7)" }}>
            Teknologi yang Digunakan
          </h2>

          <div className="project-tech">
            {TECH_STACK.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section contact-cta">
        <div className="container contact-cta-inner">
          <div>
            <span className="eyebrow">Hubungi Saya</span>

            <h2>Tertarik untuk bekerja sama?</h2>

            <p>
              Saya terbuka untuk pekerjaan full-stack dan proyek freelance.
            </p>
          </div>

          <Button to="/contact">Hubungi Saya</Button>
        </div>
      </div>
    </div>
  );
}