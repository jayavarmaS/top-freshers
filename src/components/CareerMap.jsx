const paths = [
  { name: "Software Development", icon: "◫", tone: "pink" },
  { name: "AI / ML", icon: "◌", tone: "blue" },
  { name: "Data Analytics", icon: "◍", tone: "yellow" },
  { name: "Cloud & DevOps", icon: "☁", tone: "green" },
  { name: "UI/UX Design", icon: "✎", tone: "lavender" },
  { name: "Cyber Security", icon: "🛡", tone: "peach" },
];

export default function CareerMap({ onNavigate }) {
  return (
    <section className="career-map-section">
      <div className="career-map-copy">
        <h2>
          One Degree.
          <br />
          So Many
          <br />
          Possibilities.
        </h2>
        <p>
          Explore different career paths, skills, and opportunities to find what's right for you.
        </p>
        <button className="primary-button" onClick={() => onNavigate("allcourses")}>Explore Career Paths →</button>
      </div>

      <div className="career-map-visual">
        <div className="map-headline">
          <span>Your Degree</span>
        </div>

        <div className="map-flow">
          <div className="flow-line flow-line-left" />
          <div className="flow-line flow-line-center" />
          <div className="flow-line flow-line-right" />
          <div className="flow-line flow-line-down-left" />
          <div className="flow-line flow-line-down-center" />
          <div className="flow-line flow-line-down-right" />
        </div>

        <div className="map-layout">
          <div className="map-grid">
            {paths.map((path) => (
              <div className={`map-tile tone-${path.tone}`} key={path.name}>
                <span className="map-tile-icon">{path.icon}</span>
                <span>{path.name}</span>
              </div>
            ))}
          </div>

          <div className="map-side-copy">
            <span>Different</span>
            <span>Paths</span>
            <span>Same</span>
            <span>Brighter</span>
            <span>Future.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
