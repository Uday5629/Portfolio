import styles from './Skills.module.css';

function SkillCategory({ title, skills }) {
  return (
    <div className={styles.category}>
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
    { key: 'frameworks', title: 'Frameworks & Libraries' },
    { key: 'tools', title: 'Developer Tools' },
    { key: 'concepts', title: 'Concepts' },
    { key: 'soft', title: 'Soft Skills' }
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.grid}>
          {categories
            .filter(cat => skills[cat.key]?.length > 0)
            .map(cat => (
              <SkillCategory
                key={cat.key}
                title={cat.title}
                skills={skills[cat.key]}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
