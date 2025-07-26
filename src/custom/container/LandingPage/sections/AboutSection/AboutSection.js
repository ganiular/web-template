import { useInView } from 'react-intersection-observer';
import aboutBanner from '../../../../../assets/Who We Are - About Us.png';
import styles from './AboutSection.module.css';

function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const aboutUs = [
    {
      icon: require('../../../../../assets/about-us-icons/train.png'),
      label: 'Regional expertise in Gulf & MENA exhibitions',
    },
    {
      icon: require('../../../../../assets/about-us-icons/direct-hit.png'),
      label: 'No middlemen — only direct, vetted relationships',
    },
    {
      icon: require('../../../../../assets/about-us-icons/globe.png'),
      label: 'Built for bilingual users: Arabic-first, English-ready',
    },
  ];

  return (
    <section ref={ref} className={`${styles.aboutRoot} ${inView ? styles.animate : ''}`}>
      <header className={styles.aboutHeaderContainer}>
        <h2 className={`${styles.aboutHeaderContainerTitle} ${styles.gradientText}`}>
          About Standify
        </h2>
        <p className={styles.aboutHeaderContainerDescription}>
          Standify was built to fix exhibition planning in the Gulf—an industry often broken by
          hidden pricing, unreliable vendors, and messy logistics. We offer a transparent, trusted
          platform tailor-made for this region.
        </p>
      </header>

      <div className={styles.aboutBodyContainer}>
        <div className={styles.aboutBodyContainerImgWrapper}>
          <img
            src={aboutBanner}
            className={styles.aboutBodyContainerImg}
            alt="Business handshake representing partnership and trust"
            loading="lazy"
          />
        </div>

        <div className={styles.aboutBodyContainerFeatures}>
          {aboutUs.map((item, index) => (
            <div key={index} className={styles.aboutFeatureItem}>
              <img
                src={item.icon}
                alt={`Feature ${index + 1}`}
                className={styles.aboutFeatureIcon}
                loading="lazy"
              />
              <div className={styles.aboutFeatureContent}>
                <p className={styles.aboutFeatureDescription}>{item.label}</p>
              </div>
            </div>
          ))}

          <button className={styles.aboutCtaButton}>Meet the Team Behind Standify</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
