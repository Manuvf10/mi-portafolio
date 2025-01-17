// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Estilos para la sección "Sobre Mí"
const AboutSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #222222;
  color: #f0f0f0;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    color: #f0f0f0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #d0d0d0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  // Estilos para el contenedor de habilidades
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  // Estilos para cada tarjeta de habilidad
  .skill-card {
    background: #333333;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: #f0f0f0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background: #444444;
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    .skill-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.5rem;
      margin: 0;
    }

    p {
      font-size: 1rem;
      color: #b0b0b0;
    }

    @media (max-width: 768px) {
      .skill-icon {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.3rem;
      }
    }
  }
`;

const About = () => {
  return (
    <AboutSection
      id="about"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="region"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">Sobre Mí</h2>
      <p>
        Soy un desarrollador junior apasionado por la tecnología y el desarrollo
        de aplicaciones innovadoras. Me especializo en el desarrollo de
        aplicaciones web y móviles, y siempre estoy buscando aprender nuevas
        habilidades y mejorar mis conocimientos. Algunas de las tecnologías con
        las que trabajo incluyen:
      </p>

      {/* Contenedor de las tarjetas de habilidades */}
      <div className="skills-container">
        <div className="skill-card" aria-label="HTML, CSS, JavaScript">
          <div className="skill-icon">🌐</div>
          <h3>HTML, CSS, JavaScript</h3>
          <p>Desarrollo web básico y avanzado, creando sitios interactivos y funcionales.</p>
        </div>

        <div className="skill-card" aria-label="React, Redux">
          <div className="skill-icon">⚛️</div>
          <h3>React, Redux</h3>
          <p>Construcción de aplicaciones web dinámicas con React y gestión del estado con Redux.</p>
        </div>

        <div className="skill-card" aria-label="Node.js, Express">
          <div className="skill-icon">💻</div>
          <h3>Node.js, Express</h3>
          <p>Desarrollo del backend con Node.js y Express, creando APIs y servidores eficientes.</p>
        </div>

        <div className="skill-card" aria-label="MongoDB, MySQL">
          <div className="skill-icon">📦</div>
          <h3>MongoDB, MySQL</h3>
          <p>Gestión de bases de datos con MongoDB (NoSQL) y MySQL (relacional) para aplicaciones escalables.</p>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
