import styles from "./Guide.module.css";
import Title from "../../Partials/Title/Title";
import AnimatedCard from "../../Partials/Card/AnimatedCard";
import gradientBg from '../../../../../assets/gradient-bg.jpg';
import exhibitorImg from '../../../../../assets/user-guides/Categore banner 01.jpg';
import vendorImg from '../../../../../assets/user-guides/Categore banner 02.jpg';
import organizerImg from '../../../../../assets/user-guides/Categore banner 03.jpg';


export default function GuideSection() {
    const guides = [
        {
            id: 1,
            title: 'Exhibitor',
            image: exhibitorImg,
            description: 'Post a booth-build project and get tailored quotes from regional pros.',
        },
        {
            id: 2,
            title: 'Vendor',
            image: vendorImg,
            description:
                'Verified builders, designers, and suppliers pitch directly on relevant projects.',
        },
        {
            id: 3,
            title: 'Organizer',
            image: organizerImg,
            description:
                'Oversee exhibitor projects, recommend top providers, and even white-label the platform for your event.',
        },
    ];

    return <section className={styles.root}>
        <Title>Our Users</Title>

        <div className={styles.container}>
            {guides.map((guide, index) => (
                <AnimatedCard
                    key={guide.id}
                    className={styles.card}
                // animationType="slideUpScale"
                >
                    <div className={styles.image}>
                        <img src={guide.image} alt={guide.title} />
                    </div>

                    <div className={styles.content}>
                        <img src={gradientBg} alt="Background" className={styles.bgImage} />
                        <h3 className={styles.title}>{guide.title}</h3>
                        <p className={styles.description}>{guide.description}</p>
                        <div className={styles.icon}>→</div>
                    </div>
                </AnimatedCard>
            ))}
        </div>
    </section>
}