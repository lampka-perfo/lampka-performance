// Compare.jsx — the signature "pali budżet" vs "świeci wynikami" block
function Compare() {
  const bad = [
    'Raporty miesięczne, których nikt nie czyta',
    '"ROAS jest dobry" — w jednym narzędziu',
    'Wszystko na auto-bidding, bo "AI to ogarnie"',
    'Brak pomiaru server-side, dane lecą w kosmos',
    'Agencja, której nikt nie widział od kwartału',
  ];
  const good = [
    'Cotygodniowy 90-sekundowy raport, który rozumiesz',
    'Jeden źródłowy KPI: pieniądze, które wracają',
    'Każda zmiana zalogowana, każde testowanie zaplanowane',
    'Pomiar server-side + offline conversions wpięte',
    'Jeden numer telefonu — mój',
  ];
  return (
    <section className="lp-section" id="compare">
      <div className="lp-container">
        <div className="lp-eyebrow">Pali budżet vs świeci wynikami</div>
        <h2 className="lp-h-section">
          Twoje kampanie: <mark>świecą</mark> czy palą budżet?
        </h2>
        <div className="lp-compare">
          <div className="lp-compare-col lp-compare-bad">
            <h3>Pali budżet</h3>
            <ul>
              {bad.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
          <div className="lp-compare-col lp-compare-good">
            <h3>Świeci wynikami</h3>
            <ul>
              {good.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Compare = Compare;
