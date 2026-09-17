import { useEffect, useRef } from "react";

/*
  Animated Top Freshers logo.
  The 3 coloured leaf-squares jump away from the tree one by one,
  then bounce back and reattach — on a looping cycle.
*/

export default function LogoAnimated({ size = 120, onClick }) {
  const greenRef  = useRef(null);
  const blueRef   = useRef(null);
  const orangeRef = useRef(null);

  useEffect(() => {
    const leaves = [
      { el: greenRef.current,  tx: -22, ty: -18, delay: 0    },
      { el: blueRef.current,   tx: 14,  ty: -24, delay: 600  },
      { el: orangeRef.current, tx: 20,  ty: -10, delay: 1200 },
    ];

    const JUMP_DURATION  = 340;  // ms — time to fly out
    const HOLD_DURATION  = 180;  // ms — hang in air
    const RETURN_DURATION = 320; // ms — bounce back
    const CYCLE          = 3800; // ms — full repeat cycle

    const timers = [];

    const jump = (leaf, index) => {
      const el = leaf.el;
      if (!el) return;

      // fly out
      el.style.transition = `transform ${JUMP_DURATION}ms cubic-bezier(0.34,1.56,0.64,1)`;
      el.style.transform  = `translate(${leaf.tx}px, ${leaf.ty}px) rotate(${leaf.tx > 0 ? 14 : -14}deg) scale(1.12)`;

      // hold, then return
      const t1 = setTimeout(() => {
        el.style.transition = `transform ${RETURN_DURATION}ms cubic-bezier(0.34,1.56,0.64,1)`;
        el.style.transform  = "translate(0,0) rotate(0deg) scale(1)";
      }, JUMP_DURATION + HOLD_DURATION);

      timers.push(t1);
    };

    // stagger each leaf, then repeat the whole sequence
    const run = () => {
      leaves.forEach((leaf, i) => {
        const t = setTimeout(() => jump(leaf, i), leaf.delay);
        timers.push(t);
      });
    };

    run();
    const interval = setInterval(run, CYCLE);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className="brand-button"
      aria-label="Go to home"
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}
    >
      <svg
        width={size}
        height={size * 0.72}
        viewBox="0 0 200 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* ── Grey tree trunk ── */}
        <g>
          {/* trunk body */}
          <path
            d="M88 144 C88 144 80 110 78 90 C75 68 60 58 58 48
               C58 48 72 55 82 68 C82 68 80 52 74 38
               C74 38 86 50 90 65
               C90 65 92 50 88 34
               C88 34 102 50 100 68
               C100 68 106 52 112 38
               C112 38 108 55 104 70
               C104 70 116 55 122 48
               C122 48 118 68 108 88
               C106 98 100 118 100 144 Z"
            fill="#888"
          />
        </g>

        {/* ── GREEN leaf (left, tilted -12deg) ── */}
        <g
          ref={greenRef}
          style={{
            transformOrigin: "62px 72px",
            willChange: "transform",
            transition: "transform 0.32s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <rect
            x="14" y="38"
            width="68" height="68"
            rx="16"
            fill="#5cb85c"
            transform="rotate(-12 62 72)"
          />
          {/* person figure in green */}
          <circle cx="54" cy="56" r="7" fill="white" transform="rotate(-12 62 72)" />
          <path
            d="M42 85 C42 72 66 72 66 85"
            stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"
            transform="rotate(-12 62 72)"
          />
          <line x1="54" y1="63" x2="44" y2="75" stroke="white" strokeWidth="4" strokeLinecap="round" transform="rotate(-12 62 72)" />
          <line x1="54" y1="63" x2="64" y2="72" stroke="white" strokeWidth="4" strokeLinecap="round" transform="rotate(-12 62 72)" />
        </g>

        {/* ── BLUE leaf (top-center, tilted +10deg) ── */}
        <g
          ref={blueRef}
          style={{
            transformOrigin: "112px 42px",
            willChange: "transform",
            transition: "transform 0.32s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <rect
            x="84" y="8"
            width="56" height="56"
            rx="13"
            fill="#3aa3d8"
            transform="rotate(10 112 36)"
          />
          {/* person figure in blue */}
          <circle cx="112" cy="24" r="6" fill="white" transform="rotate(10 112 36)" />
          <path
            d="M102 48 C102 38 122 38 122 48"
            stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"
            transform="rotate(10 112 36)"
          />
          <line x1="112" y1="30" x2="104" y2="40" stroke="white" strokeWidth="3.5" strokeLinecap="round" transform="rotate(10 112 36)" />
          <line x1="112" y1="30" x2="120" y2="40" stroke="white" strokeWidth="3.5" strokeLinecap="round" transform="rotate(10 112 36)" />
        </g>

        {/* ── ORANGE leaf (right, tilted +8deg) ── */}
        <g
          ref={orangeRef}
          style={{
            transformOrigin: "136px 84px",
            willChange: "transform",
            transition: "transform 0.32s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <rect
            x="108" y="56"
            width="58" height="58"
            rx="14"
            fill="#f0a500"
            transform="rotate(8 136 85)"
          />
          {/* person figure in orange */}
          <circle cx="136" cy="70" r="6.5" fill="white" transform="rotate(8 136 85)" />
          <path
            d="M124 96 C124 84 148 84 148 96"
            stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"
            transform="rotate(8 136 85)"
          />
          <line x1="136" y1="77" x2="126" y2="88" stroke="white" strokeWidth="4" strokeLinecap="round" transform="rotate(8 136 85)" />
          <line x1="136" y1="77" x2="146" y2="86" stroke="white" strokeWidth="4" strokeLinecap="round" transform="rotate(8 136 85)" />
        </g>
      </svg>
    </button>
  );
}
