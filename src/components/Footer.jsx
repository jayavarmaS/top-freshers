const footerLinks = {
  "Quick Links": ["Courses", "Jobs", "Career Paths", "Resources"],
  Company: ["About", "Success Stories", "Privacy Policy", "Terms of Service"],
  "Follow Us": ["in", "X", "f", "◎"],
};

export default function Footer() {
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
            {footerLinks["Quick Links"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            {footerLinks.Company.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-row">
            {footerLinks["Follow Us"].map((item) => (
              item === "in" ? (
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/company/tervpro/posts/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Terv Pro on LinkedIn"
                  key={item}
                >
                  {item}
                </a>
              ) : (
                <span className="social-icon" key={item}>
                  {item}
                </span>
              )
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
