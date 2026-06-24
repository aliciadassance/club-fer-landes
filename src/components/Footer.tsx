import { CflMark } from './CflMark';
import { NAV_ITEMS } from '../data';

export function Footer() {
  return (
    <footer style={{ padding: 'clamp(56px,8vw,100px) clamp(20px,5vw,80px) 40px', borderTop: '1px solid rgba(94,118,128,.2)', background: '#0B1216' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: '36px 24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CflMark w={34} variant="full" />
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', fontSize: '15px', color: '#F0F3F3' }}>
                CLUB <b style={{ color: '#F0F3F3' }}>FER</b> LANDES
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: '#5E7680', marginTop: '16px', maxWidth: '34ch' }}>
              Préparation physique &amp; coaching surf. Les Landes, côte Atlantique.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#5E7680', marginBottom: '14px' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {NAV_ITEMS.map(({ id, label, href }) => (
                <a key={id} href={href} className="footer-link" style={{ fontSize: '14px', color: '#9DAFB6', textDecoration: 'none' }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#5E7680', marginBottom: '14px' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '14px', color: '#9DAFB6' }}>
              <span>contact@clubferlandes.fr</span>
              <span>+33 (0)5 00 00 00 00</span>
              <span>Les Landes · 43.68°N 1.43°W</span>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#5E7680', marginBottom: '14px' }}>Suivre</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[['ti-brand-instagram', 'Instagram'], ['ti-brand-facebook', 'Facebook'], ['ti-brand-youtube', 'YouTube']].map(([icon, label]) => (
                <a
                  key={icon}
                  href="#club"
                  aria-label={label}
                  className="social-icon"
                  style={{ width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(94,118,128,.3)', borderRadius: '4px', color: '#9DAFB6' }}
                >
                  <i className={`ti ${icon}`} style={{ fontSize: '20px' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(94,118,128,.18)', margin: '40px 0 22px' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', fontFamily: "'Space Mono', monospace", fontSize: '10.5px', letterSpacing: '.1em', textTransform: 'uppercase', color: '#5E7680' }}>
          <span>© 2026 Club Fer Landes</span>
          <span>Force · Endurance · Ride</span>
        </div>
      </div>
    </footer>
  );
}
