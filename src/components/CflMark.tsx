interface CflMarkProps {
  w?: number;
  variant?: 'full' | 'light' | 'dark' | 'positive' | 'tide';
}

const COLOR_MAP: Record<string, [string, string, string]> = {
  full:     ['#33A7B4', '#F0F3F3', '#9DAFB6'],
  light:    ['#F0F3F3', '#F0F3F3', '#F0F3F3'],
  dark:     ['#0B1216', '#0B1216', '#0B1216'],
  positive: ['#33A7B4', '#0B1216', '#5E7680'],
  tide:     ['#33A7B4', '#33A7B4', '#33A7B4'],
};

export function CflMark({ w = 120, variant = 'full' }: CflMarkProps) {
  const [c1, c2, c3] = COLOR_MAP[variant] ?? COLOR_MAP.full;
  return (
    <svg
      viewBox="0 0 1171 804"
      style={{ width: w, height: 'auto', display: 'block', flexShrink: 0 }}
      role="img"
      aria-label="Club Fer Landes"
    >
      <rect x="0" y="0" width="1171" height="182" rx="91" fill={c1} />
      <rect x="0" y="311" width="981" height="182" rx="91" fill={c2} />
      <rect x="0" y="622" width="786" height="182" rx="91" fill={c3} />
    </svg>
  );
}
