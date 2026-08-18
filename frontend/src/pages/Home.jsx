import { useMemo } from "react";
import Button from "../components/Button";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { useBlog } from "../context/BlogContext";
import projects from "../data/projects";

const SKILLS = {
  Frontend: ["React", "JavaScript (ES2023)", "HTML5 / CSS3", "Vite"],
  Backend: ["Python", "FastAPI", "REST API Design", "Node.js"],
  Database: ["PostgreSQL", "MongoDB", "SQLite"],
  Tools: ["Git", "Docker", "Postman", "Figma"],
  Deployment: ["Vercel", "Render", "Nginx", "GitHub Actions"]
};

const SKILL_LABELS = {
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Basis Data",
  Tools: "Peralatan",
  Deployment: "Deployment"
};

export default function Home() {
  const { articles, isLoading } = useBlog();
  const featuredArticles = useMemo(() => articles.slice(0, 3), [articles]);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="section hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">
              Software Engineer · Full-Stack Developer
            </span>

            <h1>
              Membangun aplikasi web yang{" "}
              <span className="hero-highlight">
                rapi, cepat,
              </span>{" "}
              dan siap berkembang.
            </h1>

            <p className="hero-lede">
              Saya Depal, seorang full-stack developer yang berfokus pada
              pengembangan web modern — mengubah ide menjadi produk yang andal,
              mudah dirawat, dan dikembangkan mulai dari basis data hingga
              antarmuka.
            </p>

            <div className="hero-actions">
              <Button to="/articles">Lihat Proyek</Button>
              <Button to="/contact" variant="secondary">
                Hubungi Saya
              </Button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="code-window">
              <div className="code-window-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="code-window-title">developer.js</span>
              </div>

              <pre className="code-window-body">
                <code>{`const developer = {
  name: "Depal",
  role: "Full-Stack Developer",
  stack: ["React", "FastAPI", "PostgreSQL"],
  focus: "clean, scalable code",
  status: "available for work"
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pratinjau Tentang ---------- */}
      <section className="section about-preview">
        <div className="container about-preview-inner">
          <div>
            <span className="eyebrow">Tentang</span>
            <h2>
              Berfokus pada detail yang membuat perangkat lunak mudah dirawat.
            </h2>
          </div>

          <div>
            <p>
              Saya membangun aplikasi web modern dan skalabel secara menyeluruh
              — mulai dari arsitektur komponen di frontend hingga desain API
              dan pemodelan data di backend. Saya berfokus pada penulisan kode
              yang tetap mudah dibaca dan dikembangkan seiring bertumbuhnya
              sebuah proyek.
            </p>

            <Button to="/about" variant="ghost">
              Selengkapnya tentang saya →
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Keahlian ---------- */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Keahlian</span>
              <h2>Teknologi yang saya gunakan</h2>
            </div>
          </div>

          <div className="grid grid-3 skills-grid">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group} className="card skill-card">
                <h3>{SKILL_LABELS[group] || group}</h3>

                <ul className="skill-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proyek Unggulan ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Proyek Unggulan</span>
              <h2>Beberapa karya pilihan</h2>
            </div>
          </div>

          <div className="grid grid-3">
            {projects.map((project) => (
              <div key={project.id} className="card project-card">
                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo langsung →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Artikel ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Artikel</span>
              <h2>Tulisan tentang kode dan teknologi</h2>
            </div>

            <Button to="/articles" variant="ghost">
              Lihat semua artikel →
            </Button>
          </div>

          {isLoading ? (
            <Loading label="Memuat artikel" />
          ) : (
            <div className="grid grid-3">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- CTA Kontak ---------- */}
      <section className="section contact-cta">
        <div className="container contact-cta-inner">
          <div>
            <span className="eyebrow">Hubungi Saya</span>

            <h2>
              Punya proyek dalam pikiran? Mari kita bangun dengan baik.
            </h2>

            <p>
              Terbuka untuk pekerjaan full-stack dan kolaborasi freelance.
            </p>
          </div>

          <Button to="/contact">Hubungi Saya</Button>
        </div>
      </section>
    </>
  );
}