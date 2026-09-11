const stories = [
  {
    name: "Karthik S.",
    company: "Amazon",
    quote: "Top Freshers helped me build the skills and confidence to crack my first job.",
    image: "/images/success-student-1.png",
  },
  {
    name: "Diya M.",
    company: "Google",
    quote: "The courses are practical and easy to follow. Their interview preparation really made a difference.",
    image: "/images/success-student-2.png",
  },
  {
    name: "Rahul V.",
    company: "Microsoft",
    quote: "I went from confused to confident. Top Freshers gave me a clear career path.",
    image: "/images/success-student-3.png",
  },
];

export default function SuccessStories() {
  return (
    <section className="stories-section" id="success">
      <div className="section-header">
        <div>
          <p className="small-kicker">SUCCESS STORIES</p>
          <h2>Real People. Real Progress.</h2>
        </div>
        <button className="text-button">View All Stories →</button>
      </div>

      <p className="stories-subtitle">
        Meet our students who turned their aspirations into amazing careers with Top Freshers.
      </p>

      <div className="stories-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.name}>
            <img src={story.image} alt={story.name} />
            <p className="quote">“{story.quote}”</p>
            <div className="story-person">
              <strong>{story.name}</strong>
              <span>{story.company}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
