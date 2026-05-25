import React from 'react';
import { LOOP } from '../constants.js';
import { IOSDevice } from '../components/ios/IOSDevice.jsx';
import { TopBar } from '../components/shared/TopBar.jsx';
import { ScreenTitle } from '../components/shared/ScreenTitle.jsx';
import { PrimaryButton } from '../components/shared/PrimaryButton.jsx';

export function ScreenLocation() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={3} />

        {/* Map hero */}
        <div style={{
          margin: '40px 24px 0', height: 260, borderRadius: 24,
          background: `linear-gradient(160deg, ${LOOP.blueSoft}, #fff)`,
          border: `1px solid ${LOOP.line}`,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Street grid */}
          <svg width="100%" height="100%" viewBox="0 0 342 260" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            <g stroke={LOOP.blue} strokeOpacity="0.12" strokeWidth="1">
              <line x1="0" y1="60" x2="342" y2="60" />
              <line x1="0" y1="130" x2="342" y2="130" />
              <line x1="0" y1="200" x2="342" y2="200" />
              <line x1="70" y1="0" x2="70" y2="260" />
              <line x1="171" y1="0" x2="171" y2="260" />
              <line x1="270" y1="0" x2="270" y2="260" />
            </g>
            <path d="M-10 90 Q 100 70 171 110 T 360 100" stroke={LOOP.blue} strokeOpacity="0.18" strokeWidth="6" fill="none" strokeLinecap="round" />
            <circle cx="86" cy="86" r="3" fill={LOOP.orange} />
            <circle cx="240" cy="78" r="3" fill={LOOP.orange} />
            <circle cx="260" cy="180" r="3" fill={LOOP.orange} />
            <circle cx="118" cy="200" r="3" fill={LOOP.orange} />
          </svg>

          {/* Pulse rings */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200, height: 200, borderRadius: '50%',
            background: `radial-gradient(circle, rgba(31,75,255,0.18) 0%, transparent 60%)`,
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 120, height: 120, borderRadius: '50%',
            border: `1.5px solid ${LOOP.blue}`, opacity: 0.4,
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 60, height: 60, borderRadius: '50%',
            border: `1.5px solid ${LOOP.blue}`, opacity: 0.6,
          }} />

          {/* Map pin */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -60%)',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50% 50% 50% 4px',
              transform: 'rotate(-45deg)',
              background: LOOP.blue,
              boxShadow: '0 10px 24px rgba(31,75,255,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                transform: 'rotate(45deg)', width: 18, height: 18, borderRadius: 4,
                background: LOOP.orange,
              }} />
            </div>
          </div>
        </div>

        <ScreenTitle
          title={<>Find bikes<br />near you</>}
          sub="Loop uses your location to show available bikes, drop-off zones, and live route guidance."
        />

        {/* Permission bullets */}
        <div style={{ padding: '24px 24px 0' }}>
          {[
            ['Only while using the app', 'We never track your location in the background.'],
            ['You can change this anytime', 'Tweak permissions in Settings.'],
          ].map(([t, s], i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              padding: '10px 0',
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: 8,
                background: LOOP.blueSoft, color: LOOP.blue, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 6.5L4.8 9 10 3.5" stroke={LOOP.blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{
                  fontFamily: '-apple-system, system-ui', fontSize: 15,
                  fontWeight: 600, color: LOOP.ink,
                }}>{t}</div>
                <div style={{
                  fontFamily: '-apple-system, system-ui', fontSize: 13,
                  color: LOOP.inkSoft, marginTop: 2, lineHeight: 1.45,
                }}>{s}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 48, left: 24, right: 24 }}>
          <PrimaryButton style={{ marginBottom: 10 }}>Enable location</PrimaryButton>
          <div style={{
            height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '-apple-system, system-ui', fontWeight: 600, fontSize: 15,
            color: LOOP.inkSoft,
          }}>
            Not now
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}
