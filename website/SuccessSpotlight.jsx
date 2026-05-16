// SuccessSpotlight.jsx
function useCountUp(target, duration) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return [count, ref];
}

function SuccessSpotlight() {
  const [count6, ref6] = useCountUp(6, 1200);
  return (
    <section className="lp-section lp-success" id="results">
      <div className="lp-container lp-success-inner">
        <div className="lp-eyebrow">Miejsce na Twój sukces</div>
        <h2 className="lp-h-section">
          <mark>Twój wynik</mark> mógłby być tutaj.
        </h2>

        <div className="lp-success-card">
          <div className="lp-success-card-mark">Reserved · Twoja firma</div>
          <div className="lp-success-card-stat">+xxx%</div>
          <div className="lp-success-card-lbl">Więcej sprzedaży · mniej przepalonego budżetu</div>
          <div className="lp-success-card-footer">
            <span>Branża: ?</span>
            <span>Kanały: ?</span>
            <span>Start: ?</span>
          </div>
        </div>

        <div className="lp-success-pitch">
          <p>
            Nie sprzedaję case studies w PDF-ach i nie świecę cudzymi logo. Każdą firmę, z którą pracuję, traktuję jako swój największy osobisty projekt — bo jest. Dziś prowadzę tylko kilka kont równocześnie, żeby każde miało moją głowę, nie newsletter.
          </p>
        </div>

        <div className="lp-success-meta">
          <div className="lp-success-meta-block">
            <div className="lp-success-meta-num">0</div>
            <div className="lp-success-meta-lbl">klientów, którym powiedziałem że wszystko gra<br/>— kiedy tak nie było</div>
          </div>
          <div className="lp-success-meta-block" ref={ref6}>
            <div className="lp-success-meta-num">{count6}+</div>
            <div className="lp-success-meta-lbl">lat w performance<br/>B2B i e-commerce</div>
          </div>
          <div className="lp-success-meta-block">
            <div className="lp-success-meta-num">1</div>
            <div className="lp-success-meta-lbl">numer telefonu<br/>który u Ciebie zadzwoni — mój</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.SuccessSpotlight = SuccessSpotlight;
