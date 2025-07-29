import { useInView } from 'react-intersection-observer';
import styles from './AnimatedSection.module.css';

const AnimatedSection = ({
    children,
    className = '',
    animationType = 'fadeUp',
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-50px 0px',
    delay = 0,
    duration = 0.8
}) => {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce,
        rootMargin
    });

    const getAnimationClass = () => {
        switch (animationType) {
            case 'fadeUp':
                return styles.fadeUp;
            case 'fadeDown':
                return styles.fadeDown;
            case 'fadeLeft':
                return styles.fadeLeft;
            case 'fadeRight':
                return styles.fadeRight;
            case 'scaleUp':
                return styles.scaleUp;
            case 'slideLeft':
                return styles.slideLeft;
            case 'slideRight':
                return styles.slideRight;
            default:
                return styles.fadeUp;
        }
    };

    return (
        <div
            ref={ref}
            className={`
                ${getAnimationClass()}
                ${inView ? styles.visible : ''}
                ${className}
            `}
            style={{
                '--animation-delay': `${delay}s`,
                '--animation-duration': `${duration}s`
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
