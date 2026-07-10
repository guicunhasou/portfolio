import fotoPerfil from '../../assets/imagens/perfil.webp';
import { linksSociais } from '../../data/linksSociais';

function SecaoApresentacao() {
  return (
    <main>
      <div className="conteudo">
        <div className="titulos">
          <h1>Guilherme Cunha</h1>
          <div className="subtitulos" aria-label="Áreas de atuação">
            <h2>Web Design</h2>
            <span aria-hidden="true">✦</span>
            <h2>Front-end</h2>
            <span aria-hidden="true">✦</span>
            <h2>UX/UI</h2>
          </div>
          <p className="intro">
            Estudante de Web Design na FIAP, com foco em interfaces digitais,
            desenvolvimento front-end e experiências web/mobile.
          </p>
        </div>

        <ul className="redes">
          {linksSociais.map((link) => (
            <li key={link.tipo}>
              <a
                href={link.url}
                target={link.tipo === 'email' ? undefined : '_blank'}
                rel={link.tipo === 'email' ? undefined : 'noopener noreferrer'}
              >
                {link.rotulo}
              </a>
            </li>
          ))}
        </ul>

        <a className="botao" href="#projetos">
          Confira meus projetos
        </a>
      </div>

      <div className="foto">
        <img src={fotoPerfil} alt="Foto de Guilherme Cunha" />
      </div>
    </main>
  );
}

export default SecaoApresentacao;
