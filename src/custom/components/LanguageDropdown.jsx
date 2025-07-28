import styles from './LanguageDropdown.module.css';

export default function LanguageDropdown() {
    return <select className={styles.languageSelect}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
    </select>
}