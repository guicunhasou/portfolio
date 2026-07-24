import { useIdioma } from '../../idiomas/IdiomaContexto';
import FotoPerfil from '../FotoPerfil/FotoPerfil';
import LinksSociais from '../LinksSociais/LinksSociais';

function PainelPerfil() {
  const { traducao } = useIdioma();

  return (
    <section className="painel-perfil" aria-labelledby="titulo-perfil">
      <div className="conteudo-perfil">
        <div className="apresentacao-perfil">
          <h1 id="titulo-perfil">Guilherme Cunha</h1>

          <p className="areas-atuacao">
            <span>{traducao.perfil.areas[0]}</span>
            <span>& {traducao.perfil.areas[1]}</span>
          </p>
        </div>

        <p className="bio">
          {traducao.perfil.bioInicio}{' '}
          <a
            className="link-discreto"
            href="https://www.fiap.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            FIAP
          </a>
          {traducao.perfil.bioDepoisFiap}{' '}
          {traducao.perfil.bioLinhas.join(' ')}
        </p>

        <LinksSociais />
      </div>

      <FotoPerfil />
    </section>
  );
}

export default PainelPerfil;
