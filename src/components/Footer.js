import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: relative;

  p {
    margin: 5px 0;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Manu Vera. Todos los derechos reservados.</p>
      <p>
        <a href="https://github.com/Manuvf10">GitHub</a> | 
        <a href="https://linkedin.com/in/manuel-vera-94a073232">LinkedIn</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
