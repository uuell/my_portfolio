import Constellation from './Constellation'
import styles from './Hero.module.css'
import { personal } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Constellation />

      <div className={styles.content}>
        <p className={styles.eyebrow}>// {personal.tagline}</p>
        <h1 className={styles.name}>{personal.name.toUpperCase()}</h1>
        <p className={styles.role}>{personal.role}</p>
        <p className={styles.bio}>{personal.bio}</p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>View My Projects</a>
          <a href="#contact" className={styles.btnGhost}>Get in touch</a>
        </div>
        <p className={styles.stack}>
          STACK: Nodejs // React // Nextjs // Python // Flask // YOLOv8 // PostgreSQL // Microprocessor
        </p>
      </div>

      <div className={styles.scrollArrow}>
        <svg width="16" height="30" viewBox="0 0 16 30" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <line x1="8" y1="1" x2="8" y2="24"/>
          <polyline points="2,18 8,26 14,18"/>
        </svg>
      </div>
    </section>
  )
}
