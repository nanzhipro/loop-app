import React from 'react';
import { LOOP } from '../../constants.js';

export function ScreenTitle({ eyebrow, title, sub }) {
  return (
    <div style={{ padding: '32px 24px 0' }}>
      {eyebrow && (
        <div style={{
          fontFamily: '-apple-system, system-ui',
          fontSize: 13,
          fontWeight: 600,
          color: LOOP.orange,
          textTransform: 'uppercase',
          letterSpacing: 1.2,
          marginBottom: 10,
        }}>
          {eyebrow}
        </div>
      )}
      <h1 style={{
        margin: 0,
        fontFamily: '"Inter Tight", -apple-system, system-ui',
        fontWeight: 800,
        fontSize: 32,
        lineHeight: 1.08,
        letterSpacing: -0.9,
        color: LOOP.ink,
      }}>
        {title}
      </h1>
      {sub && (
        <p style={{
          margin: '12px 0 0',
          fontFamily: '-apple-system, system-ui',
          fontSize: 16,
          lineHeight: 1.45,
          color: LOOP.inkSoft,
          textWrap: 'pretty',
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}
