import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './BlogPostPage.module.css';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className={styles.container}>
        <h1>Post não encontrado</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.post}
      >
        <div className={styles.heroImage} style={{backgroundImage: `url(${post.image})`}}>
          <div className={styles.overlay} />
        </div>
        
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.readTime}>{post.readTime} de leitura</span>
          </div>
          
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.articleContent}>
            <p className={styles.excerpt}>{post.excerpt}</p>
            
            <div 
              className={styles.fullContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}
