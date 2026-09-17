const allStories = [
  {
    name: "Karthik S.",
    role: "Software Developer",
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    quote: "Top Freshers helped me build the skills and confidence to crack my first job. The mentors were incredible.",
    image: "/images/success-student-1.png",
    course: "Full Stack Web Development",
    ctc: "₹8 LPA",
    tone: "pink",
  },
  {
    name: "Diya M.",
    role: "Data Analyst",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    quote: "The courses are practical and easy to follow. Interview preparation really made a difference for me.",
    image: "/images/success-student-2.png",
    course: "Python for Data Science",
    ctc: "₹12 LPA",
    tone: "blue",
  },
  {
    name: "Rahul V.",
    role: "Cloud Engineer",
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    quote: "I went from confused to confident. Top Freshers gave me a clear career path and I landed my dream job.",
    image: "/images/success-student-3.png",
    course: "Cloud & DevOps",
    ctc: "₹10 LPA",
    tone: "mint",
  },
  {
    name: "Priya K.",
    role: "ML Engineer",
    company: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png",
    quote: "The AI & ML course was a game changer. I got placed in 3 months of completing the program.",
    image: "/images/success-student-1.png",
    course: "AI & Machine Learning",
    ctc: "₹9 LPA",
    tone: "yellow",
  },
  {
    name: "Arjun T.",
    role: "Frontend Engineer",
    company: "TCS",
    logo: "/images/tcs-logo.svg",
    quote: "From zero coding knowledge to a full-time developer role. Top Freshers made this transformation possible.",
    image: "/images/success-student-2.png",
    course: "Full Stack Web Development",
    ctc: "₹7 LPA",
    tone: "sky",
  },
  {
    name: "Sneha R.",
    role: "UI/UX Designer",
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/320px-Adobe_Corporate_Logo.png",
    quote: "The UI/UX course was hands-on and industry-relevant. I built a portfolio that got me hired at Adobe.",
    image: "/images/success-student-3.png",
    course: "UI/UX Design",
    ctc: "₹11 LPA",
    tone: "peach",
  },
  {
    name: "Vikram N.",
    role: "Data Engineer",
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    quote: "Top Freshers' mentors guided me through every step — from resume to final interview. Truly grateful.",
    image: "/images/success-student-1.png",
    course: "Python for Data Science",
    ctc: "₹9.5 LPA",
    tone: "purple",
  },
  {
    name: "Ananya B.",
    role: "Cyber Security Analyst",
    company: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    quote: "I never thought cybersecurity was accessible. Top Freshers broke it down brilliantly and I got placed.",
    image: "/images/success-student-2.png",
    course: "Cyber Security",
    ctc: "₹8 LPA",
    tone: "green",
  },
  {
    name: "Rohan G.",
    role: "Backend Developer",
    company: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Flipkart_logo.svg/320px-Flipkart_logo.svg.png",
    quote: "The project-based learning approach prepared me for real-world challenges. Got an offer in just 4 months.",
    image: "/images/success-student-3.png",
    course: "Full Stack Web Development",
    ctc: "₹13 LPA",
    tone: "lilac",
  },
  {
    name: "Meera P.",
    role: "Business Analyst",
    company: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    quote: "Career guidance at Top Freshers is unlike anything else. They helped me switch from arts to tech seamlessly.",
    image: "/images/success-student-1.png",
    course: "Business Analytics",
    ctc: "₹7.5 LPA",
    tone: "rose",
  },
  {
    name: "Suresh L.",
    role: "DevOps Engineer",
    company: "HCL Technologies",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/HCL_Technologies_logo.svg/320px-HCL_Technologies_logo.svg.png",
    quote: "Top Freshers gave me both the technical depth and soft skills to ace every interview round.",
    image: "/images/success-student-2.png",
    course: "Cloud & DevOps",
    ctc: "₹8.5 LPA",
    tone: "teal",
  },
  {
    name: "Divya C.",
    role: "React Developer",
    company: "Zoho",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Zoho-logo.png/320px-Zoho-logo.png",
    quote: "I built 5 real projects during the course. That portfolio was the key to landing my job at Zoho.",
    image: "/images/success-student-3.png",
    course: "Full Stack Web Development",
    ctc: "₹9 LPA",
    tone: "orange",
  },
  {
    name: "Aditya M.",
    role: "AI Research Intern",
    company: "Nvidia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/320px-Nvidia_logo.svg.png",
    quote: "The AI & ML curriculum was cutting-edge. I joined Nvidia as a research intern straight out of college.",
    image: "/images/success-student-1.png",
    course: "AI & Machine Learning",
    ctc: "₹18 LPA",
    tone: "green",
  },
  {
    name: "Kavya R.",
    role: "QA Engineer",
    company: "Cognizant",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cognizant_logo_2022.svg/320px-Cognizant_logo_2022.svg.png",
    quote: "Testing & QA course gave me the foundation I needed. I'm now leading automation testing at Cognizant.",
    image: "/images/success-student-2.png",
    course: "Software Testing & QA",
    ctc: "₹7 LPA",
    tone: "sky",
  },
  {
    name: "Nikhil S.",
    role: "Mobile Developer",
    company: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png",
    quote: "Mobile App Development at Top Freshers was incredibly comprehensive. Landed Samsung R&D on my first attempt.",
    image: "/images/success-student-3.png",
    course: "Mobile App Development",
    ctc: "₹14 LPA",
    tone: "blue",
  },
  {
    name: "Ishaan D.",
    role: "Salesforce Developer",
    company: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/320px-Deloitte.svg.png",
    quote: "I had zero knowledge of Salesforce. After 3 months with Top Freshers, I joined Deloitte as a consultant.",
    image: "/images/success-student-1.png",
    course: "Full Stack Web Development",
    ctc: "₹10 LPA",
    tone: "mint",
  },
  {
    name: "Pooja V.",
    role: "Data Scientist",
    company: "Razorpay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/320px-Razorpay_logo.svg.png",
    quote: "The Data Science curriculum was rigorous and industry-aligned. I got placed at Razorpay with ₹14 LPA.",
    image: "/images/success-student-2.png",
    course: "AI & Machine Learning",
    ctc: "₹14 LPA",
    tone: "purple",
  },
  {
    name: "Ravi K.",
    role: "Java Developer",
    company: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png",
    quote: "Top Freshers connected me with the right mentors and the right opportunities. Oracle was a dream come true.",
    image: "/images/success-student-3.png",
    course: "Java Backend Development",
    ctc: "₹11 LPA",
    tone: "peach",
  },
  {
    name: "Tanya S.",
    role: "Product Analyst",
    company: "Swiggy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Swiggy_logo.png/320px-Swiggy_logo.png",
    quote: "From a non-tech background to a product role at Swiggy — Top Freshers made this transition effortless.",
    image: "/images/success-student-1.png",
    course: "Business Analytics",
    ctc: "₹9 LPA",
    tone: "orange",
  },
  {
    name: "Harsh M.",
    role: "Cloud Architect",
    company: "Capgemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Capgemini_201x_logo.svg/320px-Capgemini_201x_logo.svg.png",
    quote: "The Cloud & DevOps track was well-structured and highly practical. I'm now a certified AWS architect.",
    image: "/images/success-student-2.png",
    course: "Cloud & DevOps",
    ctc: "₹12 LPA",
    tone: "yellow",
  },
];

