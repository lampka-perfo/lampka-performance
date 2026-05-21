// ServicesGrid.jsx — the three-pillar block
function ServicesGrid() {
  const items = [
    {
      icon: 'assets/icons/folder-search.svg',
      title: 'Diagnoza i strategia',
      desc: 'Zanim cokolwiek odpalę, sprawdzam co działa, co nie i dlaczego. Dostajesz konkretny plan — co poprawić, w jakiej kolejności i czego się spodziewać.',
      featured: true,
    },
    {
      icon: 'assets/icons/chart-up-arrow.svg',
      title: 'Reklamy, które sprzedają',
      desc: 'Prowadzę kampanie na Google, Meta, TikTok i LinkedIn. Nie chodzi o ładne kreacje — chodzi o to, żeby każda złotówka wracała z nawiązką.',
    },
    {
      icon: 'assets/icons/laptop-chart.svg',
      title: 'Analityka',
      desc: 'GA4, Tag Manager, atrybucja, dashboardy. Stawiam pomiar, który mówi prawdę — i raport, który czyta się 90 sekund.',
    },
  ];

  return (
    <section className="lp-section" id="services">
      <div className="lp-container">
        <div className="lp-eyebrow">Co robię</div>
        <h2 className="lp-h-section">Trzy filary, jeden cel —<br/>pieniądze, które wracają.</h2>
        <div className="lp-services-grid">
          {items.map((it, i) => (
            <article key={i} className={`lp-card${it.featured ? ' lp-card-featured' : ''}`}>
              <img src={it.icon} alt="" className="lp-card-icon" />
              <h3 className="lp-card-title">{it.title}</h3>
              <p className="lp-card-desc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ServicesGrid = ServicesGrid;
