import { CflButton } from '../components/CflButton';
import { STATS, COACH, CONTACT } from '../data';

const MONO: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };
const ANTON: React.CSSProperties = { fontFamily: "'Anton', sans-serif", fontWeight: 400 };
const OSWALD: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

interface LeClubProps { isMobile: boolean; }

export function LeClub({ isMobile }: LeClubProps) {
  const cols = isMobile ? '1fr' : '1.1fr .9fr';

  return (
    <div>
      {/* HERO */}
      <header
        data-rv
        style={{
          position: 'relative', minHeight: '74vh', display: 'flex', alignItems: 'flex-end',
          borderBottom: '1px solid rgba(94,118,128,.18)',
          background: "linear-gradient(180deg,rgba(11,18,22,.36) 0%,rgba(11,18,22,.56) 48%,rgba(11,18,22,.96) 100%),url('https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1600&q=75')",
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', padding: 'clamp(48px,7vw,100px) clamp(20px,5vw,80px)' }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', ...MONO, fontSize: '12px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#EAF6F7', background: 'rgba(11,18,22,.5)', backdropFilter: 'blur(6px)', border: '1px solid rgba(51,167,180,.45)', borderRadius: '100px', padding: '8px 16px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#33A7B4', boxShadow: '0 0 0 4px rgba(51,167,180,.18)' }} />
              Le club
            </div>
            <h1 style={{ ...ANTON, fontSize: 'clamp(44px,8vw,104px)', lineHeight: '.86', textTransform: 'uppercase', margin: '20px 0 0', letterSpacing: '-.012em', textShadow: '0 2px 36px rgba(11,18,22,.55)' }}>
              <span style={{ display: 'block', color: '#F0F3F3', marginBottom: '14px' }}>Né de la</span>
              <span style={{ display: 'block', color: '#33A7B4' }}>côte landaise</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.6vw,19px)', color: '#D6DEE0', maxWidth: '52ch', marginTop: '24px' }}>
              Placeholder — une phrase d'accroche sur l'identité du club : son ancrage local, son esprit petit groupe et son lien avec l'océan.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '32px' }}>
              <CflButton label="S'inscrire" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
              <CflButton label="Nos entraînements" href="#entrainements" variant="outline" size="lg" icon="activity" />
            </div>
          </div>
        </div>
      </header>

      {/* STORY */}
      <section data-rv style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,80px)', background: '#F1EBDF', borderTop: '1px solid rgba(94,118,128,.16)', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: cols, gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
          <div>
            <h2 style={{ ...ANTON, fontSize: 'clamp(28px,4vw,52px)', lineHeight: '.94', textTransform: 'uppercase', color: '#1A2024' }}>Notre histoire</h2>
            <p style={{ fontSize: '15.5px', color: '#6E665B', marginTop: '20px' }}>
              Placeholder — Club Fer Landes est né de l'envie de réunir deux mondes qui se répondent : la salle et l'océan. Décrivez ici la genèse du club, vos valeurs et ce qui rend votre approche différente.
            </p>
            <p style={{ fontSize: '15.5px', color: '#6E665B', marginTop: '14px' }}>
              Placeholder — un second paragraphe pour parler de la communauté, du coach, et de l'esprit petit groupe qui fait la signature du club.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ border: '1px solid rgba(26,32,36,.1)', borderRadius: '6px', padding: '22px 20px', background: '#FBF7EF' }}>
                <div style={{ ...ANTON, fontSize: '44px', color: '#15788A', lineHeight: '.9' }}>{s.value}</div>
                <div style={{ ...MONO, fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#6E665B', marginTop: '8px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACH */}
      <section data-rv style={{ padding: 'clamp(50px,7vw,100px) clamp(20px,5vw,80px)', background: '#0e1a20', borderTop: '1px solid rgba(94,118,128,.16)', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#33A7B4', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ width: '34px', height: '1px', background: '#33A7B4', opacity: .7 }} />
            À la barre
          </div>
          <h2 style={{ ...ANTON, fontSize: 'clamp(32px,5vw,64px)', lineHeight: '.92', textTransform: 'uppercase', color: '#F0F3F3', margin: '16px 0 0' }}>Le coach</h2>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 'clamp(28px,4vw,56px)', marginTop: '42px', alignItems: 'start' }}>
            <div style={{ position: 'relative', border: '1px solid rgba(94,118,128,.22)', borderRadius: '8px', overflow: 'hidden', background: '#0B1216' }}>
              <div style={{
                aspectRatio: '4/5',
                backgroundImage: `linear-gradient(180deg,rgba(11,18,22,.04) 40%,rgba(11,18,22,.72)),url('${COACH.img}')`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '22px 24px' }}>
                <h3 style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', fontSize: '23px', color: '#F0F3F3' }}>{COACH.name}</h3>
                <div style={{ ...MONO, fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#33A7B4', marginTop: '6px' }}>{COACH.role}</div>
              </div>
            </div>
            <div>
              <p style={{ ...OSWALD, fontWeight: 300, fontSize: 'clamp(20px,2.4vw,30px)', lineHeight: '1.26', color: '#E7ECEC', borderLeft: '2px solid #33A7B4', paddingLeft: '18px' }}>
                {COACH.quote}
              </p>
              <p style={{ fontSize: '15px', color: '#9DAFB6', marginTop: '22px' }}>{COACH.bio1}</p>
              <p style={{ fontSize: '15px', color: '#9DAFB6', marginTop: '14px' }}>{COACH.bio2}</p>
              <div style={{ height: '1px', background: '#2C3C44', margin: '26px 0 20px' }} />
              <div style={{ ...MONO, fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#5E7680', marginBottom: '14px' }}>Spécialités</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px' }}>
                {COACH.specialties.map((sp) => (
                  <span key={sp} style={{ ...MONO, fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', color: '#D6DEE0', border: '1px solid rgba(94,118,128,.3)', borderRadius: '3px', padding: '7px 12px' }}>{sp}</span>
                ))}
              </div>
              <div style={{ marginTop: '30px' }}>
                <CflButton label="S'inscrire avec le coach" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section data-rv style={{ padding: 'clamp(60px,8vw,110px) clamp(20px,5vw,80px)', background: '#F1EBDF', borderTop: '1px solid rgba(94,118,128,.16)', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: cols, gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
          <div>
            <h2 style={{ ...ANTON, fontSize: 'clamp(30px,4.5vw,58px)', lineHeight: '.92', textTransform: 'uppercase', color: '#1A2024' }}>
              Nous<br />trouver
            </h2>
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {CONTACT.map((ci) => (
                <div key={ci.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <i className={ci.icon} style={{ fontSize: '24px', color: '#15788A', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', fontSize: '13px', color: '#8A7E6E' }}>{ci.label}</div>
                    <div style={{ fontSize: '15.5px', color: '#1A2024', marginTop: '2px' }}>{ci.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '30px' }}>
              <CflButton label="S'inscrire" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
            </div>
          </div>
          <div style={{
            aspectRatio: '4/3', borderRadius: '6px', overflow: 'hidden',
            border: '1px solid rgba(26,32,36,.16)',
            background: 'linear-gradient(135deg,rgba(21,120,138,.16),rgba(241,235,223,.2)),repeating-linear-gradient(45deg,rgba(26,32,36,.06) 0 1px,transparent 1px 14px),#EFE7D6',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center', ...MONO, fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#8A7E6E' }}>
              <i className="ti ti-map-pin" style={{ fontSize: '34px', color: '#15788A', display: 'block', marginBottom: '10px' }} />
              Carte — Les Landes<br />43.68°N / 1.43°W
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
