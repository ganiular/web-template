import styles from "./Work.module.css";
import Title from "../../Partials/Title/Title";
import AnimatedCard from "../../Partials/Card/AnimatedCard";
import howItWorks1 from '../../../../../assets/how-it-works/How It Work-1.png';
import howItWorks2 from '../../../../../assets/how-it-works/How It Work-2.png';
import howItWorks3 from '../../../../../assets/how-it-works/How It Work-3.png';


export default function WorkSection() {
    return <section className={styles.root}>
        <Title>How It Works</Title>

        <div className={styles.container}>
            {[howItWorks1, howItWorks2, howItWorks3].map((image, index) => (
                <AnimatedCard
                    key={index}
                    animationType="slideUp"
                    className={styles.card}
                    animationDelay={index * 0.3}
                >
                    <img
                        src={image}
                        className={styles.image}
                        alt={`How it works step ${index + 1}`}
                    />
                </AnimatedCard>
            ))}
        </div>
    </section>
}