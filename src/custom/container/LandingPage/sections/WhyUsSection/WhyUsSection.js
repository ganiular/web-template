import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './WhyUsSection.module.css';
import commonStyles from '../../MyLandingPage.module.css';
import stamp1 from '../../../../../assets/Stamps/Stamps 1.png';
import stamp2 from '../../../../../assets/Stamps/Stamps 2.png';
import stamp3 from '../../../../../assets/Stamps/Stamps 3.png';
import stamp4 from '../../../../../assets/Stamps/Stamps 4.png';

const WhyUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      id: 1,
      image: stamp1,
      description: 'Work with regional experts who speak your language and deliver on time',
    },
    {
      id: 2,
      image: stamp2,
      description: 'Privacy-first data protection with a streamlined, fast process',
    },
    {
      id: 3,
      image: stamp3,
      description: 'Clear pricing and proposal details for every project',
    },
    {
      id: 4,
      image: stamp4,
      description: 'All providers are thoroughly vetted and trusted for quality',
    },
  ];

  return (
    <section className={`${commonStyles.sectionPadding}`} ref={ref}>
      <div className={`${commonStyles.sectionContainer} ${inView ? commonStyles.animate : ''}`}>
        <div className={commonStyles.sectionHeader}>
          <h2 className={commonStyles.sectionTitleGradient}>Why Choose standify</h2>
        </div>

        <div className={commonStyles.flexGrid}>
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={styles.reasonCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.stampContainer}>
                <img
                  src={reason.image}
                  alt={reason.title}
                  className={styles.stampImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.reasonDescription}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={`${commonStyles.primaryButton} ${commonStyles.primaryButtonPulse}`}>
            <span>See Detailed Benefits</span>
            <i className={commonStyles.arrowIcon}>↗</i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
