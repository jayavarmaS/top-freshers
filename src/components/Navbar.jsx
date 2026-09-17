const navLinks = [
  { label: "Home", page: "home", section: "top" },
  { label: "Features", page: "home", section: "features" },
  { label: "Programs", page: "courses" },
  { label: "Success", page: "home", section: "success" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({ currentPage, onNavigate, onOpenChat }) {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <div className="brand-wrap">
          <button
            type="button"
            className="brand-mark brand-logo brand-button"
            onClick={() => onNavigate("home", "top")}
            aria-label="Go to home"
          >
            <img src="/ChatGPT Image Sep 11, 2026, 01_11_56 PM.png" alt="Top Freshers logo" />
          </button>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              className={`nav-link ${currentPage === link.page ? "nav-link-active" : ""}`}
              onClick={() => onNavigate(link.page, link.section)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button nav-chat-btn"
            aria-label="Open FreshBot chat"
            onClick={onOpenChat}
            title="Chat with FreshBot"
          >
            <span className="nav-bot-face">
              <span className="nav-bot-eye nav-bot-eye-l" />
              <span className="nav-bot-eye nav-bot-eye-r" />
              <span className="nav-bot-smile" />
            </span>
          </button>
          <a
            className="nav-login"
            href="https://www.terv.pro/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <button className="nav-cta" onClick={() => onNavigate("contact")}>Get Started</button>
        </div>
      </div>
    </header>
  );
}
