import ReactDOM from 'react-dom/client';

import App from './components/App';

import GlobalStyle from './styles/global';


// Formas de criar componentes no React:
// Através de Function ->
// Functional Component (Componente Funcional)
// E Class ->
// Class Component (Componente de Classe)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <GlobalStyle />
  <App />,
  </>,
);

