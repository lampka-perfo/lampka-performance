// Pains.jsx — "Z czym do mnie przychodzą"
function Pains() {
  const items = [
    {
      ico: 'assets/icons/chart-down-arrow.svg',
      title: 'Wydajesz tyle samo na reklamy, a sprzedaż maleje',
      desc: 'Budżet ten sam, wyniki gorsze. Nikt nie wie dlaczego — bo nikt nie sprawdził, gdzie konkretnie się sypie.',
    },
    {
      ico: 'assets/icons/folder-search.svg',
      title: 'Zaczynasz reklamować się online i nie wiesz od czego zacząć',
      desc: 'Google, Meta, TikTok, LinkedIn — każdy mówi że to najlepsze miejsce. Bez planu każda złotówka to eksperyment.',
    },
    {
      ico: 'assets/icons/idea-lightbulb.svg',
      title: 'Reklamy "same się optymalizują", ale efektów brak',
      desc: 'Kampanie na autopilocie działały, dopóki działały. Teraz trzeba je prowadzić z głową, zamiast ślepo ufać automatom.',
    },
    {
      ico: 'assets/icons/network-tree.svg',
      title: 'Każde narzędzie pokazuje inne liczby i nie wiesz komu wierzyć',
      desc: 'Google mówi jedno, Meta drugie, a prawda jest gdzieś pośrodku. Wiem, jak to poustawiać — żeby dane były drogowskazem, nie źródłem chaosu.',
    },
    {
      ico: 'assets/icons/chart-up-arrow.svg',
      title: 'Dostajesz zapytania, ale to nie są Twoi klienci',
      desc: 'Leady przychodzą, ale nie kupują — zła grupa, zła treść, zły budżet. Albo wszystkie trzy naraz.',
    },
    {
      ico: 'assets/icons/molecule-share.svg',
      title: 'Konkurencja rośnie, a Ty nie wiesz jak reagować',
      desc: 'Coraz więcej firm walczy o tych samych klientów. Bez danych nie wiesz gdzie tracisz, gdzie możesz zyskać i co zmienić.',
    },
  ];
  return (
    <section className="lp-section" id="pains">
      <div className="lp-container">
        <div className="lp-eyebrow">Sygnały, że pora włączyć światło</div>
        <h2 className="lp-h-section">
          Z czym <mark>do mnie przychodzą</mark> firmy.
        </h2>
        <div className="lp-pains-grid">
          {items.map((it, i) => (
            <article key={i} className="lp-pain-card">
              <img src={it.ico} alt="" className="lp-pain-icon" />
              <h3 className="lp-pain-title">{it.title}</h3>
              <p className="lp-pain-desc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pains = Pains;
