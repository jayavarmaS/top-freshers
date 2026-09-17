const featuredJobs = [
  {
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    role: "AI / ML Engineer",
    stack: ["Python", "TensorFlow", "GCP"],
    location: "Hyderabad",
    type: "Full Time",
    ctc: "₹18–28 LPA",
    tag: "Hot 🔥",
    tone: "blue",
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Software Development Engineer",
    stack: ["C#", ".NET", "Azure"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹15–25 LPA",
    tag: "Top Pick ⭐",
    tone: "sky",
  },
  {
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Cloud Solutions Architect",
    stack: ["AWS", "Terraform", "Python"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹12–22 LPA",
    tag: "Trending 📈",
    tone: "peach",
  },
  {
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    role: "Frontend Engineer",
    stack: ["React", "GraphQL", "TypeScript"],
    location: "Hyderabad",
    type: "Full Time",
    ctc: "₹20–32 LPA",
    tag: "Premium 💎",
    tone: "purple",
  },
];

const allJobs = [
  {
    company: "TCS",
    logo: "/images/tcs-logo.svg",
    role: "Systems Engineer",
    stack: ["Java", "Spring Boot", "SQL"],
    location: "Pan India",
    type: "Full Time",
    ctc: "₹3.5–7 LPA",
    tag: "Mass Hiring",
    tone: "mint",
  },
  {
    company: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    role: "Digital Specialist Engineer",
    stack: ["React", "Node.js", "MongoDB"],
    location: "Pune",
    type: "Full Time",
    ctc: "₹4–9 LPA",
    tag: "New",
    tone: "blue",
  },
  {
    company: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    role: "Project Engineer",
    stack: ["Python", "Django", "PostgreSQL"],
    location: "Chennai",
    type: "Full Time",
    ctc: "₹4–8 LPA",
    tag: "Walk-in",
    tone: "sky",
  },
  {
    company: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    role: "Associate Software Engineer",
    stack: ["Java", "Microservices", "Docker"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹4.5–9 LPA",
    tag: "High Demand",
    tone: "peach",
  },
  {
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    role: "Data Science Analyst",
    stack: ["Python", "Spark", "Watson AI"],
    location: "Kolkata",
    type: "Full Time",
    ctc: "₹6–12 LPA",
    tag: "AI Role 🤖",
    tone: "lilac",
  },
  {
    company: "Cognizant",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Cognizant_logo.png",
    role: "Programmer Analyst",
    stack: ["C#", "Azure", ".NET"],
    location: "Coimbatore",
    type: "Full Time",
    ctc: "₹4–7.5 LPA",
    tag: "Fresher Friendly",
    tone: "green",
  },
  {
    company: "Capgemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Capgemini_201x_logo.svg",
    role: "Software Engineer",
    stack: ["Angular", "Spring", "MySQL"],
    location: "Mumbai",
    type: "Full Time",
    ctc: "₹4–8 LPA",
    tag: "Hiring Now",
    tone: "yellow",
  },
  {
    company: "HCL Technologies",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/HCL_Technologies_logo.svg",
    role: "Graduate Engineer Trainee",
    stack: ["Java", "REST APIs", "Git"],
    location: "Noida",
    type: "Full Time",
    ctc: "₹3.8–7 LPA",
    tag: "Entry Level",
    tone: "teal",
  },
  {
    company: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    role: "Junior Salesforce Developer",
    stack: ["Apex", "LWC", "SOQL"],
    location: "Hyderabad",
    type: "Full Time",
    ctc: "₹7–14 LPA",
    tag: "Niche Skill 💡",
    tone: "sky",
  },
  {
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    role: "UI/UX Engineer",
    stack: ["Figma", "React", "CSS"],
    location: "Noida",
    type: "Full Time",
    ctc: "₹8–16 LPA",
    tag: "Creative",
    tone: "rose",
  },
  {
    company: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    role: "Java Application Developer",
    stack: ["Java", "Oracle DB", "PL/SQL"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹6–12 LPA",
    tag: "Stable",
    tone: "orange",
  },
  {
    company: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    role: "R&D Software Engineer",
    stack: ["C++", "Embedded C", "Linux"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹10–18 LPA",
    tag: "R&D 🔬",
    tone: "blue",
  },
  {
    company: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
    role: "Analyst – Technology",
    stack: ["Python", "Power BI", "Azure"],
    location: "Mumbai",
    type: "Full Time",
    ctc: "₹7–13 LPA",
    tag: "Consulting",
    tone: "mint",
  },
  {
    company: "Nvidia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    role: "AI Infrastructure Engineer",
    stack: ["CUDA", "Python", "Deep Learning"],
    location: "Pune",
    type: "Full Time",
    ctc: "₹22–40 LPA",
    tag: "AI Premium 🤖",
    tone: "green",
  },
  {
    company: "Zoho",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Zoho-logo.png",
    role: "Member Technical Staff",
    stack: ["Java", "React", "AWS"],
    location: "Chennai",
    type: "Full Time",
    ctc: "₹5–10 LPA",
    tag: "Product Company",
    tone: "yellow",
  },
  {
    company: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Flipkart_logo.svg",
    role: "Software Development Engineer I",
    stack: ["Kotlin", "Microservices", "Kafka"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹12–20 LPA",
    tag: "E-Commerce",
    tone: "peach",
  },
  {
    company: "Razorpay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
    role: "Backend Engineer",
    stack: ["Go", "Node.js", "MySQL"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹10–18 LPA",
    tag: "Fintech 💳",
    tone: "purple",
  },
  {
    company: "Swiggy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    role: "Data Analyst",
    stack: ["SQL", "Python", "Tableau"],
    location: "Bangalore",
    type: "Full Time",
    ctc: "₹6–12 LPA",
    tag: "Startup",
    tone: "orange",
  },
];

export default function AllJobsPage({ onNavigate }) {
  return (
    <main className="alljobs-shell">

      {/* ── Header ── */}
      <div className="alljobs-header">
        <button className="back-link" onClick={() => onNavigate("home", "jobs")}>
          ← Back to Home
        </button>
        <p className="page-kicker">Jobs • All Opportunities</p>
        <h1>Fresh Opportunities.<br />Real Careers.</h1>
        <p className="alljobs-sub">
          Explore 20+ live openings at top MNCs and product companies.
          AI roles, cloud, full stack, data — everything a fresher needs to launch their career.
        </p>
        <div className="alljobs-stats">
          <div><strong>200+</strong><span>Hiring Partners</span></div>
          <div><strong>20K+</strong><span>Jobs Posted</span></div>
          <div><strong>50K+</strong><span>Students Placed</span></div>
        </div>
      </div>

      {/* ── Featured / High CTC ── */}
      <section className="alljobs-section">
        <div className="alljobs-section-head">
          <span className="section-badge">🏆 Featured &amp; High CTC</span>
          <h2>Top paying roles</h2>
        </div>
        <div className="alljobs-featured-grid">
          {featuredJobs.map((job) => (
            <JobCard key={job.company + job.role} job={job} onNavigate={onNavigate} featured />
          ))}
        </div>
      </section>

      {/* ── All Jobs ── */}
      <section className="alljobs-section">
        <div className="alljobs-section-head">
          <span className="section-badge">💼 All Openings</span>
          <h2>Browse every opportunity</h2>
        </div>
        <div className="alljobs-list">
          {allJobs.map((job) => (
            <JobCard key={job.company + job.role} job={job} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="alljobs-cta">
        <div>
          <p className="alljobs-cta-title">Not finding the right role?</p>
          <p className="alljobs-cta-sub">Get career guidance from our mentors and find your perfect match.</p>
        </div>
        <button className="primary-button" onClick={() => onNavigate("contact")}>
          Talk to a Mentor →
        </button>
      </div>

    </main>
  );
}

function JobCard({ job, onNavigate, featured }) {
  return (
    <article className={`ajob-card ${featured ? "ajob-card-featured" : ""} tone-${job.tone}`}>
      {/* Tag */}
      <span className="ajob-tag">{job.tag}</span>

      {/* Logo */}
      <div className="ajob-logo-wrap">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="ajob-logo"
          onError={(e) => { e.target.style.display = "none"; }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="ajob-info">
        <h3 className="ajob-role">{job.role}</h3>
        <p className="ajob-company">{job.company}</p>

        {/* Tech stack pills */}
        <div className="ajob-stack">
          {job.stack.map((s) => (
            <span key={s} className="ajob-stack-pill">{s}</span>
          ))}
        </div>

        <div className="ajob-meta">
          <span>📍 {job.location}</span>
          <span>🕐 {job.type}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="ajob-footer">
        <span className="ajob-ctc">{job.ctc}</span>
        <button
          className="ajob-apply-btn"
          onClick={() => onNavigate("contact")}
          aria-label={`Apply for ${job.role} at ${job.company}`}
        >
          Apply →
        </button>
      </div>
    </article>
  );
}
