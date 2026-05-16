// Footer.jsx
function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer-inner">
        <div className="lp-footer-brand">
          <span className="lp-sygnet" style={{ width: 36, height: 36, color: '#fff' }}></span>
          <span className="lp-wm">Lampka Performance</span>
        </div>
        <nav className="lp-footer-nav">
          <a href="#services">Co robię</a>
          <a href="#compare">Pali czy świeci?</a>
          <a href="#results">Wyniki</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <div className="lp-footer-legal">
          <span>© 2026 Lampka Performance · Patryk Lampkowski Visible It · NIP: 7393975847 · REGON: 523647030</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="/polityka-prywatnosci.html" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', fontSize: '12px' }}>Polityka prywatności</a>
            <a href="/polityka-cookies.html" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', fontSize: '12px' }}>Polityka cookies</a>
            <a href="/regulamin.html" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none', fontSize: '12px' }}>Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
