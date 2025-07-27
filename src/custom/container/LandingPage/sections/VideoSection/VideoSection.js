import portfolioBanner from '../../../../../assets/Portfolio Showcase.jpg';
import { useInView } from 'react-intersection-observer';
import styles from './VideoSection.module.css';

function VideoSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`${styles.videoRoot} ${inView ? styles.animate : ''}`}>
      <header className={styles.videoHeaderContainer}>
        <h2 className={`${styles.videoTitle} ${styles.gradientText}`}>Check our Latest video</h2>
      </header>

      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <img
            src={portfolioBanner}
            alt="Video thumbnail"
            className={styles.videoThumbnail}
            loading="lazy"
          />
          <div className={styles.videoPlayButton}>
            <span className={styles.videoPlayIcon}>▶</span>
          </div>
        </div>
      </div>

      <div className={styles.videoCtaSection}>
        <h3 className={`${styles.videoCtaTitle} ${styles.gradientText}`}>
          Ready to Exhibit in the Gulf?
        </h3>
        <button className={styles.videoCtaButton}>Start Now</button>
      </div>
    </section>
  );
}

export default VideoSection;
