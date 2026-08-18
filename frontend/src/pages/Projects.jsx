import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="container">
      <div className="page-header">
        <span className="eyebrow">Projects</span>

        <h1>
          Project yang saya kerjakan
        </h1>

        <p className="text-muted" style={{ maxWidth: 650 }}>
          Kumpulan project yang pernah saya buat untuk belajar, bereksperimen,
          dan membangun solusi web yang bermanfaat.
        </p>
      </div>

      <section className="section">
        <div className="grid grid-3">
          {projects.map((project) => (
            <article key={project.id} className="card project-card">
              <div className="project-card-top">
                <span className="eyebrow">PROJECT</span>
              </div>

              <h2>{project.name}</h2>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                )}

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-cta">
        <div className="container contact-cta-inner">
          <div>
            <span className="eyebrow">Punya project?</span>

            <h2>
              Mari buat sesuatu yang menarik bersama.
            </h2>

            <p>
              Terbuka untuk project freelance, kolaborasi, dan kesempatan kerja.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}