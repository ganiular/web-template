import { useInView } from 'react-intersection-observer';
import heroBanner from '../../../../../assets/HomePage  Hero Banner.jpg';
import styles from './HeroSection.module.css';

function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`${styles.bannerRoot} ${inView ? styles.animate : ''}`}>
      <img
        src={heroBanner}
        alt="Exhibition marketplace hero banner"
        className={styles.bannerImage}
        loading="lazy"
      />

      <div className={styles.bannerOverlay}>
        <h2 className={styles.bannerOverlayTitle}>
          Your Exhibition Marketplace for the Middle East
        </h2>
        <nav className={styles.bannerOverlayBtnContainer}>
          <button className={styles.bannerOverlayBtnContainerButton}>Post Your Project</button>
          <button className={styles.bannerOverlayBtnContainerButton}>Find Suppliers</button>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
