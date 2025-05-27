import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './GalleryPage.module.css';

// Importando as imagens da galeria
import brasileiro1 from '../assets/images/gallery/Brasileiro (1).webp';
import brasileiro2 from '../assets/images/gallery/Brasileiro (2).webp';
import brasileiro3 from '../assets/images/gallery/Brasileiro (3).webp';
import brasileiro4 from '../assets/images/gallery/Brasileiro (4).webp';
import brasileiro5 from '../assets/images/gallery/Brasileiro (5).jpg';
import brasileiro6 from '../assets/images/gallery/Brasileiro (6).jpg';
import brasileiro7 from '../assets/images/gallery/Brasileiro (7).jpg';
import brasileiro8 from '../assets/images/gallery/Brasileiro (8).jpg';
import brasileiro9 from '../assets/images/gallery/Brasileiro (9).jpg';
import megabrasileiro1 from '../assets/images/gallery/Megabrasileiro (1).jpg';
import megabrasileiro2 from '../assets/images/gallery/Megabrasileiro (2).jpg';
import egipicio1 from '../assets/images/gallery/Egipicio (1).jpg';
import trabalho1 from '../assets/images/gallery/ciliosdaevylorena_409207353_17868192060025874_4391951550617329194_n.jpg';
import trabalho2 from '../assets/images/gallery/ciliosdaevylorena_433541517_17880597495025874_6212934911057699174_n.jpg';
import trabalho3 from '../assets/images/gallery/ciliosdaevylorena_462689979_1611269456433569_7957990082077628650_n.jpg';
import trabalho4 from '../assets/images/gallery/ciliosdaevylorena_474606213_1395129951456675_581893799096218922_n.jpg';
import trabalho5 from '../assets/images/gallery/ciliosdaevylorena_484882172_17923636275025874_7728260254323504157_n.webp';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'megabrasileiro', name: 'Volume Megabrasileiro' },
  { id: 'brasileiro', name: 'Volume Brasileiro' },
  { id: 'fio-a-fio', name: 'Volume Fio a Fio' },
  { id: 'fox', name: 'Volume Fox' },
  { id: 'egipcio', name: 'Volume Egípicio' },
  { id: 'sobrancelhas', name: 'Design de Sobrancelhas' }
];

const galleryItems = [
  // Megabrasileiro
  {
    id: 1,
    category: 'megabrasileiro',
    image: megabrasileiro1,
    title: 'Volume Megabrasileiro - Máximo Volume'
  },
  {
    id: 2,
    category: 'megabrasileiro',
    image: megabrasileiro2,
    title: 'Volume Megabrasileiro - Transformação'
  },
  // Brasileiro
  {
    id: 3,
    category: 'brasileiro',
    image: brasileiro1,
    title: 'Volume Brasileiro - Natural e Elegante'
  },
  {
    id: 4,
    category: 'brasileiro',
    image: brasileiro2,
    title: 'Volume Brasileiro - Realce Natural'
  },
  {
    id: 5,
    category: 'brasileiro',
    image: brasileiro3,
    title: 'Volume Brasileiro - Olhar Marcante'
  },
  {
    id: 6,
    category: 'brasileiro',
    image: brasileiro4,
    title: 'Volume Brasileiro - Resultado Perfeito'
  },
  {
    id: 7,
    category: 'brasileiro',
    image: brasileiro5,
    title: 'Volume Brasileiro - Efeito Deslumbrante'
  },
  {
    id: 8,
    category: 'brasileiro',
    image: brasileiro6,
    title: 'Volume Brasileiro - Acabamento Premium'
  },
  {
    id: 9,
    category: 'brasileiro',
    image: brasileiro7,
    title: 'Volume Brasileiro - Leveza e Volume'
  },
  {
    id: 10,
    category: 'brasileiro',
    image: brasileiro8,
    title: 'Volume Brasileiro - Transformação Completa'
  },
  {
    id: 11,
    category: 'brasileiro',
    image: brasileiro9,
    title: 'Volume Brasileiro - Resultado Impecável'
  },
  // Egípcio
  {
    id: 12,
    category: 'egipcio',
    image: egipicio1,
    title: 'Volume Egípicio - Efeito Esfumado'
  },
  // Volume Fox (Placeholder até ter fotos)
  {
    id: 13,
    category: 'fox',
    image: 'https://via.placeholder.com/400x400',
    title: 'Volume Fox - Efeito Marcante'
  },
  // Volume Fio a Fio (Placeholder até ter fotos)
  {
    id: 14,
    category: 'fio-a-fio',
    image: 'https://via.placeholder.com/400x400',
    title: 'Volume Fio a Fio - Clássico'
  },
  // Design de Sobrancelhas (Placeholder até ter fotos)
  {
    id: 15,
    category: 'sobrancelhas',
    image: 'https://via.placeholder.com/400x400',
    title: 'Design de Sobrancelhas - Harmonia Facial'
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.overlay} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Galeria de Trabalhos</h1>
          <p className={styles.heroSubtitle}>Inspire-se com nossas transformações</p>
        </motion.div>
      </section>

      {/* Filtros */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterButtons}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`${styles.filterButton} ${
                  activeCategory === category.id ? styles.filterButtonActive : ''
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              className={styles.galleryItem}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className={styles.galleryImage}
              />
              <div className={styles.imageOverlay}>
                <h3 className={styles.imageTitle}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Pronta para transformar seu olhar?
          </h2>
          <p className={styles.ctaText}>
            Agende agora mesmo sua sessão e faça parte das nossas histórias de transformação.
          </p>          <a
            href="https://apnt.app/l/jagPM6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar Consulta
          </a>
        </div>
      </section>
    </div>
  );
}
