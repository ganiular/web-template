import { useEffect, useState } from 'react';
import { useTheme } from '../../../../../context/ThemeContext';
import styles from "./Header.module.css";
import logoIcon from "../../../../../assets/logo.png";
import { NamedLink } from '../../../../../components';
import { useRouteMatch } from 'react-router-dom';
import { match } from 'path-to-regexp';

function findCurrentNavItem(navItems, path) {
    for (const navItem of navItems) {
        const matchUrl = match(navItem.path, { end: false }); // allow partial match
        const result = matchUrl(path);

        if (result) {
            return navItem;
        }
    }
    return null;
}

export default function Header(props) {
    console.log(props);

    const { location, isAuthenticated, onLogout } = props;
    const { isDarkMode, toggleTheme } = useTheme();
    const [activeNavItem, setActiveNavItem] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            pageName: 'LandingPage',
            path: '/',
        },
        {
            name: 'Marketplace',
            pageName: 'SearchPage',
            path: '/s',
        },
        {
            name: 'Post Project',
            pageName: 'NewListingPage',
            path: '/l/:type',
        },
    ];

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

    useEffect(() => {
        const currentNavItem = findCurrentNavItem(navItems, location?.pathname ?? '');
        setActiveNavItem(currentNavItem?.pageName ?? '');
    }, [navItems]);

    return (
        <header className={styles.root}>
            {/* Logo */}
            <NamedLink name="LandingPage"><img src={logoIcon} alt="Standify Logo" className={styles.logo} /></NamedLink>

            {/* Desktop Navigation Links */}
            <nav className={styles.navigation}>
                {navItems.map((item, index) => (
                    <NamedLink
                        key={index}
                        name={item.pageName}
                        className={`${styles.navItem} ${activeNavItem === item.pageName ? styles.navItemActive : ''}`}
                        onClick={() => handleNavItemClick(item.pageName)}
                    >
                        {item.name}
                        <div className={styles.navItemUnderline}></div>
                    </NamedLink>
                ))}
            </nav>

            {/* Desktop Auth Group */}
            <div className={styles.authGroup}>

                {isAuthenticated ?
                    <button onClick={onLogout} className={`${styles.authButton} ${styles.loginButton}`}>
                        Logout
                    </button>
                    :
                    <>
                        <NamedLink name='LoginPage' className={`${styles.authButton} ${styles.loginButton}`}>
                            Login
                        </NamedLink>
                        {/* <button className={`${styles.authButton} ${styles.registerButton}`}>
                        Register
                    </button> */}
                    </>}
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
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    className={`${styles.mobileNavItem} ${activeNavItem === item.pageName ? styles.mobileNavItemActive : ''}`}
                                    onClick={() => handleNavItemClick(item.pageName)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Auth Buttons */}
                        {<div className={styles.mobileAuthGroup}>
                            {isAuthenticated ?
                                <button onClick={onLogout} className={`${styles.authButton} ${styles.loginButton}`}>
                                    Logout
                                </button>
                                :
                                <>
                                    <NamedLink name='LoginPage' className={`${styles.authButton} ${styles.loginButton}`}>
                                        Login
                                    </NamedLink>
                                    <NamedLink name='SignupPage' className={`${styles.authButton} ${styles.registerButton}`}>
                                        Register
                                    </NamedLink>
                                </>}
                        </div>}

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