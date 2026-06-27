import { PriceCard } from '../components/PriceCard';
import { ABONNEMENTS, ALACARTE, FAQ } from '../data';

const MONO: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };
const ANTON: React.CSSProperties = { fontFamily: "'Anton', sans-serif", fontWeight: 400 };
const OSWALD: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

export function Tarifs() {
  return (
    <div>
      {/* HERO */}
      <header
        data-rv
        style={{
          padding: 'clamp(56px,8vw,110px) clamp(20px,5vw,80px) clamp(40px,5vw,60px)',
          borderBottom: '1px solid rgba(94,118,128,.18)',
          background: 'repeating-linear-gradient(115deg, rgba(94,118,128,.05) 0 2px, transparent 2px 9px), #0B1216',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#33A7B4' }}>Tarifs &amp; formules</div>
          <h1 style={{ ...ANTON, fontSize: 'clamp(44px,8vw,108px)', lineHeight: '.86', textTransform: 'uppercase', color: '#F0F3F3', margin: '18px 0 0' }}>Les tarifs</h1>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', color: '#9DAFB6', maxWidth: '56ch', marginTop: '20px' }}>
            Abonnement ou à la carte — toutes les formules donnent accès à l'ensemble des disciplines, matériel fourni.
          </p>
        </div>
      </header>

      {/* PRICE CARDS */}
      <section data-rv style={{ padding: 'clamp(50px,7vw,90px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '48px', alignItems: 'start' }}>

            {/* Abonnements column */}
            <div>
              <h2 style={{ ...ANTON, fontSize: 'clamp(38px,5.5vw,72px)', lineHeight: '.88', textTransform: 'uppercase', color: '#33A7B4', marginBottom: '28px' }}>
                Abonnements
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {ABONNEMENTS.map((t) => (
                  <PriceCard key={t.name} {...t} href="#inscription" />
                ))}
              </div>
            </div>

            {/* À la carte column */}
            <div>
              <h2 style={{ ...ANTON, fontSize: 'clamp(38px,5.5vw,72px)', lineHeight: '.88', textTransform: 'uppercase', color: '#F0F3F3', marginBottom: '28px' }}>
                À la carte
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {ALACARTE.map((t) => (
                  <PriceCard key={t.name} {...t} href="#inscription" />
                ))}
              </div>
            </div>

          </div>
          <p style={{ ...MONO, fontSize: '11px', letterSpacing: '.06em', color: '#5E7680', marginTop: '40px', textAlign: 'center' }}>
            Tous les tarifs donnent accès à l'ensemble des disciplines — prépa, endurance, surf — sans restriction.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section data-rv style={{ padding: 'clamp(50px,7vw,100px) clamp(20px,5vw,80px)', background: '#F1EBDF', borderTop: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ ...ANTON, fontSize: 'clamp(28px,4vw,52px)', lineHeight: '.92', textTransform: 'uppercase', color: '#1A2024' }}>
            Questions<br />fréquentes
          </h2>
          <div style={{ marginTop: '34px', borderTop: '1px solid rgba(26,32,36,.14)' }}>
            {FAQ.map((q) => (
              <div key={q.n} style={{ padding: '24px 0', borderBottom: '1px solid rgba(26,32,36,.14)' }}>
                <h4 style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', fontSize: '18px', color: '#1A2024', display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                  <span style={{ color: '#15788A', ...MONO, fontSize: '13px' }}>{q.n}</span>
                  {q.q}
                </h4>
                <p style={{ fontSize: '14.5px', color: '#6E665B', marginTop: '10px', paddingLeft: '30px', maxWidth: '64ch' }}>{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
