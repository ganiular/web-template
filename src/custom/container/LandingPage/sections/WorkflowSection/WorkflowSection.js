import { useInView } from 'react-intersection-observer';
import AnimatedCard from '../../components/AnimatedCard';
import howItWorks1 from '../../../../../assets/how-it-works/How It Work-1.png';
import howItWorks2 from '../../../../../assets/how-it-works/How It Work-2.png';
import howItWorks3 from '../../../../../assets/how-it-works/How It Work-3.png';
import styles from './WorkflowSection.module.css';

function WorkflowSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`${styles.workflowRoot} ${inView ? styles.animate : ''}`}>
      <h2 className={`${styles.workflowTitle} ${styles.gradientText}`}>How It Works</h2>

      <div className={styles.workflowContainer}>
        {[howItWorks1, howItWorks2, howItWorks3].map((image, index) => (
          <AnimatedCard
            key={index}
            animationDelay={index * 0.3}
            animationType="slideUp"
            className={styles.workflowContainerCard}
          >
            <img
              src={image}
              alt={`How it works step ${index + 1}`}
              className={styles.workflowContainerCardImage}
              loading="lazy"
            />
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}

export default WorkflowSection;
