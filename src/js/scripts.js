document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('#projetos');
  if (!section) return;

  section.classList.add('carousel');
  section.setAttribute('role', 'region');
  section.setAttribute('aria-roledescription', 'carrossel');

  const originals = Array.from(section.querySelectorAll('.projeto'));
  const totalSlides = originals.length;
  if (!totalSlides) return;

  const track = document.createElement('div');
  track.className = 'carousel-track';
  track.setAttribute('aria-live', 'polite');
  track.setAttribute('aria-atomic', 'true');
  section.prepend(track);

  originals.forEach((slide, index) => {
    slide.classList.add('slide');
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-label', `Slide ${index + 1} de ${totalSlides}`);
    slide.dataset.cloneOf = index;
    track.appendChild(slide);
  });

  const centerLeft = (element) =>
    element.offsetLeft - (track.clientWidth - element.offsetWidth) / 2;

  const setLeft = (left, smooth = true) => {
    const previousBehavior = track.style.scrollBehavior;

    track.style.scrollBehavior = smooth ? 'smooth' : 'auto';
    track.scrollTo({ left });
    track.style.scrollBehavior = previousBehavior || '';
  };

  const createClone = (slide, index) => {
    const clone = slide.cloneNode(true);

    clone.removeAttribute('id');
    clone.classList.add('is-clone');
    clone.dataset.cloneOf = index;
    clone.setAttribute('aria-hidden', 'true');

    return clone;
  };

  const leftClones = document.createDocumentFragment();
  const rightClones = document.createDocumentFragment();

  originals.forEach((slide, index) => {
    leftClones.appendChild(createClone(slide, index));
    rightClones.appendChild(createClone(slide, index));
  });

  track.prepend(leftClones);
  track.append(rightClones);

  const allSlides = Array.from(track.children);

  const createButton = (className, label, path) => {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = `carousel-nav ${className}`;
    button.setAttribute('aria-label', label);
    button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`;

    return button;
  };

  const prevBtn = createButton(
    'prev',
    'Projeto anterior',
    'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'
  );

  const nextBtn = createButton(
    'next',
    'Próximo projeto',
    'M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z'
  );

  section.append(prevBtn, nextBtn);

  let current = 0;
  let currentAllIndex = totalSlides;

  const getCenteredIndex = (slides) => {
    const trackRect = track.getBoundingClientRect();
    const trackMiddle = trackRect.left + trackRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideRect = slide.getBoundingClientRect();
      const slideMiddle = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideMiddle - trackMiddle);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const applyState = () => {
    currentAllIndex = getCenteredIndex(allSlides);

    const activeSlide = allSlides[currentAllIndex];
    const canonicalIndex = activeSlide.classList.contains('is-clone')
      ? Number(activeSlide.dataset.cloneOf)
      : currentAllIndex - totalSlides;

    current = (canonicalIndex + totalSlides) % totalSlides;

    originals.forEach((slide, index) => {
      const isCurrent = index === current;

      slide.classList.toggle('is-current', isCurrent);
      slide.setAttribute('aria-hidden', String(!isCurrent));
      slide.tabIndex = isCurrent ? 0 : -1;
    });

    if (currentAllIndex < totalSlides) {
      const target = allSlides[currentAllIndex + totalSlides];
      setLeft(centerLeft(target), false);
      currentAllIndex += totalSlides;
    } else if (currentAllIndex >= totalSlides * 2) {
      const target = allSlides[currentAllIndex - totalSlides];
      setLeft(centerLeft(target), false);
      currentAllIndex -= totalSlides;
    }
  };

  const goTo = (index) => {
    const target = (index + totalSlides) % totalSlides;
    const candidates = [target, target + totalSlides, target + totalSlides * 2];

    let bestIndex = candidates[0];
    let bestDistance = Infinity;

    candidates.forEach((candidate) => {
      const distance = Math.abs(candidate - currentAllIndex);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = candidate;
      }
    });

    setLeft(centerLeft(allSlides[bestIndex]));
  };

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  section.tabIndex = 0;
  section.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(current + 1);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(current - 1);
    }
  });

  let raf = null;

  const onScroll = () => {
    if (raf) return;

    raf = requestAnimationFrame(() => {
      raf = null;
      applyState();
    });
  };

  track.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', applyState);

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  let autoId = null;

  const stopAuto = () => {
    if (!autoId) return;

    clearInterval(autoId);
    autoId = null;
  };

  const startAuto = () => {
    if (prefersReducedMotion) return;

    stopAuto();
    autoId = setInterval(() => goTo(current + 1), 4500);
  };

  section.addEventListener('mouseenter', stopAuto);
  section.addEventListener('mouseleave', startAuto);
  section.addEventListener('focusin', stopAuto);
  section.addEventListener('focusout', startAuto);

  setLeft(centerLeft(allSlides[totalSlides]), false);

  setTimeout(() => {
    applyState();
    startAuto();
  }, 200);
});