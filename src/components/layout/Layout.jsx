import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout({ children, name }) {
  return (
    <div className={styles.layout}>
      <Header name={name} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer name={name} />
    </div>
  );
}

export default Layout;
