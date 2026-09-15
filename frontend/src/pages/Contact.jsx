import { useState } from "react";
import { submitContactMessage } from "../services/api";
import Reveal from "../components/Reveal";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    try {
      await submitContactMessage(form);
      setStatus("sent");
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Gagal mengirim pesan:", error);
      setStatus("error");
    }
  }

  return (
    <div className="container">
      <Reveal className="page-header" y={16}>
        <span className="eyebrow hero-stagger-1">Kontak</span>
        <h1 className="hero-stagger-2">Mari membangun sesuatu bersama</h1>
        <p className="text-muted hero-stagger-3" style={{ maxWidth: 560 }}>
          Punya proyek, pekerjaan, atau ide yang ingin diwujudkan? Kirim pesan dan saya akan segera
          menghubungi Anda.
        </p>
      </Reveal>

      <div className="section contact-grid grid grid-2">
        <Reveal as="form" className="contact-form" onSubmit={handleSubmit} y={18}>
          <label className="form-field">
            <span>Nama</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama kamu"
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
              placeholder="nama@email.com"
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
              placeholder="Tentang apa yang ingin dibicarakan?"
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
              placeholder="Ceritakan proyek atau ide kamu..."
              required
            />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "sent" && (
            <p className="form-status success">
              Pesan berhasil dikirim. Terima kasih sudah menghubungi saya.
            </p>
          )}

          {status === "error" && (
            <p className="form-status error">
              Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
            </p>
          )}
        </Reveal>

        <Reveal className="contact-side" delay={120} y={18}>
          <span className="eyebrow">Mari Terhubung</span>
          <h2>Temukan saya di internet</h2>
          <p className="text-muted">
            Untuk melihat project atau menghubungi saya secara langsung, kamu bisa menggunakan salah
            satu kontak berikut.
          </p>

          <a
            href="https://github.com/ardiyas37-glitch"
            target="_blank"
            rel="noreferrer"
            className="contact-social"
          >
            <div className="contact-social-icon">GH</div>
            <div className="contact-social-content">
              <span className="contact-social-label">GitHub</span>
              <strong>@ardiyas37-glitch</strong>
              <small>Lihat project dan source code</small>
            </div>
            <span className="contact-social-arrow">→</span>
          </a>

          <a href="mailto:ghdepalar@gmail.com" className="contact-social">
            <div className="contact-social-icon">@</div>
            <div className="contact-social-content">
              <span className="contact-social-label">Email</span>
              <strong>ghdepalar@gmail.com</strong>
              <small>Kirim pesan secara langsung</small>
            </div>
            <span className="contact-social-arrow">→</span>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
