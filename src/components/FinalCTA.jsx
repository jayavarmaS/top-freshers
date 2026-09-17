export default function FinalCTA({ onNavigate }) {
  return (
    <section className="cta-section" id="about">
      <div className="cta-copy">
        <h2>
          READY TO START
          <br />
          YOUR JOURNEY?
        </h2>
        <p>Don't just graduate. Get career-ready with Top Freshers.</p>
        <div className="cta-actions">
          <button className="primary-button" onClick={() => onNavigate("contact")}>Create Free Account →</button>
          <button className="secondary-button" onClick={() => onNavigate("allcourses")}>Explore Courses</button>
        </div>
      </div>

      <div className="cta-illustration">
        <img className="cta-student-image" src="/images/cta-student.png" alt="Student ready for the future" />
        <img className="cta-ladder-image" src="/ladder.png" alt="Learn, build, prepare, and get hired pathway" />
      </div>
    </section>
  );
}
