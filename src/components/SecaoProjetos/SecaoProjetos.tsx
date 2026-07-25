import { useRef, useState } from 'react';
import { projetos } from '../../data/projetos';
import { useIdioma } from '../../idiomas/IdiomaContexto';
import { traduzirProjeto } from '../../idiomas/traducoes';
import type { Projeto } from '../../types/projeto';
import CardProjeto from '../CardProjeto/CardProjeto';
import ModalProjeto from '../ModalProjeto/ModalProjeto';

type PropriedadesSecaoProjetos = {
  aoDefinirDestinoControles: (elemento: HTMLElement | null) => void;
};

function SecaoProjetos({
  aoDefinirDestinoControles,
}: PropriedadesSecaoProjetos) {
  const { idioma, traducao } = useIdioma();
  const [idProjetoSelecionado, setIdProjetoSelecionado] =
  useState<string | null>(null);
  const acionadorModalRef = useRef<HTMLButtonElement | null>(null);
  const projetosVisiveis = projetos.map((projeto) =>
    traduzirProjeto(projeto, idioma),
  );
  const projetoSelecionado =
  projetosVisiveis.find(
    ({ id }) => id === idProjetoSelecionado,
  ) ?? null;

  const abrirModal = (projeto: Projeto, acionador: HTMLButtonElement) => {
    acionadorModalRef.current = acionador;
    setIdProjetoSelecionado(projeto.id);
  };

  const fecharModal = (origem: 'ponteiro' | 'teclado') => {
    const acionador = acionadorModalRef.current;

    setIdProjetoSelecionado(null);

    window.requestAnimationFrame(() => {
      if (origem === 'teclado') {
        acionador?.focus({ preventScroll: true });
        return;
      }

      acionador?.blur();
    });
  };

  return (
    <>
      <section
        id="projetos"
        className="secao-projetos"
        aria-labelledby="titulo-projetos"
      >
        <header className="cabecalho-projetos">
          <h2 id="titulo-projetos">{traducao.projetos.tituloSecao}</h2>
        </header>

        <ul className="lista-cards-projetos">
          {projetosVisiveis.map((projeto) => (
            <li className="item-projeto" key={projeto.id}>
              <CardProjeto
                projeto={projeto}
                aoAbrirDetalhes={abrirModal}
              />
            </li>
          ))}
        </ul>
      </section>

      {projetoSelecionado && (
        <ModalProjeto
          projeto={projetoSelecionado}
          aoFechar={fecharModal}
          aoDefinirDestinoControles={aoDefinirDestinoControles}
        />
      )}
    </>
  );
}

export default SecaoProjetos;
