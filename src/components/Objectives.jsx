import React from "react";
import "./Objectives.css";
import { FaGraduationCap, FaUserTie, FaBuilding, FaBookOpen, FaBullseye } from "react-icons/fa";

export default function Objectives() {
  return (
    <section className="objectives-section" id="objectives">
      <h2 className="objectives-title">Meus Objetivos</h2>
      <p className="objectives-subtitle">
        Conheça o que me inspira: meus objetivos, metas e a minha missão de vida e carreira.
      </p>

      <div className="objectives-container">
        {/* Objetivo 1 */}
        <div className="objective-card">
          <div className="icon-wrapper">
            <FaGraduationCap className="objective-icon" />
          </div>
          <h3>Formação Acadêmica</h3>
          <p>
            Concluir minha graduação em Sistemas da Informação e seguir 
            em uma pós-graduação voltada à área de tecnologia e liderança.
          </p>
        </div>

        {/* Objetivo 2 */}
        <div className="objective-card">
          <div className="icon-wrapper">
            <FaUserTie className="objective-icon" />
          </div>
          <h3>Crescimento Profissional</h3>
          <p>
            Ser efetivado na minha empresa atual e conquistar cargos maiores,
            evoluindo constantemente na área de tecnologia.
          </p>
        </div>

        {/* Objetivo 3 */}
        <div className="objective-card">
          <div className="icon-wrapper">
            <FaBookOpen className="objective-icon" />
          </div>
          <h3>Aprendizado Contínuo</h3>
          <p>
            Continuar estudando novas tecnologias e aprimorar meu domínio do
            inglês, mantendo o aprendizado como parte essencial da minha evolução.
          </p>
        </div>
      </div>

      {/* Missão Pessoal */}
      <div className="mission-section">
        <div className="icon-wrapper mission-icon">
          <FaBullseye />
        </div>
        <h2 className="objectives-title">Missão Pessoal</h2>
        <p className="mission-text">
          Através da tecnologia, quero ajudar o máximo de pessoas possível, 
          utilizando minhas habilidades para criar soluções que façam o bem e
          gerem um impacto positivo na vida das pessoas.
        </p>

      </div>
    </section>
  );
}
