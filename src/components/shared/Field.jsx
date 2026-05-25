import React from 'react';
import { LOOP } from '../../constants.js';

export function Field({ label, value, focused = false, trailing }) {
  return (
    <div>
      <div style={{
        fontFamily: '-apple-system, system-ui',
        fontSize: 13,
        fontWeight: 600,
        color: LOOP.inkSoft,
        marginBottom: 6,
        letterSpacing: 0.2,
      }}>
        {label.toUpperCase()}
      </div>
      <div style={{
        height: 56,
        borderRadius: 14,
        background: LOOP.white,
        border: focused ? `1.5px solid ${LOOP.blue}` : `1.5px solid ${LOOP.line}`,
        boxShadow: focused ? '0 0 0 4px rgba(31,75,255,0.10)' : 'none',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: '-apple-system, system-ui',
        fontWeight: 500,
        fontSize: 17,
        color: LOOP.ink,
      }}>
        <div style={{ flex: 1 }}>{value}</div>
        {trailing}
      </div>
    </div>
  );
}
