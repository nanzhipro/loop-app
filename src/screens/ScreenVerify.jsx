import React from 'react';
import { LOOP } from '../constants.js';
import { IOSDevice } from '../components/ios/IOSDevice.jsx';
import { TopBar } from '../components/shared/TopBar.jsx';
import { ScreenTitle } from '../components/shared/ScreenTitle.jsx';
import { NumPad } from '../components/shared/NumPad.jsx';

const CODE = ['4', '8', '2', '9', '', ''];

export function ScreenVerify() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={1} />
        <ScreenTitle
          eyebrow="Step 2 of 5"
          title={<>Enter the<br />code we sent</>}
          sub={<>Texted to <b style={{ color: LOOP.ink }}>+1 (415) 555-0142</b>. <span style={{ color: LOOP.blue, fontWeight: 600 }}>Change number</span></>}
        />

        <div style={{ padding: '36px 24px 0' }}>
          {/* OTP boxes */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
            {CODE.map((d, i) => {
              const filled = d !== '';
              const active = i === 4;
              return (
                <div key={i} style={{
                  width: 50, height: 64, borderRadius: 14,
                  background: LOOP.white,
                  border: active
                    ? `1.5px solid ${LOOP.blue}`
                    : `1.5px solid ${LOOP.line}`,
                  boxShadow: active ? '0 0 0 4px rgba(31,75,255,0.10)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '-apple-system, system-ui', fontWeight: 700,
                  fontSize: 28, color: LOOP.ink,
                }}>
                  {d || (active ? <div style={{ width: 2, height: 26, background: LOOP.blue }} /> : '')}
                </div>
              );
            })}
          </div>

          {/* Resend timer */}
          <div style={{
            marginTop: 24, textAlign: 'center',
            fontFamily: '-apple-system, system-ui', fontSize: 14,
            color: LOOP.inkSoft,
          }}>
            Didn't get it? <span style={{ color: LOOP.inkSoft }}>Resend in </span>
            <span style={{ color: LOOP.ink, fontWeight: 600 }}>0:23</span>
          </div>

          {/* Help card */}
          <div style={{
            marginTop: 28, padding: 16, borderRadius: 16,
            background: LOOP.white, border: `1px solid ${LOOP.line}`,
          }}>
            <div style={{
              fontFamily: '-apple-system, system-ui', fontSize: 13,
              fontWeight: 600, color: LOOP.inkSoft, marginBottom: 10,
              textTransform: 'uppercase', letterSpacing: 0.8,
            }}>
              Trouble signing in?
            </div>
            {[
              ['Try a different number', '→'],
              ['Get a call instead', '→'],
            ].map(([t, c], i) => (
              <div key={i} style={{
                padding: '12px 0',
                borderTop: i === 0 ? 'none' : `1px solid ${LOOP.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: '-apple-system, system-ui', fontSize: 15,
                fontWeight: 500, color: LOOP.ink,
              }}>
                {t}
                <span style={{ color: LOOP.blue }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <NumPad />
        </div>
      </div>
    </IOSDevice>
  );
}
