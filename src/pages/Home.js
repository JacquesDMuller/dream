import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CreateDreamPost from '../components/CreateDreamPost';
import DreamCard from '../components/DreamCard';
import WelcomeCard from '../components/WelcomeCard';

const PageTitle = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.75rem;
`;

const FeedContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 0 1rem;
  overflow-x: hidden;
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

const Home = () => {
  return (
    <Layout>
      <FeedContainer>
        <PageTitle>Início</PageTitle>
        
        <WelcomeCard />
        
        <CreateDreamPost />
        
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
      </FeedContainer>
    </Layout>
  );
};

export default Home; 