import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-info {
    padding: 20px;
    text-align: center;
  }

  .project-info h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .project-info p {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .project-info a {
    color: #007bff;
    text-decoration: none;

    &:hover {
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
        <a href={link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
      </div>
    </ProjectCard>
  );
};

export default Project;
