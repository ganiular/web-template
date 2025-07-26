import React from 'react';
import styles from './GuideSection.module.css';
import { useInView } from 'react-intersection-observer';
import gradientBg from '../../../../../assets/gradient-bg.jpg';
import exhibitorImg from '../../../../../assets/user-guides/Categore banner 01.jpg';
import vendorImg from '../../../../../assets/user-guides/Categore banner 02.jpg';
import organizerImg from '../../../../../assets/user-guides/Categore banner 03.jpg';

const GuideSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const guides = [
    {
      id: 1,
      title: 'Exhibitor',
      description: 'Post a booth-build project and get tailored quotes from regional pros.',
      image: exhibitorImg,
    },
    {
      id: 2,
      title: 'Vendor',
      description:
        'Verified builders, designers, and suppliers pitch directly on relevant projects.',
      image: vendorImg,
    },
    {
      id: 3,
      title: 'Organizer',
      description:
        'Oversee exhibitor projects, recommend top providers, and even white-label the platform for your event.',
      image: organizerImg,
    },
  ];
  return (
    <section className={styles.guideSection} ref={ref}>
      <div className={`${styles.container} ${inView ? styles.animate : ''}`}>
        <h2 className={styles.title}>Users Guided</h2>

        <div className={styles.guidesContainer}>
          {guides.map((guide, index) => (
            <div
              key={guide.id}
              className={styles.guideCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.guideImage}>
                <img src={guide.image} alt={guide.title} loading="lazy" />
              </div>

              <div className={styles.guideContent}>
                <img src={gradientBg} alt="Background" className={styles.backgroundImage} />
                <h3 className={styles.guideTitle}>{guide.title}</h3>
                <p className={styles.guideDescription}>{guide.description}</p>
                <div className={styles.arrowIcon}>→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
