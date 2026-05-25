import React from 'react';
import { LOOP } from '../constants.js';
import { IOSDevice } from '../components/ios/IOSDevice.jsx';
import { TopBar } from '../components/shared/TopBar.jsx';
import { PrimaryButton } from '../components/shared/PrimaryButton.jsx';

const CONFETTI = [
  [-20, 10, LOOP.orange, 8],
  [210, 30, LOOP.blue, 10],
  [180, 180, LOOP.orange, 6],
  [-10, 170, LOOP.blue, 7],
  [100, -20, LOOP.orange, 5],
];

export function ScreenDone() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, #fff 0%, ${LOOP.blueSoft} 100%)`,
      }}>
        <TopBar step={4} />

        {/* Confirmation graphic */}
        <div style={{ margin: '60px auto 0', width: 200, height: 200, position: 'relative' }}>
          {/* Orange progress ring */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: `conic-gradient(${LOOP.orange} 0deg 340deg, transparent 340deg)`,
            mask: 'radial-gradient(circle, transparent 78px, #000 79px)',
            WebkitMask: 'radial-gradient(circle, transparent 78px, #000 79px)',
          }} />
          {/* Blue check circle */}
          <div style={{
            position: 'absolute', inset: 16, borderRadius: '50%',
            background: LOOP.blue,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(31,75,255,0.35)',
          }}>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <path d="M22 42 L34 54 L58 28" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Confetti dots */}
          {CONFETTI.map(([x, y, c, s], i) => (
            <div key={i} style={{
              position: 'absolute', left: x, top: y,
              width: s, height: s, borderRadius: '50%', background: c,
            }} />
          ))}
        </div>

        <div style={{ padding: '40px 24px 0', textAlign: 'center' }}>
          <h1 style={{
            margin: 0,
            fontFamily: '"Inter Tight", system-ui',
            fontWeight: 800, fontSize: 36, letterSpacing: -0.9, color: LOOP.ink,
          }}>
            You're all set,<br />Jordan.
          </h1>
          <p style={{
            margin: '14px auto 0', maxWidth: 280,
            fontFamily: '-apple-system, system-ui', fontSize: 16,
            lineHeight: 1.5, color: LOOP.inkSoft,
          }}>
            Scan any Loop bike's QR code to unlock and start riding.
          </p>
        </div>

        {/* First-ride credit */}
        <div style={{
          margin: '28px 24px 0', padding: 16, borderRadius: 18,
          background: LOOP.white, border: `1px solid ${LOOP.line}`,
          display: 'flex', alignItems: 'center', gap: 14,
          boxShadow: '0 12px 30px rgba(15,30,80,0.06)',
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14, background: LOOP.orangeSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path d="M11 2L13.5 8L20 8.5L15 13L16.5 19.5L11 16L5.5 19.5L7 13L2 8.5L8.5 8L11 2Z" fill={LOOP.orange} />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: '-apple-system, system-ui', fontSize: 15,
              fontWeight: 700, color: LOOP.ink,
            }}>First ride on us</div>
            <div style={{
              fontFamily: '-apple-system, system-ui', fontSize: 13,
              color: LOOP.inkSoft, marginTop: 2,
            }}>$5 credit applied to your account</div>
          </div>
          <div style={{
            fontFamily: '"Inter Tight", system-ui', fontSize: 22, fontWeight: 800,
            color: LOOP.orange,
          }}>$5</div>
        </div>

        <div style={{ position: 'absolute', bottom: 48, left: 24, right: 24 }}>
          <PrimaryButton accent>
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ marginRight: 8 }}>
              <rect x="2" y="2" width="6" height="6" rx="1" fill="none" stroke="#fff" strokeWidth="1.8" />
              <rect x="12" y="2" width="6" height="6" rx="1" fill="none" stroke="#fff" strokeWidth="1.8" />
              <rect x="2" y="12" width="6" height="6" rx="1" fill="none" stroke="#fff" strokeWidth="1.8" />
              <rect x="12" y="12" width="3" height="3" fill="#fff" />
              <rect x="15" y="15" width="3" height="3" fill="#fff" />
            </svg>
            Scan a bike
          </PrimaryButton>
          <div style={{
            marginTop: 12, height: 48,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '-apple-system, system-ui', fontWeight: 600, fontSize: 15,
            color: LOOP.blue,
          }}>
            Take the tour first →
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}
