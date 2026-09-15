export default function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="cta-copy">
        <h2>
          READY TO START
          <br />
          YOUR JOURNEY?
        </h2>
        <p>Don’t just graduate. Get career-ready with Top Freshers.</p>
        <div className="cta-actions">
          <button className="primary-button">Create Free Account →</button>
          <button className="secondary-button">Explore Courses</button>
        </div>
      </div>

      <div className="cta-illustration">
        <img className="cta-student-image" src="/images/hero-student.png" alt="Student learning with a laptop" />
        <img className="cta-ladder-image" src="/ladder.png" alt="Learn, build, prepare, and get hired pathway" />
        <span className="cta-laptop-message" aria-hidden="true">
          Better<br />
          Skills<br />
          Brighter<br />
          Tomorrow
        </span>
      </div>
    </section>
  );
}
