import { useState } from 'react';
import { createPortal } from 'react-dom';
import ControlesExperiencia from './components/ControlesExperiencia/ControlesExperiencia';
import FundoLava from './components/FundoLava/FundoLava';
import PainelPerfil from './components/PainelPerfil/PainelPerfil';
import Rodape from './components/Rodape/Rodape';
import SecaoProjetos from './components/SecaoProjetos/SecaoProjetos';
import SeparadorLogo from './components/SeparadorLogo/SeparadorLogo';

function App() {
  const [destinoControles, setDestinoControles] =
    useState<HTMLElement | null>(null);

  return (
    <>
      <FundoLava />
      {destinoControles
        ? createPortal(<ControlesExperiencia />, destinoControles)
        : <ControlesExperiencia />}

      <main className="conteudo-principal">
        <PainelPerfil />

        <div className="divisor-mobile" aria-hidden="true">
          <SeparadorLogo />
        </div>

        <SecaoProjetos aoDefinirDestinoControles={setDestinoControles} />
      </main>
      <Rodape />
    </>
  );
}

export default App;
