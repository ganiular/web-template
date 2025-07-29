import styles from "./Event.module.css";
import Title from "../../Partials/Title/Title";
import AnimatedCard from "../../Partials/Card/AnimatedCard";
import portfolioBanner from '../../../../../assets/Portfolio Showcase.jpg';

export default function EventSection() {
    const events = [
        {
            id: 1,
            title: 'Gulf Exhibition Summit 2024',
            address: 'Dubai World Trade Centre, Dubai',
            date: '10th Aug, 2024',
        },
        {
            id: 2,
            title: 'Regional Trade Fair',
            address: 'Kuwait International Fair, Kuwait',
            date: '15th Aug, 2024',
        },
        {
            id: 3,
            title: 'Business Networking Event',
            address: 'Doha Exhibition Center, Qatar',
            date: '22nd Aug, 2024',
        },
        {
            id: 4,
            title: 'Innovation Showcase',
            address: 'Bahrain International Exhibition Centre',
            date: '28th Aug, 2024',
        },
        {
            id: 5,
            title: 'Technology Conference',
            address: 'Abu Dhabi National Exhibition Centre',
            date: '5th Sep, 2024',
        },
    ];

    return <section className={styles.root}>
        <Title>Latest Events</Title>

        <div className={styles.container}>
            {events.map((event, index) => (
                <div
                    key={event.id}
                    className={styles.eventCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className={styles.eventImage}>
                        <img src={portfolioBanner} alt={event.title} loading="lazy" />
                    </div>

                    <div className={styles.eventContent}>
                        <h3 className={styles.eventTitle}>{event.title}</h3>
                        <div className={styles.eventAddress}>
                            <span className={styles.mapIcon}>📍</span>
                            {event.address}
                        </div>
                        <div className={styles.eventDate}>{event.date}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
}