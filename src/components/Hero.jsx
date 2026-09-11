const stats = [
  { value: "50K+", label: "Students" },
  { value: "200+", label: "Hiring Partners" },
  { value: "95%", label: "Success Rate" },
];

export default function Hero({ onNavigate }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          Hey <span>Fresher!</span>
        </p>
        <h1>
          YOUR
          <br />
          FIRST JOB
          <br />
          STARTS HERE.
        </h1>
        <p className="hero-text">
          Learn in-demand skills, build real projects, prepare for interviews and
          land your dream job — with Top Freshers.
        </p>

        <div className="hero-actions">
          <button className="primary-button" onClick={() => onNavigate("courses")}>
            Explore Courses →
          </button>
          <button className="secondary-button" onClick={() => onNavigate("courses")}>
            Find Your Career
          </button>
        </div>

        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual-wrap">
        <div className="hero-visual">
          <div className="floating-tag tag-one">
            <span>Learn</span>
            <span>Build</span>
            <span>Grow</span>
          </div>

          <div className="floating-card tag-two">
            <span>Same</span>
            <span>Students</span>
            <span>New</span>
            <span>Opportunities</span>
          </div>

          <div className="mini-pills">
            <button className="mini-pill">Learn</button>
            <button className="mini-pill">Build</button>
            <button className="mini-pill">Prepare</button>
            <button className="mini-pill">Get Hired</button>
          </div>

          <img src="/images/hero-student.png" alt="Student holding a laptop" />
        </div>
      </div>
    </section>
  );
}
