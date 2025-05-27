import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useState } from 'react';

const InstagramIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21L4.7 16.3C3.78001 14.72 3.32153 12.9084 3.3698 11.0772C3.41807 9.24596 3.97203 7.46377 4.96921 5.93708C5.96639 4.41039 7.36879 3.19779 9.02898 2.44368C10.6892 1.68957 12.5361 1.42401 14.3674 1.67535C16.1987 1.92668 17.9382 2.68533 19.3986 3.86819C20.859 5.05106 21.9847 6.61294 22.6525 8.39972C23.3203 10.1865 23.5047 12.1278 23.1874 14.0089C22.8702 15.89 22.063 17.6466 20.8532 19.1056C19.6433 20.5645 18.072 21.6756 16.2922 22.3261C14.5125 22.9766 12.5886 23.1407 10.7239 22.8008C8.85929 22.4609 7.11361 21.6291 5.65 20.39L3 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 14.5C16.5 14.5 15.5 16 12 16C8.5 16 7.5 14.5 7.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implementar integração com serviço de newsletter
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>Evyh Correa</h3>
          <p className={styles.description}>Realce sua beleza com cílios e sobrancelhas impecáveis.</p>
          <div className={styles.contactInfo}>            <p>
              <strong>Horário de Funcionamento:</strong><br />
              Das 8 às 18h de segunda-feira a sábado
            </p>
            <p>
              <strong>Endereço:</strong><br />
              Av Coronel marciano, n° 252 - Lorena/SP
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Explore</h4>
          <ul className={styles.linkList}>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/servicos" className={styles.link}>Serviços</Link></li>
            <li><Link to="/galeria" className={styles.link}>Galeria</Link></li>
            <li><Link to="/contato" className={styles.link}>Contato</Link></li>
          </ul>

          <div className={styles.newsletter}>
            <h4 className={styles.title}>Newsletter</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                Assinar
              </button>
            </form>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.title}>Conecte-se</h4>
          <ul className={styles.socialList}>
            <li>
              <a 
                href="https://www.instagram.com/ciliosdaevylorena" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <InstagramIcon />
                <span>@ciliosdaevylorena</span>
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/5512988987249" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className={styles.socialLink}
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Evyh Correa. Todos os direitos reservados.</p>
        <p>Desenvolvido com ♥ por <a href="https://www.linkedin.com/in/ruan-cardozo/" target="_blank" rel="noopener noreferrer" className={styles.credit}>Ruan Cardozo</a></p>
      </div>
    </footer>  );
}
