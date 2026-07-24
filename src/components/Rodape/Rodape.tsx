import { useIdioma } from '../../idiomas/IdiomaContexto';
import SeparadorLogo from '../SeparadorLogo/SeparadorLogo';

function Rodape() {
  const { traducao } = useIdioma();

  return (
    <footer className="rodape">
      <p className="dados-rodape">
        <span>{traducao.rodape.feitoEm}</span>
        <SeparadorLogo />
        <a
          className="link-discreto"
          href="https://github.com/guicunhasou/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={traducao.rodape.ariaRepositorio}
        >
          {traducao.rodape.versaoAtual} 2.18.1
        </a>
      </p>
    </footer>
  );
}

export default Rodape;
