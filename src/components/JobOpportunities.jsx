const jobs = [
  {
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Software Developer",
    subtitle: "Fresher • Bangalore",
    salary: "₹4-8 LPA",
    tone: "amber",
  },
  {
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    role: "AI / ML Engineer",
    subtitle: "Fresher • Hyderabad",
    salary: "₹10-15 LPA",
    tone: "blue",
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Data Analyst",
    subtitle: "Fresher • Pune",
    salary: "₹4-8 LPA",
    tone: "sand",
  },
  {
    company: "TCS",
    logo: "/images/tcs-logo.svg",
    role: "Systems Engineer",
    subtitle: "Fresher • Pune",
    salary: "₹3.5-7 LPA",
    tone: "mint",
  },
];

export default function JobOpportunities() {
  return (
    <section className="jobs-section">
      <div className="section-header">
        <h2>Fresh Opportunities. Real Careers.</h2>
        <div className="section-actions">
          <p>Explore the latest fresher jobs from top companies and kickstart your career.</p>
          <button className="text-button">View All Jobs →</button>
        </div>
      </div>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <article className={`job-card tone-${job.tone}`} key={job.company}>
            <div className="job-company-block">
              <img className="job-logo" src={job.logo} alt={`${job.company} logo`} loading="lazy" />
            </div>
            <div className="job-role-block">
              <h3>{job.role}</h3>
              <p>{job.subtitle}</p>
            </div>
            <div className="job-bottom">
              <span>{job.salary}</span>
              <button className="job-arrow" aria-label={`View ${job.company} job`}>
                →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
