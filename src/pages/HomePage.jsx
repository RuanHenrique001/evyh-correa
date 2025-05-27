import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import styles from './HomePage.module.css';
import heroImage from '../assets/images/hero/imagen 1200 800 Capa.png';
import ciliosMega from '../assets/images/services/cilios (1).png';
import ciliosFox from '../assets/images/services/cilios (2).png';
import ciliosEgipicio from '../assets/images/services/cilios (3).png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section 
        className={styles.heroSection}
        style={{backgroundImage: `url(${heroImage})`}}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Transforme seu olhar com Evyh Correa</h1>
          <p className={styles.heroText}>Cílios e sobrancelhas que elevam sua beleza</p>          <a 
            href="https://apnt.app/l/jagPM6"
            target="_blank"
            rel="noopener noreferrer" 
            className={styles.heroButton}
          >
            Agende sua Sessão
          </a>
        </motion.div>
      </section>      {/* Serviços em Destaque */}
      <section className={`${styles.section} ${styles.white}`}>
        <h2 className={styles.sectionTitle}>Serviços em Destaque</h2>
        <div className={styles.servicesGrid}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={styles.serviceCard}
          >
            <img src={ciliosMega} alt="Megabrasileiro" className={styles.serviceImage} />
            <h3 className={styles.serviceTitle}>Volume Megabrasileiro</h3>
            <p className={styles.serviceDescription}>Volume intenso e glamouroso para um olhar deslumbrante</p>
            <a href="#saiba-mais" className={styles.serviceLink}>Saiba Mais</a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={styles.serviceCard}
          >
            <img src={ciliosFox} alt="Fox" className={styles.serviceImage} />
            <h3 className={styles.serviceTitle}>Volume Fox</h3>
            <p className={styles.serviceDescription}>Efeito raposa para um olhar marcante e sedutor</p>
            <a href="#saiba-mais" className={styles.serviceLink}>Saiba Mais</a>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={styles.serviceCard}
          >
            <img src={ciliosEgipicio} alt="Egípicio" className={styles.serviceImage} />
            <h3 className={styles.serviceTitle}>Volume Egípicio</h3>
            <p className={styles.serviceDescription}>Alongamento com efeito esfumado e misterioso</p>
            <a href="#saiba-mais" className={styles.serviceLink}>Saiba Mais</a>
          </motion.div>
        </div>
      </section>      {/* Depoimentos */}
      <section className={`${styles.section} ${styles.secondary}`}>
        <h2 className={styles.sectionTitle}>O que nossas clientes dizem</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>"Simplesmente maravilhosa! Nunca me senti tão confiante com meus cílios."</p>
              <div className={styles.testimonialAuthor}>Juliana M.</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>"Atendimento impecável e resultado acima das expectativas!"</p>
              <div className={styles.testimonialAuthor}>Carla S.</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>"Me apaixonei pelo volume Fox. A Evyh é uma verdadeira artista!"</p>
              <div className={styles.testimonialAuthor}>Renata A.</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>{/* Feed do Instagram */}
      <section className={`${styles.section} ${styles.white}`}>
        <h2 className={styles.sectionTitle}>Siga-nos no Instagram</h2>
        <p className={styles.instagramText}>@ciliosdaevylorena</p>
        <div className={styles.instagramGrid}>
          <motion.a 
            href="https://www.instagram.com/ciliosdaevylorena"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={styles.instagramItem}
          >
            <img 
              src={ciliosMega} 
              alt="Volume Megabrasileiro" 
              className={styles.instagramImage}
            />
            <div className={styles.instagramOverlay}>
              <span className={styles.instagramIcon}>♥</span>
              <span className={styles.instagramText}>Ver no Instagram</span>
            </div>
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/ciliosdaevylorena"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={styles.instagramItem}
          >
            <img 
              src={ciliosFox} 
              alt="Volume Fox" 
              className={styles.instagramImage}
            />
            <div className={styles.instagramOverlay}>
              <span className={styles.instagramIcon}>♥</span>
              <span className={styles.instagramText}>Ver no Instagram</span>
            </div>
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/ciliosdaevylorena"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={styles.instagramItem}
          >
            <img 
              src={ciliosEgipicio} 
              alt="Volume Egípicio" 
              className={styles.instagramImage}
            />
            <div className={styles.instagramOverlay}>
              <span className={styles.instagramIcon}>♥</span>
              <span className={styles.instagramText}>Ver no Instagram</span>
            </div>
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/ciliosdaevylorena"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={styles.instagramItem}
          >
            <img 
              src={ciliosMega} 
              alt="Design de Sobrancelhas" 
              className={styles.instagramImage}
            />
            <div className={styles.instagramOverlay}>
              <span className={styles.instagramIcon}>♥</span>
              <span className={styles.instagramText}>Ver no Instagram</span>
            </div>
          </motion.a>
        </div>
        <div className={`${styles.textCenter} ${styles.mt8}`}>
          <a 
            href="https://www.instagram.com/ciliosdaevylorena" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.instagramButton}
          >
            Siga-nos no Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
