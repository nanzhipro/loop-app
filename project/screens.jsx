// screens.jsx — Signup flow screens for "Loop" bikeshare
// Blue + orange modern palette. All screens are iOS frames sized to 390x844.

const LOOP = {
  blue: '#1F4BFF',          // primary
  blueDark: '#0F2EB8',
  blueSoft: '#EAF0FF',
  orange: '#FF6B2C',        // accent
  orangeSoft: '#FFE9DD',
  ink: '#0B1530',
  inkSoft: '#5B6478',
  line: '#E6E8F0',
  bg: '#F6F7FB',
  white: '#FFFFFF',
};

// ───────────────────────────────────────────────────────────
// Shared bits
// ───────────────────────────────────────────────────────────
function Logo({ size = 28, color = LOOP.blue, accent = LOOP.orange }) {
  // Two interlocking circles = "loop" / wheels. Original mark.
  return (
    <svg width={size * 1.7} height={size} viewBox="0 0 68 40">
      <circle cx="14" cy="20" r="12" fill="none" stroke={color} strokeWidth="4"/>
      <circle cx="54" cy="20" r="12" fill="none" stroke={accent} strokeWidth="4"/>
      <path d="M14 20 L34 8 L54 20" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="34" cy="8" r="2.5" fill={accent}/>
    </svg>
  );
}

function Wordmark({ size = 22 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Logo size={size} />
      <span style={{
        fontFamily: '"Inter Tight", -apple-system, system-ui, sans-serif',
        fontWeight: 800, fontSize: size, letterSpacing: -0.6, color: LOOP.ink,
      }}>loop</span>
    </div>
  );
}

function PrimaryButton({ children, disabled = false, accent = false, style = {} }) {
  return (
    <div style={{
      height: 56, borderRadius: 16,
      background: disabled ? '#D8DCE8' : (accent ? LOOP.orange : LOOP.blue),
      color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '-apple-system, system-ui', fontWeight: 600, fontSize: 17,
      letterSpacing: -0.3,
      boxShadow: disabled ? 'none' : (accent
        ? '0 8px 20px rgba(255,107,44,0.35)'
        : '0 8px 20px rgba(31,75,255,0.28)'),
      ...style,
    }}>{children}</div>
  );
}

function StepDots({ active, total = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          height: 4, borderRadius: 2,
          width: i === active ? 22 : 8,
          background: i <= active ? LOOP.blue : LOOP.line,
          transition: 'width .2s',
        }} />
      ))}
    </div>
  );
}

