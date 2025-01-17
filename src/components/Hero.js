// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  background-color: #222222;  /* Usamos el mismo gris oscuro que en Home */
  color: #f0f0f0;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }

  h2 {
    font-size: 4rem;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    color: #f0f0f0;
    font-weight: bold;
    letter-spacing: 2px;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: #d0d0d0;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: center;

    button {
      padding: 12px 30px;
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
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="section"
    >
      <motion.h2
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        ¡Bienvenido a mi Portafolio!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Soy desarrollador especializado en crear soluciones innovadoras y
        aplicaciones web y móviles. Me apasiona construir experiencias de
        usuario excepcionales y ayudar a empresas a llevar sus ideas a la vida.
      </motion.p>
      <div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '#projects'}
          aria-label="Ver proyectos"
        >
          Ver Mis Proyectos
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '#contact'}
          aria-label="Contacto"
        >
          Contáctame
        </motion.button>
      </div>
    </HeroSection>
  );
};

export default Hero;
