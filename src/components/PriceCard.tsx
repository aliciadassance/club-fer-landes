import { CflButton } from './CflButton';
import { Tier } from '../data';

interface PriceCardProps extends Tier {
  href?: string;
}

export function PriceCard({ name, price, unit, period, note, cta, href = '#inscription', featured, badge, features }: PriceCardProps) {
  const cardStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '30px 26px',
    borderRadius: '6px',
    overflow: 'hidden',
    ...(featured
      ? {
          background: 'linear-gradient(180deg,#16252c,#0e1a20)',
          border: '1.5px solid #33A7B4',
          boxShadow: '0 24px 50px -30px rgba(51,167,180,.5)',
        }
      : {
          background: '#142127',
          border: '1px solid rgba(94,118,128,.22)',
        }),
  };

  return (
    <div style={cardStyle}>
      {badge && (
        <div style={{
          position: 'absolute', top: 0, right: 0,
          background: featured ? '#33A7B4' : 'rgba(51,167,180,.15)',
          color: featured ? '#0B1216' : '#33A7B4',
          border: featured ? 'none' : '1px solid rgba(51,167,180,.35)',
          fontFamily: "'Space Mono', monospace", fontSize: '10px',
          letterSpacing: '.16em', textTransform: 'uppercase',
          padding: '6px 12px', borderBottomLeftRadius: '6px',
        }}>
          {badge}
        </div>
      )}

      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '.22em', textTransform: 'uppercase', color: featured ? '#33A7B4' : '#5E7680' }}>
        {name}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginTop: '18px' }}>
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '54px', lineHeight: '.85', color: '#F0F3F3' }}>{price}</span>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '22px', color: '#9DAFB6', paddingBottom: '6px' }}>{unit}</span>
      </div>
      <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 500, fontSize: '13px', letterSpacing: '.06em', textTransform: 'uppercase', color: '#5E7680', marginTop: '6px' }}>
        {period}
      </div>

      <div style={{ fontSize: '13.5px', lineHeight: '1.5', color: '#9DAFB6', marginTop: '14px', minHeight: '40px' }}>
        {note}
      </div>

      <div style={{ height: '1px', background: '#2C3C44', margin: '22px 0' }} />

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', margin: '0 0 26px', padding: 0, flex: 1 }}>
        {features.map((feat) => (
          <li key={feat} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: '#D6DEE0' }}>
            <i className="ti ti-check" style={{ color: '#33A7B4', fontSize: '17px', lineHeight: '1.3', flexShrink: 0 }} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <CflButton
        label={cta}
        href={href}
        variant={featured ? 'primary' : 'outline'}
        icon="arrow-right"
        iconRight
        block
      />
    </div>
  );
}
