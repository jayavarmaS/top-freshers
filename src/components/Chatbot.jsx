import { useState, useRef, useEffect, useCallback } from "react";

// ─── Site knowledge base ───────────────────────────────────────────────────
const KB = [
  {
    keys: ["course", "courses", "program", "programs", "learn", "learning", "study", "curriculum"],
    answer: (nav) => ({
      text: "We offer 12+ career-focused programs including Full Stack Web Development, Python for Data Science, AI & Machine Learning, Cloud & DevOps, UI/UX Design, Cyber Security, Mobile App Development, and more. Each course comes with hands-on projects and mentorship.",
      action: { label: "Explore All Courses →", page: "allcourses" },
      nav,
    }),
  },
  {
    keys: ["full stack", "fullstack", "web development", "web dev", "html", "css", "react", "node"],
    answer: (nav) => ({
      text: "Our Full Stack Web Development course (6 months) covers everything from HTML/CSS to React, Node.js, and databases. Rated 4.8 ⭐ by 12K+ students. Perfect for beginners to advanced learners.",
      action: { label: "View Courses →", page: "allcourses" },
      nav,
    }),
  },
  {
    keys: ["python", "data science", "data", "pandas", "numpy", "machine learning basics"],
    answer: (nav) => ({
      text: "Python for Data Science is a 4-month program covering Python, Pandas, NumPy, data visualization, and ML fundamentals. Rated 4.7 ⭐ with 9K+ reviews.",
      action: { label: "View Courses →", page: "allcourses" },
      nav,
    }),
  },
  {
    keys: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "neural"],
    answer: (nav) => ({
      text: "Our AI & Machine Learning course (5 months) covers deep learning, neural networks, NLP, and model deployment. Rated 4.8 ⭐ by 8K+ students. Intermediate to Advanced level.",
      action: { label: "View Courses →", page: "allcourses" },
      nav,
    }),
  },
  {
    keys: ["cloud", "devops", "aws", "azure", "docker", "kubernetes", "ci/cd"],
    answer: (nav) => ({
      text: "Cloud & DevOps (4 months) covers AWS, Azure, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code. Rated 4.6 ⭐ — one of our most in-demand programs.",
      action: { label: "View Courses →", page: "allcourses" },
      nav,
    }),
  },
  {
    keys: ["job", "jobs", "career", "placement", "hire", "hiring", "company", "companies", "opportunity", "opportunities"],
    answer: (nav) => ({
      text: "Top Freshers connects you with 200+ hiring partners including Amazon, TCS, Infosys, and more. We have fresh job opportunities for freshers across Software Development, Data Analytics, Cloud, and UI/UX roles.",
      action: { label: "View Jobs →", page: "home", section: "jobs" },
      nav,
    }),
  },
  {
    keys: ["success", "success story", "stories", "alumni", "placed", "student", "students"],
    answer: (nav) => ({
      text: "We've helped 50,000+ students land their dream jobs. Our alumni work at top companies across India and abroad. Check out their success stories to get inspired!",
      action: { label: "See Success Stories →", page: "home", section: "success" },
      nav,
    }),
  },
  {
    keys: ["contact", "reach", "talk", "call", "email", "phone", "address", "location", "support", "help"],
    answer: (nav) => ({
      text: "You can reach us at hr@terv.pro or call +91 8428881177. We're at #149, Opp to DLF IT Park, Mt Poonamalle Rd, Chennai, Tamil Nadu - 600089.",
      action: { label: "Contact Us →", page: "contact" },
      nav,
    }),
  },
  {
    keys: ["price", "cost", "fee", "fees", "payment", "affordable", "discount", "offer"],
    answer: (nav) => ({
      text: "Our courses are priced competitively for freshers. We also offer EMI options and early-bird discounts. Contact our team for the latest pricing and scholarship details.",
      action: { label: "Get in Touch →", page: "contact" },
      nav,
    }),
  },
  {
    keys: ["mentor", "mentorship", "guidance", "coach", "coaching", "expert", "trainer"],
    answer: (nav) => ({
      text: "Every student gets access to 10,000+ career mentors who are industry professionals. They guide you through projects, resume building, and interview preparation.",
      action: { label: "Learn More →", page: "courses" },
      nav,
    }),
  },
  {
    keys: ["how", "how it works", "process", "steps", "start", "begin", "enroll", "register", "join"],
    answer: (nav) => ({
      text: "Getting started is simple: 1️⃣ Discover your path, 2️⃣ Learn with hands-on projects, 3️⃣ Build a portfolio, 4️⃣ Get hired by top companies. We guide you at every step!",
      action: { label: "See How It Works →", page: "home", section: "howitworks" },
      nav,
    }),
  },
  {
    keys: ["about", "who", "what is", "top freshers", "terv", "company", "platform"],
    answer: (nav) => ({
      text: "Top Freshers (by Terv) is a career-readiness platform built specifically for freshers and early-career professionals. We combine skill training, mentorship, and job placement — all in one place.",
      action: { label: "About Us →", page: "home", section: "about" },
      nav,
    }),
  },
  {
    keys: ["resume", "cv", "portfolio", "interview", "interview prep", "soft skills"],
    answer: (nav) => ({
      text: "We help you build a standout fresher resume, prepare for interviews, and develop soft skills. Check out our resources section with articles like 'How to Create a Standout Fresher Resume' and 'Top 10 Interview Questions for Freshers'.",
      action: { label: "Go to Resources →", page: "courses" },
      nav,
    }),
  },
  {
    keys: ["instagram", "facebook", "youtube", "linkedin", "social", "follow"],
    answer: () => ({
      text: "Follow us on social media! 📸 Instagram: @terv.pro | 👔 LinkedIn: Terv Pro | 📘 Facebook: tervtribe | ▶️ YouTube: @TervProTech",
      action: null,
    }),
  },
];

