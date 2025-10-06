import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaDownload } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa"; // ícones do menu

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Aplica a classe do tema no body
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section className="home-container" id="home">
      <header className="navbar">
        <h3 className="logo">Portfólio</h3>
        <div className="nav-group">
          <nav>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a></li>
              <li><a href="#objectives" onClick={() => setMenuOpen(false)}>Objetivos</a></li>
              <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <div className="home-content">
        <h1>
          Olá, eu sou <span className="highlight">Thiago</span>
        </h1>
        <p>
          Seja bem-vindo ao meu portfólio. Meu nome é Thiago Francisco Paes e sou Técnico em Desenvolvimento de Sistemas. Aqui você vai conhecer um pouco sobre mim, meus projetos e o que me motiva a aprender e criar coisas novas na área de tecnologia.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn-primary">
            Conheça meus projetos
          </a>
          <a href="..\assets\Thiago_Francisco_Paes_Profile.pdf" className="btn-outline" download>
            <FaDownload /> Baixar CV
          </a>
        </div>

        <div className="scroll-down">
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
