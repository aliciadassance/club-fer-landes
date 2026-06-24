import React from 'react';

export interface CflButtonProps {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'atlantic' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconRight?: boolean;
  block?: boolean;
}

const SIZES: Record<string, React.CSSProperties> = {
  sm: { padding: '9px 16px', fontSize: '11px' },
  md: { padding: '13px 24px', fontSize: '13px' },
  lg: { padding: '17px 32px', fontSize: '15px' },
};

const VARIANTS: Record<string, { base: React.CSSProperties }> = {
  primary:  { base: { background: '#33A7B4', color: '#0B1216', borderColor: '#33A7B4' } },
  atlantic: { base: { background: '#0F5C70', color: '#F0F3F3', borderColor: '#0F5C70' } },
  outline:  { base: { background: 'transparent', color: '#F0F3F3', borderColor: '#5E7680' } },
  ghost:    { base: { background: 'transparent', color: '#9DAFB6', borderColor: 'transparent' } },
  light:    { base: { background: '#F0F3F3', color: '#0B1216', borderColor: '#F0F3F3' } },
};

export function CflButton({
  label,
  href = '#',
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight = false,
  block = false,
}: CflButtonProps) {
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const s = SIZES[size] ?? SIZES.md;

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '9px',
    flexDirection: iconRight ? 'row-reverse' : 'row',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.14em',
    border: '1.5px solid transparent',
    borderRadius: '3px',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: block ? '100%' : undefined,
    ...s,
    ...v.base,
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`cfl-btn cfl-btn-${variant}`}
      style={baseStyle}
    >
      {icon && <i className={`ti ti-${icon}`} style={{ fontSize: '1.15em', lineHeight: 1 }} />}
      <span>{label}</span>
    </a>
  );
}
