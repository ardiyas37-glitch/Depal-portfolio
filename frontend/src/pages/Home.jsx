import { useMemo } from "react";
import Button from "../components/Button";
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import { useBlog } from "../context/BlogContext";
import projects from "../data/projects";

const SKILLS = {
  Frontend: [
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/61DAFB"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E"
    },
    {
      name: "HTML5",
      icon: "https://cdn.simpleicons.org/html5/E34F26"
    },
    {
      name: "CSS3",
      icon: "https://cdn.simpleicons.org/css3/1572B6"
    },
    {
      name: "Vite",
      icon: "https://cdn.simpleicons.org/vite/646CFF"
    }
  ],

  Backend: [
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python/3776AB"
    },
    {
      name: "FastAPI",
      icon: "https://cdn.simpleicons.org/fastapi/009688"
    },
    {
      name: "REST API",
      icon: "https://cdn.simpleicons.org/openapi/6BA539"
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs/339933"
    }
  ],

  Database: [
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql/4169E1"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.simpleicons.org/mongodb/47A248"
    },
    {
      name: "SQLite",
      icon: "https://cdn.simpleicons.org/sqlite/003B57"
    }
  ],

  Tools: [
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git/F05032"
    },
    {
      name: "Docker",
      icon: "https://cdn.simpleicons.org/docker/2496ED"
    },
    {
      name: "Postman",
      icon: "https://cdn.simpleicons.org/postman/FF6C37"
    },
    {
      name: "Figma",
      icon: "https://cdn.simpleicons.org/figma/F24E1E"
    }
  ],

  Deployment: [
    {
      name: "Vercel",
      icon: "https://cdn.simpleicons.org/vercel/000000"
    },
    {
      name: "Render",
      icon: "https://cdn.simpleicons.org/render/46E3B7"
    },
    {
      name: "Nginx",
      icon: "https://cdn.simpleicons.org/nginx/009639"
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.simpleicons.org/githubactions/2088FF"
    }
  ]
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

  const featuredArticles = useMemo(
    () => articles.slice(0, 3),
    [articles]
  );

  return (
    <div className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="section hero home-hero">
        <div className="container hero-inner">

          <div className="hero-copy home-hero-copy">

            <span className="eyebrow home-eyebrow">
              Software Engineer · Full-Stack Developer
            </span>

            <h1 className="home-hero-title">
              Membangun aplikasi web yang{" "}
              <span className="hero-highlight home-highlight">
                rapi, cepat,
              </span>{" "}
              dan siap berkembang.
            </h1>

            <p className="hero-lede home-hero-lede">
              Saya Depal, seorang full-stack developer yang berfokus pada
              pengembangan web modern — mengubah ide menjadi produk yang andal,
              mudah dirawat, dan dikembangkan mulai dari basis data hingga
              antarmuka.
            </p>

            <div className="hero-actions home-hero-actions">
              <Button to="/projects">
                Lihat Proyek
              </Button>

              <Button to="/contact" variant="secondary">
                Hubungi Saya
              </Button>
            </div>

          </div>

          <div
            className="hero-visual home-hero-visual"
            aria-hidden="true"
          >
            <div className="code-window home-code-window">

              <div className="code-window-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />

                <span className="code-window-title">
                  developer.js
                </span>
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


      {/* =========================
          TENTANG
      ========================= */}
      <section className="section about-preview home-about-preview">
        <div className="container about-preview-inner">

          <div className="home-about-title">
            <span className="eyebrow">
              Tentang
            </span>

            <h2>
              Berfokus pada detail yang membuat perangkat lunak mudah dirawat.
            </h2>
          </div>

          <div className="home-about-text">

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


      {/* =========================
          TEKNOLOGI
      ========================= */}
      <section className="section skills-section home-skills">

        <div className="container">

          <div className="section-head home-skills-head">

            <div>
              <span className="eyebrow">
                Keahlian
              </span>

              <h2>
                Teknologi yang saya gunakan
              </h2>

              <p className="home-skills-description">
                Teknologi yang saya gunakan untuk membangun aplikasi
                web modern dari frontend hingga deployment.
              </p>
            </div>

          </div>


          <div className="grid grid-3 skills-grid home-skills-grid">

            {Object.entries(SKILLS).map(
              ([group, items], groupIndex) => (

                <div
                  key={group}
                  className="card skill-card home-skill-card"
                  style={{
                    "--skill-delay": `${groupIndex * 0.08}s`
                  }}
                >

                  <div className="home-skill-number">
                    0{groupIndex + 1}
                  </div>

                  <h3>
                    {SKILL_LABELS[group] || group}
                  </h3>


                  <ul className="home-tech-list">

                    {items.map((item, itemIndex) => (

                      <li
                        key={item.name}
                        className="home-tech-item"
                        style={{
                          "--item-delay": `${itemIndex * 0.05}s`
                        }}
                      >

                        <div className="home-tech-icon">

                          <img
                            src={item.icon}
                            alt={`${item.name} logo`}
                            loading="lazy"
                          />

                        </div>

                        <span>
                          {item.name}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

              )
            )}

          </div>

        </div>
      </section>

      {/* =========================
          ARTIKEL
      ========================= */}
      <section className="section home-articles">

        <div className="container">

          <div className="section-head">

            <div>
              <span className="eyebrow">
                Artikel
              </span>

              <h2>
                Tulisan tentang kode dan teknologi
              </h2>
            </div>

            <Button
              to="/articles"
              variant="ghost"
            >
              Lihat semua artikel →
            </Button>

          </div>


          {isLoading ? (

            <Loading label="Memuat artikel" />

          ) : (

            <div className="grid grid-3">

              {featuredArticles.map((article) => (

                <ArticleCard
                  key={article.id}
                  article={article}
                />

              ))}

            </div>

          )}

        </div>
      </section>


      {/* =========================
          CONTACT CTA
      ========================= */}
      <section className="section contact-cta home-contact">

        <div className="container contact-cta-inner">

          <div>

            <span className="eyebrow">
              Hubungi Saya
            </span>

            <h2>
              Punya proyek dalam pikiran?
              Mari kita bangun dengan baik.
            </h2>

            <p>
              Terbuka untuk pekerjaan full-stack dan kolaborasi freelance.
            </p>

          </div>

          <Button to="/contact">
            Hubungi Saya
          </Button>

        </div>

      </section>

    </div>
  );
}
