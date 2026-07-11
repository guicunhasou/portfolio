import FotoPerfil from '../FotoPerfil/FotoPerfil';
import LinksSociais from '../LinksSociais/LinksSociais';

function PainelPerfil() {
  return (
    <section className="painel-perfil" aria-labelledby="titulo-perfil">
      <div className="conteudo-perfil">
        <div className="apresentacao-perfil">
          <h1 id="titulo-perfil">Guilherme Cunha</h1>

          <p className="areas-atuacao">
            <span>Front-end</span>
            <span aria-hidden="true">✦</span>
            <span>Design UX/UI</span>
          </p>
        </div>

        <p className="resumo-perfil">
          Estudante de Web Design na FIAP, transformo ideias em interfaces
          responsivas, acessíveis e visualmente cuidadas, conectando design
          UX/UI e desenvolvimento front-end.
        </p>

        <LinksSociais />
      </div>

      <FotoPerfil />

    </section>
  );
}

export default PainelPerfil;
