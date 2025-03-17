import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegHeart, FaHeart, FaRegComment, FaShare, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Username = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
`;

const TimeStamp = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.8rem;
`;

const PrivacyBadge = styled.span`
  background: ${({ theme, isPrivate }) => isPrivate ? theme.colors.dreamPurple : theme.colors.dreamBlue};
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  margin-left: 0.5rem;
`;

const DreamTitle = styled.h2`
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
`;

const DreamContent = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-line;
  line-height: 1.6;
`;

const Hashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Hashtag = styled.span`
  color: ${({ theme }) => theme.colors.dreamBlue};
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MediaContainer = styled.div`
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  max-height: 400px;
`;

const DreamImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ActionButton = styled(motion.button)`
  background: transparent;
  color: ${({ theme, active }) => active ? theme.colors.dreamPurple : theme.colors.textLight};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  
  &:hover {
    background: rgba(106, 90, 205, 0.1);
  }
`;

const CommentsSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const CommentForm = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CommentButton = styled(motion.button)`
  background: ${({ theme }) => theme.gradients.buttonGradient};
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 20px;
  margin-left: 0.5rem;
  font-weight: 600;
`;

const DreamCard = ({ 
  id = '1',
  avatar = 'https://via.placeholder.com/50',
  username = 'usuario_sonhador',
  timestamp = '2 horas atrás',
  isPrivate = false,
  title = 'Sonho Incrível com Nuvens Azuis',
  content = 'Ontem à noite tive um sonho muito estranho onde estava voando entre nuvens azuis e roxas. O céu parecia um oceano invertido. Cada nuvem tinha uma melodia própria que eu conseguia ouvir enquanto passava por ela. Foi uma experiência surreal e muito vívida.',
  hashtags = ['#sonholucido', '#voando', '#nuvens', '#experiência'],
  image = 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  likes = 42,
  comments = 7
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  const handleSave = () => {
    setSaved(!saved);
  };
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      console.log('Comentário enviado:', commentText);
      setCommentText('');
      // Aqui você adicionaria o comentário à lista
    }
  };
  
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CardHeader>
        <Avatar src={avatar} alt={username} />
        <UserInfo>
          <Username>{username} {isPrivate && <PrivacyBadge isPrivate={isPrivate}>Somente amigos</PrivacyBadge>}</Username>
          <TimeStamp>{timestamp}</TimeStamp>
        </UserInfo>
      </CardHeader>
      
      <DreamTitle>{title}</DreamTitle>
      <DreamContent>{content}</DreamContent>
      
      <Hashtags>
        {hashtags.map((tag, index) => (
          <Hashtag key={index}>{tag}</Hashtag>
        ))}
      </Hashtags>
      
      {image && (
        <MediaContainer>
          <DreamImage src={image} alt="Imagem do sonho" />
        </MediaContainer>
      )}
      
      <CardActions>
        <ActionButton 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          active={liked}
          onClick={handleLike}
        >
          {liked ? <FaHeart /> : <FaRegHeart />} {likeCount}
        </ActionButton>
        
        <ActionButton 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleComments}
        >
          <FaRegComment /> {comments}
        </ActionButton>
        
        <ActionButton 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShare />
        </ActionButton>
        
        <ActionButton 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          active={saved}
          onClick={handleSave}
        >
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </ActionButton>
      </CardActions>
      
      {showComments && (
        <CommentsSection>
          <CommentForm onSubmit={handleSubmitComment}>
            <CommentInput 
              type="text" 
              placeholder="Adicione um comentário..." 
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <CommentButton 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Comentar
            </CommentButton>
          </CommentForm>
          
          {/* Aqui seria a lista de comentários */}
        </CommentsSection>
      )}
    </Card>
  );
};

export default DreamCard; 