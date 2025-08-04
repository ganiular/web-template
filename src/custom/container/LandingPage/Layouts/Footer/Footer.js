import React from 'react';
import css from './Footer.module.css';
import logoIcon from '../../../../../assets/logo.png';
import gradientBg from '../../../../../assets/gradient-bg.jpg';

const Footer = () => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        // Reset form
        setEmail('');
    };

    const categories = [
        'Booth Design',
        'Audio / Visual',
        'Furniture',
        'Catering',
        'Lighting',
        'Printing'
    ];

    const quickLinks = [
        'About Us',
        'Contact Us',
        'Terms of Service',
        'Privacy Policy'
    ];

    return (
        <footer className={css.root}>
            {/* Content Overlay */}
            <div className={css.overlay}>
                {/* Newsletter Section */}
                <section className={css.newsletterSection}>
                    <h3 className={css.newsletterTitle}>Stay Updated</h3>
                    <form className={css.newsletterForm} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={css.emailInput}
                            required
                        />
                        <button type="submit" className={css.subscribeButton}>
                            Subscribe Now
                        </button>
                    </form>
                </section>

                {/* Main Footer Content */}
                <div className={css.footerContent}>
                    {/* Logo Section */}
                    <div className={css.logoSection}>
                        <img src={logoIcon} alt="Standify Logo" className={css.footerLogo} />
                    </div>

                    {/* Categories Section */}
                    <div className={css.linksSection}>
                        <h4 className={css.sectionTitle}>Categories</h4>
                        <ul className={css.linksList}>
                            {categories.map((category, index) => (
                                <li key={index} className={css.linkItem}>
                                    <a href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`} className={css.footerLink}>
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className={css.linksSection}>
                        <h4 className={css.sectionTitle}>Quick Links</h4>
                        <ul className={css.linksList}>
                            {quickLinks.map((link, index) => (
                                <li key={index} className={css.linkItem}>
                                    <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className={css.footerLink}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className={css.contactSection}>
                        <div className={css.contactItem}>
                            <span className={css.contactIcon}>✉️</span>
                            <span className={css.contactText}>Info@Standify.com</span>
                        </div>

                        <div className={css.contactItem}>
                            <span className={css.contactIcon}>📞</span>
                            <span className={css.contactText}>+2349069591656</span>
                        </div>

                        {/* Social Media Links */}
                        <div className={css.socialMediaSection}>
                            <a href="https://linkedin.com" className={css.socialLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <span>💼</span>
                            </a>
                            <a href="https://twitter.com" className={css.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <span>🐦</span>
                            </a>
                            <a href="https://facebook.com" className={css.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <span>�</span>
                            </a>
                            <a href="https://instagram.com" className={css.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <span>📷</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className={css.copyrightSection}>
                    <p className={css.copyrightText}>
                        © 2025, Elitetech.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
