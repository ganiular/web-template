import styles from "./About.module.css";
import Button from "../../Partials/Btn/Btn";
import Title from "../../Partials/Title/Title";
import { useInView } from 'react-intersection-observer';
import aboutImg from "../../../../../assets/Who We Are - About Us.png";

export default function AboutSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const aboutUs = [
        {
            icon: require('../../../../../assets/about-us-icons/train.png'),
            label: 'Regional expertise in Gulf & MENA exhibitions',
        },
        {
            icon: require('../../../../../assets/about-us-icons/direct-hit.png'),
            label: 'No middlemen — only direct, vetted relationships',
        },
        {
            icon: require('../../../../../assets/about-us-icons/globe.png'),
            label: 'Built for bilingual users: Arabic-first, English-ready',
        },
    ];

    return <section ref={ref} className={`${styles.root} ${inView && styles.animate}`}>
        <header className={styles.headerContainer}>
            <Title>About Standify</Title>
            <p className={styles.headerDescription}>
                Standify was built to fix exhibition planning in the Gulf—an
                industry often broken by hidden  pricing, unreliable vendors,
                and messy logistics. We offer a transparent,
                trusted platform  tailor-made for this region.
            </p>
        </header>

        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={aboutImg} alt="" className={styles.image} />
            </div>

            <div className={styles.contentContainer}>
                {aboutUs.map((item, index) => (
                    <div key={index} className={styles.aboutFeatureItem}>
                        <img
                            src={item.icon}
                            alt={`Feature ${index + 1}`}
                            className={styles.aboutFeatureIcon}
                        />
                        <div className={styles.aboutFeatureContent}>
                            <p className={styles.aboutFeatureDescription}>{item.label}</p>
                        </div>
                    </div>
                ))}

                <br />

                <Button className={styles.button}>
                    Meet the Team Behind Standify
                </Button>
            </div>
        </div>
    </section>
}