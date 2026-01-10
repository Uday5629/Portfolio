import styles from './Footer.module.css';

function Footer({ name }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} {name}. All rights reserved.
        </p>
        <p className={styles.built}>
          Built with React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
