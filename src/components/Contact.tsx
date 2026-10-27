import s from './Section.module.css'
import styles from './Contact.module.css'
import { personal } from '../data/content'

export default function Contact() {
  return (
    <>
      <div className={s.divider} />
      <section id="contact" className={s.wrap}>
        <p className={s.label}>06 / Contact</p>
        <h2 className={s.title}>Let's work together.</h2>
        <p className={s.subtitle}>
          If you have a project in mind, need a developer, or just want to connect — feel free to reach out. I'm always open to new opportunities.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Email</div>
            <a href={`mailto:${personal.email}`} className={styles.cardValue}>
              {personal.email}
            </a>
          </div>

          <a href={personal.github} target="_blank" rel="noreferrer" className={`${styles.card} ${styles.cardLink}`}>
            <div className={styles.cardLabel}>GitHub</div>
            <div className={styles.cardValue}>github.com/uuell ↗</div>
          </a>

          {personal.linkedin && (
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className={`${styles.card} ${styles.cardLink}`}>
              <div className={styles.cardLabel}>LinkedIn</div>
              <div className={styles.cardValue}>linkedin.com/in/kingvista ↗</div>
            </a>
          )}

          <a href={personal.instagram} target="_blank" rel="noreferrer" className={`${styles.card} ${styles.cardLink}`}>
            <div className={styles.cardLabel}>Instagram</div>
            <div className={styles.cardValue}>@iv_kinggg ↗</div>
          </a>
        </div>

        <div className={styles.cta}>
          <a href={`mailto:${personal.email}`} className={styles.btn}>
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}
