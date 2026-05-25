import React from 'react';
import { LOOP } from '../constants.js';
import { IOSDevice } from '../components/ios/IOSDevice.jsx';
import { TopBar } from '../components/shared/TopBar.jsx';
import { ScreenTitle } from '../components/shared/ScreenTitle.jsx';
import { PrimaryButton } from '../components/shared/PrimaryButton.jsx';
import { Field } from '../components/shared/Field.jsx';

export function ScreenProfile() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={2} />
        <ScreenTitle
          eyebrow="Step 3 of 5"
          title={<>A few quick<br />details</>}
          sub="We need your name for billing and your date of birth (you must be 18+ to ride)."
        />

        <div style={{ padding: '28px 24px 0' }}>
          {/* Avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 22,
              background: `linear-gradient(135deg, ${LOOP.blue}, ${LOOP.orange})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff',
              fontFamily: '"Inter Tight", system-ui',
              fontWeight: 800, fontSize: 22,
            }}>
              JL
            </div>
            <div>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 15,
                fontWeight: 600, color: LOOP.ink,
              }}>
                Add a photo
              </div>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 13,
                color: LOOP.inkSoft, marginTop: 2,
              }}>
                Optional · helps station hosts
              </div>
            </div>
          </div>

          <Field label="First name" value="Jordan" focused />
          <div style={{ height: 12 }} />
          <Field label="Last name" value="Lee" />
          <div style={{ height: 12 }} />
          <Field label="Date of birth" value="Mar 14, 1996" trailing={
            <svg width="18" height="18" viewBox="0 0 18 18">
              <rect x="2" y="3.5" width="14" height="12" rx="2" fill="none" stroke={LOOP.inkSoft} strokeWidth="1.5" />
              <path d="M2 7h14M6 1.5v3M12 1.5v3" stroke={LOOP.inkSoft} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          } />
        </div>

        <div style={{ position: 'absolute', bottom: 48, left: 24, right: 24 }}>
          <PrimaryButton>Continue</PrimaryButton>
        </div>
      </div>
    </IOSDevice>
  );
}
