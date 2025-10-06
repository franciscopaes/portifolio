import React from "react";
import "./About.css";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-header">
        <h2>Sobre Mim</h2>
        <p>Conheça mais sobre minha trajetória e experiência.</p>
      </div>

      <div className="about-content">

        <div className="about-image">
          <img src="..\assets\foto1.jpg" alt="Foto de perfil" />
          <div className="image-shadow"></div>
        </div>

        
        <div className="about-text">
          <p>
            Sou Thiago, tenho 19 anos e sou apaixonado por tecnologia.
            Sou Técnico em Desenvolvimento de Sistemas, formado pela Etec de Hortolândia,
            e atualmente curso Bacharelado em Sistemas de Informação no UNASP Hortolândia
            (2º semestre). Essa experiência tem reforçado ainda mais meu entusiasmo pela área.
          </p>
          <p>
            Atualmente, estou focado em aprimorar minha lógica de programação,
            especialmente com a linguagem Python.
            Também tenho grande interesse em me aprofundar na área de Inteligência Artificial,
            uma área que me desperta muita curiosidade e vontade de entender como tudo funciona
            por trás. Além disso, gosto muito da área de dados, adorando explorar e compreender
            informações para transformar números em conhecimento útil e gerar impacto através
            da tecnologia.
          </p>
          <p>
            Estou sempre em busca de aprender algo novo e crescer na área da tecnologia,
            não apenas para evoluir como profissional, mas também para usar o que sei de forma útil
            e ajudar outras pessoas por meio da tecnologia.
          </p>

          
          <div className="about-buttons">
            <a
              href="https://www.linkedin.com/in/thiago-francisco-paes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FaLinkedin /> Ver LinkedIn
            </a>
          </div>

          {/* TECNOLOGIAS */}
          <div className="about-tech">
            <h3>Principais Competências:</h3>
            <div className="tech-list">
              <span>Trabalho em equipe</span>
              <span>Comunicação</span>
              <span>Python</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Excel</span>
              <span>Power BI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
