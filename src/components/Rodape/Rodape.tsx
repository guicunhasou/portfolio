import { useIdioma } from '../../idiomas/IdiomaContexto';
import SeparadorLogo from '../SeparadorLogo/SeparadorLogo';

function Rodape() {
  const { traducao } = useIdioma();

  return (
    <footer
      className="rodape"
      tabIndex={-1}
      onClick={(evento) => {
        const alvo = evento.target;

        if (
          (alvo instanceof Element && alvo.closest('a')) ||
          !window.matchMedia('(max-width: 680px)').matches
        ) {
          return;
        }

        evento.currentTarget.focus({ preventScroll: true });
      }}
    >
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
          {traducao.rodape.versaoAtual} 2.20.0
        </a>
      </p>
    </footer>
  );
}

export default Rodape;
