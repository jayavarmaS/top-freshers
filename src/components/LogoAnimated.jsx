import { useEffect, useRef, useState } from "react";

/*
  Top Freshers animated logo.
  - At rest: shows the original PNG logo exactly as-is.
  - On cycle: the 3 coloured leaf squares jump away from the tree
    then snap back — after which it looks exactly like the original again.
*/
export default function LogoAnimated({ size = 120, onClick }) {
  const greenRef  = useRef(null);
  const blueRef   = useRef(null);
  const orangeRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const CYCLE = 4000; // ms between each jump sequence

    // leaf jump configs — how far each leaf flies relative to its rest position
    const leaves = [
      { ref: greenRef,  tx: -18, ty: -16, rot: -18, delay: 0    },
      { ref: blueRef,   tx:  12, ty: -22, rot:  16, delay: 550  },
      { ref: orangeRef, tx:  18, ty:  -8, rot:  14, delay: 1100 },
    ];

    const JUMP_MS   = 320;
    const HOLD_MS   = 200;
    const RETURN_MS = 300;

    const timers = [];

    const runCycle = () => {
      setAnimated(true);

      leaves.forEach(({ ref, tx, ty, rot, delay }) => {
        // jump out
        const t1 = setTimeout(() => {
          if (!ref.current) return;
          ref.current.style.transition = `transform ${JUMP_MS}ms cubic-bezier(0.34,1.56,0.64,1)`;
          ref.current.style.transform  =
            `translate(${tx}px,${ty}px) rotate(${rot}deg) scale(1.14)`;
        }, delay);

        // return to rest
        const t2 = setTimeout(() => {
          if (!ref.current) return;
          ref.current.style.transition = `transform ${RETURN_MS}ms cubic-bezier(0.34,1.56,0.64,1)`;
          ref.current.style.transform  = "translate(0,0) rotate(0deg) scale(1)";
        }, delay + JUMP_MS + HOLD_MS);

        timers.push(t1, t2);
      });

      // mark animation done after all leaves returned
      const lastEnd = 1100 + JUMP_MS + HOLD_MS + RETURN_MS + 50;
      const tDone = setTimeout(() => setAnimated(false), lastEnd);
      timers.push(tDone);
    };

    runCycle();
    const interval = setInterval(runCycle, CYCLE);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  /*
    Layout:
    The original PNG is 1333×1000 px. In the navbar we render it at ~120px wide.
    The three leaf squares in the PNG (approximate % positions):

    Green  square : left ~5%, top ~18%, width ~33%, height ~46%
    Blue   square : left ~38%, top ~5%, width ~27%, height ~38%
    Orange square : left ~53%, top ~28%, width ~28%, height ~40%

    We position coloured divs exactly over those regions,
    set them transparent normally, and when animated they
    show their colour so the jump is visible.
    Actually simpler: we DON'T hide the PNG leaves —
    we overlay animated divs with the same colours that match.
    They start at opacity 0, fly, then fade back.

    ACTUALLY even simpler: render the PNG normally. 
    On top, render 3 absolutely-positioned elements that are 
    INVISIBLE at rest (opacity:0) but during the jump they
    slide out as coloured clones and return.
  */

  const w = size;
  const h = size * 0.75;

  // positions as fraction of container size (matched to PNG)
  const leaves = [
    {
      ref: greenRef,
      color: "#5cb85c",
      left: "4%", top: "16%", width: "32%", height: "45%",
      borderRadius: "18%",
      rotate: "-12deg",
    },
    {
      ref: blueRef,
      color: "#3aa3d8",
      left: "37%", top: "4%", width: "27%", height: "38%",
      borderRadius: "18%",
      rotate: "10deg",
    },
    {
      ref: orangeRef,
      color: "#f0a500",
      left: "52%", top: "26%", width: "27%", height: "39%",
      borderRadius: "18%",
      rotate: "8deg",
    },
  ];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go to home"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "inline-block",
        position: "relative",
        width: w,
        height: h,
        flexShrink: 0,
      }}
    >
      {/* Original PNG — always visible, never moves */}
      <img
        src="/ChatGPT Image Sep 11, 2026, 01_11_56 PM.png"
        alt="Top Freshers logo"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          /* hide the leaf area during animation so clones replace them */
          zIndex: animated ? 0 : 1,
        }}
        draggable={false}
      />

      {/* Animated leaf clones — sit over the PNG leaves, fly out & back */}
      {leaves.map((leaf, i) => (
        <span
          key={i}
          ref={leaf.ref}
          style={{
            position: "absolute",
            left: leaf.left,
            top: leaf.top,
            width: leaf.width,
            height: leaf.height,
            borderRadius: leaf.borderRadius,
            background: leaf.color,
            transform: `rotate(${leaf.rotate}) translate(0,0) scale(1)`,
            transformOrigin: "center center",
            opacity: animated ? 1 : 0,
            zIndex: 2,
            willChange: "transform",
            pointerEvents: "none",
          }}
        />
      ))}
    </button>
  );
}
