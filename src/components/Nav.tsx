import { CflMark } from './CflMark';
import { CflButton } from './CflButton';
import { NAV_ITEMS } from '../data';

interface NavProps {
  route: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  isMobile: boolean;
}

export function Nav({ route, menuOpen, onToggleMenu, isMobile }: NavProps) {
  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'clamp(13px,1.4vw,18px) clamp(20px,5vw,80px)',
        background: 'rgba(11,18,22,.82)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(94,118,128,.18)',
      }}>
        <a href="#accueil" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <CflMark w={30} variant="full" />
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', fontSize: '15px', color: '#F0F3F3' }}>
            CLUB <b style={{ color: '#F0F3F3', fontWeight: 700 }}>FER</b> LANDES
          </span>
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {NAV_ITEMS.map(({ id, label, href }) => (
              <a
                key={id}
                href={href}
                className="nav-link"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: id === route ? '#33A7B4' : '#9DAFB6',
                }}
              >
                {label}
              </a>
            ))}
            <CflButton label="S'inscrire" href="#inscription" variant="light" size="sm" icon="arrow-right" iconRight />
          </div>
        )}

        {isMobile && (
          <button
            onClick={onToggleMenu}
            aria-label="Menu"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '42px', height: '42px',
              background: 'transparent',
              border: '1px solid rgba(94,118,128,.35)',
              borderRadius: '4px',
              color: '#F0F3F3',
              cursor: 'pointer',
            }}
          >
            <i className={menuOpen ? 'ti ti-x' : 'ti ti-menu-2'} style={{ fontSize: '22px' }} />
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'sticky', top: '57px', zIndex: 79,
          background: '#0e1a20',
          borderBottom: '1px solid rgba(94,118,128,.2)',
          padding: 'clamp(14px,2vw,18px) clamp(20px,5vw,80px) 24px',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {NAV_ITEMS.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '.06em',
                fontSize: '17px',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid rgba(94,118,128,.12)',
                color: id === route ? '#33A7B4' : '#F0F3F3',
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ marginTop: '14px' }}>
            <CflButton label="S'inscrire" href="#inscription" variant="primary" icon="arrow-right" iconRight block />
          </div>
        </div>
      )}
    </>
  );
}