const GREETINGS = ["hi", "hello", "hey", "howdy", "good morning", "good afternoon", "good evening", "hii", "helo"];
const THANKS = ["thank", "thanks", "thank you", "thx", "ty", "great", "awesome", "nice", "good", "perfect", "ok", "okay"];

function getReply(input, onNavigate) {
  const lower = input.toLowerCase().trim();

  if (GREETINGS.some((g) => lower.includes(g))) {
    return {
      text: "Hey there! 👋 I'm FreshBot, your career guide at Top Freshers. Ask me anything about our courses, jobs, mentorship, or how to get started!",
      action: null,
    };
  }

  if (THANKS.some((t) => lower.includes(t))) {
    return {
      text: "You're welcome! 😊 Is there anything else I can help you with? Ask me about our courses, jobs, or career guidance.",
      action: null,
    };
  }

  for (const entry of KB) {
    if (entry.keys.some((k) => lower.includes(k))) {
      return entry.answer(onNavigate);
    }
  }

  return {
    text: "Great question! 🤔 I'm still learning, but I can help you with courses, jobs, career paths, mentorship, pricing, and contact info. Try asking something like 'What courses do you offer?' or 'How do I get started?'",
    action: { label: "Explore Top Freshers →", page: "home" },
    nav: onNavigate,
  };
}

// ─── Component ────────────────────────────────────────────────────────────
const BOT_SIZE     = 76;
const BOTTOM_MARGIN = 28;
const BOUNCE_SPEED  = 4.5;   // horizontal px per frame (moves right)
const GRAVITY       = 0.7;
const JUMP_FORCE    = -15;   // initial upward kick