// split into two rows for opposing marquee directions
const row1 = allStories.slice(0, 10);
const row2 = allStories.slice(10, 20);

export default function SuccessStoriesPage({ onNavigate }) {
  return (
    <main className="ss-shell">

      {/* ── Header ── */}
      <div className="ss-header">
        <button className="back-link" onClick={() => onNavigate("home", "success")}>
          ← Back to Home
        </button>
        <p className="page-kicker">Success Stories • Alumni</p>
        <h1>Real People.<br />Real Progress.</h1>
        <p className="ss-sub">
          50,000+ freshers have transformed their careers with Top Freshers.
          Here are their stories — straight from the people who lived them.
        </p>

        {/* Stats */}
        <div className="ss-stats">
          <div><strong>50K+</strong><span>Students Placed</span></div>
          <div><strong>200+</strong><span>Hiring Companies</span></div>
          <div><strong>4.9★</strong><span>Average Rating</span></div>
          <div><strong>₹12 LPA</strong><span>Avg. CTC</span></div>
        </div>
      </div>

      {/* ── Marquee Row 1 — left scroll ── */}
      <div className="ss-marquee-wrap">
        <div className="ss-marquee ss-marquee-left">
          <div className="ss-track">
            {[...row1, ...row1].map((s, i) => (
              <StoryCard key={`r1-${i}`} story={s} />
            ))}
          </div>
        </div>

        {/* ── Marquee Row 2 — right scroll ── */}
        <div className="ss-marquee ss-marquee-right">
          <div className="ss-track">
            {[...row2, ...row2].map((s, i) => (
              <StoryCard key={`r2-${i}`} story={s} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Full grid of all stories ── */}
      <section className="ss-grid-section">
        <div className="alljobs-section-head">
          <span className="section-badge">🎓 All Alumni Stories</span>
          <h2>Every success deserves to be celebrated</h2>
        </div>
        <div className="ss-grid">
          {allStories.map((s, i) => (
            <StoryCardFull key={i} story={s} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="alljobs-cta">
        <div>
          <p className="alljobs-cta-title">Ready to write your own success story?</p>
          <p className="alljobs-cta-sub">Join 50,000+ freshers who started their journey with Top Freshers.</p>
        </div>
        <button className="primary-button" onClick={() => onNavigate("courses")}>
          Start Learning →
        </button>
      </div>

    </main>
  );
}

/* ── Marquee card (compact) ── */
function StoryCard({ story }) {
  return (
    <div className={`ss-card tone-${story.tone}`}>
      <div className="ss-card-top">
        <div className="ss-avatar-wrap">
          <img src={story.image} alt={story.name} className="ss-avatar" />
        </div>
        <div className="ss-card-logo-wrap">
          <img
            src={story.logo}
            alt={story.company}
            className="ss-card-logo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
      <p className="ss-card-quote">"{story.quote}"</p>
      <div className="ss-card-footer">
        <strong>{story.name}</strong>
        <span>{story.role} · {story.company}</span>
        <span className="ss-card-ctc">{story.ctc}</span>
      </div>
    </div>
  );
}

/* ── Full grid card ── */
function StoryCardFull({ story }) {
  return (
    <article className={`ss-full-card tone-${story.tone}`}>
      <div className="ss-full-top">
        <div className="ss-full-avatar">
          <img src={story.image} alt={story.name} />
        </div>
        <div className="ss-full-company">
          <img
            src={story.logo}
            alt={story.company}
            className="ss-full-logo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
      <p className="ss-full-quote">"{story.quote}"</p>
      <div className="ss-full-meta">
        <strong>{story.name}</strong>
        <span>{story.role}</span>
        <span className="ss-full-company-name">{story.company}</span>
      </div>
      <div className="ss-full-tags">
        <span className="ajob-stack-pill">{story.course}</span>
        <span className="ajob-stack-pill ss-ctc-pill">{story.ctc}</span>
      </div>
    </article>
  );
}
