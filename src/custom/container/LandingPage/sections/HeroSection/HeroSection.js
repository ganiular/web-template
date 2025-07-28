import { useInView } from 'react-intersection-observer';
import heroBanner from '../../../../../assets/HomePage  Hero Banner.jpg';
import styles from './HeroSection.module.css';
import commonStyles from '../../MyLandingPage.module.css';
import { NamedLink } from '../../../../../components';

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
      />

      <div className={styles.bannerOverlay}>
        <h2 className={styles.bannerOverlayTitle}>
          Your Exhibition Marketplace for the Middle East
        </h2>
        <nav className={styles.bannerOverlayBtnContainer}>
          <NamedLink name="LoginPage"
            className={`${commonStyles.primaryButton} ${commonStyles.primaryButtonPulse} ${styles.heroButton} ${styles.heroButtonFirst}`}
          >
            <span>Post Your Project</span>
            <i className={commonStyles.arrowIcon}>↗</i>
          </NamedLink>
          <button
            className={`${commonStyles.secondaryButton} ${commonStyles.secondaryButtonPulse} ${styles.heroButton} ${styles.heroButtonSecond}`}
          >
            <span>Find Suppliers</span>
            <i className={commonStyles.arrowIcon}>↗</i>
          </button>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
