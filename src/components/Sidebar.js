import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaPlusCircle, FaUserFriends, FaBookmark, FaRegStar, FaChevronDown } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';

const SidebarContainer = styled.div`
  position: fixed;
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1.5rem;
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 80px;
    align-items: center;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.dreamPurple};
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  
  span {
    background: ${({ theme }) => theme.gradients.buttonGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 0;
    margin-bottom: 2rem;
    
    &::before {
      content: "DS";
      font-size: 1.5rem;
      background: ${({ theme }) => theme.gradients.buttonGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.75rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.textLight};
  font-weight: ${({ active }) => active ? '600' : '400'};
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(106, 90, 205, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &.active {
    background: rgba(106, 90, 205, 0.15);
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  
  svg {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    justify-content: center;
    padding: 0.75rem;
    
    svg {
      margin-right: 0;
    }
    
    span {
      display: none;
    }
  }
`;

const NewDreamButton = styled(motion.button)`
  background: ${({ theme }) => theme.gradients.buttonGradient};
  color: white;
  padding: 1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem;
  gap: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 1rem;
    
    span {
      display: none;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 1.5rem 0 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`;

const TrendingContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`;

const TrendingItem = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TrendingHashtag = styled.h4`
  color: ${({ theme }) => theme.colors.dreamBlue};
  margin: 0;
  font-size: 0.9rem;
`;

const TrendingCount = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0;
  font-size: 0.8rem;
`;

const ShowMoreButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0;
  
  svg {
    margin-left: 0.25rem;
    font-size: 0.8rem;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <span>DreamShare</span>
      </Logo>
      
      <NavMenu>
        <NavItem>
          <NavLink to="/" active="true">
            <FaHome />
            <span>Início</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/explorar">
            <RiMoonClearFill />
            <span>Explorar</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/amigos">
            <FaUserFriends />
            <span>Amigos</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/salvos">
            <FaBookmark />
            <span>Salvos</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/destaques">
            <FaRegStar />
            <span>Destaques</span>
          </NavLink>
        </NavItem>
      </NavMenu>
      
      <NewDreamButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPlusCircle />
        <span>Novo Sonho</span>
      </NewDreamButton>
      
      <SectionTitle>Tendências</SectionTitle>
      <TrendingContainer>
        <TrendingItem>
          <TrendingHashtag>#sonholucido</TrendingHashtag>
          <TrendingCount>5.234 sonhos</TrendingCount>
        </TrendingItem>
        <TrendingItem>
          <TrendingHashtag>#voando</TrendingHashtag>
          <TrendingCount>3.120 sonhos</TrendingCount>
        </TrendingItem>
        <TrendingItem>
          <TrendingHashtag>#apocalipse</TrendingHashtag>
          <TrendingCount>2.542 sonhos</TrendingCount>
        </TrendingItem>
        <TrendingItem>
          <TrendingHashtag>#perseguicao</TrendingHashtag>
          <TrendingCount>1.829 sonhos</TrendingCount>
        </TrendingItem>
        <ShowMoreButton>
          Ver mais <FaChevronDown />
        </ShowMoreButton>
      </TrendingContainer>
      
      <Footer>
        &copy; 2025 DreamShare · Privacidade · Termos · Política de Cookies · Acessibilidade
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar; 