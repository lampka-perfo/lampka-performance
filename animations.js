// Lampka Performance — animations

// Fade-in on scroll
function initFadeIn() {
  const targets = document.querySelectorAll(
    '.lp-card, .lp-pain-card, .lp-process-step, .lp-compare-col, .lp-faq-item'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.animDelay || 0;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el, i) => {
    el.classList.add('lp-animate');
    el.dataset.animDelay = (i % 3) * 80;
    observer.observe(el);
  });
}

// Fade-in whole sections
function initSectionFadeIn() {
  const sections = document.querySelectorAll('.lp-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  sections.forEach(el => {
    el.classList.add('lp-section-animate');
    observer.observe(el);
  });
}

// Mark animations
function initMarkAnimations() {
  const styleMap = {
    'pains':   'lp-mark-rise',
    'compare': 'lp-mark-pop',
    'why-me':  'lp-mark-left',
    'results': 'lp-mark-sweep',
    'contact': 'lp-mark-blur',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.lp-h-section mark, .lp-h-display mark, .lp-contact mark').forEach(mark => {
    const section = mark.closest('section');
    if (!section || section.id === 'top') return;
    const animClass = styleMap[section.id] || 'lp-mark-rise';
    mark.classList.add('lp-mark-animate', animClass);
    observer.observe(mark);
  });
}

// Consultant pillars — staggered slide-in from left
function initConsultantPillars() {
  const pillars = document.querySelectorAll('.lp-consultant-pillar');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.animDelay || 0;
        setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  pillars.forEach((el, i) => {
    el.classList.add('lp-pillar-animate');
    el.dataset.animDelay = i * 120;
    observer.observe(el);
  });
}

setTimeout(() => {
  initFadeIn();
  initSectionFadeIn();
  initMarkAnimations();
  initConsultantPillars();
}, 400);
