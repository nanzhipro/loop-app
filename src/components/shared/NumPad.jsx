import React from 'react';

const KEYS = [
  ['1', ''], ['2', 'ABC'], ['3', 'DEF'],
  ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'],
  ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'],
  ['', ''], ['0', '+'], ['⌫', ''],
];

export function NumPad() {
  return (
    <div style={{
      background: '#D1D5DB',
      padding: '12px 6px 28px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 9,
    }}>
      {KEYS.map(([n, sub], i) => (
        <div key={i} style={{
          height: 46,
          borderRadius: 8,
          background: n ? '#fff' : 'transparent',
          boxShadow: n ? '0 1px 0 rgba(0,0,0,0.075)' : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, "SF Pro Display", system-ui',
        }}>
          <div style={{ fontSize: n === '⌫' ? 20 : 25, fontWeight: 400, color: '#000', lineHeight: 1 }}>{n}</div>
          {sub && <div style={{ fontSize: 10, fontWeight: 600, color: '#000', letterSpacing: 1.5, marginTop: 2 }}>{sub}</div>}
        </div>
      ))}
    </div>
  );
}
