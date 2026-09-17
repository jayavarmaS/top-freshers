import { useEffect, useRef } from "react";

export default function LogoAnimated({ size = 120, onClick }) {
  const gRef = useRef(null);
  const bRef = useRef(null);
  const oRef = useRef(null);

  useEffect(() => {
    /*
      Each leaf:
        dipX/dipY  — tiny move TOWARD trunk (sinks in)
        jumpX/jumpY — bigger move AWAY from trunk (flies out)
    */
    const leaves = [
      { ref: gRef,  dipX:  5,  dipY:  3,  jumpX: -18, jumpY: -14 }, // green  → hard left-up, away from text
      { ref: bRef,  dipX:  1,  dipY:  5,  jumpX:   2, jumpY: -22 }, // blue   → straight up
      { ref: oRef,  dipX: -4,  dipY:  3,  jumpX:  12, jumpY: -10 }, // orange → right-up (short, avoids text)
    ];

    const DIP_MS    = 150;
    const HOLD_DIP  = 50;
    const JUMP_MS   = 270;
    const HOLD_OUT  = 130;
    const RETURN_MS = 250;
    const SEQ       = DIP_MS + HOLD_DIP + JUMP_MS + HOLD_OUT + RETURN_MS; // ~850ms per leaf
    const GAP       = 100; // pause between leaves
    const CYCLE_MS  = 4500;

    const sp  = "cubic-bezier(0.34,1.56,0.64,1)";
    const eas = "cubic-bezier(0.25,0.46,0.45,0.94)";
    const timers = [];

    const animLeaf = (leaf, offset) => {
      const el = leaf.ref.current;
      if (!el) return;

      // 1 — dip into trunk
      timers.push(setTimeout(() => {
        el.style.transition = `transform ${DIP_MS}ms ${eas}`;
        el.style.transform  = `translate(${leaf.dipX}px,${leaf.dipY}px)`;
      }, offset));

      // 2 — jump out
      timers.push(setTimeout(() => {
        el.style.transition = `transform ${JUMP_MS}ms ${sp}`;
        el.style.transform  = `translate(${leaf.jumpX}px,${leaf.jumpY}px)`;
      }, offset + DIP_MS + HOLD_DIP));

      // 3 — return to rest
      timers.push(setTimeout(() => {
        el.style.transition = `transform ${RETURN_MS}ms ${sp}`;
        el.style.transform  = "translate(0px,0px)";
      }, offset + DIP_MS + HOLD_DIP + JUMP_MS + HOLD_OUT));
    };

    const run = () => {
      leaves.forEach((leaf, i) => animLeaf(leaf, i * (SEQ + GAP)));
    };

    run();
    const iv = setInterval(run, CYCLE_MS);
    return () => { timers.forEach(clearTimeout); clearInterval(iv); };
  }, []);

  const w = size;
  const h = Math.round(size * 0.75);

  // shared style for each leaf <span> wrapper
  const leafWrap = (clipPath) => ({
    position: "absolute",
    inset: 0,
    clipPath,
    willChange: "transform",
    // transform-origin at trunk branching point (~42% left, 58% top)
    transformOrigin: "42% 58%",
    zIndex: 2,
    pointerEvents: "none",
  });

  const imgStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    userSelect: "none",
  };

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
        position: "relative",
        width: w,
        height: h,
        display: "inline-flex",
        flexShrink: 0,
        overflow: "visible",
      }}
    >
      {/* ── Full PNG: base layer (trunk + text, always still) ── */}
      <img
        src="/ChatGPT Image Sep 11, 2026, 01_11_56 PM.png"
        alt="Top Freshers logo"
        style={{ ...imgStyle, position: "absolute", inset: 0, zIndex: 0 }}
        draggable={false}
      />

      {/* ── GREEN leaf — clip: left square only, excludes all text ── */}
      <span ref={gRef} style={leafWrap("polygon(1% 13%, 37% 13%, 37% 65%, 1% 65%)")}>
        <img src="/ChatGPT Image Sep 11, 2026, 01_11_56 PM.png" alt="" aria-hidden="true" style={imgStyle} draggable={false} />
      </span>

      {/* ── BLUE leaf — clip: top-center square only, excludes all text ── */}
      <span ref={bRef} style={leafWrap("polygon(33% 1%, 62% 1%, 62% 43%, 33% 43%)")}>
        <img src="/ChatGPT Image Sep 11, 2026, 01_11_56 PM.png" alt="" aria-hidden="true" style={imgStyle} draggable={false} />
      </span>

      {/* ── ORANGE leaf — clip: right square, stops before text area ── */}
      <span ref={oRef} style={leafWrap("polygon(48% 22%, 72% 22%, 72% 65%, 48% 65%)")}>
        <img src="/ChatGPT Image Sep 11, 2026, 01_11_56 PM.png" alt="" aria-hidden="true" style={imgStyle} draggable={false} />
      </span>
    </button>
  );
}
