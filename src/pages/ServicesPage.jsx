import { motion } from 'framer-motion';
import styles from './ServicesPage.module.css';
import heroImage from '../assets/images/hero/imagen 1200 800 Capa.png';
import ciliosMega from '../assets/images/services/cilios (1).png';
import ciliosFox from '../assets/images/services/cilios (2).png';
import ciliosEgipicio from '../assets/images/services/cilios (3).png';

const services = [
  {
    id: 1,
    title: 'Volume Megabrasileiro',
    description: 'Volume intenso e glamouroso para um olhar deslumbrante e sofisticado.',
    image: ciliosMega,
    price: 'A partir de R$ 250',
    duration: '3h',
  },
  {
    id: 2,
    title: 'Volume Brasileiro',
    description: 'Técnica que proporciona volume natural com elegância e leveza.',
    image: ciliosMega,
    price: 'A partir de R$ 220',
    duration: '2h30',
  },
  {
    id: 3,
    title: 'Volume Fio a Fio',
    description: 'Técnica clássica para um olhar naturalmente alongado e elegante.',
    image: ciliosEgipicio,
    price: 'A partir de R$ 180',
    duration: '2h',
  },
  {
    id: 4,
    title: 'Volume Fox',
    description: 'Efeito raposa para um olhar marcante e sedutor, perfeito para ocasiões especiais.',
    image: ciliosFox,
    price: 'A partir de R$ 230',
    duration: '2h30',
  },
  {
    id: 5,
    title: 'Volume Egípicio',
    description: 'Alongamento com efeito esfumado e misterioso, inspirado na beleza oriental.',
    image: ciliosEgipicio,
    price: 'A partir de R$ 240',
    duration: '3h',
  },
  {
    id: 6,
    title: 'Design de Sobrancelhas',
    description: 'Modelagem personalizada para harmonizar seu rosto, realçando sua beleza natural.',
    image: 'https://via.placeholder.com/400x300',
    price: 'A partir de R$ 80',
    duration: '1h',
  }
];

export default function ServicesPage() {
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
          <h1 className={styles.heroTitle}>Nossos Serviços</h1>
          <p className={styles.heroSubtitle}>Descubra o tratamento perfeito para você</p>
        </motion.div>
      </section>      {/* Serviços */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className={styles.serviceCard}
            >
              <img 
                src={service.image} 
                alt={service.title}
                className={styles.serviceImage}
              />
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <div className={styles.serviceDetails}>
                  <span>Duração: {service.duration}</span>
                  <span>{service.price}</span>
                </div>                <a 
                  href="https://apnt.app/l/jagPM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Agendar Agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className={styles.processSection}>
        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>Como Trabalhamos</h2>
          <div className={styles.processGrid}>
            {[
              {
                step: 1,
                title: 'Agendamento',
                text: 'Escolha o horário mais conveniente para você'
              },
              {
                step: 2,
                title: 'Consulta',
                text: 'Avaliação personalizada das suas necessidades'
              },
              {
                step: 3,
                title: 'Procedimento',
                text: 'Aplicação com técnicas especializadas'
              },
              {
                step: 4,
                title: 'Resultado',
                text: 'Transformação completa do seu olhar'
              }
            ].map(({ step, title, text }) => (
              <div key={step} className={styles.processStep}>
                <div className={styles.stepNumber}>{step}</div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
