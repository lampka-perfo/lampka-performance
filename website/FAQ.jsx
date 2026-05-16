// FAQ.jsx — accordion-style frequently asked questions
function FAQ() {
  const items = [
    {
      q: 'Z jakim budżetem reklamowym ma to sens?',
      a: 'Zaczynam od ok. 3 000 zł/miesiąc budżetu mediowego. Zakres obsługi dostosowuję do wielkości firmy — inaczej pracuję z małym e-commerce, inaczej z firmą B2B z większym budżetem. Przy mniejszych budżetach możliwa jest konfiguracja, audyt lub prowadzenie krok po kroku — zakres i wycenę ustalamy indywidualnie.',
    },
    {
      q: 'Ile to kosztuje?',
      a: 'Zależy od zakresu. Pojedyncza konsultacja, szkolenie, jednorazowy audyt, miesięczna obsługa kampanii — każde z nich wyceniam inaczej. Cennik zaczyna się od 500 zł netto. Napisz przez formularz, co Cię interesuje — odpisuję ze szczegółową wyceną.',
    },
    {
      q: 'Jak szybko widać efekty?',
      a: 'Pierwsze poprawki — w 2–4 tygodnie (zwykle CTR / CPM / jakość ruchu). Realna zmiana ROAS i CAC — 2–3 miesiące. Każdy, kto obiecuje "rezultaty w tydzień", właśnie pali Twój budżet.',
    },
    {
      q: 'Mamy już agencję. Jak to wygląda?',
      a: 'Trzy opcje: (1) audyt zewnętrzny — sprawdzam, czy agencja robi swoje; (2) wspólne prowadzenie — ja jako strateg, oni jako wykonawca; (3) przejęcie kont — bez palenia mostów. Często wystarcza opcja 1, żeby agencja zaczęła robić to, co powinna od początku.',
    },
    {
      q: 'Pracujesz tylko z polskimi firmami?',
      a: 'Prowadzę konta na wielu rynkach europejskich. Język współpracy: polski lub angielski. Kontakt: telefon, email, Slack + system do zarządzania zadaniami z podziałem na Twoje i moje — wiesz co się dzieje bez pytania.',
    },
    {
      q: 'Robisz też SEO / content / e-mail / influencer?',
      a: 'Nie. Robię performance ads + analitykę + strategię. Resztę polecam zaufanym ludziom, z którymi pracowałem — i nie biorę za to prowizji. Lepiej być świetnym w jednym niż przeciętnym w pięciu.',
    },
    {
      q: 'Co podpisujemy?',
      a: 'Krótka umowa B2B na konkretne miesiące + NDA, jeśli potrzebne. Bez wyłączności, bez "lock-in" na pół roku. Możesz wypowiedzieć z miesiąca na miesiąc.',
    },
    {
      q: 'Jak zaczynamy?',
      a: 'Pogadanka 30–45 min na Google Meet. Bez prezentacji, bez sprzedaży. Po niej powiem szczerze, czy w ogóle warto zaczynać — czasem mówię „nie potrzebujesz mnie, zostań przy obecnym setupie".',
    },
  ];
  const [open, setOpen] = React.useState(0);

  return (
    <section className="lp-section lp-faq" id="faq">
      <div className="lp-container">
        <div className="lp-eyebrow">Najczęściej pytasz</div>
        <h2 className="lp-h-section">
          Zanim zapytasz — tu są odpowiedzi.
        </h2>
        <div className="lp-faq-list">
          {items.map((it, i) => (
            <div key={i} className={`lp-faq-item${open === i ? ' is-open' : ''}`}>
              <button
                type="button"
                className="lp-faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="lp-faq-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="lp-faq-q-text">{it.q}</span>
                <span className="lp-faq-toggle" aria-hidden="true">{open === i ? '–' : '+'}</span>
              </button>
              {open === i && <div className="lp-faq-a"><p>{it.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
