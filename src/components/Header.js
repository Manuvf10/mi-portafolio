// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.95);
  color: #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }

  nav {
    display: flex;
    gap: 20px;

    a {
      color: #e0e0e0;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease, transform 0.2s ease;
      
      &:hover {
        color: #b0b0b0;
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 10px;
      }
    }
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e0e0e0;
  letter-spacing: 2px;

  span {
    font-size: 0.4em;
    text-transform: lowercase;
    color: #b0b0b0;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Button = styled.a`
  padding: 10px 20px;
  background: linear-gradient(135deg, #333, #111);
  color: white;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;

  &:hover {
    background: linear-gradient(135deg, #555, #222);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      as={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Logo>
        MV<span>portafolio</span>
      </Logo>
      <nav>
        <a href="#home" aria-label="Ir a inicio">Inicio</a>
        <a href="#projects" aria-label="Ir a proyectos">Proyectos</a>
        <a href="#about" aria-label="Ir a sobre mí">Sobre Mí</a>
        <a href="#contact" aria-label="Ir a contacto">Contacto</a>
      </nav>
      <Button href="#contact" aria-label="Contratarme">Contrátame</Button>
    </HeaderContainer>
  );
};

export default Header;
