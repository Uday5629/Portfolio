import styles from './Contact.module.css';

function Contact({ personal }) {
  const contactMethods = [
    {
      type: 'email',
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      type: 'phone',
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/uday-profile',
      href: personal.linkedin,
      external: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/uday5629',
      href: personal.github,
      external: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className="eyebrow reveal">Let's connect</p>
        <h2 className={`${styles.sectionTitle} reveal`}>Get In Touch</h2>
        <p className={`${styles.intro} reveal`}>
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>

        <div className={styles.methods}>
          {contactMethods.map((method, i) => (
            <a
              key={method.type}
              href={method.href}
              className={`${styles.method} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
            >
              <span className={styles.icon}>{method.icon}</span>
              <span className={styles.methodInfo}>
                <span className={styles.methodLabel}>{method.label}</span>
                <span className={styles.methodValue}>{method.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className={styles.location}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{personal.location}</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
