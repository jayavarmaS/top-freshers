const paths = [
  { name: "Software Development", icon: "</>", tone: "green" },
  { name: "AI & Machine Learning", icon: "🧠", tone: "yellow" },
  { name: "Data Analytics", icon: "◫", tone: "sky" },
  { name: "Cloud & DevOps", icon: "☁", tone: "pink" },
  { name: "UI/UX Design", icon: "✎", tone: "peach" },
  { name: "Testing & QA", icon: "▣", tone: "mint" },
  { name: "Mobile Development", icon: "◫", tone: "purple" },
  { name: "Cyber Security", icon: "🛡", tone: "lilac" },
];

export default function CareerPaths({ onNavigate }) {
  return (
    <section className="paths-section" id="features">
      <div className="section-header wide-header">
        <div>
          <h2>What's your next move?</h2>
          <p>Explore in-demand career paths and find what's right for you.</p>
        </div>
        <button className="text-button" onClick={() => onNavigate("allcourses")}>Explore All →</button>
      </div>

      <div className="path-grid">
        {paths.map((path) => (
          <article className={`path-card tone-${path.tone}`} key={path.name}>
            <span className="path-icon">{path.icon}</span>
            <span>{path.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
