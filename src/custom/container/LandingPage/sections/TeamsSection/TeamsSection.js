import { useInView } from 'react-intersection-observer';
import member1 from '../../../../../assets/Team Member Photos/Team Member Photos-1.jpg';
import member2 from '../../../../../assets/Team Member Photos/Team Member Photos-2.jpg';
import member3 from '../../../../../assets/Team Member Photos/Team Member Photos-3.jpg';
import member4 from '../../../../../assets/Team Member Photos/Team Member Photos-4.jpg';
import member5 from '../../../../../assets/Team Member Photos/Team Member Photos-5.jpg';
import styles from './TeamsSection.module.css';

function TeamsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`${styles.teamsRoot} ${inView ? styles.animate : ''}`}>
      <header className={styles.teamsHeaderContainer}>
        <h2 className={`${styles.teamsTitle} ${styles.gradientText}`}>Meet Our Team</h2>
        <p className={styles.teamsDescription}>
          Meet the committed team of industry professionals behind Standify, dedicated to
          transforming your next exhibition with world-class expertise.
        </p>
      </header>

      <div className={styles.teamsContainer}>
        <img src={member1} alt="Team Member 1" className={styles.teamMemberImage} loading="lazy" />
        <img src={member2} alt="Team Member 2" className={styles.teamMemberImage} loading="lazy" />
        <img src={member3} alt="Team Member 3" className={styles.teamMemberImage} loading="lazy" />
        <img src={member4} alt="Team Member 4" className={styles.teamMemberImage} loading="lazy" />
        <img src={member5} alt="Team Member 5" className={styles.teamMemberImage} loading="lazy" />
        <img src={member1} alt="Team Member 1" className={styles.teamMemberImage} />
        <img src={member2} alt="Team Member 2" className={styles.teamMemberImage} />
        <img src={member3} alt="Team Member 3" className={styles.teamMemberImage} />
        <img src={member4} alt="Team Member 4" className={styles.teamMemberImage} />
        <img src={member5} alt="Team Member 5" className={styles.teamMemberImage} />
      </div>
    </section>
  );
}

export default TeamsSection;
