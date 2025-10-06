import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contato">
      <h2 className="contact-title">Contato</h2>
      <p className="contact-subtitle">
        Aqui estão meus principais contatos e redes.
        Fique à vontade para me encontrar nos canais abaixo.
      </p>

      <div className="contact-container">
        {/* Email */}
        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <FaEnvelope className="contact-icon" />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>thiago.bruno.francisco.paes@gmail.com</p>
          </div>
        </div>

        {/* Localização */}
        <div className="contact-card">
          <div className="contact-icon-wrapper purple">
            <FaMapMarkerAlt className="contact-icon" />
          </div>
          <div className="contact-info">
            <h3>Localização</h3>
            <p>Hortolândia, São Paulo</p>
          </div>
        </div>

        {/* Telefone */}
        <div className="contact-card">
          <div className="contact-icon-wrapper">
            <FaPhoneAlt className="contact-icon" />
          </div>
          <div className="contact-info">
            <h3>Telefone</h3>
            <p>+55 (19) 98190-4583</p>
          </div>
        </div>
      </div>

      {/* Redes sociais */}
      <div className="social-section">
        <h3>Conecte-se comigo:</h3>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/thiago-francisco-paes/"
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/franciscopaes"
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
