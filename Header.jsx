// Header.jsx — sticky top nav for lampkaperformance.pl
function Header() {
  return (
    <header className="lp-header">
      <a href="#top" className="lp-brand" aria-label="Lampka Performance">
        <span className="lp-sygnet" style={{ width: 40, height: 40, color: '#fff' }}></span>
        <span className="lp-wm">Lampka Performance</span>
      </a>
      <nav className="lp-nav">
        <a href="#services">Co robię</a>
        <a href="#pains">Sygnały</a>
        <a href="#why-me">Dlaczego ja</a>
        <a href="#process">Jak pracuję</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a href="#contact" className="lp-btn lp-btn-cta">
        Umów pogadankę <span className="lp-arrow">→</span>
      </a>
    </header>
  );
}
window.Header = Header;
