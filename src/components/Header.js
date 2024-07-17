import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = styled.nav`
  background: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const Header = () => {
  return (
    <header>
      <Navbar>
        <a href="#home">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
        <a href="https://github.com/Manuvf10"><FaGithub /></a>
        <a href="https://linkedin.com/in/manuel-vera-94a073232"><FaLinkedin /></a>
      </Navbar>
    </header>
  );
};

export default Header;
