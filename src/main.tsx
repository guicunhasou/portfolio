import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ProvedorAcessibilidade } from './acessibilidade/AcessibilidadeContexto';
import { ProvedorIdioma } from './idiomas/IdiomaContexto';
import './styles/variaveis.css';
import './styles/reset.css';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProvedorIdioma>
      <ProvedorAcessibilidade>
        <App />
      </ProvedorAcessibilidade>
    </ProvedorIdioma>
  </StrictMode>,
);
