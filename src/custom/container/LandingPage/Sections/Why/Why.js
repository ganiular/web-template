import styles from "./Why.module.css";
import Button from "../../Partials/Btn/Btn";
import Title from "../../Partials/Title/Title";
import { useInView } from 'react-intersection-observer';
import { useState } from "react";

export default function WhyUsSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const [activeIndex, setActiveIndex] = useState(0);

    const reasons = [
        {
            id: 1,
            image: require('../../../../../assets/Stamps/Stamps 1.png'),
            description: 'Work with regional experts who speak your language and deliver on time',
        },
        {
            id: 2,
            image: require('../../../../../assets/Stamps/Stamps 2.png'),
            description: 'Privacy-first data protection with a streamlined, fast process',
        },
        {
            id: 3,
            image: require('../../../../../assets/Stamps/Stamps 3.png'),
            description: 'Clear pricing and proposal details for every project',
        },
        {
            id: 4,
            image: require('../../../../../assets/Stamps/Stamps 4.png'),
            description: 'All providers are thoroughly vetted and trusted for quality',
        },
    ];

    return <section ref={ref} className={`${styles.root} ${inView && styles.animate}`}>
        <header className={styles.headerContainer}>
            <Title>Why Choose Standify</Title>
        </header>

        <div className={styles.container}>
            <div className={styles.stampImgs}>
                {reasons.map((service, index) => (
                    <div key={index}
                        className={`${styles.card} ${activeIndex == index ? styles.active : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onMouseEnter={() => setActiveIndex(index)}  // <- Hover
                        onClick={() => setActiveIndex(index)}       // <- Click
                    >
                        <img src={service.image} className={styles.img} alt={`Stamp ${index + 1}`} />
                    </div>
                ))}
            </div>
            <p key={activeIndex} className={styles.description}>
                {reasons[activeIndex].description}
            </p>
        </div>

        <Button className={styles.button}>
            See Detailed Benefits
        </Button>
    </section>
}