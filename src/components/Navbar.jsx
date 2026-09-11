const navLinks = [
  { label: "Home", page: "home", section: "top" },
  { label: "Features", page: "home", section: "features" },
  { label: "Programs", page: "courses" },
  { label: "Success", page: "home", section: "success" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({ currentPage, onNavigate }) {
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
          <button className="icon-button" aria-label="Search">
            ⌕
          </button>
          <button className="nav-login">Login</button>
          <button className="nav-cta">Get Started</button>
        </div>
      </div>
    </header>
  );
}
