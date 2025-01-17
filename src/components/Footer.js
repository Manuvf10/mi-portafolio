import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #222222; /* Fondo gris oscuro */
  color: #e0e0e0; /* Texto claro para contraste */
  text-align: center;
  padding: 30px 20px;
  position: relative;
  margin-top: 50px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);

  p {
    margin: 10px 0;
    font-size: 1rem;
  }

  a {
    color: #007bff; /* Color de los enlaces */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6f61; /* Color de hover */
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
    }

    a {
      font-size: 0.9rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Manu Vera. Todos los derechos reservados.</p>
      <p>
        <a href="https://github.com/Manuvf10" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/manuel-vera-94a073232" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
