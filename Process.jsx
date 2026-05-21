// Process.jsx — "Jak pracuję" — 4-step engagement
function Process() {
  const steps = [
    {
      n: '01',
      label: 'Diagnoza',
      time: '1 tydzień',
      title: 'Czytam wszystko, mówię prawdę',
      bullets: [
        'Sprawdzam co masz, czego nie masz i od czego zacząć',
        'Konta reklamowe, strona, analityka, oferta — patrzę na całość',
        'Mówię co działa, co nie i dlaczego',
        'Dostajesz raport bez owijania w bawełnę — co naprawić, w jakiej kolejności',
      ],
    },
    {
      n: '02',
      label: 'Plan',
      time: '1 tydzień',
      title: 'Co naprawiam, w jakiej kolejności',
      bullets: [
        'Lista rzeczy do naprawy w kolejności, która ma sens',
        'Co da efekt szybko, co wymaga czasu',
        'Co biorę na siebie, co zostaje po Twojej stronie',
        'Zero zaskoczeń — wiesz, na co się zgadzasz',
      ],
    },
    {
      n: '03',
      label: 'Egzekucja',
      time: 'Miesięcznie',
      title: 'Robota, nie zarządzanie kontem',
      bullets: [
        'Kampanie prowadzone aktywnie, nie odpalane i zapomniane',
        'Testy z planem — kreacje, struktury, grupy',
        'Pomiar oparty na danych, które mają sens biznesowo',
        'Tygodniowy update — krótko, konkretnie',
      ],
    },
    {
      n: '04',
      label: 'Raport',
      time: 'Co tydzień',
      title: 'Liczby, które rozumiesz w 90 sekund',
      bullets: [
        'Co świeci, co gaśnie, co dalej — w trzech zdaniach',
        'Pieniądze, które wracają — w PLN i ROAS',
        'Lista hipotez na kolejny tydzień',
        'Bez "performance KPI summary" w 40 slajdach',
      ],
    },
  ];

  return (
    <section className="lp-section lp-process" id="process">
      <div className="lp-container">
        <div className="lp-eyebrow">Jak pracuję</div>
        <h2 className="lp-h-section">
          Od pierwszego maila do pieniędzy, które wracają.
        </h2>
        <ol className="lp-process-list">
          {steps.map(s => (
            <li key={s.n} className="lp-process-step">
              <div className="lp-process-meta">
                <div className="lp-process-num">{s.n}</div>
                <div className="lp-process-label">{s.label}</div>
                <div className="lp-process-time">{s.time}</div>
              </div>
              <div className="lp-process-body">
                <h3 className="lp-process-title">{s.title}</h3>
                <ul>
                  {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.Process = Process;
