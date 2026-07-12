import { linksSociais } from '../../data/linksSociais';
import IconeAcao from '../IconeAcao/IconeAcao';

function LinksSociais() {
  return (
    <ul className="links-sociais" aria-label="Links sociais">
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
                <span className="somente-leitor"> (abre em nova aba)</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default LinksSociais;
