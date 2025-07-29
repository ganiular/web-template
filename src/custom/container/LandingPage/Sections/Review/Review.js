import React from "react";
import styles from "./Review.module.css";
import Title from "../../Partials/Title/Title";
import AnimatedCard from "../../Partials/Card/AnimatedCard";
import portfolioBanner from '../../../../../assets/Portfolio Showcase.jpg';

export default function ReviewSection() {
    const [active, setActive] = React.useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Property Owner',
            location: 'San Francisco, CA',
            avatar: '/static/images/testimonial-1.jpg',
            rating: 5,
            content:
                'This platform completely transformed my rental business. I went from managing 2 properties manually to efficiently handling 15+ listings. The automation tools save me hours every week, and my revenue has increased by 40% since I started using it.',
            metrics: {
                revenue: '+40%',
                timesSaved: '15 hrs/week',
                bookings: '+200%',
            },
            featured: true,
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Vacation Rental Host',
            location: 'Miami, FL',
            avatar: '/static/images/testimonial-2.jpg',
            rating: 5,
            content:
                'The customer support is exceptional, and the platform is so intuitive. I love how everything is integrated - from booking management to payment processing. My guests consistently rate their experience 5 stars.',
            metrics: {
                revenue: '+65%',
                guestRating: '4.9/5',
                bookings: '+150%',
            },
            featured: false,
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Professional Host',
            location: 'Austin, TX',
            avatar: '/static/images/testimonial-3.jpg',
            rating: 5,
            content:
                'I was skeptical about switching platforms, but the migration was seamless. The analytics dashboard gives me insights I never had before, and the smart pricing feature has optimized my earnings automatically.',
            metrics: {
                revenue: '+55%',
                timesSaved: '20 hrs/week',
                occupancy: '+85%',
            },
            featured: true,
        },
        {
            id: 4,
            name: 'David Wilson',
            role: 'Real Estate Investor',
            location: 'Seattle, WA',
            avatar: '/static/images/testimonial-4.jpg',
            rating: 5,
            content:
                "Managing multiple properties across different cities used to be a nightmare. Now I can monitor everything from one dashboard. The platform's reliability and comprehensive features make it worth every penny.",
            metrics: {
                properties: '25+',
                revenue: '+80%',
                efficiency: '+300%',
            },
            featured: false,
        },
        {
            id: 5,
            name: 'Lisa Park',
            role: 'Boutique Hotel Owner',
            location: 'Portland, OR',
            avatar: '/static/images/testimonial-5.jpg',
            rating: 5,
            content:
                'The integration capabilities are outstanding. We connected all our existing tools seamlessly, and the staff training was minimal thanks to the intuitive interface. Our operational efficiency has skyrocketed.',
            metrics: {
                efficiency: '+250%',
                revenue: '+35%',
                guestSatisfaction: '98%',
            },
            featured: true,
        },
        {
            id: 6,
            name: 'James Thompson',
            role: 'Co-host & Manager',
            location: 'Denver, CO',
            avatar: '/static/images/testimonial-6.jpg',
            rating: 5,
            content:
                'As someone who manages properties for other hosts, this platform has been a game-changer. The multi-property management features and client reporting tools have helped me scale my business significantly.',
            metrics: {
                clients: '50+',
                revenue: '+120%',
                retention: '95%',
            },
            featured: false,
        },
    ];

    const nextTestimonial = () => {
        setActive(prev => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[active];

    return <section className={styles.root}>
        <Title>What They Say About Standify</Title>

        <div className={styles.featuredTestimonial}>
            <div className={styles.testimonialCard}>
                {/* Avatar Section */}
                <div className={styles.avatarSection}>
                    <div className={styles.authorAvatar}>
                        <img
                            src={currentTestimonial.avatar}
                            alt={currentTestimonial.name}
                            loading="lazy"
                            onError={e => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className={styles.avatarPlaceholder} style={{ display: 'none' }}>
                            👤
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className={styles.contentSection}>
                    <p className={styles.testimonialText}>"{currentTestimonial.content}"</p>
                    <h4 className={styles.authorName}>{currentTestimonial.name}</h4>
                </div>

                {/* Navigation Section */}
                <div className={styles.navigationSection}>
                    <button className={styles.navBtn} onClick={prevTestimonial}>
                        ‹
                    </button>
                    <button className={styles.navBtn} onClick={nextTestimonial}>
                        ›
                    </button>
                </div>
            </div>
        </div>
    </section>
}