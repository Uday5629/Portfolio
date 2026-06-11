import styles from './Footer.module.css';

function Footer({ name, personal = {} }) {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      label: 'GitHub',
      href: personal.github,
      icon: (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      ),
    },
    {
      label: 'LinkedIn',
      href: personal.linkedin,
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
    },
    {
      label: 'Email',
      href: personal.email ? `mailto:${personal.email}` : undefined,
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      ),
    },
  ].filter((s) => s.href);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="#about" className={styles.name}>
            {name}
          </a>
          {personal.title && (
            <span className={styles.role}>{personal.title}</span>
          )}
        </div>

        <div className={styles.socials}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.socialLink}
              target={social.label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {currentYear} {name}. All rights reserved.
        </p>
        <p className={styles.built}>Built with React &amp; Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
