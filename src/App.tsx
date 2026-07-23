import ControlesExperiencia from "./components/ControlesExperiencia/ControlesExperiencia";
import FundoLava from "./components/FundoLava/FundoLava";
import PainelPerfil from "./components/PainelPerfil/PainelPerfil";
import Rodape from "./components/Rodape/Rodape";
import SecaoProjetos from "./components/SecaoProjetos/SecaoProjetos";
import SeparadorLogo from "./components/SeparadorLogo/SeparadorLogo";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const removerFocoComEsc = (evento: KeyboardEvent) => {
      if (evento.key !== "Escape") {
        return;
      }

      if (document.querySelector("dialog[open]")) {
        return;
      }

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          const elementoAtivo = document.activeElement;

          if (elementoAtivo instanceof HTMLElement) {
            elementoAtivo.blur();
          }
        });
      });
    };

    document.addEventListener("keydown", removerFocoComEsc);

    return () => {
      document.removeEventListener("keydown", removerFocoComEsc);
    };
  }, []);
  return (
    <>
      <FundoLava />
      <ControlesExperiencia />

      <main className="conteudo-principal">
        <PainelPerfil />

        <div className="divisor-mobile" aria-hidden="true">
          <SeparadorLogo />
        </div>

        <SecaoProjetos />
      </main>
      <Rodape />
    </>
  );
}

export default App;
