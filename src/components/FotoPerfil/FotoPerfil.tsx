import fotoPerfil from '../../assets/imagens/perfil.webp';
import { useIdioma } from '../../idiomas/IdiomaContexto';

function FotoPerfil() {
  const { traducao } = useIdioma();

  return (
    <figure className="foto-perfil">
      <img
        src={fotoPerfil}
        alt={traducao.perfil.fotoAlt}
        width="972"
        height="1400"
      />
    </figure>
  );
}

export default FotoPerfil;
