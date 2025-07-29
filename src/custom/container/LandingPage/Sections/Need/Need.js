import styles from "./Need.module.css";
import Title from "../../Partials/Title/Title";
import { useInView } from 'react-intersection-observer';
import aboutImg from "../../../../../assets/Who We Are - About Us.png";
import Button from "../../Partials/Btn/Btn";

export default function NeedSection() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const services = [
        {
            id: 1,
            icon: require('../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 1.jpg'),
            title: '3D booth design',
        },
        {
            id: 2,
            icon: require('../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 2.jpg'),
            title: 'Tech and furniture rental',
        },
        {
            id: 3,
            icon: require('../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 3.jpg'),
            title: 'Staffing solutions',
        },
        {
            id: 4,
            icon: require('../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 4.jpg'),
            title: 'Branding and printing services',
        },
        {
            id: 5,
            icon: require('../../../../../assets/Product-Service Thumbnails/Product-Service Thumbnails 5.jpg'),
            title: 'Logistics & customs assistance',
        },
    ];

    return <section ref={ref} className={`${styles.root} ${inView && styles.animate}`}>
        <header className={styles.headerContainer}>
            <Title>Everything you need in one place</Title>
            <p className={styles.headerDescription}>
                Think of Standify as your full exhibition toolkit. We bring all services under one roof!
            </p>
        </header>

        <div className={styles.container}>
            {services.map((service, index) => (
                <div
                    key={service.id}
                    className={styles.card}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className={styles.icon}>
                        <img src={service.icon} alt={service.title} />
                    </div>
                    <div className={styles.description}>
                        <h3 className={styles.title}>{service.title}</h3>
                    </div>
                </div>
            ))}
        </div>

        <Button className={styles.button}>
            Explore Full Feature List
        </Button>
    </section>
}