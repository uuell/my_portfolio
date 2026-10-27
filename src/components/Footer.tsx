import styles from './Footer.module.css'
import { personal } from '../data/content'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <img src="/logo.png" alt="KV" />
        </a>
        <div className={styles.center}>
          <p className={styles.name}>{personal.name}</p>
          <p className={styles.sub}>{personal.tagline}</p>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} — Made with Purpose.</p>
      </div>
    </footer>
  )
}
