import styles from './Education.module.css';

function EducationCard({ education }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h3 className={styles.institution}>{education.institution}</h3>
          <p className={styles.degree}>{education.degree}</p>
          {education.specialization && (
            <p className={styles.specialization}>
              Specialization in {education.specialization}
            </p>
          )}
        </div>
        <div className={styles.meta}>
          <span className={styles.cgpa}>CGPA: {education.cgpa}</span>
          <span className={styles.duration}>{education.duration}</span>
        </div>
      </div>

      {education.courses?.length > 0 && (
        <div className={styles.courses}>
          <h4 className={styles.coursesTitle}>Relevant Courses</h4>
          <div className={styles.courseList}>
            {education.courses.map((course, index) => (
              <span key={index} className={styles.course}>
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Education({ education, certifications }) {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationList}>
          {education.map(edu => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>

        {certifications?.length > 0 && (
          <div className={styles.certifications}>
            <h3 className={styles.certTitle}>Certifications</h3>
            <div className={styles.certList}>
              {certifications.map(cert => (
                <div key={cert.id} className={styles.certCard}>
                  <span className={styles.certName}>{cert.title}</span>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Education;
