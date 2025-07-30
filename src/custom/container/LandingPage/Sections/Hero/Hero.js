import styles from './Hero.module.css';
import Button, { MyNamedLinkButton } from '../../Partials/Btn/Btn';
import logoIcon from "../../../../../assets/logo.png";
import { useInView } from 'react-intersection-observer';
import heroBanner from '../../../../../assets/HomePage  Hero Banner.jpg';
import FloatingIcon from '../../Partials/Float/Float';

export default function Hero() {
    const titleWords = "Your Exhibition Marketplace for the Middle East".split(" ");

    // Intersection observer for main hero content
    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin: '-50px 0px'
    });

    // Intersection observer for buttons with delay
    const { ref: buttonsRef, inView: buttonsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin: '-100px 0px'
    });

    return (
        <section className={styles.root} ref={heroRef}>
            <img
                src={heroBanner}
                alt="Exhibition marketplace hero banner"
                className={`${styles.bgImage} ${heroInView ? styles.bgImageVisible : ''}`}
            />

            <div className={`${styles.overlay} ${heroInView ? styles.overlayVisible : ''}`}>
                <img src={logoIcon} alt="Standify Logo" className={styles.logo} />
                <h1 className={styles.title}>
                    <FloatingIcon />
                    {titleWords.map((word, index) => (
                        <span
                            key={index}
                            className={`${styles.titleWord} ${heroInView ? styles.titleWordVisible : ''}`}
                            style={{ '--word-index': index }}
                        >
                            {word}{index < titleWords.length - 1 ? ' ' : ''}
                        </span>
                    ))}
                </h1>
                <div
                    className={`${styles.navigationContainer} ${buttonsInView ? styles.navigationContainerVisible : ''}`}
                    ref={buttonsRef}
                >
                    <MyNamedLinkButton name="LoginPage" className={styles.navigationButton}>
                        Post Your Project
                    </MyNamedLinkButton>
                    <Button className={styles.navigationButton}>
                        Find Suppliers
                    </Button>
                </div>
            </div>
        </section>
    );
}
