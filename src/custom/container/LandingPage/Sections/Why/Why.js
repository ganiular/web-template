import styles from "./Why.module.css";
import Button from "../../Partials/Btn/Btn";
import Title from "../../Partials/Title/Title";
import { useInView } from 'react-intersection-observer';

export default function WhyUsSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
            <Title>Why Choose standify</Title>
        </header>

        <div className={styles.container}>
            {reasons.map((service, index) => (
                <div
                    key={service.id}
                    className={styles.card}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className={styles.icon}>
                        <img src={service.image} alt={service.description} />
                    </div>
                    <div className={styles.description}>
                        <h3 className={styles.title}>{service.description}</h3>
                    </div>
                </div>
            ))}
        </div>

        <Button className={styles.button}>
            See Detailed Benefits
        </Button>
    </section>
}