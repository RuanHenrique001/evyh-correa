import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Evyh Correa</div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/sobre" className={styles.link}>Sobre</Link>
        <Link to="/servicos" className={styles.link}>Serviços</Link>
        <Link to="/galeria" className={styles.link}>Galeria</Link>
        <Link to="/blog" className={styles.link}>Blog</Link>
        <Link to="/loja" className={styles.link}>Loja</Link>
        <Link to="/contato" className={styles.link}>Contato</Link>
      </nav>      <a 
        href="https://apnt.app/l/jagPM6"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.scheduleButton}
      >
        Agende Agora
      </a>
    </header>
  );
}
