// Pains.jsx — "Z czym do mnie przychodzą"
function Pains() {
  const items = [
    {
      ico: 'assets/icons/chart-down-arrow.svg',
      title: 'ROAS spada miesiąc do miesiąca',
      desc: 'Budżet ten sam, wyniki gorsze. Nikt nie wie dlaczego — bo nikt nie sprawdził, gdzie konkretnie się sypie.',
    },
    {
      ico: 'assets/icons/folder-search.svg',
      title: 'Agencja przysyła ładne PDF-y, ale CAC rośnie',
      desc: 'Slajdy wyglądają świetnie, kasa na koncie — niekoniecznie. Cyfry w panelu i cyfry w biznesie to dwie różne rzeczy.',
    },
    {
      ico: 'assets/icons/idea-lightbulb.svg',
      title: '"AI to ogarnie" przestało ogarniać',
      desc: 'Pmax i Advantage+ działały, dopóki działały. Teraz trzeba je prowadzić ręką, zamiast modlić się do auto-biddingu.',
    },
    {
      ico: 'assets/icons/network-tree.svg',
      title: 'GA4 pokazuje co innego niż panel reklamowy',
      desc: 'GA4 pokazuje jedno, panel reklamowy drugie, a prawda jest gdzieś pośrodku. Wiem, jak to poustawiać — żeby GA4 był drogowskazem, nie źródłem chaosu.',
    },
    {
      ico: 'assets/icons/chart-up-arrow.svg',
      title: 'Skalujesz budżet, a sprzedaż stoi',
      desc: 'Pomnożenie wydatków przez dwa nie pomnożyło zamówień. Sufit nie jest w reklamie — jest gdzie indziej w lejku.',
    },
    {
      ico: 'assets/icons/molecule-share.svg',
      title: 'Nie wiesz, który kanał faktycznie sprzedaje',
      desc: 'Nie wiesz, który kanał dowozi, bo każdy pokazuje co innego. To nie problem z danymi — to problem z tym, że nikt tego nie poukładał.',
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
