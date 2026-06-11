import styles from './Skills.module.css';

function SkillCategory({ title, skills, index = 0 }) {
  return (
    <div
      className={`${styles.category} reveal`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills({ skills }) {
  const categories = [
    { key: 'languages', title: 'Languages' },
    { key: 'frameworks', title: 'Frameworks & Technologies' },
    { key: 'databases', title: 'Databases & Systems' },
    { key: 'tools', title: 'Developer Tools' },
    { key: 'soft', title: 'Professional Skills' }
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <p className="eyebrow reveal">What I work with</p>
        <h2 className={`${styles.sectionTitle} reveal`}>Skills</h2>
        <div className={styles.grid}>
          {categories
            .filter(cat => skills[cat.key]?.length > 0)
            .map((cat, i) => (
              <SkillCategory
                key={cat.key}
                title={cat.title}
                skills={skills[cat.key]}
                index={i}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
