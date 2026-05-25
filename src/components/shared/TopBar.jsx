import React from 'react';
import { LOOP } from '../../constants.js';
import { StepDots } from './StepDots.jsx';

export function TopBar({ step, total = 5, onSkip = false }) {
  return (
    <div style={{
      paddingTop: 60,
      padding: '60px 24px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        background: LOOP.white,
        border: `1px solid ${LOOP.line}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg width="9" height="16" viewBox="0 0 9 16">
          <path d="M8 1L1 8l7 7" stroke={LOOP.ink} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <StepDots active={step} total={total} />
      <div style={{
        width: 40,
        height: 18,
        fontFamily: '-apple-system, system-ui',
        fontSize: 15,
        fontWeight: 500,
        color: LOOP.inkSoft,
        textAlign: 'right',
      }}>
        {onSkip ? 'Skip' : ''}
      </div>
    </div>
  );
}
