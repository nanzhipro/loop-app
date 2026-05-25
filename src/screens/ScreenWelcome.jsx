import React from 'react';
import { LOOP } from '../constants.js';
import { IOSDevice } from '../components/ios/IOSDevice.jsx';
import { Logo } from '../components/shared/Logo.jsx';
import { PrimaryButton } from '../components/shared/PrimaryButton.jsx';

export function ScreenWelcome() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, ${LOOP.blue} 0%, #143ACC 60%, #0A2299 100%)`,
        overflow: 'hidden',
      }}>
        {/* Orbit rings */}
        <svg width="600" height="600" viewBox="0 0 600 600" style={{ position: 'absolute', top: -120, right: -220, opacity: 0.18 }}>
          <circle cx="300" cy="300" r="240" fill="none" stroke="#fff" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="180" fill="none" stroke="#fff" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="120" fill="none" stroke="#fff" strokeWidth="1.5" />
        </svg>
        <div style={{
          position: 'absolute', top: 220, left: -140,
          width: 280, height: 280, borderRadius: '50%',
          background: `radial-gradient(circle, ${LOOP.orange} 0%, transparent 70%)`,
          opacity: 0.55,
        }} />

        {/* Wordmark */}
        <div style={{ position: 'absolute', top: 80, left: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Logo size={26} color="#fff" accent={LOOP.orange} />
            <span style={{
              fontFamily: '"Inter Tight", system-ui',
              fontWeight: 800, fontSize: 22, letterSpacing: -0.6, color: '#fff',
            }}>loop</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ position: 'absolute', top: 280, left: 24, right: 24 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 999,
            background: 'rgba(255,255,255,0.14)',
            border: '1px solid rgba(255,255,255,0.25)',
            fontFamily: '-apple-system, system-ui', fontSize: 12,
            fontWeight: 600, color: '#fff', letterSpacing: 0.3,
            marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: LOOP.orange }} />
            420 bikes near you
          </div>
          <h1 style={{
            margin: 0,
            fontFamily: '"Inter Tight", system-ui',
            fontWeight: 800, fontSize: 44, lineHeight: 1.02,
            letterSpacing: -1.4, color: '#fff',
          }}>
            Unlock the<br />
            city. <span style={{ color: LOOP.orange }}>Ride.</span>
          </h1>
          <p style={{
            margin: '16px 0 0',
            fontFamily: '-apple-system, system-ui',
            fontSize: 16, lineHeight: 1.5, color: 'rgba(255,255,255,0.78)',
            maxWidth: 300,
          }}>
            Pay-as-you-pedal bikeshare. Scan, ride, leave it anywhere in zone.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ position: 'absolute', bottom: 48, left: 24, right: 24 }}>
          <PrimaryButton accent style={{ marginBottom: 12 }}>Create account</PrimaryButton>
          <div style={{
            height: 56, borderRadius: 16,
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.22)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '-apple-system, system-ui', fontWeight: 600, fontSize: 17,
          }}>
            I already have an account
          </div>
          <div style={{
            marginTop: 18, textAlign: 'center',
            fontFamily: '-apple-system, system-ui', fontSize: 12,
            color: 'rgba(255,255,255,0.55)', lineHeight: 1.5,
          }}>
            By continuing you agree to our Terms<br />and Privacy Policy.
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}
