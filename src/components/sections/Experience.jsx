import styles from './Experience.module.css';

function ExperienceCard({ experience, index = 0 }) {
  return (
    <div
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h3 className={styles.title}>{experience.title}</h3>
          <span className={styles.company}>{experience.company}</span>
        </div>
        <div className={styles.meta}>
          <span className={styles.duration}>{experience.duration}</span>
          <span className={styles.location}>{experience.location}</span>
        </div>
      </div>
      <ul className={styles.highlights}>
        {experience.highlights.map((highlight, index) => (
          <li key={index} className={styles.highlight}>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience({ experiences }) {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <p className="eyebrow reveal">Where I've worked</p>
        <h2 className={`${styles.sectionTitle} reveal`}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
