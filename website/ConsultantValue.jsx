// ConsultantValue.jsx — "Konsultant biznesu, nie media buyer"
function ConsultantValue() {
  const pillars = [
    {
      n: '01',
      t: 'CPC to nie wynik — wynik to przelew',
      d: 'Wchodzę w ofertę, stronę, lejek i koszyk. Reklama to tylko wejście — jeśli reszta nie działa, żaden budżet tego nie naprawi.',
    },
    {
      n: '02',
      t: 'Pomagam z ofertą, komunikacją i pozycjonowaniem',
      d: 'Jeśli kampania nie konwertuje, czasem winna jest reklama. Częściej — strona, oferta albo segment. Mówię, gdzie problem leży naprawdę.',
    },
    {
      n: '03',
      t: 'Współpracuję z Twoim zespołem (lub jestem nim sam)',
      d: 'Wskakuję jako brakujący Head of Performance: prowadzę calle, briefuję grafików, pilnuję analityki. Mniejsze firmy mają we mnie cały dział marketingu.',
    },
    {
      n: '04',
      t: 'Decyzje na liczbach, nie na przeczuciach',
      d: 'Każda zmiana zalogowana, każdy test policzony. Jeśli coś nie działa, mówię to wprost — nie sprzedaję optymizmu na fakturach.',
    },
  ];
  return (
    <section className="lp-section lp-consultant" id="why-me">
      <div className="lp-container">
        <div className="lp-eyebrow">Dlaczego ja</div>
        <h2 className="lp-h-section">
          Konsultant <mark>Twojego biznesu</mark>,<br/>nie gość od stawiania reklam.
        </h2>
        <div className="lp-consultant-grid">
          {pillars.map(p => (
            <div key={p.n} className="lp-consultant-pillar">
              <div className="lp-consultant-num">{p.n}</div>
              <div>
                <h3 className="lp-consultant-title">{p.t}</h3>
                <p className="lp-consultant-desc">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ConsultantValue = ConsultantValue;
