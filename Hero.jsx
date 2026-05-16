// Hero.jsx
function Hero({ variant = 'light-switch' }) {
  const fullWord = 'światło';
  const [typedWord, setTypedWord] = React.useState('');
  const [typingDone, setTypingDone] = React.useState(false);

  React.useEffect(() => {
    if (variant !== 'light-switch') return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTypedWord(fullWord.slice(0, i));
      if (i >= fullWord.length) {
        clearInterval(timer);
        setTimeout(() => setTypingDone(true), 800);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [variant]);

  const variants = {
    'light-switch': {
      h1: (
        <>
          <span className="lp-h-line">Włączam</span>{' '}
          <mark>
            {typedWord}
            {!typingDone && <span className="lp-cursor" aria-hidden="true">|</span>}
          </mark>{' '}
          <span className="lp-h-line">tam, gdzie marketing działa po omacku.</span>
        </>
      ),
      sub: 'Performance, analityka i strategia digital dla Twojego biznesu. Bez korpo mowy, bez magicznych sztuczek — pokazuję co działa, co nie i gdzie lecą Twoje pieniądze.',
      ctaA: 'Umów pogadankę przy lampce',
    },
    'burn-or-shine': {
      h1: (
        <>
          <span className="lp-h-line">Twoje kampanie palą budżet czy</span>{' '}
          <mark>świecą wynikami</mark>
          <span className="lp-h-line">?</span>
        </>
      ),
      sub: 'Sprawdzam, naprawiam i prowadzę performance dla firm, które mają dość raportów bez sensu. Google, Meta, TikTok, LinkedIn + analityka, która mówi prawdę.',
      ctaA: 'Zobacz, co u Ciebie nie działa',
    },
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
            <img src="assets/photo.png" alt="Patryk Lampkowski" style={{ position:'relative', zIndex:2, width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }} />
            <figcaption className="lp-hero-portrait-caption">
              <span className="lp-portrait-dash" aria-hidden="true"></span>
              <span className="lp-portrait-name">Patryk Lampkowski</span>
              <span className="lp-portrait-role">Doświetlam od 6 lat</span>
            </figcaption>
          </div>
        </div>
        <div className="lp-hero-bottom">
          <p className="lp-lead" style={{ width: '100%', maxWidth: '100%', fontWeight: 300 }}>{v.sub}</p>
          <div className="lp-btn-row">
            <a href="#contact" className="lp-btn lp-btn-cta">{v.ctaA} <span className="lp-arrow">→</span></a>
          </div>
          <div className="lp-hero-channels">
            <span className="lp-eyebrow lp-dim">Pracuję na</span>
            <ul>
              <li>Google Ads</li>
              <li>Meta</li>
              <li>TikTok</li>
              <li>LinkedIn</li>
              <li>GA4 + server-side</li>
              <li>Marketplace</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
