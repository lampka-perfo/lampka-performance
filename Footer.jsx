// Footer.jsx
function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer-inner">
        <div className="lp-footer-brand">
          <span className="lp-sygnet" style={{ width: 36, height: 36, color: '#fff' }}></span>
          <span className="lp-wm">Lampka Performance</span>
          <a href="https://www.linkedin.com/in/patryk-lampkowski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'rgba(255,255,255,.5)', marginLeft: '12px', display: 'inline-flex', alignItems: 'center', transition: 'color .2s' }} onMouseEnter={e => e.currentTarget.style.color = '#EFD500'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.5)'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
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
