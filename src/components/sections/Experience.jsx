import styles from './Experience.module.css';

function ExperienceCard({ experience }) {
  return (
    <div className={styles.card}>
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
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
