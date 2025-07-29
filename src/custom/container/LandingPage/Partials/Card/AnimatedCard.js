import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './AnimatedCard.module.css';

const AnimatedCard = ({
  children,
  className = '',
  animationDelay = 0,
  animationType = 'slideUp',
  threshold = 0.2,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationClass = styles[animationType] || styles.slideUp;

  return (
    <div
      ref={ref}
      className={`${styles.animatedCard} ${animationClass} ${
        inView ? styles.animate : ''
      } ${className}`}
      style={{
        animationDelay: `${animationDelay}s`,
        '--animation-delay': `${animationDelay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
