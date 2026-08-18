import { useState } from "react";
import { submitContactMessage } from "../services/api";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      await submitContactMessage(form);
      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="container">
      <div className="page-header">
        <span className="eyebrow">Kontak</span>

        <h1>Mari membangun sesuatu bersama</h1>

        <p className="text-muted" style={{ maxWidth: 560 }}>
          Punya proyek, pekerjaan, atau ide yang ingin diwujudkan?
          Kirim pesan dan saya akan segera menghubungi Anda.
        </p>
      </div>

      <div className="section contact-grid grid grid-2">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Nama</span>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span>Email</span>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span>Subjek</span>

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-field">
            <span>Pesan</span>

            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "sent" && (
            <p className="form-status success">
              Pesan berhasil dikirim. Terima kasih sudah menghubungi saya —
              saya akan segera membalas.
            </p>
          )}

          {status === "error" && (
            <p className="form-status error">
              Terjadi kesalahan. Silakan coba lagi beberapa saat lagi.
            </p>
          )}
        </form>

        <div className="contact-side">
          <h2>Cara lain untuk menghubungi saya</h2>

          <ul className="contact-links">
            <li>
              <span className="footer-col-title">GitHub</span>

              <a
                href="https://github.com/depal"
                target="_blank"
                rel="noreferrer"
              >
                github.com/depal
              </a>
            </li>

            <li>
              <span className="footer-col-title">LinkedIn</span>

              <a
                href="https://linkedin.com/in/depal"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/depal
              </a>
            </li>

            <li>
              <span className="footer-col-title">Email</span>

              <a href="mailto:hello@depal.dev">
                hello@depal.dev
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}