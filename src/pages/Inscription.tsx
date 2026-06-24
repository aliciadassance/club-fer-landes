import { CflButton } from '../components/CflButton';
import { CONTACT } from '../data';

const MONO: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };
const ANTON: React.CSSProperties = { fontFamily: "'Anton', sans-serif", fontWeight: 400 };
const OSWALD: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

const labelStyle: React.CSSProperties = {
  ...MONO, fontSize: '10.5px', letterSpacing: '.14em',
  textTransform: 'uppercase', color: '#8A7E6E',
};

interface InscriptionProps { isMobile: boolean; }

export function Inscription({ isMobile }: InscriptionProps) {
  const cols = isMobile ? '1fr' : '1.1fr .9fr';

  return (
    <div>
      {/* HERO */}
      <header
        data-rv
        style={{
          position: 'relative', minHeight: '64vh', display: 'flex', alignItems: 'flex-end',
          borderBottom: '1px solid rgba(94,118,128,.18)',
          background: "linear-gradient(180deg,rgba(11,18,22,.4) 0%,rgba(11,18,22,.58) 48%,rgba(11,18,22,.96) 100%),url('https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=75')",
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', padding: 'clamp(48px,7vw,100px) clamp(20px,5vw,80px)' }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', ...MONO, fontSize: '12px', letterSpacing: '.22em', textTransform: 'uppercase', color: '#EAF6F7', background: 'rgba(11,18,22,.5)', backdropFilter: 'blur(6px)', border: '1px solid rgba(51,167,180,.45)', borderRadius: '100px', padding: '8px 16px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#33A7B4', boxShadow: '0 0 0 4px rgba(51,167,180,.18)' }} />
              Inscription · première séance offerte
            </div>
            <h1 style={{ ...ANTON, fontSize: 'clamp(44px,8vw,104px)', lineHeight: '.86', textTransform: 'uppercase', margin: '20px 0 0', letterSpacing: '-.012em', textShadow: '0 2px 36px rgba(11,18,22,.55)' }}>
              <span style={{ display: 'block', color: '#F0F3F3' }}>Rejoins</span>
              <span style={{ display: 'block', color: '#33A7B4' }}>le club</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.6vw,19px)', color: '#D6DEE0', maxWidth: '54ch', marginTop: '24px' }}>
              Placeholder — laisse-nous tes coordonnées et la formule qui t'intéresse. On revient vers toi pour évaluer ton niveau et caler ta première séance.
            </p>
          </div>
        </div>
      </header>

      {/* FORM + CONTACT */}
      <section data-rv style={{ padding: 'clamp(56px,8vw,110px) clamp(20px,5vw,80px)', background: '#F1EBDF', borderBottom: '1px solid rgba(94,118,128,.16)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: cols, gap: 'clamp(32px,5vw,56px)', alignItems: 'start' }}>

          {/* FORM CARD */}
          <div style={{ background: '#FBF7EF', border: '1px solid rgba(26,32,36,.1)', borderRadius: '8px', padding: 'clamp(26px,4vw,40px)' }}>
            <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#15788A' }}>Demande d'inscription</div>
            <h2 style={{ ...ANTON, fontSize: 'clamp(28px,4vw,46px)', lineHeight: '.92', textTransform: 'uppercase', color: '#1A2024', margin: '12px 0 0' }}>Écris-nous</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '26px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '7px', gridColumn: '1 / -1' }}>
                <span style={labelStyle}>Nom complet</span>
                <input type="text" placeholder="Ton nom" />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={labelStyle}>Email</span>
                <input type="email" placeholder="toi@email.fr" />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={labelStyle}>Téléphone</span>
                <input type="tel" placeholder="06 00 00 00 00" />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '7px', gridColumn: '1 / -1' }}>
                <span style={labelStyle}>Formule souhaitée</span>
                <select>
                  <option>Séance à l'unité</option>
                  <option>Carnet 10</option>
                  <option>Carnet 20</option>
                  <option>Abonnement annuel</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '7px', gridColumn: '1 / -1' }}>
                <span style={labelStyle}>Message</span>
                <textarea rows={4} placeholder="Ton niveau, tes objectifs, tes disponibilités…" />
              </label>
            </div>

            <div style={{ marginTop: '24px' }}>
              <CflButton
                label="Envoyer ma demande"
                href="mailto:contact@clubferlandes.fr"
                variant="primary"
                size="lg"
                icon="send"
                block
              />
            </div>
            <p style={{ ...MONO, fontSize: '10.5px', letterSpacing: '.06em', color: '#8A7E6E', marginTop: '14px', textAlign: 'center' }}>
              Réponse sous 48h · première séance offerte
            </p>
          </div>

          {/* CONTACT INFO */}
          <div>
            <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#15788A' }}>Ou directement</div>
            <h2 style={{ ...ANTON, fontSize: 'clamp(28px,4vw,46px)', lineHeight: '.92', textTransform: 'uppercase', color: '#1A2024', margin: '12px 0 0' }}>Nous contacter</h2>

            <div style={{ marginTop: '26px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
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

            <div style={{ display: 'flex', gap: '10px', marginTop: '26px' }}>
              {[['ti-brand-instagram', 'Instagram'], ['ti-brand-facebook', 'Facebook'], ['ti-brand-youtube', 'YouTube']].map(([icon, label]) => (
                <a
                  key={icon}
                  href="#inscription"
                  aria-label={label}
                  className="social-icon-light"
                  style={{ width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(26,32,36,.2)', borderRadius: '4px', color: '#6E665B' }}
                >
                  <i className={`ti ${icon}`} style={{ fontSize: '20px' }} />
                </a>
              ))}
            </div>

            <div style={{
              marginTop: '24px', aspectRatio: '16/10', borderRadius: '6px', overflow: 'hidden',
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
        </div>
      </section>
    </div>
  );
}
