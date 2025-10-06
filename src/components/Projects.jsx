import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Facetec",
      description:
        "O Facetec tem como foco principal a melhoria da gestão escolar, por meio de ferramentas que auxiliam a direção na organização e no monitoramento dos alunos.",
      image: "/assets/facetec.png",
      tags: ["React", "Firebase", "CSS", "JavaScript"],
      code: "https://github.com/franciscopaes/facetec",
      demo: "https://facetec-delta.vercel.app/",
    },
    {
      id: 2,
      title: "Dashboard de Análise de Dados",
      description:
        "Projeto desenvolvido na Imersão de Dados com Python da Alura. Um dashboard interativo, permitindo análise e visualização dinâmica de dados de forma simples e intuitiva.",
      image: "/assets/dash.png",
      tags: ["Python", "Pandas", "Plotly Express"],
      code: "https://github.com/franciscopaes/imersao_dados_alura",
      demo: "https://dashboard-imersaodados.streamlit.app/",
    },
    {
      id: 3,
      title: "Meu Organiza",
      description:
        "Meu Organiza é um sistema web em React para gerenciamento de tarefas do dia a dia.",
      image: "/assets/meu_organiza.png",
      tags: ["React", "Firebase", "CSS", "JavaScript"],
      code: "https://github.com/franciscopaes/Meu_Organiza",
      demo: "https://meu-organiza.vercel.app/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Meus Projetos</h2>
      <p className="projects-subtitle">
        Alguns dos principais projetos que desenvolvi.
      </p>

      <div className="projects-container">
        {projects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="buttons">
                <a
                  href={proj.code}
                  className="btn code"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> Código
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    className="btn demo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLinkExternal /> Ver Projeto
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- BOTÃO FINAL --- */}
      <div className="github-section">
        <p className="github-text">
          Veja todos os meus projetos no meu perfil do GitHub
        </p>
        <a
          href="https://github.com/franciscopaes"
          target="_blank"
          rel="noreferrer"
          className="github-button"
        >
          <FaGithub className="github-icon" />
          Ver perfil no GitHub
        </a>
      </div>
    </section>
  );
}
