import { useRef, useState } from 'react';
import { projetos } from '../../data/projetos';
import type { Projeto } from '../../types/projeto';
import CardProjeto from '../CardProjeto/CardProjeto';
import ModalProjeto from '../ModalProjeto/ModalProjeto';

function SecaoProjetos() {
  const [projetoSelecionado, setProjetoSelecionado] =
    useState<Projeto | null>(null);
  const acionadorModalRef = useRef<HTMLButtonElement | null>(null);
  const projetosVisiveis = projetos.slice(0, 4);

  const abrirModal = (projeto: Projeto, acionador: HTMLButtonElement) => {
    acionadorModalRef.current = acionador;
    setProjetoSelecionado(projeto);
  };

  const fecharModal = (origem: 'ponteiro' | 'teclado') => {
    const acionador = acionadorModalRef.current;

    setProjetoSelecionado(null);

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
          <h2 id="titulo-projetos">Projetos selecionados</h2>
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
        <ModalProjeto projeto={projetoSelecionado} aoFechar={fecharModal} />
      )}
    </>
  );
}

export default SecaoProjetos;
