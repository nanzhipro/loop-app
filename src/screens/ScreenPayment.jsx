import React from 'react';
import { LOOP } from '../constants.js';
import { IOSDevice } from '../components/ios/IOSDevice.jsx';
import { TopBar } from '../components/shared/TopBar.jsx';
import { ScreenTitle } from '../components/shared/ScreenTitle.jsx';

export function ScreenPayment() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={4} />
        <ScreenTitle
          eyebrow="Step 5 of 5"
          title={<>Add a way<br />to pay</>}
          sub="Free to add. You'll only be charged when you ride."
        />

        {/* Plan picker */}
        <div style={{ padding: '24px 24px 0' }}>
          <div style={{
            fontFamily: '-apple-system, system-ui', fontSize: 13,
            fontWeight: 600, color: LOOP.inkSoft, marginBottom: 10,
            letterSpacing: 0.2,
          }}>
            CHOOSE A PLAN
          </div>

          {/* Pay as you go (selected) */}
          <div style={{
            padding: 16, borderRadius: 18, background: LOOP.white,
            border: `2px solid ${LOOP.blue}`,
            display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 8px 24px rgba(31,75,255,0.10)',
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              border: `2px solid ${LOOP.blue}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: LOOP.blue }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 16,
                fontWeight: 700, color: LOOP.ink,
              }}>Pay as you go</div>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 13,
                color: LOOP.inkSoft, marginTop: 2,
              }}>$1 to unlock + $0.18/min</div>
            </div>
            <div style={{
              padding: '4px 8px', borderRadius: 6, background: LOOP.orangeSoft,
              color: LOOP.orange,
              fontFamily: '-apple-system, system-ui',
              fontSize: 11, fontWeight: 700, letterSpacing: 0.4,
            }}>
              POPULAR
            </div>
          </div>

          <div style={{ height: 10 }} />

          {/* Monthly */}
          <div style={{
            padding: 16, borderRadius: 18, background: LOOP.white,
            border: `1.5px solid ${LOOP.line}`,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              border: `2px solid ${LOOP.line}`,
            }} />
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 16,
                fontWeight: 700, color: LOOP.ink,
              }}>Monthly · $19</div>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 13,
                color: LOOP.inkSoft, marginTop: 2,
              }}>Unlimited 45-min rides</div>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <div style={{ padding: '28px 24px 0' }}>
          {/* Apple Pay */}
          <div style={{
            height: 56, borderRadius: 16, background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 6,
            fontFamily: '-apple-system, system-ui', fontWeight: 600,
            fontSize: 19, color: '#fff',
          }}>
            <svg width="20" height="22" viewBox="0 0 20 22">
              <path d="M14.5 1.5c-.8.9-2 1.5-3.2 1.4-.2-1.2.4-2.5 1.1-3.3.8-.9 2.1-1.6 3.2-1.6.1 1.3-.4 2.6-1.1 3.5zM15.7 4.3c-1.8-.1-3.3 1-4.1 1-.9 0-2.2-1-3.6-1-1.8 0-3.5 1.1-4.5 2.7-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9 1.6 0 2.2.9 3.6.9 1.5 0 2.5-1.3 3.4-2.6 1.1-1.5 1.5-3 1.5-3.1-.1 0-2.9-1.1-2.9-4.4 0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.3-2.1-3.9-2.1z" fill="#fff" />
            </svg>
            Pay
          </div>

          <div style={{
            margin: '20px 0',
            display: 'flex', alignItems: 'center', gap: 12,
            fontFamily: '-apple-system, system-ui', fontSize: 12,
            color: LOOP.inkSoft, fontWeight: 500,
          }}>
            <div style={{ flex: 1, height: 1, background: LOOP.line }} />
            OR USE A CARD
            <div style={{ flex: 1, height: 1, background: LOOP.line }} />
          </div>

          {/* Card input */}
          <div style={{
            height: 56, borderRadius: 16, background: LOOP.white,
            border: `1.5px solid ${LOOP.line}`,
            display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
            fontFamily: '-apple-system, system-ui', fontWeight: 500,
            fontSize: 16, color: LOOP.inkSoft,
          }}>
            <svg width="22" height="16" viewBox="0 0 22 16">
              <rect x="0.5" y="0.5" width="21" height="15" rx="2.5" fill={LOOP.blueSoft} stroke={LOOP.line} />
              <rect x="0.5" y="3" width="21" height="3" fill={LOOP.blue} />
            </svg>
            Card number
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}