export default function Chatbot({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! 👋 I'm FreshBot — your career guide at Top Freshers. How can I assist you today?",
      action: null,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // bounce state in refs — no re-renders per frame
  const posRef      = useRef({ x: 0, y: 0 });           // start at left edge
  const velRef      = useRef({ x: BOUNCE_SPEED, y: JUMP_FORCE });
  const rafRef      = useRef(null);
  const doneRef     = useRef(false);                     // true once settled
  const fabRef      = useRef(null);

  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  // ── one-time entrance bounce ──────────────────────────────────────────
  const animate = useCallback(() => {
    if (!fabRef.current || doneRef.current) return;

    const vw    = window.innerWidth;
    const destX = vw - BOT_SIZE - BOTTOM_MARGIN;   // final resting x (right corner)
    const floorY = 0;

    let { x, y } = posRef.current;
    let { x: vx, y: vy } = velRef.current;

    vy += GRAVITY;
    y  += vy;
    x  += vx;

    // floor bounce — squash transform applied briefly
    let scaleX = 1, scaleY = 1;
    if (y >= floorY) {
      y  = floorY;
      vy = JUMP_FORCE * 0.55;   // each bounce lower than the last (damping)
      scaleX = 1.3;
      scaleY = 0.7;
    }

    // reached (or passed) the right-corner destination → snap & stop
    if (x >= destX) {
      x = destX;
      doneRef.current = true;
      fabRef.current.style.left      = "unset";
      fabRef.current.style.right     = `${BOTTOM_MARGIN}px`;
      fabRef.current.style.bottom    = `${BOTTOM_MARGIN}px`;
      fabRef.current.style.transform = "none";
      fabRef.current.style.animation = "botGlow 3s ease-in-out infinite";
      return;   // stop the loop
    }

    posRef.current = { x, y };
    velRef.current = { x: vx, y: vy };

    const bottomPx = BOTTOM_MARGIN + (-y);
    fabRef.current.style.left      = `${x}px`;
    fabRef.current.style.right     = "unset";
    fabRef.current.style.bottom    = `${bottomPx}px`;
    fabRef.current.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  // kick off the entrance once on mount
  useEffect(() => {
    // small delay so the fly-in CSS animation finishes first
    const t = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, 600);
    return () => {
      clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getReply(text, onNavigate);
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", ...reply }]);
    }, 800);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="chatbot-root">
      {/* ── Floating bot avatar ── */}
      <button
        ref={fabRef}
        className={`chatbot-fab ${open ? "chatbot-fab-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open FreshBot chat"
      >
        <div className="chatbot-avatar">
          <div className="bot-face">
            <div className="bot-eye bot-eye-left" />
            <div className="bot-eye bot-eye-right" />
            <div className="bot-smile" />
          </div>
          <div className="bot-antenna bot-antenna-left" />
          <div className="bot-antenna bot-antenna-right" />
          <div className="bot-glow" />
        </div>
        {!open && (
          <div className="chatbot-bubble-hint">
            <span>How can I assist you today?</span>
            <div className="bubble-tail" />
          </div>
        )}
        {open && <span className="chatbot-close-x">✕</span>}
      </button>

      {/* ── Chat panel ── */}
      <div className={`chatbot-panel ${open ? "chatbot-panel-open" : ""}`} role="dialog" aria-label="FreshBot chat">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-avatar">
            <div className="bot-face bot-face-sm">
              <div className="bot-eye bot-eye-left" />
              <div className="bot-eye bot-eye-right" />
              <div className="bot-smile" />
            </div>
          </div>
          <div className="chatbot-header-copy">
            <strong>FreshBot</strong>
            <span>● Online · Career Guide</span>
          </div>
          <button className="chatbot-header-close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>
              {msg.from === "bot" && (
                <div className="chatbot-msg-avatar">
                  <div className="bot-face bot-face-xs">
                    <div className="bot-eye bot-eye-left" />
                    <div className="bot-eye bot-eye-right" />
                    <div className="bot-smile" />
                  </div>
                </div>
              )}
              <div className="chatbot-msg-body">
                <p>{msg.text}</p>
                {msg.action && (
                  <button
                    className="chatbot-action-btn"
                    onClick={() => {
                      onNavigate(msg.action.page, msg.action.section || "top");
                      setOpen(false);
                    }}
                  >
                    {msg.action.label}
                  </button>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="chatbot-msg chatbot-msg-bot">
              <div className="chatbot-msg-avatar">
                <div className="bot-face bot-face-xs">
                  <div className="bot-eye bot-eye-left" />
                  <div className="bot-eye bot-eye-right" />
                  <div className="bot-smile" />
                </div>
              </div>
              <div className="chatbot-msg-body chatbot-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick prompts */}
        <div className="chatbot-quick">
          {["Courses 📚", "Jobs 💼", "How it works ⚙️", "Contact 📞"].map((q) => (
            <button
              key={q}
              className="chatbot-quick-btn"
              onClick={() => {
                setTimeout(() => {
                  const reply = getReply(q, onNavigate);
                  setMessages((prev) => [
                    ...prev,
                    { from: "user", text: q },
                    { from: "bot", ...reply },
                  ]);
                }, 400);
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="chatbot-input-row">
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            aria-label="Type your message"
          />
          <button
            className="chatbot-send"
            onClick={send}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
