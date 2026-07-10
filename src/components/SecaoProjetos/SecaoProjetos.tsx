import { useRef, useState } from 'react';
import { projetos } from '../../data/projetos';
import type { Projeto } from '../../types/projeto';
import CardProjeto from '../CardProjeto/CardProjeto';
import ModalProjeto from '../ModalProjeto/ModalProjeto';

function SecaoProjetos() {
  const [projetoSelecionado, setProjetoSelecionado] =
    useState<Projeto | null>(null);
  const acionadorModalRef = useRef<HTMLButtonElement | null>(null);

  const abrirModal = (projeto: Projeto, acionador: HTMLButtonElement) => {
    acionadorModalRef.current = acionador;
    setProjetoSelecionado(projeto);
  };

  const fecharModal = () => {
    const acionador = acionadorModalRef.current;

    setProjetoSelecionado(null);

    window.requestAnimationFrame(() => {
      acionador?.focus();
    });
  };

  return (
    <>
      <section
        id="projetos"
        className="secao-projetos lista-projetos"
        aria-labelledby="titulo-projetos"
      >
        <header className="cabecalho-projetos">
          <p className="rotulo-projetos">Trabalhos selecionados</p>
          <h2 id="titulo-projetos">Projetos</h2>
          <p className="descricao-projetos">
            Interfaces, produtos digitais e experiências construídas entre
            design e código.
          </p>
        </header>

        <ul className="lista-cards-projetos">
          {projetos.map((projeto) => (
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
