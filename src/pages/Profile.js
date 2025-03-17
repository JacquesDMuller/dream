import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaStar, FaLink, FaUserPlus, FaEllipsisH, FaRegMoon } from 'react-icons/fa';
import Layout from '../components/Layout';
import DreamCard from '../components/DreamCard';

const ProfileHeader = styled.div`
  background: ${({ theme }) => theme.gradients.dreamGradient};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80') center center;
    background-size: cover;
    opacity: 0.2;
    z-index: 0;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    text-align: left;
  }
`;

const ProfileName = styled.h1`
  font-size: 1.75rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`;

const ProfileUsername = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 1rem 0;
  font-weight: 400;
  opacity: 0.9;
`;

const ProfileBio = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
`;

const ProfileMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  svg {
    opacity: 0.9;
  }
`;

const ProfileActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProfileButton = styled(motion.button)`
  background: ${({ primary, theme }) => primary ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  color: ${({ primary, theme }) => primary ? theme.colors.dreamPurple : 'white'};
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: ${({ primary }) => primary ? 'none' : 'blur(5px)'};
`;

const ProfileStats = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  justify-content: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1rem;
  background: transparent;
  border-bottom: 3px solid ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.textLight};
  font-weight: ${({ active }) => (active ? '600' : '400')};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const DreamTile = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 1/1;
  cursor: pointer;
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const TileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const TileOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  color: white;
`;

const TileTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const EmptyTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

// Dados simulados para o perfil
const profileData = {
  name: 'Carlos Mendes',
  username: 'carlosmendes',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  bio: 'Explorador de sonhos lúcidos e interpretador de símbolos oníricos. Especialista em sonhos recorrentes e significados arquetípicos. Compartilhando os mistérios do inconsciente desde 2020.',
  location: 'Rio de Janeiro, Brasil',
  website: 'sonhoslucidos.com.br',
  joined: 'Março de 2020',
  following: 247,
  followers: 583,
  dreams: 142,
  posts: [
    {
      id: '1',
      title: 'Biblioteca Infinita',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1290&q=80',
    },
    {
      id: '2',
      title: 'Voo Sobre a Cidade',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: '3',
      title: 'Oceano de Estrelas',
      image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: '4',
      title: 'Floresta Mágica',
      image: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: '5',
      title: 'Castelo nas Nuvens',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: '6',
      title: 'Portal Dimensional',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80',
    }
  ]
};

// Post completo para exibição expandida
const fullDreamPost = {
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
};

const Profile = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const [expandedPost, setExpandedPost] = useState(null);
  
  const handleExpandPost = (postId) => {
    setExpandedPost(postId === expandedPost ? null : postId);
  };
  
  return (
    <Layout>
      <ContentContainer>
        <ProfileHeader>
          <HeaderContent>
            <ProfileAvatar src={profileData.avatar} alt={profileData.name} />
            
            <ProfileInfo>
              <ProfileName>{profileData.name}</ProfileName>
              <ProfileUsername>@{profileData.username}</ProfileUsername>
              <ProfileBio>{profileData.bio}</ProfileBio>
              
              <ProfileMeta>
                <MetaItem>
                  <FaMapMarkerAlt /> {profileData.location}
                </MetaItem>
                <MetaItem>
                  <FaLink /> {profileData.website}
                </MetaItem>
                <MetaItem>
                  <FaCalendarAlt /> Membro desde {profileData.joined}
                </MetaItem>
              </ProfileMeta>
              
              <ProfileStats>
                <StatItem>
                  <StatValue>{profileData.following}</StatValue>
                  <StatLabel>Seguindo</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>{profileData.followers}</StatValue>
                  <StatLabel>Seguidores</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>{profileData.dreams}</StatValue>
                  <StatLabel>Sonhos</StatLabel>
                </StatItem>
              </ProfileStats>
              
              <ProfileActions>
                <ProfileButton 
                  primary
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUserPlus /> Seguir
                </ProfileButton>
                <ProfileButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEllipsisH /> Mais
                </ProfileButton>
              </ProfileActions>
            </ProfileInfo>
          </HeaderContent>
        </ProfileHeader>
        
        <TabsContainer>
          <Tab 
            active={activeTab === 'posts'} 
            onClick={() => setActiveTab('posts')}
          >
            Postagens
          </Tab>
          <Tab 
            active={activeTab === 'likes'} 
            onClick={() => setActiveTab('likes')}
          >
            Curtidas
          </Tab>
          <Tab 
            active={activeTab === 'private'} 
            onClick={() => setActiveTab('private')}
          >
            Melhores Amigos
          </Tab>
          <Tab 
            active={activeTab === 'saved'} 
            onClick={() => setActiveTab('saved')}
          >
            Salvos
          </Tab>
        </TabsContainer>
        
        {activeTab === 'posts' && (
          <>
            {expandedPost ? (
              <DreamCard 
                {...fullDreamPost}
                onClick={() => setExpandedPost(null)}
              />
            ) : (
              <GridContainer>
                {profileData.posts.map(post => (
                  <DreamTile 
                    key={post.id}
                    whileHover={{ y: -5 }}
                    onClick={() => handleExpandPost(post.id)}
                  >
                    <TileImage src={post.image} alt={post.title} />
                    <TileOverlay>
                      <TileTitle>{post.title}</TileTitle>
                    </TileOverlay>
                  </DreamTile>
                ))}
              </GridContainer>
            )}
          </>
        )}
        
        {activeTab === 'private' && (
          <EmptyState>
            <FaRegMoon />
            <EmptyTitle>Conteúdo exclusivo para amigos próximos</EmptyTitle>
            <EmptyText>Este perfil ainda não compartilhou sonhos com sua lista de melhores amigos.</EmptyText>
          </EmptyState>
        )}
        
        {(activeTab === 'likes' || activeTab === 'saved') && (
          <EmptyState>
            <FaStar />
            <EmptyTitle>Nenhum sonho encontrado</EmptyTitle>
            <EmptyText>Os sonhos {activeTab === 'likes' ? 'curtidos' : 'salvos'} aparecerão aqui.</EmptyText>
          </EmptyState>
        )}
      </ContentContainer>
    </Layout>
  );
};

export default Profile; 