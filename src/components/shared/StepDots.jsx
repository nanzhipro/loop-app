import React from 'react';
import { LOOP } from '../../constants.js';

export function StepDots({ active, total = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          height: 4,
          borderRadius: 2,
          width: i === active ? 22 : 8,
          background: i <= active ? LOOP.blue : LOOP.line,
          transition: 'width .2s',
        }} />
      ))}
    </div>
  );
}
