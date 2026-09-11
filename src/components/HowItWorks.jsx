const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Find the right courses and career paths for you.",
    tone: "amber",
  },
  {
    number: "02",
    title: "Learn",
    text: "Build practical skills with hands-on learning.",
    tone: "pink",
  },
  {
    number: "03",
    title: "Prepare",
    text: "Improve your resume, projects, and interview confidence.",
    tone: "mint",
  },
  {
    number: "04",
    title: "Get Hired",
    text: "Connect with top companies and start your career.",
    tone: "sky",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="journey-visual">
        <div className="journey-image-shell">
          <img src="/images/learning-student.png" alt="Student smiling" />
          <div className="floating-quote">Your Next Chapter Starts Here :)</div>
        </div>
        <div className="journey-title-block">Big Dreams Start with Small Steps.</div>
      </div>

      <div className="journey-content">
        <div className="journey-kicker">HOW IT WORKS</div>
        <h2>From Learning to Earning.</h2>
        <p>A simple path to a brighter future.</p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className={`step-number-wrap tone-${step.tone}`}>
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
