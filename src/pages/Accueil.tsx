import { CflButton } from '../components/CflButton';
import { PriceCard } from '../components/PriceCard';
import { DISCIPLINES, BENEFITS, HOME_TIERS, GALLERY_URLS } from '../data';

const MONO: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };
const ANTON: React.CSSProperties = { fontFamily: "'Anton', sans-serif", fontWeight: 400 };
const OSWALD: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

interface AccueilProps { isMobile: boolean; }

export function Accueil({ isMobile }: AccueilProps) {
  return (
    <div>
      {/* HERO */}
      <header
        data-rv
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(94,118,128,.18)',
          background: "linear-gradient(180deg,rgba(11,18,22,.32) 0%,rgba(11,18,22,.5) 45%,rgba(11,18,22,.96) 100%),url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=75')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', padding: 'clamp(48px,7vw,110px) clamp(20px,5vw,80px)' }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', ...MONO, fontSize: '12px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#EAF6F7', background: 'rgba(11,18,22,.5)', backdropFilter: 'blur(6px)', border: '1px solid rgba(51,167,180,.45)', borderRadius: '100px', padding: '8px 16px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#33A7B4', boxShadow: '0 0 0 4px rgba(51,167,180,.18)' }} />
              Préparation physique &amp; coaching surf
            </div>

            <h1 style={{ ...ANTON, fontSize: 'clamp(48px,8.4vw,118px)', lineHeight: '.84', textTransform: 'uppercase', margin: '20px 0 0', letterSpacing: '-.012em', textShadow: '0 2px 36px rgba(11,18,22,.55)' }}>
              <span style={{ display: 'block', color: '#F0F3F3' }}>Force</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px #A8E4EC' }}>Endurance</span>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: '.26em', color: '#F0F3F3' }}>
                <span style={{ fontSize: '.4em', WebkitTextStroke: '1.6px #8FA2AA', color: 'transparent', ...ANTON, transform: 'translateY(-.16em)' }}>&amp;</span>
                <span style={{ color: '#33A7B4' }}>Ride</span>
              </span>
            </h1>

            <p style={{ fontSize: 'clamp(16px,1.6vw,19px)', color: '#D6DEE0', maxWidth: '48ch', marginTop: '26px' }}>
              Préparation physique générale et coaching surf spécialisé, sur la côte des Landes. Petits groupes et suivi 1:1 — exigeant, jamais industriel.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '34px' }}>
              <CflButton label="S'inscrire" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
              <CflButton label="Voir le planning" href="#planning" variant="outline" size="lg" icon="calendar-event" />
            </div>
          </div>
        </div>
      </header>

      {/* DISCIPLINES */}
      <section data-rv style={{ padding: 'clamp(70px,10vw,130px) clamp(20px,5vw,80px)', position: 'relative' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#33A7B4', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '34px', height: '1px', background: '#33A7B4', opacity: .7 }} />
            Trois disciplines, un seul club
          </div>
          <h2 style={{ ...ANTON, fontSize: 'clamp(34px,5.5vw,72px)', lineHeight: '.92', textTransform: 'uppercase', color: '#F0F3F3', margin: '16px 0 0' }}>
            Force · Endurance<br />· Ride
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: '18px', marginTop: '48px' }}>
            {DISCIPLINES.map((d) => (
              <div
                key={d.n}
                className="hover-teal"
                style={{ background: '#142127', border: '1px solid rgba(94,118,128,.22)', borderRadius: '6px', padding: '30px 28px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <i className={d.icon} style={{ fontSize: '38px', color: '#33A7B4' }} />
                  <span style={{ ...MONO, fontSize: '12px', color: '#5E7680' }}>{d.n}</span>
                </div>
                <h3 style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '24px', color: '#F0F3F3', marginTop: '24px' }}>{d.title}</h3>
                <p style={{ fontSize: '14.5px', color: '#9DAFB6', marginTop: '10px', flex: 1 }}>{d.text}</p>
                <div style={{ height: '1px', background: '#2C3C44', margin: '20px 0 14px' }} />
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
                  {d.points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: '9px', alignItems: 'center', ...MONO, fontSize: '11.5px', letterSpacing: '.04em', textTransform: 'uppercase', color: '#9DAFB6' }}>
                      <i className="ti ti-point-filled" style={{ color: '#33A7B4', fontSize: '14px' }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section data-rv style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,80px)', background: '#F1EBDF', borderTop: '1px solid rgba(94,118,128,.16)', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '.8fr 1.2fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
          <div>
            <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#15788A' }}>Pourquoi le club</div>
            <h2 style={{ ...ANTON, fontSize: 'clamp(30px,4.5vw,58px)', lineHeight: '.95', textTransform: 'uppercase', color: '#1A2024', margin: '14px 0 0' }}>
              Un suivi<br />exigeant
            </h2>
            <p style={{ fontSize: '15.5px', color: '#6E665B', marginTop: '20px', maxWidth: '42ch' }}>
              On ne se disperse pas. On programme, on exécute, on mesure — et on recommence un cran plus haut.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: '16px' }}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ border: '1px solid rgba(26,32,36,.1)', borderRadius: '6px', padding: '24px 22px', background: '#FBF7EF' }}>
                <i className={b.icon} style={{ fontSize: '30px', color: '#15788A' }} />
                <h4 style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', fontSize: '17px', color: '#1A2024', marginTop: '16px' }}>{b.title}</h4>
                <p style={{ fontSize: '13.5px', color: '#6E665B', marginTop: '7px' }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section data-rv style={{ padding: 'clamp(70px,10vw,130px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px' }}>
            <div>
              <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#33A7B4', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ width: '34px', height: '1px', background: '#33A7B4', opacity: .7 }} />
                Tarifs
              </div>
              <h2 style={{ ...ANTON, fontSize: 'clamp(34px,5.5vw,72px)', lineHeight: '.92', textTransform: 'uppercase', color: '#F0F3F3', margin: '16px 0 0' }}>
                Choisis<br />ton rythme
              </h2>
            </div>
            <CflButton label="Tous les tarifs" href="#tarifs" variant="ghost" icon="arrow-right" iconRight />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,250px),1fr))', gap: '18px', marginTop: '46px' }}>
            {HOME_TIERS.map((t) => (
              <PriceCard key={t.name} {...t} href="#inscription" />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section data-rv style={{ padding: 'clamp(40px,6vw,80px) 0', background: '#F1EBDF', borderTop: '1px solid rgba(94,118,128,.16)', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(20px,5vw,80px)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', marginBottom: '26px' }}>
          <div>
            <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#15788A' }}>@clubferlandes</div>
            <h2 style={{ ...ANTON, fontSize: 'clamp(26px,3.6vw,44px)', lineHeight: '.95', textTransform: 'uppercase', color: '#1A2024', margin: '10px 0 0' }}>Le club en images</h2>
          </div>
          <CflButton label="Suivre sur Instagram" href="#club" variant="atlantic" size="sm" icon="brand-instagram" />
        </div>
        <div className="gallery-scroll" style={{ display: 'flex', gap: '10px', padding: '0 clamp(20px,5vw,80px)', overflowX: 'auto' }}>
          {GALLERY_URLS.map((g, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 auto',
                width: 'clamp(180px,24vw,280px)',
                aspectRatio: '1',
                borderRadius: '5px',
                overflow: 'hidden',
                border: '1px solid rgba(94,118,128,.2)',
                backgroundImage: `linear-gradient(180deg,rgba(11,18,22,.05),rgba(11,18,22,.45)),url('${g}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section data-rv style={{ padding: 'clamp(72px,11vw,150px) clamp(20px,5vw,80px)', textAlign: 'center', background: 'radial-gradient(120% 120% at 50% 0%, rgba(15,92,112,.25), transparent 60%), #0B1216' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#33A7B4' }}>Première séance offerte</div>
          <h2 style={{ ...ANTON, fontSize: 'clamp(38px,6.5vw,86px)', lineHeight: '.9', textTransform: 'uppercase', color: '#F0F3F3', margin: '18px 0 0' }}>
            Prêt à forger<br />ta condition ?
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.5vw,19px)', color: '#9DAFB6', margin: '22px auto 0', maxWidth: '52ch' }}>
            Rejoins un petit groupe ou démarre un suivi 1:1. On évalue ton niveau, on construit ton programme, on avance.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginTop: '36px' }}>
            <CflButton label="S'inscrire maintenant" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
            <CflButton label="Nous contacter" href="#inscription" variant="outline" size="lg" icon="mail" />
          </div>
        </div>
      </section>
    </div>
  );
}
