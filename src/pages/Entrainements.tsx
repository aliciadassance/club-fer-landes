import { CflButton } from '../components/CflButton';
import { FORMATS, METHOD_STEPS } from '../data';

const MONO: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };
const ANTON: React.CSSProperties = { fontFamily: "'Anton', sans-serif", fontWeight: 400 };
const OSWALD: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

interface EntrainementsProps { isMobile: boolean; }

export function Entrainements({ isMobile }: EntrainementsProps) {
  const manifestoCols = isMobile ? '1fr' : '1.1fr .9fr';

  return (
    <div>
      {/* HERO */}
      <header
        data-rv
        style={{
          position: 'relative', minHeight: '74vh', display: 'flex', alignItems: 'flex-end',
          borderBottom: '1px solid rgba(94,118,128,.18)',
          background: "linear-gradient(180deg,rgba(11,18,22,.36) 0%,rgba(11,18,22,.56) 48%,rgba(11,18,22,.96) 100%),url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=75')",
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', padding: 'clamp(48px,7vw,100px) clamp(20px,5vw,80px)' }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', ...MONO, fontSize: '12px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#EAF6F7', background: 'rgba(11,18,22,.5)', backdropFilter: 'blur(6px)', border: '1px solid rgba(51,167,180,.45)', borderRadius: '100px', padding: '8px 16px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#33A7B4', boxShadow: '0 0 0 4px rgba(51,167,180,.18)' }} />
              Philosophie &amp; entraînements
            </div>
            <h1 style={{ ...ANTON, fontSize: 'clamp(44px,8vw,104px)', lineHeight: '.86', textTransform: 'uppercase', margin: '20px 0 0', letterSpacing: '-.012em', textShadow: '0 2px 36px rgba(11,18,22,.55)' }}>
              <span style={{ display: 'block', color: '#F0F3F3', marginBottom: '14px' }}>Forgé par</span>
              <span style={{ display: 'block', color: '#33A7B4' }}>l'Atlantique</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.6vw,19px)', color: '#D6DEE0', maxWidth: '52ch', marginTop: '24px' }}>
              Placeholder — décrivez en une ou deux phrases la philosophie du club : l'exigence, la proximité, le lien entre la salle et l'océan.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '32px' }}>
              <CflButton label="S'inscrire" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
              <CflButton label="Voir les tarifs" href="#tarifs" variant="outline" size="lg" icon="tag" />
            </div>
          </div>
        </div>
      </header>

      {/* PRÉPA PHYSIQUE */}
      <section data-rv style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,80px)', background: '#F1EBDF', borderTop: '1px solid rgba(94,118,128,.16)', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: manifestoCols, gap: 'clamp(32px,5vw,80px)', alignItems: 'start' }}>
          <p style={{ ...OSWALD, fontWeight: 300, fontSize: 'clamp(22px,3vw,38px)', lineHeight: '1.2', color: '#1A2024' }}>
            <span style={{ color: '#15788A', fontWeight: 600 }}>Préparation physique.</span> Placeholder — décrivez ici l'approche du club : une préparation exigeante, adaptée à chaque discipline, pour progresser dans la durée.
          </p>
          <div style={{ borderTop: '1px solid rgba(26,32,36,.14)' }}>
            {[
              { n: '01', title: 'Préparation physique Surf', text: "Placeholder — explosivité, endurance de rame, gainage et mobilité spécifiques à la pratique du surf en conditions réelles." },
              { n: '02', title: 'Préparation physique Sauvetage côtier', text: "Placeholder — endurance et puissance pour les interventions en mer, résistance sous effort, gestion du stress physique." },
              { n: '03', title: 'Séances non spécifiques', text: "Placeholder — force générale, cardio et mobilité pour tous les pratiquants, quelle que soit leur discipline principale." },
            ].map((p) => (
              <div key={p.n} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '18px', padding: '20px 0', borderBottom: '1px solid rgba(26,32,36,.14)', alignItems: 'baseline' }}>
                <span style={{ ...MONO, fontSize: '12px', color: '#15788A' }}>{p.n}</span>
                <div>
                  <h4 style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '19px', color: '#1A2024' }}>{p.title}</h4>
                  <p style={{ fontSize: '14px', color: '#6E665B', marginTop: '4px' }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section data-rv style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,80px)', background: '#0e1a20', borderTop: '1px solid rgba(94,118,128,.16)', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#33A7B4', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '34px', height: '1px', background: '#33A7B4', opacity: .7 }} />
            Les formats
          </div>
          <h2 style={{ ...ANTON, fontSize: 'clamp(32px,5vw,64px)', lineHeight: '.92', textTransform: 'uppercase', color: '#F0F3F3', margin: '16px 0 0' }}>
            Comment on<br />s'entraîne
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: '16px', marginTop: '46px' }}>
            {FORMATS.map((f) => (
              <div key={f.title} className="hover-teal" style={{ background: '#0B1216', border: '1px solid rgba(94,118,128,.22)', borderRadius: '6px', padding: '28px 26px', display: 'flex', flexDirection: 'column' }}>
                <i className={f.icon} style={{ fontSize: '36px', color: '#33A7B4' }} />
                <h3 style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', fontSize: '21px', color: '#F0F3F3', marginTop: '20px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#9DAFB6', marginTop: '10px', flex: 1 }}>{f.text}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '18px' }}>
                  {f.tags.map((tg) => (
                    <span key={tg} style={{ ...MONO, fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#9DAFB6', border: '1px solid rgba(94,118,128,.3)', borderRadius: '3px', padding: '5px 9px' }}>{tg}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section data-rv style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,80px)', background: '#F1EBDF', borderTop: '1px solid rgba(94,118,128,.16)', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#15788A' }}>La méthode</div>
          <h2 style={{ ...ANTON, fontSize: 'clamp(32px,5vw,64px)', lineHeight: '.92', textTransform: 'uppercase', color: '#1A2024', margin: '14px 0 0' }}>Quatre temps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 0, marginTop: '40px', borderTop: '1px solid rgba(26,32,36,.16)' }}>
            {METHOD_STEPS.map((m) => (
              <div key={m.n} style={{ padding: '26px 22px 30px', borderBottom: '1px solid rgba(26,32,36,.16)', borderRight: '1px solid rgba(26,32,36,.16)' }}>
                <span style={{ ...ANTON, fontSize: '48px', color: '#D8CFBE', lineHeight: 1 }}>{m.n}</span>
                <h4 style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '18px', color: '#1A2024', marginTop: '10px' }}>{m.title}</h4>
                <p style={{ fontSize: '13.5px', color: '#6E665B', marginTop: '8px' }}>{m.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '44px' }}>
            <CflButton label="Voir les tarifs" href="#tarifs" variant="primary" size="lg" icon="arrow-right" iconRight />
          </div>
        </div>
      </section>
    </div>
  );
}
