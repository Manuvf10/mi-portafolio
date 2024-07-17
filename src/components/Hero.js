import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  background: url('/public/assets/background.jpg') no-repeat center center/cover;
  color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Manu Vera</h1>
        <p>Desarrollador Junior especializado en aplicaciones web y móviles.</p>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
