import styles from "./Video.module.css";
import Button from "../../Partials/Btn/Btn";
import Title from "../../Partials/Title/Title";
import portfolioBanner from '../../../../../assets/Portfolio Showcase.jpg';

export default function VideoSection() {
    return <section className={styles.root}>
        <Title>Check our Latest video</Title>

        <div className={styles.container}>
            <img
                src={portfolioBanner}
                alt="Video thumbnail"
                className={styles.thumbnail}
            />
            <div className={styles.videoPlayButton}>
                <span className={styles.videoPlayIcon}>▶</span>
            </div>
        </div>

        <div className={styles.videoCtaSection}>
            <Title hide className={styles.videoCtaTitle}>
                Ready to Exhibit in the Gulf?
            </Title>

            <Button>Start now</Button>
        </div>
    </section>
}