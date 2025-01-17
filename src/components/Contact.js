import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #222222;
    color: #e0e0e0;
    scroll-behavior: smooth;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const ContactSection = styled.section`
  background: #222222;
  color: #e0e0e0;
  padding: 80px 20px;
  text-align: center;
  overflow: hidden;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
  }

  input, textarea {
    padding: 15px;
    border: 1px solid #555;
    border-radius: 8px;
    font-size: 1rem;
    background: #333;
    color: #e0e0e0;
    transition: border-color 0.3s ease, background-color 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:focus {
      border-color: #ff6f61;
      background: #444;
      outline: none;
    }
  }

  button {
    padding: 12px 25px;
    border: none;
    background: linear-gradient(135deg, #444444, #555555);
    color: #e0e0e0;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: bold;

    &:hover {
      background: linear-gradient(135deg, #555555, #666666);
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    input, textarea {
      font-size: 1rem;
      padding: 12px;
    }

    button {
      width: 100%;
      font-size: 1.1rem;
      padding: 15px;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <GlobalStyle />
      <ContactSection id="contact" as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>Contacto</h2>
        <form>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <textarea rows="5" placeholder="Mensaje" required></textarea>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit">Enviar</motion.button>
        </form>
      </ContactSection>
    </>
  );
};

export default Contact;
