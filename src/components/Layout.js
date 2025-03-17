import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  width: 100%;
`;

const SidebarWrapper = styled.aside`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 80px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: ${({ theme }) => `calc(280px)`};
  margin-right: 280px;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  padding: 2rem 0;
  max-width: 100%;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-right: 240px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-left: ${({ theme }) => `calc(80px)`};
    margin-right: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    padding: 1.5rem 0;
  }
`;

const RightSidebarWrapper = styled.aside`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 240px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainContent>
        {children}
      </MainContent>
      <RightSidebarWrapper>
        <RightSidebar />
      </RightSidebarWrapper>
    </LayoutContainer>
  );
};

export default Layout; 