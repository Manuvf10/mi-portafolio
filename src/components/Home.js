// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #222222;
  padding: 20px;
  color: #f0f0f0;

  @media (max-width: 768px) {
    height: auto;
    padding: 30px 20px;
  }

  div {
    max-width: 800px;
    width: 100%;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    color: #f0f0f0;
    letter-spacing: 2px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: #b0b0b0;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  button {
    padding: 15px 30px;
    font-size: 1.2rem;
    border: none;
    background: #444444;
    color: #f0f0f0;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    outline: none;

    &:hover {
      background: #555555;
      transform: scale(1.05);
    }

    &:focus {
      outline: 3px solid #888888;
    }

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.1rem;
      padding: 15px;
    }
  }
`;

const Home = () => {
  return (
    <HomeSection
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="main"
    >
      <div>
        <h1>¡Hola, soy Manu Vera!</h1>
        <p>
          Soy desarrollador Junior especializado en la creación de aplicaciones
          web y móviles. Siempre estoy buscando aprender nuevas tecnologías y
          trabajar en proyectos desafiantes.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '#projects'}
          aria-label="Ir a la sección de proyectos"
        >
          Ver Mis Proyectos
        </motion.button>
      </div>
    </HomeSection>
  );
};

export default Home;
