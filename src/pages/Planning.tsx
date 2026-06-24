import React from 'react';
import { CflButton } from '../components/CflButton';
import { DAYS, LEGEND, PLANNING_ROWS, CELL_BG, Cell } from '../data';

const MONO: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };
const ANTON: React.CSSProperties = { fontFamily: "'Anton', sans-serif", fontWeight: 400 };
const OSWALD: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

function GridCell({ cell }: { cell: Cell }) {
  if (!cell.filled) {
    return <div style={{ borderBottom: '1px solid #1c2d35', borderLeft: '1px solid #1c2d35', padding: '8px', minHeight: '62px' }} />;
  }

  const { bg, color } = CELL_BG[cell.type];
  return (
    <div style={{ borderBottom: '1px solid #1c2d35', borderLeft: '1px solid #1c2d35', padding: '8px', minHeight: '62px' }}>
      <div style={{ background: bg, color, borderRadius: '4px', padding: '8px 9px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', fontSize: '12.5px', display: 'block' }}>{cell.label}</span>
        <span style={{ ...MONO, fontSize: '9px', letterSpacing: '.06em', opacity: .8, display: 'block', marginTop: '3px' }}>{cell.coach}</span>
      </div>
    </div>
  );
}

export function Planning() {
  return (
    <div>
      {/* HEADER */}
      <header
        data-rv
        style={{
          padding: 'clamp(56px,8vw,110px) clamp(20px,5vw,80px) clamp(40px,5vw,60px)',
          borderBottom: '1px solid rgba(94,118,128,.18)',
          background: 'repeating-linear-gradient(115deg, rgba(94,118,128,.05) 0 2px, transparent 2px 9px), #0B1216',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ ...MONO, fontSize: '12px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#33A7B4' }}>Planning hebdomadaire</div>
          <h1 style={{ ...ANTON, fontSize: 'clamp(44px,8vw,108px)', lineHeight: '.86', textTransform: 'uppercase', color: '#F0F3F3', margin: '18px 0 0' }}>Le planning</h1>
          <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', color: '#9DAFB6', maxWidth: '56ch', marginTop: '20px' }}>
            Une semaine type. Les créneaux surf suivent la marée et peuvent être décalés — réservation conseillée pour chaque séance.
          </p>
        </div>
      </header>

      {/* GRID */}
      <section data-rv style={{ padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 20px', marginBottom: '28px' }}>
            {LEGEND.map((l) => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', ...MONO, fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: '#9DAFB6' }}>
                <span style={{ width: '14px', height: '14px', borderRadius: '3px', background: l.color, display: 'inline-block' }} />
                {l.label}
              </div>
            ))}
          </div>

          <div style={{ overflowX: 'auto', border: '1px solid rgba(94,118,128,.22)', borderRadius: '6px' }}>
            <div style={{ minWidth: '760px', display: 'grid', gridTemplateColumns: '72px repeat(6, 1fr)' }}>
              {/* Header row */}
              <div style={{ padding: '14px 10px', background: '#142127', borderBottom: '1px solid #2C3C44' }} />
              {DAYS.map((day) => (
                <div key={day} style={{ padding: '14px 10px', background: '#142127', borderBottom: '1px solid #2C3C44', borderLeft: '1px solid #2C3C44', ...OSWALD, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', fontSize: '13px', color: '#F0F3F3', textAlign: 'center' }}>
                  {day}
                </div>
              ))}

              {/* Data rows */}
              {PLANNING_ROWS.map((row) => (
                <React.Fragment key={row.time}>
                  <div style={{ padding: '16px 10px', borderBottom: '1px solid #1c2d35', ...MONO, fontSize: '11px', color: '#5E7680', textAlign: 'center', background: '#0e1a20' }}>
                    {row.time}
                  </div>
                  {row.cells.map((cell, ci) => (
                    <GridCell key={ci} cell={cell} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '34px', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <CflButton label="Réserver une séance" href="#inscription" variant="primary" size="lg" icon="arrow-right" iconRight />
            <span style={{ ...MONO, fontSize: '11px', color: '#5E7680' }}>Capacité limitée · 6 à 10 pers. / créneau</span>
          </div>
        </div>
      </section>
    </div>
  );
}