function TopBar({ step, total = 5, onSkip = false }) {
  return (
    <div style={{
      paddingTop: 60, padding: '60px 24px 0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: LOOP.white, border: `1px solid ${LOOP.line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="9" height="16" viewBox="0 0 9 16">
          <path d="M8 1L1 8l7 7" stroke={LOOP.ink} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <StepDots active={step} total={total} />
      <div style={{
        width: 40, height: 18,
        fontFamily: '-apple-system, system-ui', fontSize: 15, fontWeight: 500,
        color: LOOP.inkSoft, textAlign: 'right',
      }}>{onSkip ? 'Skip' : ''}</div>
    </div>
  );
}

function ScreenTitle({ eyebrow, title, sub }) {
  return (
    <div style={{ padding: '32px 24px 0' }}>
      {eyebrow && (
        <div style={{
          fontFamily: '-apple-system, system-ui', fontSize: 13, fontWeight: 600,
          color: LOOP.orange, textTransform: 'uppercase', letterSpacing: 1.2,
          marginBottom: 10,
        }}>{eyebrow}</div>
      )}
      <h1 style={{
        margin: 0, fontFamily: '"Inter Tight", -apple-system, system-ui',
        fontWeight: 800, fontSize: 32, lineHeight: 1.08, letterSpacing: -0.9,
        color: LOOP.ink,
      }}>{title}</h1>
      {sub && (
        <p style={{
          margin: '12px 0 0', fontFamily: '-apple-system, system-ui',
          fontSize: 16, lineHeight: 1.45, color: LOOP.inkSoft,
          textWrap: 'pretty',
        }}>{sub}</p>
      )}
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// Screen 1 — Welcome
// ───────────────────────────────────────────────────────────
function ScreenWelcome() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, ${LOOP.blue} 0%, #143ACC 60%, #0A2299 100%)`,
        overflow: 'hidden',
      }}>
        {/* Decorative orbit rings (wheels in the distance) */}
        <svg width="600" height="600" viewBox="0 0 600 600" style={{
          position: 'absolute', top: -120, right: -220, opacity: 0.18,
        }}>
          <circle cx="300" cy="300" r="240" fill="none" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="300" cy="300" r="180" fill="none" stroke="#fff" strokeWidth="1.5"/>
          <circle cx="300" cy="300" r="120" fill="none" stroke="#fff" strokeWidth="1.5"/>
        </svg>
        <div style={{
          position: 'absolute', top: 220, left: -140,
          width: 280, height: 280, borderRadius: '50%',
          background: `radial-gradient(circle, ${LOOP.orange} 0%, transparent 70%)`,
          opacity: 0.55,
        }} />

        {/* Wordmark top */}
        <div style={{ position: 'absolute', top: 80, left: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Logo size={26} color="#fff" accent={LOOP.orange} />
            <span style={{
              fontFamily: '"Inter Tight", system-ui', fontWeight: 800,
              fontSize: 22, letterSpacing: -0.6, color: '#fff',
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
            <span style={{
              width: 6, height: 6, borderRadius: 3, background: LOOP.orange,
            }} />
            420 bikes near you
          </div>
          <h1 style={{
            margin: 0, fontFamily: '"Inter Tight", system-ui',
            fontWeight: 800, fontSize: 44, lineHeight: 1.02,
            letterSpacing: -1.4, color: '#fff',
          }}>
            Unlock the<br/>
            city. <span style={{ color: LOOP.orange }}>Ride.</span>
          </h1>
          <p style={{
            margin: '16px 0 0', fontFamily: '-apple-system, system-ui',
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
          }}>I already have an account</div>
          <div style={{
            marginTop: 18, textAlign: 'center',
            fontFamily: '-apple-system, system-ui', fontSize: 12,
            color: 'rgba(255,255,255,0.55)', lineHeight: 1.5,
          }}>
            By continuing you agree to our Terms<br/>and Privacy Policy.
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}

// ───────────────────────────────────────────────────────────
// Screen 2 — Phone number
// ───────────────────────────────────────────────────────────
function ScreenPhone() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={0} />
        <ScreenTitle
          eyebrow="Step 1 of 5"
          title={<>What's your<br/>phone number?</>}
          sub="We'll text you a 6-digit code to verify. Standard rates may apply."
        />

        {/* Input group */}
        <div style={{ padding: '36px 24px 0' }}>
          <div style={{
            fontFamily: '-apple-system, system-ui', fontSize: 13,
            fontWeight: 600, color: LOOP.inkSoft, marginBottom: 8,
            letterSpacing: 0.2,
          }}>MOBILE NUMBER</div>
          <div style={{
            display: 'flex', gap: 10,
          }}>
            {/* Country */}
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
                <path d="M1 1l4 4 4-4" stroke={LOOP.inkSoft} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Number */}
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

          {/* Reassurance row */}
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
                <path d="M7 1.5L2 3.5v3.4c0 3 2.1 5.4 5 6.1 2.9-.7 5-3.1 5-6.1V3.5L7 1.5z" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M4.5 7L6 8.5 9.5 5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{
              fontFamily: '-apple-system, system-ui', fontSize: 13.5,
              lineHeight: 1.45, color: '#7A3E15',
            }}>
              <b>Your number stays private.</b><br/>
              We never share it with riders or anyone outside Loop.
            </div>
          </div>

          {/* CTA inline below card */}
          <div style={{ marginTop: 20 }}>
            <PrimaryButton>Send code</PrimaryButton>
          </div>
        </div>

        {/* Keyboard */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <NumPad />
        </div>
      </div>
    </IOSDevice>
  );
}

function NumPad() {
  const keys = [
    ['1', ''], ['2', 'ABC'], ['3', 'DEF'],
    ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'],
    ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'],
    ['', ''], ['0', '+'], ['⌫', ''],
  ];
  return (
    <div style={{
      background: '#D1D5DB', padding: '12px 6px 28px',
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 9,
    }}>
      {keys.map(([n, sub], i) => (
        <div key={i} style={{
          height: 46, borderRadius: 8,
          background: n ? '#fff' : 'transparent',
          boxShadow: n ? '0 1px 0 rgba(0,0,0,0.075)' : 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, "SF Pro Display", system-ui',
        }}>
          <div style={{ fontSize: n === '⌫' ? 20 : 25, fontWeight: 400, color: '#000', lineHeight: 1 }}>{n}</div>
          {sub && <div style={{ fontSize: 10, fontWeight: 600, color: '#000', letterSpacing: 1.5, marginTop: 2 }}>{sub}</div>}
        </div>
      ))}
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// Screen 3 — Verification code
// ───────────────────────────────────────────────────────────
function ScreenVerify() {
  const code = ['4', '8', '2', '9', '', ''];
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={1} />
        <ScreenTitle
          eyebrow="Step 2 of 5"
          title={<>Enter the<br/>code we sent</>}
          sub={<>Texted to <b style={{ color: LOOP.ink }}>+1 (415) 555-0142</b>. <span style={{ color: LOOP.blue, fontWeight: 600 }}>Change number</span></>}
        />

        {/* Code boxes */}
        <div style={{ padding: '36px 24px 0' }}>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between' }}>
            {code.map((d, i) => {
              const filled = d !== '';
              const active = i === 4;
              return (
                <div key={i} style={{
                  width: 50, height: 64, borderRadius: 14,
                  background: filled ? LOOP.white : (active ? LOOP.white : LOOP.white),
                  border: active
                    ? `1.5px solid ${LOOP.blue}`
                    : `1.5px solid ${filled ? LOOP.line : LOOP.line}`,
                  boxShadow: active ? '0 0 0 4px rgba(31,75,255,0.10)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '-apple-system, system-ui', fontWeight: 700,
                  fontSize: 28, color: LOOP.ink,
                }}>
                  {d || (active ? <div style={{
                    width: 2, height: 26, background: LOOP.blue,
                  }} /> : '')}
                </div>
              );
            })}
          </div>

          {/* Resend */}
          <div style={{
            marginTop: 24, textAlign: 'center',
            fontFamily: '-apple-system, system-ui', fontSize: 14,
            color: LOOP.inkSoft,
          }}>
            Didn't get it? <span style={{ color: LOOP.inkSoft }}>Resend in </span>
            <span style={{ color: LOOP.ink, fontWeight: 600 }}>0:23</span>
          </div>

          {/* Helper card */}
          <div style={{
            marginTop: 28, padding: 16, borderRadius: 16,
            background: LOOP.white, border: `1px solid ${LOOP.line}`,
          }}>
            <div style={{
              fontFamily: '-apple-system, system-ui', fontSize: 13,
              fontWeight: 600, color: LOOP.inkSoft, marginBottom: 10,
              textTransform: 'uppercase', letterSpacing: 0.8,
            }}>Trouble signing in?</div>
            {[
              ['Try a different number', '→'],
              ['Get a call instead', '→'],
            ].map(([t, c], i, a) => (
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

        {/* Keyboard */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <NumPad />
        </div>
      </div>
    </IOSDevice>
  );
}

// ───────────────────────────────────────────────────────────
// Screen 4 — Profile (name + DOB)
// ───────────────────────────────────────────────────────────
function ScreenProfile() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={2} />
        <ScreenTitle
          eyebrow="Step 3 of 5"
          title={<>A few quick<br/>details</>}
          sub="We need your name for billing and your date of birth (you must be 18+ to ride)."
        />

        <div style={{ padding: '28px 24px 0' }}>
          {/* Avatar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 22,
              background: `linear-gradient(135deg, ${LOOP.blue}, ${LOOP.orange})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontFamily: '"Inter Tight", system-ui',
              fontWeight: 800, fontSize: 22,
            }}>JL</div>
            <div>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 15,
                fontWeight: 600, color: LOOP.ink,
              }}>Add a photo</div>
              <div style={{
                fontFamily: '-apple-system, system-ui', fontSize: 13,
                color: LOOP.inkSoft, marginTop: 2,
              }}>Optional · helps station hosts</div>
            </div>
          </div>

          {/* Name fields */}
          <Field label="First name" value="Jordan" focused />
          <div style={{ height: 12 }} />
          <Field label="Last name" value="Lee" />
          <div style={{ height: 12 }} />
          <Field label="Date of birth" value="Mar 14, 1996" trailing={
            <svg width="18" height="18" viewBox="0 0 18 18">
              <rect x="2" y="3.5" width="14" height="12" rx="2" fill="none" stroke={LOOP.inkSoft} strokeWidth="1.5"/>
              <path d="M2 7h14M6 1.5v3M12 1.5v3" stroke={LOOP.inkSoft} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          } />
        </div>

        {/* CTA */}
        <div style={{ position: 'absolute', bottom: 48, left: 24, right: 24 }}>
          <PrimaryButton>Continue</PrimaryButton>
        </div>
      </div>
    </IOSDevice>
  );
}

function Field({ label, value, focused = false, trailing }) {
  return (
    <div>
      <div style={{
        fontFamily: '-apple-system, system-ui', fontSize: 13,
        fontWeight: 600, color: LOOP.inkSoft, marginBottom: 6,
        letterSpacing: 0.2,
      }}>{label.toUpperCase()}</div>
      <div style={{
        height: 56, borderRadius: 14,
        background: LOOP.white,
        border: focused ? `1.5px solid ${LOOP.blue}` : `1.5px solid ${LOOP.line}`,
        boxShadow: focused ? '0 0 0 4px rgba(31,75,255,0.10)' : 'none',
        padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8,
        fontFamily: '-apple-system, system-ui', fontWeight: 500,
        fontSize: 17, color: LOOP.ink,
      }}>
        <div style={{ flex: 1 }}>{value}</div>
        {trailing}
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
// Screen 5 — Location permission
// ───────────────────────────────────────────────────────────
function ScreenLocation() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={3} />

        {/* Hero illustration: map dot + concentric rings */}
        <div style={{
          margin: '40px 24px 0', height: 260, borderRadius: 24,
          background: `linear-gradient(160deg, ${LOOP.blueSoft}, #fff)`,
          border: `1px solid ${LOOP.line}`,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Faux street grid */}
          <svg width="100%" height="100%" viewBox="0 0 342 260" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            <g stroke={LOOP.blue} strokeOpacity="0.12" strokeWidth="1">
              <line x1="0" y1="60" x2="342" y2="60"/>
              <line x1="0" y1="130" x2="342" y2="130"/>
              <line x1="0" y1="200" x2="342" y2="200"/>
              <line x1="70" y1="0" x2="70" y2="260"/>
              <line x1="171" y1="0" x2="171" y2="260"/>
              <line x1="270" y1="0" x2="270" y2="260"/>
            </g>
            {/* curvy avenue */}
            <path d="M-10 90 Q 100 70 171 110 T 360 100" stroke={LOOP.blue} strokeOpacity="0.18" strokeWidth="6" fill="none" strokeLinecap="round"/>
            {/* bike dots */}
            <circle cx="86" cy="86" r="3" fill={LOOP.orange}/>
            <circle cx="240" cy="78" r="3" fill={LOOP.orange}/>
            <circle cx="260" cy="180" r="3" fill={LOOP.orange}/>
            <circle cx="118" cy="200" r="3" fill={LOOP.orange}/>
          </svg>
          {/* Concentric pulse */}
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
          {/* Pin */}
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
          title={<>Find bikes<br/>near you</>}
          sub="Loop uses your location to show available bikes, drop-off zones, and live route guidance."
        />

        {/* Bullets */}
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
                  <path d="M2 6.5L4.8 9 10 3.5" stroke={LOOP.blue} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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

        {/* CTA */}
        <div style={{ position: 'absolute', bottom: 48, left: 24, right: 24 }}>
          <PrimaryButton style={{ marginBottom: 10 }}>Enable location</PrimaryButton>
          <div style={{
            height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '-apple-system, system-ui', fontWeight: 600, fontSize: 15,
            color: LOOP.inkSoft,
          }}>Not now</div>
        </div>
      </div>
    </IOSDevice>
  );
}

// ───────────────────────────────────────────────────────────
// Screen 6 — Add payment
// ───────────────────────────────────────────────────────────
function ScreenPayment() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{ position: 'absolute', inset: 0, background: LOOP.bg }}>
        <TopBar step={4} />
        <ScreenTitle
          eyebrow="Step 5 of 5"
          title={<>Add a way<br/>to pay</>}
          sub="Free to add. You'll only be charged when you ride."
        />

        {/* Plan picker */}
        <div style={{ padding: '24px 24px 0' }}>
          <div style={{
            fontFamily: '-apple-system, system-ui', fontSize: 13,
            fontWeight: 600, color: LOOP.inkSoft, marginBottom: 10,
            letterSpacing: 0.2,
          }}>CHOOSE A PLAN</div>

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
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: LOOP.blue }}/>
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
              color: LOOP.orange, fontFamily: '-apple-system, system-ui',
              fontSize: 11, fontWeight: 700, letterSpacing: 0.4,
            }}>POPULAR</div>
          </div>

          <div style={{ height: 10 }} />

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

        {/* Apple Pay */}
        <div style={{ padding: '28px 24px 0' }}>
          <div style={{
            height: 56, borderRadius: 16, background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 6,
            fontFamily: '-apple-system, system-ui', fontWeight: 600,
            fontSize: 19, color: '#fff',
          }}>
            <svg width="20" height="22" viewBox="0 0 20 22">
              <path d="M14.5 1.5c-.8.9-2 1.5-3.2 1.4-.2-1.2.4-2.5 1.1-3.3.8-.9 2.1-1.6 3.2-1.6.1 1.3-.4 2.6-1.1 3.5zM15.7 4.3c-1.8-.1-3.3 1-4.1 1-.9 0-2.2-1-3.6-1-1.8 0-3.5 1.1-4.5 2.7-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9 1.6 0 2.2.9 3.6.9 1.5 0 2.5-1.3 3.4-2.6 1.1-1.5 1.5-3 1.5-3.1-.1 0-2.9-1.1-2.9-4.4 0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.3-2.1-3.9-2.1z" fill="#fff"/>
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

          <div style={{
            height: 56, borderRadius: 16, background: LOOP.white,
            border: `1.5px solid ${LOOP.line}`,
            display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
            fontFamily: '-apple-system, system-ui', fontWeight: 500,
            fontSize: 16, color: LOOP.inkSoft,
          }}>
            <svg width="22" height="16" viewBox="0 0 22 16">
              <rect x="0.5" y="0.5" width="21" height="15" rx="2.5" fill={LOOP.blueSoft} stroke={LOOP.line}/>
              <rect x="0.5" y="3" width="21" height="3" fill={LOOP.blue}/>
            </svg>
            Card number
          </div>
        </div>
      </div>
    </IOSDevice>
  );
}

