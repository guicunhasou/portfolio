export function ajustarPreviaModal(rolagem: HTMLElement, texto: HTMLElement, rolagemIntegral: boolean) {
  if (rolagemIntegral) {
    texto.style.removeProperty('--ajuste-previa-modal');
    return;
  }

  const bloco = texto.getBoundingClientRect();
  const estilo = getComputedStyle(texto);
  // A escala da animação não altera as medidas de layout em pixels CSS.
  const escala = bloco.width / parseFloat(estilo.width);
  const altura = (rolagem.getBoundingClientRect().bottom - bloco.top) / escala
    - rolagem.scrollTop + parseFloat(estilo.marginBlockStart);

  if (altura >= bloco.height / escala - 0.5) {
    texto.style.removeProperty('--ajuste-previa-modal');
    return;
  }

  const trecho = document.createRange();
  let ultimaMeia = 0;
  let fimTexto = 0;
  for (const paragrafo of texto.children) {
    trecho.selectNodeContents(paragrafo);
    for (const linha of trecho.getClientRects()) {
      if (linha.width === 0) {
        continue;
      }

      fimTexto = Math.max(fimTexto, (linha.bottom - bloco.top) / escala);
      const meia = (linha.top + linha.height / 2 - bloco.top) / escala;
      if (meia <= altura + 0.5) {
        ultimaMeia = Math.max(ultimaMeia, meia);
      }
    }
  }

  if (ultimaMeia > 0 && fimTexto > altura + 0.5) {
    texto.style.setProperty('--ajuste-previa-modal', `${Math.max(0, altura - ultimaMeia)}px`);
  } else {
    texto.style.removeProperty('--ajuste-previa-modal');
  }
}
