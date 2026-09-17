const quickLinks = [
  { label: "Courses",      page: "courses",    section: "top" },
  { label: "Jobs",         page: "home",       section: "jobs" },
  { label: "Career Paths", page: "home",       section: "features" },
  { label: "Resources",    page: "home",       section: "howitworks" },
];

const companyLinks = [
  { label: "About",            page: "home",    section: "about" },
  { label: "Success Stories",  page: "home",    section: "success" },
  { label: "Privacy Policy",   page: "contact", section: "top" },
  { label: "Terms of Service", page: "contact", section: "top" },
];

const socialLinks = [
  {
    label: "Facebook",
    glyph: "f",
    href: "https://www.facebook.com/tervtribe/",
  },
  {
    label: "YouTube",
    glyph: "▶",
    href: "https://www.youtube.com/@TervProTech",
  },
  {
    label: "Instagram",
    glyph: "◎",
    href: "https://www.instagram.com/terv.pro/?hl=en",
  },
  {
    label: "LinkedIn",
    glyph: "in",
    href: "https://www.linkedin.com/company/tervpro/posts/",
  },
];

export default function Footer({ onNavigate }) {
  const go = (page, section = "top") => {
    if (onNavigate) onNavigate(page, section);
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-wrap">
            <div className="brand-mark brand-logo">
              <img src="/ChatGPT Image Sep 11, 2026, 01_11_56 PM.png" alt="Top Freshers logo" />
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <button
                  className="footer-nav-link"
                  onClick={() => go(item.page, item.section)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((item) => (
              <li key={item.label}>
                <button
                  className="footer-nav-link"
                  onClick={() => go(item.page, item.section)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-row">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                className="social-icon"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Terv Pro on ${s.label}`}
              >
                {s.glyph}
              </a>
            ))}
          </div>
          <div className="subscribe-box">
            <input type="text" placeholder="Your email address" />
            <button aria-label="Subscribe">→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Top Freshers. All rights reserved.</p>
        <div className="footer-badge">Same Students, Brighter Future</div>
      </div>
    </footer>
  );
}