// ───────────────────────────────────────────────────────────
// Screen 7 — All set
// ───────────────────────────────────────────────────────────
function ScreenDone() {
  return (
    <IOSDevice width={390} height={844}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, #fff 0%, ${LOOP.blueSoft} 100%)`,
      }}>
        <TopBar step={4} />

        {/* Big confirmation graphic */}
        <div style={{
          margin: '60px auto 0', width: 200, height: 200,
          position: 'relative',
        }}>
          {/* Orange ring */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: `conic-gradient(${LOOP.orange} 0deg 340deg, transparent 340deg)`,
            mask: 'radial-gradient(circle, transparent 78px, #000 79px)',
            WebkitMask: 'radial-gradient(circle, transparent 78px, #000 79px)',
          }} />
          {/* Blue inner */}
          <div style={{
            position: 'absolute', inset: 16, borderRadius: '50%',
            background: LOOP.blue,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 20px 50px rgba(31,75,255,0.35)',
          }}>
            <svg width="80" height="80" viewBox="0 0 80 80">
              <path d="M22 42 L34 54 L58 28" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Confetti dots */}
          {[
            [-20, 10, LOOP.orange, 8],
            [210, 30, LOOP.blue, 10],
            [180, 180, LOOP.orange, 6],
            [-10, 170, LOOP.blue, 7],
            [100, -20, LOOP.orange, 5],
          ].map(([x, y, c, s], i) => (
            <div key={i} style={{
              position: 'absolute', left: x, top: y,
              width: s, height: s, borderRadius: '50%', background: c,
            }}/>
          ))}
        </div>

        <div style={{ padding: '40px 24px 0', textAlign: 'center' }}>
          <h1 style={{
            margin: 0, fontFamily: '"Inter Tight", system-ui',
            fontWeight: 800, fontSize: 36, letterSpacing: -0.9, color: LOOP.ink,
          }}>You're all set,<br/>Jordan.</h1>
          <p style={{
            margin: '14px auto 0', maxWidth: 280,
            fontFamily: '-apple-system, system-ui', fontSize: 16,
            lineHeight: 1.5, color: LOOP.inkSoft,
          }}>Scan any Loop bike's QR code to unlock and start riding.</p>
        </div>

        {/* First-ride credit chip */}
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
              <path d="M11 2L13.5 8L20 8.5L15 13L16.5 19.5L11 16L5.5 19.5L7 13L2 8.5L8.5 8L11 2Z" fill={LOOP.orange}/>
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

        {/* CTA */}
        <div style={{ position: 'absolute', bottom: 48, left: 24, right: 24 }}>
          <PrimaryButton accent>
            <svg width="20" height="20" viewBox="0 0 20 20" style={{ marginRight: 8 }}>
              <rect x="2" y="2" width="6" height="6" rx="1" fill="none" stroke="#fff" strokeWidth="1.8"/>
              <rect x="12" y="2" width="6" height="6" rx="1" fill="none" stroke="#fff" strokeWidth="1.8"/>
              <rect x="2" y="12" width="6" height="6" rx="1" fill="none" stroke="#fff" strokeWidth="1.8"/>
              <rect x="12" y="12" width="3" height="3" fill="#fff"/>
              <rect x="15" y="15" width="3" height="3" fill="#fff"/>
            </svg>
            Scan a bike
          </PrimaryButton>
          <div style={{
            marginTop: 12, height: 48,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '-apple-system, system-ui', fontWeight: 600, fontSize: 15,
            color: LOOP.blue,
          }}>Take the tour first →</div>
        </div>
      </div>
    </IOSDevice>
  );
}

Object.assign(window, {
  ScreenWelcome, ScreenPhone, ScreenVerify, ScreenProfile,
  ScreenLocation, ScreenPayment, ScreenDone, LOOP, Wordmark,
});
