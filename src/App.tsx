import PainelPerfil from './components/PainelPerfil/PainelPerfil';
import Rodape from './components/Rodape/Rodape';
import SecaoProjetos from './components/SecaoProjetos/SecaoProjetos';
import SeparadorLogo from './components/SeparadorLogo/SeparadorLogo';

function App() {
  return (
    <>
      <main className="conteudo-principal">
        <PainelPerfil />

        <div className="divisor-mobile" aria-hidden="true">
          <SeparadorLogo />
        </div>

        <SecaoProjetos />
      </main>
      <Rodape />
    </>
  );
}

export default App;
