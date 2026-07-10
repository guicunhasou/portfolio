import fotoPerfil from '../../assets/imagens/perfil.webp';

function FotoPerfil() {
  return (
    <figure className="foto-perfil">
      <img
        src={fotoPerfil}
        alt="Retrato de Guilherme Cunha sorrindo"
        width="1903"
        height="2742"
      />
    </figure>
  );
}

export default FotoPerfil;
