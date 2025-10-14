document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#projetos');
  if (!section) return;

  // ativa o modo carrossel para o CSS
  section.classList.add('is-carousel');

  // pega os slides (já existentes no HTML)
  const slides = Array.from(section.querySelectorAll(':scope > .projeto'));
  if (slides.length === 0) return;

  // cria botões e dots
  const btnPrev = document.createElement('button');
  btnPrev.className = 'nav prev';
  btnPrev.setAttribute('aria-label', 'Anterior');
  btnPrev.textContent = '‹';

  const btnNext = document.createElement('button');
  btnNext.className = 'nav next';
  btnNext.setAttribute('aria-label', 'Próximo');
  btnNext.textContent = '›';

  const dots = document.createElement('div');
  dots.className = 'dots';
  section.append(btnPrev, btnNext, dots);

  const dotButtons = slides.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.addEventListener('click', () => goTo(i));
    dots.appendChild(b);
    return b;
  });

  // estado
  let index = 0;
  let auto;
  let spacingPx = 0;

  function layout() {
    spacingPx = Math.round(section.clientWidth * 0.34);

    slides.forEach((slide, i) => {
      const d = i - index;
      const ad = Math.abs(d);
      const x = d * spacingPx;

      const scale = ad === 0 ? 1 : ad === 1 ? 0.84 : ad === 2 ? 0.74 : 0.65;
      const opacity = ad === 0 ? 1 : ad === 1 ? 0.55 : 0.25;

      slide.style.setProperty('--x', `${x}px`);
      slide.style.setProperty('--scale', scale);
      slide.style.setProperty('--opacity', opacity);
      slide.style.setProperty('--sat', ad === 0 ? 1 : 0.85);
      slide.style.zIndex = String(100 - ad);
      slide.classList.toggle('is-center', ad === 0);
      slide.setAttribute('aria-hidden', ad !== 0);
      slide.style.pointerEvents = ad > 2 ? 'none' : 'auto';
    });

    section.style.height = slides[index].offsetHeight + 'px';
    dotButtons.forEach((b, i) => b.setAttribute('aria-current', i === index ? 'true' : 'false'));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    layout();
    restartAutoplay();
  }
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  slides.forEach((s, i) => s.addEventListener('click', () => goTo(i)));

  // teclado
  section.tabIndex = 0;
  section.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    else if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1); }
  });

  // swipe
  let startX = 0, swiping = false;
  section.addEventListener('pointerdown', (e) => { swiping = true; startX = e.clientX; });
  window.addEventListener('pointerup', (e) => {
    if (!swiping) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    swiping = false;
  });

  // autoplay
  function startAutoplay() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    auto = setInterval(next, 5000);
  }
  function stopAutoplay() { clearInterval(auto); }
  function restartAutoplay() { stopAutoplay(); startAutoplay(); }
  section.addEventListener('pointerenter', stopAutoplay);
  section.addEventListener('pointerleave', startAutoplay);
  section.addEventListener('focusin', stopAutoplay);
  section.addEventListener('focusout', startAutoplay);

  window.addEventListener('resize', layout);
  section.querySelectorAll('img').forEach(img => {
    if (img.complete) return;
    img.addEventListener('load', layout);
  });

  layout();
  startAutoplay();
});
