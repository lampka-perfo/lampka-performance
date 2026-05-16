// Hero.jsx
function Hero({ variant = 'light-switch' }) {
  const variants = {
    'light-switch': {
      h1:
      <>
          <span className="lp-h-line">Włączam</span>{' '}
          <mark>światło</mark>{' '}
          <span className="lp-h-line">tam, gdzie marketing działa po omacku.</span>
        </>,

      sub: 'Performance, analityka i strategia digital dla Twojego biznesu. Bez korpo mowy, bez magicznych sztuczek — pokazuję co działa, co nie i gdzie lecą Twoje pieniądze.',
      ctaA: 'Umów pogadankę przy lampce',
      ctaB: 'Zobacz audyt na próbę'
    },
    'burn-or-shine': {
      h1:
      <>
          <span className="lp-h-line">Twoje kampanie palą budżet czy</span>{' '}
          <mark>świecą wynikami</mark>
          <span className="lp-h-line">?</span>
        </>,

      sub: 'Sprawdzam, naprawiam i prowadzę performance dla firm, które mają dość raportów bez sensu. Google, Meta, TikTok, LinkedIn + analityka, która mówi prawdę.',
      ctaA: 'Zobacz, co u Ciebie nie działa',
      ctaB: 'Sprawdź audyt'
    }
  };
  const v = variants[variant] || variants['light-switch'];

  return (
    <section className="lp-hero" id="top">
      <div className="lp-container lp-hero-inner">
        <div className="lp-hero-top">
          <div className="lp-hero-copy">
            <div className="lp-eyebrow">Performance · Analityka · Strategia</div>
            <h1 className="lp-h-display">{v.h1}</h1>
          </div>
          <div className="lp-hero-portrait">
            <span className="lp-sygnet lp-hero-portrait-bg"></span>
            <div className="lp-hero-portrait-glow" aria-hidden="true"></div>
            <image-slot
              id="hero-portrait"
              shape="rounded"
              radius="0"
              placeholder="Wrzuć swoje zdjęcie (PNG bez tła)">
            </image-slot>
            <figcaption className="lp-hero-portrait-caption">
              <span className="lp-portrait-dash" aria-hidden="true"></span>
              <span className="lp-portrait-name">Patryk Lampkowski</span>
              <span className="lp-portrait-role">PERFORMANCE BEZ ŚCIEMY</span>
            </figcaption>
          </div>
        </div>
        <div className="lp-hero-bottom">
          <p className="lp-lead" style={{ width: '100%', maxWidth: '100%', fontWeight: 300 }}>{v.sub}</p>
          <div className="lp-btn-row">
            <a href="#contact" className="lp-btn lp-btn-cta">{v.ctaA} <span className="lp-arrow">→</span></a>
            <a href="#services" className="lp-btn lp-btn-ghost">{v.ctaB} <span className="lp-arrow">→</span></a>
          </div>
          <div className="lp-hero-channels">
            <span className="lp-eyebrow lp-dim">Pracuję na</span>
            <ul>
              <li>Google Ads</li>
              <li>Meta</li>
              <li>TikTok</li>
              <li>LinkedIn</li>
              <li>GA4 + server-side</li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

}
window.Hero = Hero;