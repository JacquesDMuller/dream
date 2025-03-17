import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaImage, FaRegSmile, FaHashtag, FaLock, FaGlobeAmericas, FaGrinAlt } from 'react-icons/fa';
import { RiAttachment2Line, RiVideoAddFill } from 'react-icons/ri';

const PostContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.strong};
  }
`;

const PostHeader = styled.div`
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

const TitleInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(106, 90, 205, 0.1);
  }
`;

const ContentTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(106, 90, 205, 0.1);
  }
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionIcon = styled(motion.button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  
  &:hover {
    background: rgba(106, 90, 205, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PrivacySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PostButton = styled(motion.button)`
  background: ${({ theme }) => theme.gradients.buttonGradient};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MediaPreview = styled.div`
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  text-align: center;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const UploadPrompt = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CreateDreamPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [showMediaPreview, setShowMediaPreview] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      console.log('Postando sonho:', { title, content, isPrivate });
      // Reset form
      setTitle('');
      setContent('');
      setIsPrivate(false);
      setShowMediaPreview(false);
    }
  };
  
  const toggleMediaPreview = () => {
    setShowMediaPreview(!showMediaPreview);
  };
  
  return (
    <PostContainer>
      <form onSubmit={handleSubmit}>
        <PostHeader>
          <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="Seu Avatar" />
        </PostHeader>
        
        <TitleInput 
          type="text" 
          placeholder="Qual o título do seu sonho?" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <ContentTextarea 
          placeholder="Descreva seu sonho em detalhes... O que aconteceu? Como você se sentiu?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <MediaPreview show={showMediaPreview}>
          <UploadPrompt>
            <FaImage />
            <p>Arraste e solte uma imagem aqui, ou clique para selecionar</p>
          </UploadPrompt>
        </MediaPreview>
        
        <PostActions>
          <ActionIcons>
            <ActionIcon 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Adicionar imagem"
              onClick={toggleMediaPreview}
            >
              <FaImage />
            </ActionIcon>
            <ActionIcon 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Adicionar GIF"
            >
              <FaGrinAlt />
            </ActionIcon>
            <ActionIcon 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Adicionar vídeo"
            >
              <RiVideoAddFill />
            </ActionIcon>
            <ActionIcon 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Adicionar emoji"
            >
              <FaRegSmile />
            </ActionIcon>
            <ActionIcon 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Adicionar hashtag"
            >
              <FaHashtag />
            </ActionIcon>
          </ActionIcons>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <PrivacySelector onClick={() => setIsPrivate(!isPrivate)}>
              {isPrivate ? <FaLock /> : <FaGlobeAmericas />}
              {isPrivate ? 'Somente amigos' : 'Público'}
            </PrivacySelector>
            
            <PostButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={!title.trim() || !content.trim()}
            >
              Compartilhar Sonho
            </PostButton>
          </div>
        </PostActions>
      </form>
    </PostContainer>
  );
};

export default CreateDreamPost; 