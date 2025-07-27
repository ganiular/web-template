import { useInView } from 'react-intersection-observer';
import styles from './FooterSection.module.css';
import commonStyles from '../../MyLandingPage.module.css';

function FooterSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer ref={ref} className={`${styles.footerRoot} ${inView ? styles.animate : ''}`}>
      <div className={styles.footer}>
        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <h3 className={styles.newsletterTitle}>Stay Updated!</h3>
          <form className={styles.newsletterForm}>
            <div className={styles.emailInputContainer}>
              <input type="email" placeholder="Your email" className={styles.emailInput} />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe Now
              </button>
            </div>
          </form>
        </div>

        {/* Main Grid Section */}
        <div className={styles.mainGrid}>
          {/* Logo Column */}
          <div className={styles.logoColumn}>
            <div className={styles.logoWrapper}>
              <h2 className={styles.logoText}>Standify</h2>
              <p className={styles.logoDescription}>
                Your Exhibition Marketplace for the Middle East
              </p>
            </div>
          </div>

          {/* Categories Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Categories</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Booth Design
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Audio Visual
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Lighting
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Printing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className={styles.contactColumn}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span className={styles.contactText}>Info@Standify.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span className={styles.contactText}>+966-xxx-xxx-xxx</span>
              </div>
            </div>

            <div className={styles.socialMedia}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                📘
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                �
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                💼
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                📸
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <p className={styles.copyright}>© 2024 STANDIFY. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
