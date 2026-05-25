import React from 'react';
import { DesignCanvas, DCSection, DCArtboard } from './components/canvas/DesignCanvas.jsx';
import { ScreenWelcome } from './screens/ScreenWelcome.jsx';
import { ScreenPhone } from './screens/ScreenPhone.jsx';
import { ScreenVerify } from './screens/ScreenVerify.jsx';
import { ScreenProfile } from './screens/ScreenProfile.jsx';
import { ScreenLocation } from './screens/ScreenLocation.jsx';
import { ScreenPayment } from './screens/ScreenPayment.jsx';
import { ScreenDone } from './screens/ScreenDone.jsx';

const SCREENS = [
  ['welcome',  '1 · Welcome',       ScreenWelcome],
  ['phone',    '2 · Phone number',  ScreenPhone],
  ['verify',   '3 · Verify code',   ScreenVerify],
  ['profile',  '4 · Profile',       ScreenProfile],
  ['location', '5 · Location',      ScreenLocation],
  ['payment',  '6 · Payment',       ScreenPayment],
  ['done',     '7 · All set',       ScreenDone],
];

export default function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="flow"
        title="Signup flow"
        subtitle="Left → right reading order. Tap a frame to focus."
      >
        {SCREENS.map(([id, label, Screen]) => (
          <DCArtboard key={id} id={id} label={label} width={390} height={844}>
            <Screen />
          </DCArtboard>
        ))}
      </DCSection>
    </DesignCanvas>
  );
}
