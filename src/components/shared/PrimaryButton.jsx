import React from 'react';
import { LOOP } from '../../constants.js';

export function PrimaryButton({ children, disabled = false, accent = false, style = {} }) {
  return (
    <div style={{
      height: 56,
      borderRadius: 16,
      background: disabled ? '#D8DCE8' : (accent ? LOOP.orange : LOOP.blue),
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, system-ui',
      fontWeight: 600,
      fontSize: 17,
      letterSpacing: -0.3,
      boxShadow: disabled ? 'none' : (accent
        ? '0 8px 20px rgba(255,107,44,0.35)'
        : '0 8px 20px rgba(31,75,255,0.28)'),
      ...style,
    }}>
      {children}
    </div>
  );
}
