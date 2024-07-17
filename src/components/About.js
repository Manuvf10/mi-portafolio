import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 60px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const About = () => {
  return (
    <AboutSection id="about" as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Sobre Mí</h2>
      <p>
        Soy un desarrollador junior apasionado por la tecnología y el desarrollo
        de aplicaciones innovadoras. Me especializo en el desarrollo de
        aplicaciones web y móviles, y siempre estoy buscando aprender nuevas
        habilidades y mejorar mis conocimientos. Algunas de las tecnologías con
        las que trabajo incluyen:
      </p>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Redux</li>
        <li>Node.js, Express</li>
        <li>MongoDB, MySQL</li>
      </ul>
    </AboutSection>
  );
};

export default About;
