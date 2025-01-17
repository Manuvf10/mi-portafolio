import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Project from './Project';

const ProjectsSection = styled.section`
  background: #222222; /* Fondo gris oscuro */
  padding: 60px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #e0e0e0; /* Título en un gris claro */
    margin-bottom: 40px;
    font-weight: bold;
  }

  .projects-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .projects-list {
      gap: 20px;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsSection
      id="projects"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Mis Proyectos</h2>
      <div className="projects-list">
        <Project
          title="Portafolio Personal"
          description="Un sitio web para mostrar mis proyectos y habilidades. Desarrollado con React y desplegado en GitHub Pages."
          image="https://via.placeholder.com/300"
          link="https://example.com"
        />
        <Project
          title="Aplicación de Tareas"
          description="Aplicación de gestión de tareas con funcionalidades de añadir, editar y eliminar tareas. Usando React y Node.js."
          image="https://via.placeholder.com/300"
          link="https://example.com"
        />
        <Project
          title="Tienda en Línea"
          description="Una tienda en línea completamente funcional con carrito de compras y pago integrado. Desarrollado con React y Redux."
          image="https://via.placeholder.com/300"
          link="https://example.com"
        />
      </div>
    </ProjectsSection>
  );
};

export default Projects;
