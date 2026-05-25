import React from 'react';
import { LOOP } from '../../constants.js';

export function Logo({ size = 28, color = LOOP.blue, accent = LOOP.orange }) {
  return (
    <svg width={size * 1.7} height={size} viewBox="0 0 68 40">
      <circle cx="14" cy="20" r="12" fill="none" stroke={color} strokeWidth="4" />
      <circle cx="54" cy="20" r="12" fill="none" stroke={accent} strokeWidth="4" />
      <path d="M14 20 L34 8 L54 20" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="8" r="2.5" fill={accent} />
    </svg>
  );
}

export function Wordmark({ size = 22 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Logo size={size} />
      <span style={{
        fontFamily: '"Inter Tight", -apple-system, system-ui, sans-serif',
        fontWeight: 800, fontSize: size, letterSpacing: -0.6, color: LOOP.ink,
      }}>loop</span>
    </div>
  );
}
