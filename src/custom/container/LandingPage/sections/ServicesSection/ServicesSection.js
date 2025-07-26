import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './ServicesSection.module.css';
import service1 from '../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 1.jpg';
import service2 from '../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 2.jpg';
import service3 from '../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 3.jpg';
import service4 from '../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 4.jpg';
import service5 from '../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 5.jpg';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      icon: service1,
      title: '3D booth design',
    },
    {
      id: 2,
      icon: service2,
      title: 'Tech and furniture rental',
    },
    {
      id: 3,
      icon: service3,
      title: 'Staffing solutions',
    },
    {
      id: 4,
      icon: service4,
      title: 'Branding and printing services',
    },
    {
      id: 5,
      icon: service5,
      title: 'Logistics & customs assistance',
    },
  ];

  return (
    <section className={styles.servicesSection} ref={ref}>
      <div className={`${styles.container} ${inView ? styles.animate : ''}`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.gradientText}`}>
            Everything you need in one place
          </h2>
          <p className={styles.subtitle}>
            Think of Standify as your full exhibition toolkit. We bring all services under one roof!
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.serviceIcon}>
                <img src={service.icon} alt={service.title} loading="lazy" />
              </div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <button className={styles.exploreBtn}>Explore Full Feature List →</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
