import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.dreamGradient};
  border-radius: 12px;
  padding: 1.75rem;
  margin-bottom: 2rem;
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  position: relative;
  overflow: hidden;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1494&q=80') center center;
    background-size: cover;
    opacity: 0.2;
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Text = styled.p`
  font-size: 1.05rem;
  margin-bottom: 1.5rem;
  max-width: 90%;
  line-height: 1.6;
`;

const Button = styled(motion.button)`
  background: white;
  color: ${({ theme }) => theme.colors.dreamPurple};
  padding: 0.75rem 1.75rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

const WelcomeCard = () => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Content>
        <Title>Bem-vindo ao DreamShare!</Title>
        <Text>
          Compartilhe seus sonhos, conecte-se com outros sonhadores e explore os mistérios do mundo onírico.
        </Text>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Saiba mais
        </Button>
      </Content>
    </CardContainer>
  );
};

export default WelcomeCard; 