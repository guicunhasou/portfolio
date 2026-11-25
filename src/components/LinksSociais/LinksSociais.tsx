import { linksSociais } from '../../data/linksSociais';
import { useIdioma } from '../../idiomas/IdiomaContexto';
import IconeAcao from '../IconeAcao/IconeAcao';

function LinksSociais() {
  const { traducao } = useIdioma();

  return (
    <ul className="links-sociais" aria-label={traducao.sociais.ariaLista}>
      {linksSociais.map((link) => {
        const linkExterno = link.tipo !== 'email';

        return (
          <li key={link.tipo}>
            <a
              className="botao-acao botao-expansivel"
              href={link.url}
              target={linkExterno ? '_blank' : undefined}
              rel={linkExterno ? 'noopener noreferrer' : undefined}
            >
              <IconeAcao tipo={link.tipo} />
              <span className="rotulo-botao">{link.rotulo}</span>
              {linkExterno && (
                <span className="somente-leitor">
                  {' '}
                  ({traducao.geral.abreNovaAba})
                </span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default LinksSociais;
