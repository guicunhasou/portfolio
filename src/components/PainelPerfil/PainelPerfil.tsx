import FotoPerfil from "../FotoPerfil/FotoPerfil";
import LinksSociais from "../LinksSociais/LinksSociais";

function PainelPerfil() {
  return (
    <section className="painel-perfil" aria-labelledby="titulo-perfil">
      <div className="conteudo-perfil">
        <div className="apresentacao-perfil">
          <h1 id="titulo-perfil">Guilherme Cunha</h1>

          <p className="areas-atuacao">
            <span>Interfaces Digitais</span>
            <span aria-hidden="true">✦</span>
            <span>Desenvolvimento Web</span>
          </p>
        </div>

        <div className="bio">
          <p className="bio">Estudante de Web Design na<a className="link-discreto" href="https://www.fiap.com.br" target="_blank" rel="noopener noreferrer"> FIAP</a>, </p>
          <p className="bio">transformo ideias em interfaces </p>
          <p className="bio">caprichadas, responsivas e acessíveis, </p>
          <p className="bio">com carinho em cada pixel.</p>
        </div>

        <LinksSociais />
      </div>

      <FotoPerfil />
    </section>
  );
}

export default PainelPerfil;
