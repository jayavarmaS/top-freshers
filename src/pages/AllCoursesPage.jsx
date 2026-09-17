const allCourses = [
  {
    title: "Full Stack Web Development",
    icon: "💻",
    tone: "pink",
    rating: "4.8",
    reviews: "12K",
    duration: "6 Months",
    level: "Beginner – Advanced",
    tag: "Most Popular",
  },
  {
    title: "Python for Data Science",
    icon: "🐍",
    tone: "blue",
    rating: "4.7",
    reviews: "9K",
    duration: "4 Months",
    level: "Beginner – Intermediate",
    tag: "Trending",
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    tone: "mint",
    rating: "4.8",
    reviews: "8K",
    duration: "5 Months",
    level: "Intermediate – Advanced",
    tag: "Hot",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    tone: "peach",
    rating: "4.6",
    reviews: "8K",
    duration: "4 Months",
    level: "Intermediate",
    tag: "In Demand",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    tone: "yellow",
    rating: "4.7",
    reviews: "6K",
    duration: "3 Months",
    level: "Beginner – Intermediate",
    tag: "Creative",
  },
  {
    title: "Software Testing & QA",
    icon: "🧪",
    tone: "green",
    rating: "4.5",
    reviews: "5K",
    duration: "3 Months",
    level: "Beginner",
    tag: "Career Switch",
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    tone: "purple",
    rating: "4.6",
    reviews: "4K",
    duration: "4 Months",
    level: "Intermediate",
    tag: "New",
  },
  {
    title: "Cyber Security",
    icon: "🛡️",
    tone: "lilac",
    rating: "4.7",
    reviews: "3K",
    duration: "5 Months",
    level: "Intermediate – Advanced",
    tag: "High Demand",
  },
  {
    title: "Data Analytics",
    icon: "📊",
    tone: "sky",
    rating: "4.6",
    reviews: "7K",
    duration: "3 Months",
    level: "Beginner – Intermediate",
    tag: "Trending",
  },
  {
    title: "React & Frontend Engineering",
    icon: "⚛️",
    tone: "teal",
    rating: "4.8",
    reviews: "10K",
    duration: "4 Months",
    level: "Intermediate",
    tag: "Most Popular",
  },
  {
    title: "Java Backend Development",
    icon: "☕",
    tone: "orange",
    rating: "4.5",
    reviews: "6K",
    duration: "5 Months",
    level: "Beginner – Advanced",
    tag: "Classic",
  },
  {
    title: "Business Analytics",
    icon: "📈",
    tone: "rose",
    rating: "4.4",
    reviews: "3K",
    duration: "2 Months",
    level: "Beginner",
    tag: "New",
  },
];

const recentCourses = [
  {
    title: "Generative AI for Developers",
    icon: "🤖",
    tone: "mint",
    rating: "4.9",
    reviews: "1.2K",
    duration: "2 Months",
    level: "Intermediate",
    tag: "Just Launched",
  },
  {
    title: "DevSecOps Fundamentals",
    icon: "🔐",
    tone: "lilac",
    rating: "4.7",
    reviews: "800",
    duration: "3 Months",
    level: "Intermediate",
    tag: "New",
  },
  {
    title: "Prompt Engineering",
    icon: "✨",
    tone: "yellow",
    rating: "4.8",
    reviews: "2K",
    duration: "6 Weeks",
    level: "Beginner",
    tag: "Just Launched",
  },
];

export default function AllCoursesPage({ onNavigate }) {
  return (
    <main className="all-courses-shell">

      {/* ── Page Header ── */}
      <div className="all-courses-header">
        <button className="back-link" onClick={() => onNavigate("home")}>
          ← Back to Home
        </button>
        <p className="page-kicker">Programs • All Courses</p>
        <h1>Explore All Courses</h1>
        <p className="all-courses-sub">
          Hands-on, career-focused programs built for freshers and early-career professionals.
          Pick a path and start growing today.
        </p>
      </div>

      {/* ── Recently Added ── */}
      <section className="all-courses-section">
        <div className="all-courses-section-head">
          <div className="section-badge">🆕 Recently Added</div>
          <h2>Fresh off the press</h2>
        </div>
        <div className="all-courses-grid all-courses-grid-3">
          {recentCourses.map((course) => (
            <CourseCard course={course} key={course.title} />
          ))}
        </div>
      </section>

      {/* ── All Courses ── */}
      <section className="all-courses-section">
        <div className="all-courses-section-head">
          <div className="section-badge">📚 All Programs</div>
          <h2>Every course we offer</h2>
        </div>
        <div className="all-courses-grid all-courses-grid-4">
          {allCourses.map((course) => (
            <CourseCard course={course} key={course.title} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="all-courses-cta">
        <p>Not sure which course to pick?</p>
        <button
          className="primary-button"
          onClick={() => onNavigate("contact")}
        >
          Talk to a Mentor →
        </button>
      </div>
    </main>
  );
}

function CourseCard({ course }) {
  return (
    <article className={`all-course-card tone-${course.tone}`}>
      {/* Tag */}
      <div className="all-course-tag">{course.tag}</div>

      {/* Icon / Logo */}
      <div className="all-course-icon-wrap">
        <span className="all-course-icon">{course.icon}</span>
      </div>

      {/* Content */}
      <h3 className="all-course-title">{course.title}</h3>

      <div className="all-course-meta">
        <span className="all-course-rating">⭐ {course.rating} ({course.reviews})</span>
        <span className="all-course-level">{course.level}</span>
      </div>

      <div className="all-course-footer">
        <span className="all-course-duration">🕐 {course.duration}</span>
        <button className="course-arrow" aria-label={`View ${course.title}`}>→</button>
      </div>
    </article>
  );
}
