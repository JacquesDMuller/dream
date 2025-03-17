import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

const RightSidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 70px;
  width: 280px;
  height: calc(100vh - 70px);
  padding: 1.5rem 1rem 1.5rem 0;
  overflow-y: auto;
  overflow-x: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 240px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`;

const SectionContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  width: 100%;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem 0;
`;

const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Username = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  font-weight: 600;
`;

const UserMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.8rem;
`;

const FollowButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 20px;
  padding: 0.4rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  
  &:hover {
    background: ${({ theme }) => theme.colors.dreamPurple};
  }
`;

const ShowMoreButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  border-radius: 20px;
  
  &:hover {
    background: rgba(106, 90, 205, 0.1);
  }
`;

const DreamPlaceholder = styled.div`
  background: ${({ theme }) => theme.gradients.dreamGradient};
  border-radius: 8px;
  height: 100px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 0 1rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
  
  li {
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  a {
    color: ${({ theme }) => theme.colors.dreamBlue};
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const DreamInsight = styled.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const InsightTitle = styled.h4`
  margin: 0 0 0.25rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

const InsightText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const RightSidebar = () => {
  return (
    <RightSidebarContainer>
      <SectionContainer>
        <SectionTitle>Sugestões para seguir</SectionTitle>
        <SuggestionList>
          <SuggestionItem>
            <Avatar src="https://randomuser.me/api/portraits/women/32.jpg" alt="Maria Silva" />
            <UserInfo>
              <Username>mariasilva</Username>
              <UserMeta>Sonhadora frequente</UserMeta>
            </UserInfo>
            <FollowButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlus size={12} /> Seguir
            </FollowButton>
          </SuggestionItem>
          
          <SuggestionItem>
            <Avatar src="https://randomuser.me/api/portraits/men/45.jpg" alt="Pedro Costa" />
            <UserInfo>
              <Username>pedrocosta</Username>
              <UserMeta>Sonhos lúcidos</UserMeta>
            </UserInfo>
            <FollowButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlus size={12} /> Seguir
            </FollowButton>
          </SuggestionItem>
          
          <SuggestionItem>
            <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" alt="Ana Becker" />
            <UserInfo>
              <Username>anabecker</Username>
              <UserMeta>Interpretação de sonhos</UserMeta>
            </UserInfo>
            <FollowButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlus size={12} /> Seguir
            </FollowButton>
          </SuggestionItem>
        </SuggestionList>
        <ShowMoreButton>Ver mais</ShowMoreButton>
      </SectionContainer>
      
      <SectionContainer>
        <SectionTitle>Insights de Sonhos</SectionTitle>
        <DreamInsight>
          <InsightTitle>Voar em sonhos</InsightTitle>
          <InsightText>Sonhar que está voando geralmente representa sensação de liberdade e controle sobre a própria vida.</InsightText>
        </DreamInsight>
        <DreamInsight>
          <InsightTitle>Cair em sonhos</InsightTitle>
          <InsightText>Sensação de queda durante o sonho frequentemente está associada a inseguranças e perda de controle.</InsightText>
        </DreamInsight>
        <DreamInsight>
          <InsightTitle>Perseguição em sonhos</InsightTitle>
          <InsightText>Ser perseguido em sonhos pode indicar que você está evitando alguma situação ou emoção na vida real.</InsightText>
        </DreamInsight>
        <ShowMoreButton>Mais insights</ShowMoreButton>
      </SectionContainer>
      
      <SectionContainer>
        <SectionTitle>Você sabia?</SectionTitle>
        <DreamPlaceholder>
          Passamos cerca de 6 anos da nossa vida sonhando!
        </DreamPlaceholder>
        <InfoList>
          <li>Uma pessoa tem em média 4 a 6 sonhos por noite</li>
          <li>A maioria das pessoas esquece 95% dos seus sonhos</li>
          <li>Manter um diário de sonhos pode ajudar na recordação</li>
          <li><a href="#">Leia mais curiosidades</a></li>
        </InfoList>
      </SectionContainer>
    </RightSidebarContainer>
  );
};

export default RightSidebar; 