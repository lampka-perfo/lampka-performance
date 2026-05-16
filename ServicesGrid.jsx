// ServicesGrid.jsx — the three-pillar block
function ServicesGrid() {
  const items = [
    {
      icon: 'assets/icons/folder-search.svg',
      title: 'Audyt 360°',
      desc: 'Wchodzę w Twoje dane i mówię, jak jest. Pokazuję, gdzie tracisz pieniądze i co naprawić — w kolejności, która ma sens.',
      featured: true,
    },
    {
      icon: 'assets/icons/chart-up-arrow.svg',
      title: 'Performance ads',
      desc: 'Google, Meta, TikTok, LinkedIn. Buduję i prowadzę kampanie z jednym celem — żeby zarabiały, nie tylko wyglądały. Wyniki, nie raporty.',
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
