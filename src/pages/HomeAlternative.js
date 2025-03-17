import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import CreateDreamPost from '../components/CreateDreamPost';
import DreamCard from '../components/DreamCard';
import { FaMoon, FaStar, FaFire, FaRandom, FaFeather } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';

const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60%;
    height: 4px;
    background: ${({ theme }) => theme.gradients.buttonGradient};
    border-radius: 2px;
  }
`;

const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.1rem;
  max-width: 600px;
`;

const FeedContainer = styled.div`
  max-width: 600px; /* Reduzido para melhor centralização */
  width: 100%;
  padding: 0 1rem; /* Adicionado padding horizontal */
  overflow-x: hidden;
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MainColumn = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const SideColumn = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const FilterTabs = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  margin-bottom: 1.5rem;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`;

const FilterTab = styled.button`
  flex: 1;
  min-width: fit-content;
  padding: 0.75rem 1rem;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.textLight};
  border-radius: 8px;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ active, theme }) => 
      active ? theme.colors.primary : 'rgba(106, 90, 205, 0.1)'};
  }
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const InfoCardTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DreamTipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DreamTip = styled.li`
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  
  svg {
    color: ${({ theme }) => theme.colors.dreamBlue};
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;

const DreamStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

const StatCard = styled.div`
  background: ${({ theme, color }) => theme.colors[color] || theme.colors.primary};
  background: ${({ theme, gradient }) => gradient ? theme.gradients.dreamGradient : ''};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  opacity: 0.9;
`;

const QuoteCard = styled.div`
  background: ${({ theme }) => theme.colors.dreamPurple};
  color: white;
  padding: 1.25rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 10px;
    font-size: 8rem;
    opacity: 0.2;
    font-family: serif;
  }
`;

const QuoteText = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
`;

const QuoteAuthor = styled.p`
  text-align: right;
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0;
  position: relative;
  z-index: 1;
`;

// Dados simulados para os posts
const dummyPosts = [
  {
    id: '1',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    username: 'luciasantos',
    timestamp: '3 horas atrás',
    isPrivate: false,
    title: 'O Céu de Cristal',
    content: 'Noite passada sonhei que o céu se transformava em cristal e começava a se partir em pedaços gigantes que flutuavam no ar. Eu conseguia pular de um pedaço para outro, e cada fragmento tinha uma cor diferente que mudava conforme meus sentimentos. Foi tão vivido que acordei pensando que era real!',
    hashtags: ['#céulíquido', '#sonhosurreal', '#cristais'],
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',
    likes: 76,
    comments: 14
  },
  {
    id: '2',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    username: 'carlosmendes',
    timestamp: '5 horas atrás',
    isPrivate: true,
    title: 'Biblioteca Infinita',
    content: 'Sonhei que estava em uma biblioteca sem fim. As estantes de livros se estendiam para o alto até se perderem na escuridão. Cada livro que eu abria continha memórias da minha vida, inclusive algumas que eu não lembrava mais quando acordado. Em um deles, encontrei páginas em branco que representavam meu futuro.',
    hashtags: ['#biblioteca', '#memórias', '#livros', '#infinito'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1290&q=80',
    likes: 54,
    comments: 8
  },
  {
    id: '3',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    username: 'anabeatriz',
    timestamp: '12 horas atrás',
    isPrivate: false,
    title: 'Perseguição Lunar',
    content: 'Tive um sonho intenso onde a lua me perseguia pela cidade vazia. Ela era enorme e tinha um rosto humanóide com expressões que mudavam de serenas para assustadoras. Curiosamente, não senti medo, mas uma sensação de que ela queria me mostrar algo importante. Quando finalmente parei de correr e olhei diretamente para ela, acordei.',
    hashtags: ['#perseguição', '#lua', '#cidade', '#simbolismo'],
    image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    likes: 112,
    comments: 23
  }
];

const HomeAlternative = () => {
  const [activeTab, setActiveTab] = useState('recentes');
  
  return (
    <Layout>
      <FeedContainer>
        <HeaderSection>
          <PageTitle>Explore Sonhos</PageTitle>
          <PageSubtitle>
            Descubra os mundos oníricos de outros sonhadores e compartilhe suas próprias experiências noturnas.
          </PageSubtitle>
        </HeaderSection>
        
        <ContentLayout>
          <MainColumn>
            <FilterTabs>
              <FilterTab 
                active={activeTab === 'recentes'} 
                onClick={() => setActiveTab('recentes')}
              >
                <FaMoon /> Recentes
              </FilterTab>
              <FilterTab 
                active={activeTab === 'populares'} 
                onClick={() => setActiveTab('populares')}
              >
                <FaFire /> Populares
              </FilterTab>
              <FilterTab 
                active={activeTab === 'seguindo'} 
                onClick={() => setActiveTab('seguindo')}
              >
                <FaStar /> Seguindo
              </FilterTab>
              <FilterTab 
                active={activeTab === 'aleatórios'} 
                onClick={() => setActiveTab('aleatórios')}
              >
                <FaRandom /> Aleatórios
              </FilterTab>
            </FilterTabs>
            
            <CreateDreamPost />
            
            <QuoteCard>
              <QuoteText>
                "Os sonhos são a realidade que esquecemos ao acordar."
              </QuoteText>
              <QuoteAuthor>- Carl Jung</QuoteAuthor>
            </QuoteCard>
            
            {dummyPosts.map(post => (
              <DreamCard 
                key={post.id}
                id={post.id}
                avatar={post.avatar}
                username={post.username}
                timestamp={post.timestamp}
                isPrivate={post.isPrivate}
                title={post.title}
                content={post.content}
                hashtags={post.hashtags}
                image={post.image}
                likes={post.likes}
                comments={post.comments}
              />
            ))}
          </MainColumn>
          
          <SideColumn>
            <InfoCard
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <InfoCardTitle>
                <RiMoonClearFill /> Seu Perfil de Sonhos
              </InfoCardTitle>
              <DreamStats>
                <StatCard color="dreamPurple">
                  <StatValue>27</StatValue>
                  <StatLabel>Sonhos Compartilhados</StatLabel>
                </StatCard>
                <StatCard color="dreamBlue">
                  <StatValue>15</StatValue>
                  <StatLabel>Dias Consecutivos</StatLabel>
                </StatCard>
                <StatCard color="dreamCyan">
                  <StatValue>8</StatValue>
                  <StatLabel>Sonhos Lúcidos</StatLabel>
                </StatCard>
                <StatCard gradient>
                  <StatValue>142</StatValue>
                  <StatLabel>Interações</StatLabel>
                </StatCard>
              </DreamStats>
            </InfoCard>
            
            <InfoCard
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <InfoCardTitle>
                <FaFeather /> Dicas para Lembrar Sonhos
              </InfoCardTitle>
              <DreamTipsList>
                <DreamTip>
                  <FaStar />
                  <span>Mantenha um diário de sonhos ao lado da cama e anote-os imediatamente ao acordar.</span>
                </DreamTip>
                <DreamTip>
                  <FaStar />
                  <span>Antes de dormir, repita para si mesmo que você vai lembrar dos seus sonhos.</span>
                </DreamTip>
                <DreamTip>
                  <FaStar />
                  <span>Evite o uso de despertadores que o acordem abruptamente durante o sono REM.</span>
                </DreamTip>
                <DreamTip>
                  <FaStar />
                  <span>Permaneça imóvel ao acordar e tente recuperar os sonhos antes de se levantar.</span>
                </DreamTip>
              </DreamTipsList>
            </InfoCard>
          </SideColumn>
        </ContentLayout>
      </FeedContainer>
    </Layout>
  );
};

export default HomeAlternative; 