import React from 'react';
import { LOOP } from '../constants.js';
import { IOSDevice } from '../components/ios/IOSDevice.jsx';
import { TopBar } from '../components/shared/TopBar.jsx';
import { ScreenTitle } from '../components/shared/ScreenTitle.jsx';
import { PrimaryButton } from '../components/shared/PrimaryButton.jsx';
import { NumPad } from '../components/shared/NumPad.jsx';

export function ScreenPhone() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={0} />
        <ScreenTitle
          eyebrow="Step 1 of 5"
          title={<>What's your<br />phone number?</>}
          sub="We'll text you a 6-digit code to verify. Standard rates may apply."
        />

        <div style={{ padding: '36px 24px 0' }}>
          <div style={{
            fontFamily: '-apple-system, system-ui', fontSize: 13,
            fontWeight: 600, color: LOOP.inkSoft, marginBottom: 8,
            letterSpacing: 0.2,
          }}>
            MOBILE NUMBER
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {/* Country picker */}
            <div style={{
              flex: '0 0 96px', height: 64, borderRadius: 16,
              background: LOOP.white, border: `1.5px solid ${LOOP.line}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 6,
              fontFamily: '-apple-system, system-ui', fontWeight: 600,
              fontSize: 17, color: LOOP.ink,
            }}>
              🇺🇸 +1
              <svg width="10" height="6" viewBox="0 0 10 6">
                <path d="M1 1l4 4 4-4" stroke={LOOP.inkSoft} strokeWidth="1.8" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            {/* Number input */}
            <div style={{
              flex: 1, height: 64, borderRadius: 16,
              background: LOOP.white, border: `1.5px solid ${LOOP.blue}`,
              padding: '0 18px', display: 'flex', alignItems: 'center',
              fontFamily: '-apple-system, system-ui', fontWeight: 600,
              fontSize: 20, color: LOOP.ink, letterSpacing: 0.3,
              boxShadow: '0 0 0 4px rgba(31,75,255,0.10)',
            }}>
              415 555 0142
              <div style={{
                width: 2, height: 24, background: LOOP.blue, marginLeft: 4,
                animation: 'blink 1s step-end infinite',
              }} />
            </div>
          </div>

          {/* Privacy notice */}
          <div style={{
            marginTop: 20, padding: 14, borderRadius: 14,
            background: LOOP.orangeSoft,
            display: 'flex', alignItems: 'flex-start', gap: 12,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 9, background: LOOP.orange,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M7 1.5L2 3.5v3.4c0 3 2.1 5.4 5 6.1 2.9-.7 5-3.1 5-6.1V3.5L7 1.5z" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M4.5 7L6 8.5 9.5 5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{
              fontFamily: '-apple-system, system-ui', fontSize: 13.5,
              lineHeight: 1.45, color: '#7A3E15',
            }}>
              <b>Your number stays private.</b><br />
              We never share it with riders or anyone outside Loop.
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <PrimaryButton>Send code</PrimaryButton>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <NumPad />
        </div>
      </div>
    </IOSDevice>
  );
}
