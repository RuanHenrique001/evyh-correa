import { motion } from 'framer-motion';
import styles from './AboutPage.module.css';
import heroImage from '../assets/images/hero/imagen 1200 800 Capa.png';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section 
        className={styles.heroSection}
        style={{backgroundImage: `url(${heroImage})`}}
      >
        <div className={styles.overlay} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Sobre Evyh Correa</h1>
          <p className={styles.heroSubtitle}>Especialista em Lash Design</p>
        </motion.div>
      </section>

      {/* História e Missão */}
      <section className={styles.mainContent}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.contentGrid}
        >
          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>Nossa História</h2>
            <p className={styles.sectionText}>
              Com mais de X anos de experiência no mercado da beleza, a Evyh Correa se especializou em realçar 
              a beleza natural de cada cliente através de técnicas avançadas de alongamento de cílios e design de sobrancelhas.
            </p>
            <p className={styles.sectionText}>
              Nossa jornada começou com um sonho de transformar olhares e evoluiu para um espaço dedicado à 
              excelência e ao atendimento personalizado.
            </p>
          </div>
          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>Nossa Missão</h2>
            <p className={styles.sectionText}>
              Proporcionar a cada cliente uma experiência única de transformação, realçando sua beleza natural 
              com técnicas inovadoras e atendimento personalizado.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Excelência em atendimento</li>
              <li className={styles.listItem}>Produtos de alta qualidade</li>
              <li className={styles.listItem}>Técnicas atualizadas</li>
              <li className={styles.listItem}>Ambiente acolhedor</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Diferenciais */}
      <section className={styles.differentialsSection}>
        <div className={styles.differentialsContainer}>
          <h2 className={styles.differentialsTitle}>Nossos Diferenciais</h2>
          <div className={styles.differentialsGrid}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={styles.differentialCard}
            >
              <h3 className={styles.differentialTitle}>Profissionalismo</h3>
              <p className={styles.differentialText}>
                Equipe altamente qualificada e em constante atualização.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={styles.differentialCard}
            >
              <h3 className={styles.differentialTitle}>Personalização</h3>
              <p className={styles.differentialText}>
                Cada atendimento é único, pensado especialmente para você.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className={styles.differentialCard}
            >
              <h3 className={styles.differentialTitle}>Qualidade</h3>
              <p className={styles.differentialText}>
                Utilizamos apenas produtos de primeira linha e técnicas avançadas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
