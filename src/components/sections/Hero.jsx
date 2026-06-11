import { useCountUp } from '../../hooks/useCountUp';
import styles from './Hero.module.css';

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function StatItem({ to, suffix = '', decimals = 0, label }) {
  const [ref, value] = useCountUp(to, { decimals });
  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value);

  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.statValue}>
        {display}
        <span className={styles.statSuffix}>{suffix}</span>
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function Hero({ personal, stats = [] }) {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={`${styles.content} reveal`}>
          {personal.available && (
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              Open to opportunities
            </span>
          )}

          <h1 className={styles.name}>
            Hi, I'm <span className={styles.highlight}>{personal.name}</span>
          </h1>
          <h2 className={styles.title}>{personal.title}</h2>
          <p className={styles.tagline}>{personal.tagline || personal.summary}</p>

          <p className={styles.summary}>{personal.summary}</p>

          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in touch
            </a>
            <a href="#experience" className="btn btn-ghost">
              View my work
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>

          <div className={styles.location}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {personal.location}
          </div>
        </div>

        <div className={`${styles.avatarWrap} reveal`}>
          <div className={styles.avatarRing}>
            <div className={styles.avatar}>
            <span className={styles.avatarText}>{getInitials(personal.name)}</span>
          </div>
          </div>
        </div>
      </div>

      {stats.length > 0 && (
        <div className={`${styles.statsBar} reveal`}>
          {stats.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Hero;
