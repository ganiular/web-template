import styles from "./Team.module.css";
import Marquee from 'react-fast-marquee';
import Title from "../../Partials/Title/Title";

export default function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            alt: 'Team Member 1',
            src: require('../../../../../assets/Team Member Photos/Team Member Photos-1.jpg'),
        },
        {
            id: 2,
            alt: 'Team Member 2',
            src: require('../../../../../assets/Team Member Photos/Team Member Photos-2.jpg'),
        },
        {
            id: 3,
            alt: 'Team Member 3',
            src: require('../../../../../assets/Team Member Photos/Team Member Photos-3.jpg'),
        },
        {
            id: 4,
            alt: 'Team Member 4',
            src: require('../../../../../assets/Team Member Photos/Team Member Photos-4.jpg'),
        },
        {
            id: 5,
            alt: 'Team Member 5',
            src: require('../../../../../assets/Team Member Photos/Team Member Photos-5.jpg'),
        },
    ];

    return <section className={styles.root}>
        <Title className={styles.title}>
            Meet the committed team of industry professionals behind Standify, dedicated to
            transforming your next exhibition with world-class expertise.
        </Title>

        <div className={styles.container}>
            <Marquee pauseOnHover className={styles.container}>
                {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
                    <img
                        src={member.src}
                        alt={member.alt}
                        key={`${member.id}-${index}`}
                        className={styles.teamMemberImage}
                    />
                ))}
            </Marquee>
        </div>
    </section>
}