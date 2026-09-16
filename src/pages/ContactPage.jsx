export default function ContactPage({ onNavigate }) {
  return (
    <main className="contact-page-shell">
      <section className="contact-hero">
        <p className="contact-kicker">Get Started</p>
        <h1>
          Ready to <span>Transform</span> Your Career?
        </h1>
        <p>
          Join thousands of successful students who started their journey with us.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-left">
          <h2>Get In Touch</h2>

          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon contact-icon-blue">✉</div>
              <div className="contact-copy">
                <span>Email</span>
                <a href="mailto:hr@terv.pro">hr@terv.pro</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon contact-icon-blue">☎</div>
              <div className="contact-copy">
                <span>Phone</span>
                <a href="tel:+918428881177">+91 8428881177</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon contact-icon-blue">⌖</div>
              <div className="contact-copy">
                <span>Location</span>
                <p>
                  Terv Corporate Office
                  <br />
                  #149, Opp to DLF IT Park,
                  <br />
                  Mt Poonamalle Rd, Chennai,
                  <br />
                  Tamilnadu - 600089
                </p>
              </div>
            </div>
          </div>

          <div className="follow-block">
            <h3>Follow Us</h3>
            <div className="social-row contact-social-row">
              <button className="social-icon" aria-label="Facebook">f</button>
              <button className="social-icon" aria-label="Twitter">𝕏</button>
              <button className="social-icon" aria-label="Instagram">◌</button>
              <a
                className="social-icon"
                href="https://www.linkedin.com/company/tervpro/posts/"
                target="_blank"
                rel="noreferrer"
                aria-label="Terv Pro on LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <label>
            <span>Full Name</span>
            <input type="text" placeholder="Enter your name" />
          </label>

          <label>
            <span>Email Address</span>
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            <span>Phone Number</span>
            <input type="tel" placeholder="Enter your phone" />
          </label>

          <label>
            <span>Interested Program</span>
            <select defaultValue="">
              <option value="" disabled>
                Select a program
              </option>
              <option>Full Stack Development</option>
              <option>Data Science</option>
              <option>Cloud & DevOps</option>
              <option>AI & ML</option>
            </select>
          </label>

          <button className="primary-button contact-submit" onClick={() => onNavigate("home")}>
            Get Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
