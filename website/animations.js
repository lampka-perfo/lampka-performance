// Lampka Performance — animations
// Fade-in on scroll
function initFadeIn() {
  const targets = document.querySelectorAll(
    '.lp-card, .lp-pain-card, .lp-consultant-pillar, .lp-process-step, .lp-compare-col, .lp-faq-item'
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

// Also fade-in whole sections (eyebrow + heading)
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

setTimeout(() => {
  initFadeIn();
  initSectionFadeIn();
}, 400);
