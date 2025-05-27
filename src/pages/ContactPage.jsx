import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui será implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section 
        className={styles.hero}
        style={{backgroundImage: 'url("https://via.placeholder.com/1200x400")'}}
      >
        <div className={styles.heroOverlay} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Contato</h1>
          <p className={styles.heroSubtitle}>Estamos aqui para atender você</p>
        </motion.div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.contactInfo}
            >
              <h2 className={styles.infoTitle}>Fale Conosco</h2>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>                    <h3>Localização</h3>
                    <p>Av Coronel marciano, n° 252</p>
                    <p>Lorena - SP</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h3>E-mail</h3>
                    <p>contato@evyhcorrea.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>                    <h3>Telefone/WhatsApp</h3>
                    <p>(12) 98898-7249</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className={styles.infoContent}>                    <h3>Horário de Atendimento</h3>
                    <p>Segunda-feira a sábado</p>
                    <p>Das 8h às 18h</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Siga-nos</h3>
                <div className={styles.socialLinks}>
                  <a 
                    href="https://www.instagram.com/ciliosdaevylorena" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 6.5H17.51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/5512988987249" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 21L4.7 16.3C3.78001 14.72 3.32153 12.9084 3.3698 11.0772C3.41807 9.24596 3.97203 7.46377 4.96921 5.93708C5.96639 4.41039 7.36879 3.19779 9.02898 2.44368C10.6892 1.68957 12.5361 1.42401 14.3674 1.67535C16.1987 1.92668 17.9382 2.68533 19.3986 3.86819C20.859 5.05106 21.9847 6.61294 22.6525 8.39972C23.3203 10.1865 23.5047 12.1278 23.1874 14.0089C22.8702 15.89 22.063 17.6466 20.8532 19.1056C19.6433 20.5645 18.072 21.6756 16.2922 22.3261C14.5125 22.9766 12.5886 23.1407 10.7239 22.8008C8.85929 22.4609 7.11361 21.6291 5.65 20.39L3 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Formulário de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.form}
            >
              <h2 className={styles.formTitle}>Envie sua mensagem</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Assunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="agendamento">Agendamento</option>
                    <option value="duvida">Dúvida</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                  />
                </div>

                <button type="submit" className={styles.button}>
                  Enviar mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.wrapper}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.674211121077!2d-45.12912472559225!3d-22.967048139811184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc4b0be6f2111%3A0x4788a1b627c216b9!2sAv.%20Cel.%20Marciano%2C%20252%20-%20Centro%2C%20Lorena%20-%20SP%2C%2012600-090!5e0!3m2!1spt-BR!2sbr!4v1684884013583!5m2!1spt-BR!2sbr"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
