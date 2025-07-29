import { useState } from 'react';
import { useTheme } from '../../../../../context/ThemeContext';
import styles from "./Header.module.css";
import logoIcon from "../../../../../assets/logo.png";

export default function Header() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [activeNavItem, setActiveNavItem] = useState('Home');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ['Home', 'Marketplace', 'Post Project'];
    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' }
    ];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language.name);
        setIsLanguageDropdownOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        setIsMobileMenuOpen(false); // Close mobile menu when item is selected
    };

    return (
        <header className={styles.root}>
            {/* Logo */}
            <img src={logoIcon} alt="Standify" className={styles.logo} />

            {/* Desktop Navigation Links */}
            <nav className={styles.navigation}>
                {navItems.map((item) => (
                    <button
                        key={item}
                        className={`${styles.navItem} ${activeNavItem === item ? styles.navItemActive : ''}`}
                        onClick={() => handleNavItemClick(item)}
                    >
                        {item}
                        <div className={styles.navItemUnderline}></div>
                    </button>
                ))}
            </nav>

            {/* Desktop Auth Group */}
            <div className={styles.authGroup}>
                <button className={`${styles.authButton} ${styles.loginButton}`}>
                    Login
                </button>
                <button className={`${styles.authButton} ${styles.registerButton}`}>
                    Register
                </button>
            </div>

            {/* Desktop & Mobile Controls Group */}
            <div className={styles.controlsGroup}>
                {/* Language Dropdown */}
                <div className={styles.languageDropdown}>
                    <button
                        className={styles.languageButton}
                        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    >
                        <span className={styles.languageIcon}>🌐</span>
                        <span className={styles.languageText}>{selectedLanguage}</span>
                        <span className={`${styles.dropdownArrow} ${isLanguageDropdownOpen ? styles.dropdownArrowOpen : ''}`}>
                            ▼
                        </span>
                    </button>

                    {isLanguageDropdownOpen && (
                        <div className={styles.languageDropdownMenu}>
                            {languages.map((language) => (
                                <button
                                    key={language.code}
                                    className={`${styles.languageOption} ${selectedLanguage === language.name ? styles.languageOptionActive : ''}`}
                                    onClick={() => handleLanguageSelect(language)}
                                >
                                    <span className={styles.languageFlag}>{language.flag}</span>
                                    <span>{language.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Theme Toggle */}
                <button
                    className={`${styles.themeButton} ${isDarkMode ? styles.themeButtonDark : ''}`}
                    onClick={toggleTheme}
                    aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                    <span className={`${styles.themeIcon} ${styles.sunIcon} ${!isDarkMode ? styles.themeIconActive : ''}`}>
                        ☀️
                    </span>
                    <span className={`${styles.themeIcon} ${styles.moonIcon} ${isDarkMode ? styles.themeIconActive : ''}`}>
                        🌙
                    </span>
                    <span className={styles.themeText}>
                        {isDarkMode ? 'Light' : 'Dark'}
                    </span>
                </button>

                {/* Mobile Hamburger Menu */}
                <button
                    className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenuOverlay} onClick={toggleMobileMenu}>
                    <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                        {/* Mobile Navigation */}
                        <nav className={styles.mobileNavigation}>
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    className={`${styles.mobileNavItem} ${activeNavItem === item ? styles.mobileNavItemActive : ''}`}
                                    onClick={() => handleNavItemClick(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Auth Buttons */}
                        <div className={styles.mobileAuthGroup}>
                            <button className={`${styles.authButton} ${styles.loginButton}`}>
                                Login
                            </button>
                            <button className={`${styles.authButton} ${styles.registerButton}`}>
                                Register
                            </button>
                        </div>

                        {/* Mobile Theme Toggle */}
                        <div className={styles.mobileThemeSection}>
                            <h4 className={styles.mobileThemeTitle}>Theme</h4>
                            <button
                                className={`${styles.mobileThemeButton} ${isDarkMode ? styles.mobileThemeButtonDark : ''}`}
                                onClick={toggleTheme}
                                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                            >
                                <span className={styles.mobileThemeIcon}>
                                    {isDarkMode ? '🌙' : '☀️'}
                                </span>
                                <span className={styles.mobileThemeText}>
                                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                                </span>
                                <span className={styles.mobileThemeToggle}>
                                    <span className={`${styles.toggleSwitch} ${isDarkMode ? styles.toggleSwitchDark : ''}`}></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}