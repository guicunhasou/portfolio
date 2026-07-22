import SeparadorLogo from '../SeparadorLogo/SeparadorLogo';

function Rodape() {
  return (
    <footer className="rodape">
      <p className="dados-rodape">
        <span>Feito em Pernambuco</span>
        <SeparadorLogo />
        <a
          className="link-discreto"
          href="https://github.com/guicunhasou/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir o repositório do portfólio em uma nova aba"
        >
          Versão atual 2.14.3
        </a>
      </p>
    </footer>
  );
}

export default Rodape;
