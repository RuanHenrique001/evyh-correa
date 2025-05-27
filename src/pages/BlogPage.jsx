import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogPage.module.css';
import blogHero from '../assets/images/blog/blog-hero.png';
import { blogPosts } from '../data/blogPosts';

const categories = ['Todos', 'Cuidados', 'Tendências', 'Técnicas', 'Informativo'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'Todos' || post.category === activeCategory
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero} style={{backgroundImage: `url(${blogHero})`}}>
        <div className={styles.heroOverlay} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Blog</h1>
          <p className={styles.heroSubtitle}>Dicas, novidades e tendências do mundo da beleza</p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          {/* Categorias */}
          <div className={styles.categories}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts em Destaque */}
          <div className={styles.featuredGrid}>
            {currentPosts.slice(0, 2).map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.featuredPost}
              >
                <div className={styles.postImage} style={{backgroundImage: `url(${post.image})`}} />
                <div className={styles.postContent}>
                  <span className={styles.category}>{post.category}</span>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.readTime}>{post.readTime} de leitura</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className={styles.readMore}>
                    Ler mais
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Posts Recentes */}
          <div className={styles.recentGrid}>
            {currentPosts.slice(2).map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                className={styles.article}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={styles.articleImage}
                />
                <div className={styles.articleContent}>
                  <div className={styles.articleMeta}>
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className={styles.articleTitle}>{post.title}</h3>
                  <p className={styles.articleExcerpt}>{post.excerpt}</p>
                  <div className={styles.articleFooter}>
                    <Link to={`/blog/${post.id}`} className={styles.readMore}>
                      Ler mais
                    </Link>
                    <span className={styles.readTime}>{post.readTime} de leitura</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageButton}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  className={`${styles.pageButton} ${currentPage === i + 1 ? styles.active : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className={styles.pageButton}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Próxima
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>
            Fique por dentro das novidades
          </h2>
          <p className={styles.newsletterDescription}>
            Assine nossa newsletter e receba dicas exclusivas de beleza!
          </p>
          <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className={styles.newsletterInput}
              aria-label="E-mail para newsletter"
            />
            <button
              type="submit"
              className={styles.newsletterButton}
            >
              Assinar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
