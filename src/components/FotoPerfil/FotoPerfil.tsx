import fotoPerfil from '../../assets/imagens/perfil.webp';

function FotoPerfil() {
  return (
    <figure className="foto-perfil">
      <img
        src={fotoPerfil}
        alt="Retrato de Guilherme Cunha sorrindo"
        width="972"
        height="1400"
      />
    </figure>
  );
}

export default FotoPerfil;
