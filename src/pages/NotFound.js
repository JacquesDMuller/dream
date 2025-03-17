import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMoon, FaHome } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.gradients.dreamGradient};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80') center center;
    background-size: cover;
    opacity: 0.05;
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
`;

const NotFoundTitle = styled(motion.h1)`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 5rem;
  }
`;

const NotFoundSubtitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const NotFoundText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
  opacity: 0.9;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const HomeButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: white;
  color: ${({ theme }) => theme.colors.dreamPurple};
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  
  svg {
    font-size: 1.2rem;
  }
`;

const MoonIcon = styled(motion.div)`
  font-size: 5rem;
  color: white;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  opacity: ${({ opacity }) => opacity};
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  animation: twinkle ${({ duration }) => `${duration}s`} ease-in-out infinite;
  
  @keyframes twinkle {
    0%, 100% {
      opacity: ${({ opacity }) => opacity};
    }
    50% {
      opacity: ${({ opacity }) => opacity * 0.5};
    }
  }
`;

// Gerando estrelas aleatórias
const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 2
    });
  }
  return stars;
};

const stars = generateStars(100);

const NotFound = () => {
  return (
    <NotFoundContainer>
      <StarsContainer>
        {stars.map(star => (
          <Star 
            key={star.id} 
            size={star.size} 
            opacity={star.opacity} 
            top={star.top} 
            left={star.left} 
            duration={star.duration} 
          />
        ))}
      </StarsContainer>
      
      <Content>
        <MoonIcon
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaMoon />
        </MoonIcon>
        
        <NotFoundTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </NotFoundTitle>
        
        <NotFoundSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Sonho Não Encontrado
        </NotFoundSubtitle>
        
        <NotFoundText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Parece que você se perdeu no mundo dos sonhos. A página que você está procurando não existe ou foi para outra dimensão onírica.
        </NotFoundText>
        
        <Link to="/">
          <HomeButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaHome /> Voltar para o Início
          </HomeButton>
        </Link>
      </Content>
    </NotFoundContainer>
  );
};

export default NotFound; 