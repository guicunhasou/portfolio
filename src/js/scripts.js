document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#projetos');
  if (!section) return;

  section.classList.add('carousel');
  section.setAttribute('role', 'region');
  section.setAttribute('aria-roledescription', 'carrossel');

  const originals = Array.from(section.querySelectorAll('.projeto'));

  const track = document.createElement('div');
  track.className = 'carousel-track';
  track.setAttribute('aria-live', 'polite');
  track.setAttribute('aria-atomic', 'true');
  section.prepend(track);

  originals.forEach((s, i) => {
    s.classList.add('slide');
    s.setAttribute('role', 'group');
    s.setAttribute('aria-label', `Slide ${i + 1} de ${originals.length}`);
    s.dataset.cloneOf = i;
    track.appendChild(s);
  });

  const n = originals.length;

  // helpers de centralização via scrollLeft (não mexe na rolagem da página)
  const centerLeft = (el) => el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
  const setLeft = (left, smooth = true) => {
    const prev = track.style.scrollBehavior;
    track.style.scrollBehavior = smooth ? 'smooth' : 'auto';
    track.scrollTo({ left });
    // volta config
    track.style.scrollBehavior = prev || '';
  };

  // clones esquerda + direita
  const fragLeft = document.createDocumentFragment();
  const fragRight = document.createDocumentFragment();
  originals.forEach((s, i) => {
    const cL = s.cloneNode(true); cL.classList.add('is-clone'); cL.dataset.cloneOf = i; fragLeft.appendChild(cL);
    const cR = s.cloneNode(true); cR.classList.add('is-clone'); cR.dataset.cloneOf = i; fragRight.appendChild(cR);
  });
  track.prepend(fragLeft);
  track.append(fragRight);

  const allSlides = Array.from(track.children);

  // controles
  const mkBtn = (cls, label, d) => {
    const b = document.createElement('button');
    b.className = `carousel-nav ${cls}`;
    b.setAttribute('aria-label', label);
    b.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
    return b;
  };
  const prevBtn = mkBtn('prev', 'Projeto anterior', 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z');
  const nextBtn = mkBtn('next', 'Próximo projeto', 'M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z');

  const dots = document.createElement('div');
  dots.className = 'carousel-dots';
  for (let i = 0; i < n; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
    dots.appendChild(dot);
  }
  section.append(prevBtn, nextBtn, dots);
  const dotEls = Array.from(dots.children);

  // estado
  let current = 0;        // índice canônico (0..n-1)
  let currentAllIndex = n; // começamos no 1º original (zona do meio)

  const centerIndex = (arr) => {
    const rect = track.getBoundingClientRect();
    const mid = rect.left + rect.width / 2;
    let idx = 0, best = Infinity;
    arr.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const d = Math.abs(c - mid);
      if (d < best) { best = d; idx = i; }
    });
    return idx;
  };

  const applyState = () => {
    currentAllIndex = centerIndex(allSlides);
    const el = allSlides[currentAllIndex];
    const canonical = el.classList.contains('is-clone')
      ? Number(el.dataset.cloneOf)
      : currentAllIndex - n;

    current = (canonical + n) % n;

    originals.forEach((sl, i) => {
      sl.classList.toggle('is-current', i === current);
      sl.setAttribute('aria-hidden', i !== current);
      sl.tabIndex = i === current ? 0 : -1;
    });
    dotEls.forEach((d, i) => d.classList.toggle('is-active', i === current));

    // teleporte invisível se cair nos clones
    if (currentAllIndex < n) {
      const target = allSlides[currentAllIndex + n];
      setLeft(centerLeft(target), false);
      currentAllIndex += n;
    } else if (currentAllIndex >= 2 * n) {
      const target = allSlides[currentAllIndex - n];
      setLeft(centerLeft(target), false);
      currentAllIndex -= n;
    }
  };

  const goTo = (index) => {
    if (!n) return;
    const target = (index + n) % n;
    // escolhe o mais perto entre [clone-esq, original, clone-dir]
    const candidates = [target, target + n, target + 2 * n];
    let best = candidates[0], dist = Infinity;
    candidates.forEach((i) => {
      const d = Math.abs(i - currentAllIndex);
      if (d < dist) { dist = d; best = i; }
    });
    const el = allSlides[best];
    setLeft(centerLeft(el), true);
  };

  // eventos
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
      const i = dotEls.indexOf(e.target);
      if (i >= 0) goTo(i);
    }
  });

  section.tabIndex = 0;
  section.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(current - 1); }
  });

  let raf = null;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => { raf = null; applyState(); });
  };
  track.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', applyState);

  // autoplay (pausa no hover/focus)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let autoId = null;
  const startAuto = () => {
    if (prefersReduced) return;
    stopAuto();
    autoId = setInterval(() => goTo(current + 1), 4500);
  };
  const stopAuto = () => { if (autoId) { clearInterval(autoId); autoId = null; } };
  section.addEventListener('mouseenter', stopAuto);
  section.addEventListener('mouseleave', startAuto);
  section.addEventListener('focusin', stopAuto);
  section.addEventListener('focusout', startAuto);

  // inicia centrando o 1º ORIGINAL sem rolar a página
  setLeft(centerLeft(allSlides[n]), false);
  setTimeout(() => { applyState(); startAuto(); }, 200);
});