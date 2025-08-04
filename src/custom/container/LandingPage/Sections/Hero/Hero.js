import styles from './Hero.module.css';
import logoIcon from "../../../../../assets/logo.png";
import { useInView } from 'react-intersection-observer';
import { MyNamedLinkButton } from '../../Partials/Btn/Btn';
import heroBanner from '../../../../../assets/HomePage  Hero Banner.jpg';

export default function Hero() {
    const titleWords = "Your Exhibition Marketplace for the Middle East".split(" ");

    // Intersection observer for main hero content
    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin: '-50px 0px'
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
                    className={`${styles.navigationContainer} ${styles.navigationContainerVisible}`}
                >
                    <MyNamedLinkButton name="LoginPage" className={styles.navigationButton}>
                        Post Your Project
                    </MyNamedLinkButton>
                    <MyNamedLinkButton name="SearchPage" className={styles.navigationButton}>
                        Find Suppliers
                    </MyNamedLinkButton>
                </div>
            </div>
        </section>
    );
}
