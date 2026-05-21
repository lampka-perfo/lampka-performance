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
      return;
    }

    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
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
