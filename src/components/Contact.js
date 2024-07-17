import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  background: #fff;
  padding: 60px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    border: none;
    background: #007bff;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;

    &:hover {
      background: #0056b3;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact" as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea rows="5" placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </ContactSection>
  );
};

export default Contact;
