import FotoPerfil from '../FotoPerfil/FotoPerfil';
import LinksSociais from '../LinksSociais/LinksSociais';

function PainelPerfil() {
  return (
    <section className="painel-perfil" aria-labelledby="titulo-perfil">
      <div className="conteudo-perfil">
        <div className="apresentacao-perfil">
          <h1 id="titulo-perfil">Guilherme Cunha</h1>

          <p className="areas-atuacao">
            <span>Web Design</span>
            <span aria-hidden="true">✦</span>
            <span>Front-end</span>
            <span aria-hidden="true">✦</span>
            <span>UX/UI</span>
          </p>

          <p className="resumo-perfil">
            Estudante de Web Design na FIAP, com foco em interfaces digitais,
            desenvolvimento front-end e experiências web/mobile.
          </p>
        </div>

        <LinksSociais />

        <a className="botao-projetos" href="#projetos">
          Confira meus projetos
        </a>
      </div>

      <FotoPerfil />
    </section>
  );
}

export default PainelPerfil;
