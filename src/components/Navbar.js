import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaRegMoon, FaSearch, FaUserCircle, FaBell, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${({ theme }) => theme.colors.cardBg};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.dreamPurple};
  display: flex;
  align-items: center;
  
  span {
    background: ${({ theme }) => theme.gradients.buttonGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 400px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.75rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(106, 90, 205, 0.2);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const NavItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProfileButton = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background: rgba(106, 90, 205, 0.1);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Implementar busca
      console.log('Busca por:', searchTerm);
    }
  };
  
  const goToProfile = () => {
    navigate('/perfil/usuario123');
  };

  return (
    <NavbarContainer>
      <LogoContainer to="/">
        <Logo>
          <span>DreamShare</span>
        </Logo>
      </LogoContainer>
      
      <SearchContainer>
        <form onSubmit={handleSearch}>
          <SearchInput 
            type="text" 
            placeholder="Busque sonhos, pessoas, hashtags..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </form>
      </SearchContainer>
      
      <NavItems>
        <NavItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <FaHome />
          </Link>
        </NavItem>
        
        <NavItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaBell />
        </NavItem>
        
        <NavItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaRegMoon />
        </NavItem>
        
        <NavItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCog />
        </NavItem>
        
        <ProfileButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToProfile}
        >
          <FaUserCircle size={32} color="#6A5ACD" />
        </ProfileButton>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar; 