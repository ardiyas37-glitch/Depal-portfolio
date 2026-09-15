import projects from "../data/projects";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <div className="container">

      {/* =========================
          PROJECTS
      ========================= */}

      <Reveal className="page-header" y={16}>
        <span className="eyebrow hero-stagger-1">
          Projects
        </span>

        <h1 className="hero-stagger-2">
          Project yang saya kerjakan
        </h1>

        <p
          className="text-muted hero-stagger-3"
          style={{ maxWidth: 650 }}
        >
          Kumpulan project yang pernah saya buat untuk
          belajar, bereksperimen, dan membangun solusi
          web yang bermanfaat.
        </p>
      </Reveal>

      <section className="section">
        <div className="grid grid-3">

          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              as="article"
              delay={i * 100}
              y={30}
              threshold={0.12}
              className="card project-card"
            >

              {/* PROJECT IMAGE */}

              <div className="project-image">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Preview ${project.name}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span>PROJECT</span>
                  </div>
                )}

                <div className="project-image-overlay">
                  <span>
                    View Project
                  </span>
                </div>

              </div>

              {/* PROJECT CONTENT */}

              <div className="project-card-content">

                <span className="eyebrow">
                  PROJECT
                </span>

                <h2>
                  {project.name}
                </h2>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-links">

                  {project.github &&
                    project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub →
                      </a>
                    )}

                  {project.demo &&
                    project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Lihat Demo →
                      </a>
                    )}

                </div>

              </div>

            </Reveal>
          ))}

        </div>
      </section>


      {/* =========================
           CONTACT CTA
       ========================= */}

      <Reveal as="section" className="section contact-cta">

        <div className="container contact-cta-inner">

          <div>

            <span className="eyebrow">
              Punya project?
            </span>

            <h2>
              Mari buat sesuatu yang menarik
              bersama.
            </h2>

            <p>
              Terbuka untuk project freelance,
              kolaborasi, dan kesempatan kerja.
            </p>

          </div>

        </div>

      </Reveal>

    </div>
  );
}