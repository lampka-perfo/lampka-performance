// ContactCTA.jsx — closing CTA + Formspree form
// SETUP: Replace YOUR_FORMSPREE_ID below with the ID from formspree.io (e.g. "xyzabc12")
const FORMSPREE_ID = 'mzdwpbdo';

function ContactCTA() {
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      setSubmitted(true);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'form_send', form_name: 'contact' });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'generate_lead',
          form_name: 'contact',
        });
      }
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="lp-section lp-contact" id="contact">
      <div className="lp-container lp-contact-inner">
        <div>
          <div className="lp-eyebrow">Pogadajmy</div>
          <h2 className="lp-h-display lp-h-display-sm">
            Umów <mark>pogadankę</mark><br/>przy lampce.
          </h2>
          <p className="lp-lead">
            45 minut, Google Meet, bez prezentacji. Pokażę Ci, gdzie u Ciebie pali budżet — albo powiem, że wszystko jest OK i nie potrzebujesz mnie.
          </p>
          <div className="lp-contact-meta">
            <div>
              <div className="lp-eyebrow lp-dim">E-mail</div>
              <div className="lp-contact-line">
                <a href="mailto:patryk@lampka-performance.pl" style={{ color: 'inherit', textDecoration: 'none' }}>
                  patryk@lampka-performance.pl
                </a>
              </div>
            </div>
            <div>
              <div className="lp-eyebrow lp-dim">Telefon</div>
              <div className="lp-contact-line">
                <a href="tel:+48691463095" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +48 691 463 095
                </a>
              </div>
            </div>
            <div>
              <div className="lp-eyebrow lp-dim">LinkedIn</div>
              <div className="lp-contact-line">
                <a href="https://www.linkedin.com/in/patryk-lampkowski/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Patryk Lampkowski
                </a>
              </div>
            </div>
          </div>
        </div>
        <form className="lp-form" onSubmit={handleSubmit}>
          {!submitted ? (
            <>
              <label>
                <span>Imię</span>
                <input name="first_name" required placeholder="Patryk" />
              </label>
              <label>
                <span>Nazwisko</span>
                <input name="last_name" required placeholder="Kowalski" />
              </label>
              <label>
                <span>Nazwa firmy</span>
                <input name="company" required placeholder="Firma sp. z o.o." />
              </label>
              <label>
                <span>E-mail</span>
                <input name="email" required type="email" placeholder="ty@firma.pl" />
              </label>
              <label>
                <span>Miesięczny budżet reklamowy</span>
                <select name="budget" style={{ fontFamily: 'inherit', background: '#0a0a0a', color: '#fff', border: '1px solid rgba(255,255,255,.12)', borderRadius: '8px', padding: '14px 16px', fontSize: '15px', outline: 'none' }}>
                  <option value="">Wybierz...</option>
                  <option value="dopiero-zaczynam">Dopiero zaczynam / nie mam jeszcze budżetu</option>
                  <option value="do-4000">do 4 000 zł/mies.</option>
                  <option value="4000-8000">4 000 – 8 000 zł/mies.</option>
                  <option value="8000-15000">8 000 – 15 000 zł/mies.</option>
                  <option value="15000-30000">15 000 – 30 000 zł/mies.</option>
                  <option value="powyzej-30000">powyżej 30 000 zł/mies.</option>
                </select>
              </label>
              <label>
                <span>Co chcesz osiągnąć?</span>
                <textarea name="message" rows={3} placeholder="Krótko — co Cię tu sprowadziło." />
              </label>
              <label className="lp-check">
                <input name="audit" type="checkbox" />
                <span>Proszę o ofertę / audyt na próbę</span>
              </label>
              <label className="lp-check">
                <input name="meeting" type="checkbox" />
                <span>Proszę o spotkanie online</span>
              </label>
              <button type="submit" className="lp-btn lp-btn-cta" disabled={sending}>
                {sending ? 'Wysyłam...' : 'Wyślij'} <span className="lp-arrow">→</span>
              </button>
            </>
          ) : (
            <div className="lp-form-success">
              <div className="lp-eyebrow">Dzięki!</div>
              <div className="lp-h-section" style={{ fontSize: 36, marginTop: 8 }}>Lampka się świeci.</div>
              <p className="lp-lead" style={{ marginTop: 16 }}>Odzywam się w ciągu 48h. Bez ściemy.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
window.ContactCTA = ContactCTA;
