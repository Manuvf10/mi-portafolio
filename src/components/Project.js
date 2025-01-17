import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = styled.div`
  background: #333333; /* Fondo gris oscuro para las tarjetas */
  border: 1px solid #444444; /* Borde más suave */
  border-radius: 8px; /* Bordes redondeados más suaves */
  width: 300px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Sombra más sutil */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Aumenta la sombra en hover */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #444444; /* Agrega un borde sutil entre la imagen y el contenido */
  }

  .project-info {
    padding: 20px;
    text-align: center;
    color: #e0e0e0; /* Color de texto gris claro */
  }

  .project-info h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #f0f0f0; /* Títulos en un gris más claro */
    font-weight: bold;
  }

  .project-info p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #b0b0b0; /* Descripción en gris suave */
  }

  .project-info a {
    color: #d0d0d0; /* Enlace con gris claro */
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #ffffff; /* Cambia a blanco en hover */
      text-decoration: underline;
    }
  }
`;

const Project = ({ title, description, image, link }) => {
  return (
    <ProjectCard as={motion.div} whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Ver Proyecto
        </a>
      </div>
    </ProjectCard>
  );
};

export default Project;
