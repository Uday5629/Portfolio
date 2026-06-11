import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import styles from './Layout.module.css';

function Layout({ children, name, personal }) {
  return (
    <div className={styles.layout}>
      <Header name={name} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer name={name} personal={personal} />
      <BackToTop />
    </div>
  );
}

export default Layout;
