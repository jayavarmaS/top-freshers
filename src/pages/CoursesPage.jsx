const courseCategories = [
  { title: "Full Stack Web Development", meta: "4.8 (12K)", tone: "pink" },
  { title: "Python for Data Science", meta: "4.7 (9K)", tone: "blue" },
  { title: "AI & Machine Learning", meta: "4.8 (8K)", tone: "mint" },
  { title: "Cloud & DevOps", meta: "4.6 (8K)", tone: "peach" },
];

const featuredArticles = [
  { title: "How to Create a Standout Fresher Resume", time: "5 Minutes", tone: "yellow" },
  { title: "Top 10 Interview Questions for Freshers", time: "7 Minutes", tone: "sky" },
  { title: "How to Choose the Right Career Path", time: "5 Minutes", tone: "green" },
];

export default function CoursesPage({ onNavigate }) {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="page-hero-copy">
          <p className="page-kicker">Home • Courses</p>
          <h1>Skills for a Brighter Tomorrow.</h1>
          <p>
            Learn in-demand skills with hands-on projects, practical mentorship, and career-focused learning paths.
          </p>
          <div className="page-hero-actions">
            <button className="primary-button" onClick={() => onNavigate("home")}>
              Explore Courses →
            </button>
            <button className="secondary-button" onClick={() => onNavigate("home")}>
              Find Your Career
            </button>
          </div>
          <div className="page-stats">
            <div>
              <strong>50K+</strong>
              <span>Students</span>
            </div>
            <div>
              <strong>10K+</strong>
              <span>Career mentors</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>Hiring partners</span>
            </div>
          </div>
        </div>

        <div className="page-hero-visual">
          <div className="page-hero-blob" />
          <div className="page-hero-badge">Learn Build Grow</div>
          <div className="page-hero-card page-hero-card-top">Better Skills Better Tomorrow</div>
          <div className="page-hero-image-wrap">
            <img src="/images/hero-student.png" alt="Student studying" />
          </div>
          <div className="page-hero-card page-hero-card-side">Same Students New Opportunities</div>
          <div className="page-hero-pills">
            <button>Learn</button>
            <button>Build</button>
            <button>Practice</button>
            <button>Grow</button>
          </div>
        </div>
      </section>

      <section className="page-section page-courses">
        <div className="section-head">
          <h2>What&apos;s your next move?</h2>
          <button className="text-button" onClick={() => onNavigate("home")}>Explore All →</button>
        </div>

        <div className="course-grid">
          {courseCategories.map((course) => (
            <article className={`course-card tone-${course.tone}`} key={course.title}>
              <div className="course-icon">✦</div>
              <h3>{course.title}</h3>
              <div className="course-meta-row">
                <span>{course.meta}</span>
                <button className="course-arrow" aria-label={`View ${course.title}`}>
                  →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-resources">
        <div className="section-head narrow-head">
          <h2>Learn. Prepare. Stay Ahead.</h2>
          <button className="text-button" onClick={() => onNavigate("home")}>View All →</button>
        </div>

        <div className="resource-grid">
          {featuredArticles.map((article) => (
            <article className={`resource-card tone-${article.tone}`} key={article.title}>
              <div className="resource-visual">◌</div>
              <h3>{article.title}</h3>
              <div className="resource-meta">
                <span>{article.time}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
