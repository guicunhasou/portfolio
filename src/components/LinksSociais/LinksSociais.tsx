import { linksSociais } from '../../data/linksSociais';

function LinksSociais() {
  return (
    <ul className="links-sociais" aria-label="Links sociais">
      {linksSociais.map((link) => {
        const linkExterno = link.tipo !== 'email';

        return (
          <li key={link.tipo}>
            <a
              href={link.url}
              target={linkExterno ? '_blank' : undefined}
              rel={linkExterno ? 'noopener noreferrer' : undefined}
            >
              {link.rotulo}
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
