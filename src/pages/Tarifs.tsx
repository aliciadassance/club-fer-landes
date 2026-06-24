import { CflButton } from '../components/CflButton';
import { PriceCard } from '../components/PriceCard';
import { TIERS, FAQ } from '../data';

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
          position: 'relative', minHeight: '74vh', display: 'flex', alignItems: 'flex-end',
          borderBottom: '1px solid rgba(94,118,128,.18)',
          background: "linear-gradient(180deg,rgba(11,18,22,.36) 0%,rgba(11,18,22,.56) 48%,rgba(11,18,22,.96) 100%),url('https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1600&q=75')",
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', padding: 'clamp(48px,7vw,100px) clamp(20px,5vw,80px)' }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', ...MONO, fontSize: '12px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#EAF6F7', background: 'rgba(11,18,22,.5)', backdropFilter: 'blur(6px)', border: '1px solid rgba(51,167,180,.45)', borderRadius: '100px', padding: '8px 16px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#33A7B4', boxShadow: '0 0 0 4px rgba(51,167,180,.18)' }} />
              Tarifs &amp; formules
            </div>
            <h1 style={{ ...ANTON, fontSize: 'clamp(44px,8vw,104px)', lineHeight: '.86', textTransform: 'uppercase', margin: '20px 0 0', letterSpacing: '-.012em', textShadow: '0 2px 36px rgba(11,18,22,.55)' }}>
              <span style={{ display: 'block', color: '#F0F3F3' }}>Tarifs &amp;</span>
              <span style={{ display: 'block', color: '#33A7B4' }}>formules</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.6vw,19px)', color: '#D6DEE0', maxWidth: '54ch', marginTop: '24px' }}>
              À la séance, en carnet ou en abonnement. Toutes les formules donnent accès à la prépa physique et au coaching surf, matériel fourni.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '32px' }}>
              <CflButton label="S'inscrire" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
              <CflButton label="Voir le planning" href="#planning" variant="outline" size="lg" icon="calendar-event" />
            </div>
          </div>
        </div>
      </header>

      {/* PRICE CARDS */}
      <section data-rv style={{ padding: 'clamp(50px,7vw,90px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: '18px' }}>
            {TIERS.map((t) => (
              <PriceCard key={t.name} {...t} href="#inscription" />
            ))}
          </div>
          <p style={{ ...MONO, fontSize: '11px', letterSpacing: '.06em', color: '#5E7680', marginTop: '24px', textAlign: 'center' }}>
            Tarifs indicatifs · à ajuster · Étudiants &amp; off-peak : −15% sur présentation d'un justificatif
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
