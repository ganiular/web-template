import styles from "./Seller.module.css";
import Marquee from 'react-fast-marquee';
import Title from "../../Partials/Title/Title";


export default function SellerSection() {
    const topSellers = [
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1522075469751-3847faf86d40?w=150&h=150&fit=crop&crop=face',
        },
        {
            name: 'Henry Tom',
            location: 'Dubai, UAE',
            avatar:
                'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face',
        },
    ];

    return <section className={styles.root}>
        <Title>Top Sellers</Title>

        <div className={styles.container}>
            {/* First row - moving left to right */}
            <Marquee pauseOnHover speed={100} direction="left" className={styles.marqueeRow}>
                {topSellers.map((seller, index) => (
                    <div key={index} className={styles.sellerCard}>
                        <div className={styles.sellerAvatar}>
                            <img
                                src={seller.avatar}
                                alt={seller.name}
                                className={styles.sellerAvatarImage}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.sellerInfo}>
                            <h3 className={styles.sellerName}>{seller.name}</h3>
                            <p className={styles.sellerLocation}>
                                <span className={styles.locationIcon}>📍</span>
                                {seller.location}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>

            {/* Second row - moving right to left */}
            <Marquee pauseOnHover speed={100} direction="right" className={styles.marqueeRow}>
                {topSellers.map((seller, index) => (
                    <div key={index} className={styles.sellerCard}>
                        <div className={styles.sellerAvatar}>
                            <img
                                alt={seller.name}
                                src={seller.avatar}
                                className={styles.sellerAvatarImage}
                            />
                        </div>
                        <div className={styles.sellerInfo}>
                            <h3 className={styles.sellerName}>{seller.name}</h3>
                            <p className={styles.sellerLocation}>
                                <span className={styles.locationIcon}>📍</span>
                                {seller.location}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    </section>
}