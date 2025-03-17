import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#6A5ACD',      // Roxo (Slate Blue)
    secondary: '#00BFFF',    // Azul ciano (Deep Sky Blue)
    tertiary: '#FF69B4',     // Rosa (Hot Pink)
    accent: '#9370DB',       // Roxo médio (Medium Purple)
    dreamPurple: '#8A2BE2',  // Roxo intenso (Blue Violet)
    dreamBlue: '#1E90FF',    // Azul (Dodger Blue)
    dreamCyan: '#00CED1',    // Ciano (Dark Turquoise)
    dreamPink: '#FF1493',    // Rosa intenso (Deep Pink)
    background: '#F8F9FE',   // Fundo claro com tom levemente azulado
    cardBg: '#FFFFFF',       // Fundo de cartões
    text: '#333344',         // Texto principal
    textLight: '#666677',    // Texto secundário
    border: '#E0E7FF',       // Bordas com tom azulado
    success: '#4CAF50',      // Verde para sucessos
    error: '#F44336',        // Vermelho para erros
    warning: '#FFC107',      // Amarelo para avisos
  },
  shadows: {
    soft: '0 4px 12px rgba(106, 90, 205, 0.1)',
    medium: '0 6px 16px rgba(106, 90, 205, 0.15)',
    strong: '0 8px 24px rgba(106, 90, 205, 0.2)',
  },
  gradients: {
    dreamGradient: 'linear-gradient(135deg, #6A5ACD 0%, #00BFFF 50%, #FF69B4 100%)',
    buttonGradient: 'linear-gradient(90deg, #8A2BE2 0%, #1E90FF 100%)',
    cardGradient: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(240,240,255,0.9) 100%)',
  },
  fonts: {
    main: "'Quicksand', sans-serif",
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden; /* Impede barra de rolagem horizontal */
    width: 100%;
    max-width: 100vw;
    position: relative;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.colors.dreamPurple};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.main};
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${theme.colors.primary};
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.dreamPurple};
  }
`;

export default GlobalStyle; 