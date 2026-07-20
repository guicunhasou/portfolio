import PainelPerfil from './components/PainelPerfil/PainelPerfil';
import Rodape from './components/Rodape/Rodape';
import SecaoProjetos from './components/SecaoProjetos/SecaoProjetos';

function App() {
  return (
    <>
      <main className="conteudo-principal">
        <PainelPerfil />

        <div className="divisor-mobile" aria-hidden="true">
          <span>✦</span>
        </div>

        <SecaoProjetos />
      </main>
      <Rodape />
    </>
  );
}

export default App;
