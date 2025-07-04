import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './ShopPage.module.css';
// Temporary placeholder images
const kitCilios = 'https://source.unsplash.com/600x600/?eyelash-kit';
const serum = 'https://source.unsplash.com/600x600/?beauty-serum';
const kitSobrancelhas = 'https://source.unsplash.com/600x600/?eyebrow-kit';
const shampoo = 'https://source.unsplash.com/600x600/?cosmetic-shampoo';
const pinca = 'https://source.unsplash.com/600x600/?beauty-tweezers';
const henna = 'https://source.unsplash.com/600x600/?eyebrow-henna';

const categories = ['Todos', 'Cílios', 'Sobrancelhas', 'Cuidados', 'Acessórios'];

const products = [
  {
    id: 1,
    title: 'Kit Profissional de Alongamento',
    category: 'Cílios',
    description: 'Kit completo com cola, pinças e cílios para alongamento profissional.',
    price: 299.90,
    image: kitCilios
  },
  {
    id: 2,
    title: 'Sérum para Crescimento',
    category: 'Cuidados',
    description: 'Sérum nutritivo para estimular o crescimento dos cílios naturais.',
    price: 89.90,
    image: serum
  },
  {
    id: 3,
    title: 'Kit Design de Sobrancelhas',
    category: 'Sobrancelhas',
    description: 'Kit profissional com pentes, tesoura e régua para design perfeito.',
    price: 149.90,
    image: kitSobrancelhas
  },
  {
    id: 4,
    title: 'Shampoo para Cílios',
    category: 'Cuidados',
    description: 'Shampoo especial para limpeza e cuidado dos cílios alongados.',
    price: 49.90,
    image: shampoo
  },
  {
    id: 5,
    title: 'Pinça Profissional',
    category: 'Acessórios',
    description: 'Pinça de precisão para aplicação de cílios fio a fio.',
    price: 79.90,
    image: pinca
  },
  {
    id: 6,
    title: 'Henna para Sobrancelhas',
    category: 'Sobrancelhas',
    description: 'Kit de henna natural para design de sobrancelhas duradouro.',
    price: 69.90,
    image: henna
  }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('featured');
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter(product => 
    activeCategory === 'Todos' || product.category === activeCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
    // TODO: Implementar toast de confirmação
  };

  return (
    <div>
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.heroTitle}>Loja</h1>
          <p className={styles.heroSubtitle}>
            Produtos profissionais para cílios e sobrancelhas
          </p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div className={styles.categories}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className={styles.sort}>
              <span className={styles.sortLabel}>Ordenar por:</span>
              <select 
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Destaques</option>
                <option value="price-low">Menor preço</option>
                <option value="price-high">Maior preço</option>
                <option value="name">Nome</option>
              </select>
            </div>
          </div>

          {sortedProducts.length > 0 ? (
            <motion.div 
              className={styles.productGrid}
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {sortedProducts.map((product) => (
                <motion.article
                  key={product.id}
                  className={styles.product}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <img 
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                  <div className={styles.productContent}>
                    <span className={styles.productCategory}>{product.category}</span>
                    <h2 className={styles.productTitle}>{product.title}</h2>
                    <p className={styles.productDescription}>{product.description}</p>
                    <div className={styles.productFooter}>
                      <span className={styles.price}>
                        {product.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </span>
                      <button
                        className={styles.addToCart}
                        onClick={() => addToCart(product)}
                      >
                        Adicionar
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className={styles.emptyState}>
              <h2 className={styles.emptyStateTitle}>Nenhum produto encontrado</h2>
              <p className={styles.emptyStateText}>
                Não encontramos produtos nesta categoria. Tente outra categoria ou volte mais tarde.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
