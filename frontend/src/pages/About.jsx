export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Vite",
    "HTML",
    "CSS",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "REST API",
    "Git",
    "GitHub",
    "Docker"
  ];

  const focus = [
    {
      title: "Frontend Development",
      description:
        "Membangun antarmuka web yang responsif, terstruktur, dan nyaman digunakan menggunakan React, JavaScript, HTML, CSS, dan Vite."
    },
    {
      title: "Backend Development",
      description:
        "Mengembangkan REST API dan backend menggunakan Python dan FastAPI serta menghubungkannya dengan database."
    },
    {
      title: "Database & API",
      description:
        "Memahami struktur database, pengelolaan data, komunikasi frontend dengan backend, serta penggunaan REST API."
    },
    {
      title: "Software Engineering",
      description:
        "Berusaha membangun kode yang rapi, mudah dipahami, mudah dirawat, dan siap dikembangkan."
    }
  ];

  return (
    <div className="about-page">

      {/* =========================
          HEADER
      ========================= */}
      <section className="section about-hero">
        <div className="container">

          <span className="eyebrow">
            Tentang Saya
          </span>

          <div className="about-hero-grid">

            <div className="about-hero-copy">

              <h1>
                Halo, saya <span>Depal.</span>
              </h1>

              <p className="about-lead">
                Full-Stack Developer yang memiliki ketertarikan
                pada pengembangan website, aplikasi web modern,
                dan software engineering.
              </p>

              <p>
                Saya senang mempelajari bagaimana sebuah aplikasi
                dibangun dari frontend hingga backend — mulai dari
                membuat antarmuka, mengembangkan API, sampai
                mengelola database.
              </p>

              <div className="about-actions">
                <a
                  href="/projects"
                  className="button"
                >
                  Lihat Project →
                </a>

                <a
                  href="/contact"
                  className="button button-secondary"
                >
                  Hubungi Saya
                </a>
              </div>

            </div>


            <div className="about-profile-card">

              <div className="about-profile-image">

                <img
                  src="/image/profile.jpg"
                  alt="Foto profil Depal"
                />

              </div>

              <div className="about-profile-info">

                <strong>Depal</strong>

                <span>
                  Full-Stack Developer
                </span>

                <span>
                  Web Development · Software Engineering
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          PROFIL SINGKAT
      ========================= */}
      <section className="section about-introduction">

        <div className="container">

          <div className="about-section-heading">

            <span className="eyebrow">
              Profil
            </span>

            <h2>
              Belajar, membangun, dan terus berkembang.
            </h2>

          </div>


          <div className="about-introduction-grid">

            <div>

              <p>
                Saya adalah seorang developer yang memiliki
                ketertarikan kuat terhadap dunia teknologi,
                khususnya pengembangan software dan website.
              </p>

              <p>
                Meskipun pendidikan kejuruan saya berada di
                bidang Perhotelan, ketertarikan terhadap teknologi
                membawa saya untuk mempelajari pemrograman dan
                pengembangan website secara mandiri.
              </p>

            </div>

            <div>

              <p>
                Saya terus mengembangkan kemampuan melalui
                proyek pribadi dan praktik langsung dengan
                teknologi modern.
              </p>

              <p>
                Fokus saya saat ini adalah membangun kemampuan
                sebagai Full-Stack Developer dengan memahami
                frontend, backend, database, API, version control,
                hingga deployment.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FOKUS
      ========================= */}
      <section className="section about-focus">

        <div className="container">

          <div className="about-section-heading">

            <span className="eyebrow">
              Yang Saya Kerjakan
            </span>

            <h2>
              Fokus dalam pengembangan software.
            </h2>

          </div>


          <div className="grid grid-2 about-focus-grid">

            {focus.map((item, index) => (

              <article
                key={item.title}
                className="card about-focus-card"
              >

                <span className="about-card-number">
                  0{index + 1}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =========================
          TEKNOLOGI
      ========================= */}
      <section className="section about-skills">

        <div className="container">

          <div className="about-section-heading">

            <span className="eyebrow">
              Teknologi
            </span>

            <h2>
              Tools dan teknologi yang saya gunakan.
            </h2>

            <p>
              Beberapa teknologi yang saya pelajari dan gunakan
              dalam berbagai project.
            </p>

          </div>


          <div className="about-skills-list">

            {skills.map((skill, index) => (

              <span
                key={skill}
                className="about-skill-tag"
                style={{
                  "--skill-index": index
                }}
              >
                {skill}
              </span>

            ))}

          </div>

        </div>
      </section>


      {/* =========================
          PENDIDIKAN
      ========================= */}
      <section className="section about-education">

        <div className="container">

          <div className="about-section-heading">

            <span className="eyebrow">
              Pendidikan
            </span>

            <h2>
              Latar belakang pendidikan.
            </h2>

          </div>


          <div className="about-timeline">

            <article className="about-timeline-item">

              <span className="about-timeline-period">
                Pendidikan Menengah Pertama
              </span>

              <h3>
                SMPN 1 Cilograng
              </h3>

              <p>
                Menempuh pendidikan tingkat SMP di SMPN 1
                Cilograng dan mulai mengenal berbagai bidang
                pembelajaran yang menjadi dasar untuk perkembangan
                saya selanjutnya.
              </p>

            </article>


            <article className="about-timeline-item">

              <span className="about-timeline-period">
                Pendidikan Menengah Kejuruan
              </span>

              <h3>
                SMK Plus Miftahul Ihsan Cilograng
              </h3>

              <span className="about-timeline-subtitle">
                Jurusan Perhotelan
              </span>

              <p>
                Menempuh pendidikan kejuruan di SMK Plus
                Miftahul Ihsan Cilograng dengan jurusan Perhotelan.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =========================
          PERJALANAN
      ========================= */}
      <section className="section about-journey">

        <div className="container">

          <div className="about-section-heading">

            <span className="eyebrow">
              Perjalanan
            </span>

            <h2>
              Dari rasa ingin tahu menjadi kemampuan.
            </h2>

          </div>


          <div className="about-timeline">

            <article className="about-timeline-item">

              <span className="about-timeline-period">
                Pengembangan Software
              </span>

              <h3>
                Full-Stack Development
              </h3>

              <span className="about-timeline-subtitle">
                Proyek Pribadi & Independen
              </span>

              <p>
                Mengembangkan website dan aplikasi web dengan
                mempelajari berbagai teknologi frontend dan backend,
                termasuk React, JavaScript, Python, FastAPI,
                PostgreSQL, dan REST API.
              </p>

            </article>


            <article className="about-timeline-item">

              <span className="about-timeline-period">
                Pengembangan Web
              </span>

              <h3>
                Frontend & Backend Development
              </h3>

              <span className="about-timeline-subtitle">
                Belajar & Membangun Project
              </span>

              <p>
                Membangun berbagai project untuk meningkatkan
                kemampuan dalam membuat antarmuka web,
                mengembangkan API, mengelola database, serta
                menggunakan Git dan berbagai tools development.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="section contact-cta about-contact">

        <div className="container contact-cta-inner">

          <div>

            <span className="eyebrow">
              Mari Terhubung
            </span>

            <h2>
              Punya project atau ide?
            </h2>

            <p>
              Saya terbuka untuk berdiskusi mengenai website,
              aplikasi web, maupun project software engineering.
            </p>

          </div>

          <a
            href="/contact"
            className="button"
          >
            Hubungi Saya
          </a>

        </div>

      </section>

    </div>
  );
}
