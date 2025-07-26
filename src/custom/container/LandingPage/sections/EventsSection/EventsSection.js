import React from 'react';
import { useInView } from 'react-intersection-observer';
import portfolioBanner from '../../../../../assets/Portfolio Showcase.jpg';
import styles from './EventsSection.module.css';

const EventsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      id: 1,
      title: 'Gulf Exhibition Summit 2024',
      address: 'Dubai World Trade Centre, Dubai',
      date: '10th Aug, 2024',
    },
    {
      id: 2,
      title: 'Regional Trade Fair',
      address: 'Kuwait International Fair, Kuwait',
      date: '15th Aug, 2024',
    },
    {
      id: 3,
      title: 'Business Networking Event',
      address: 'Doha Exhibition Center, Qatar',
      date: '22nd Aug, 2024',
    },
    {
      id: 4,
      title: 'Innovation Showcase',
      address: 'Bahrain International Exhibition Centre',
      date: '28th Aug, 2024',
    },
    {
      id: 5,
      title: 'Technology Conference',
      address: 'Abu Dhabi National Exhibition Centre',
      date: '5th Sep, 2024',
    },
  ];

  return (
    <section className={styles.eventsSection} ref={ref}>
      <div className={`${styles.container} ${inView ? styles.animate : ''}`}>
        <h2 className={styles.title}>Latest Events</h2>

        <div className={styles.eventsContainer}>
          {events.map((event, index) => (
            <div
              key={event.id}
              className={styles.eventCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.eventImage}>
                <img src={portfolioBanner} alt={event.title} loading="lazy" />
              </div>

              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <div className={styles.eventAddress}>
                  <span className={styles.mapIcon}>📍</span>
                  {event.address}
                </div>
                <div className={styles.eventDate}>{event.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
