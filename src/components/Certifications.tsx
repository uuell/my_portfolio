import s from './Section.module.css'
import styles from './Certifications.module.css'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <>
      <div className={s.divider} />
      <section id="certifications" className={s.wrap}>
        <p className={s.label}>05 / Certifications</p>
        <h2 className={s.title}>Selected Certifications</h2>

        <div className={styles.grid}>
          {certifications.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.issuer}>{c.issuer}</span>
                <span className={styles.year}>{c.year}</span>
              </div>
              <div className={styles.name}>{c.name}</div>
              {c.instructor && (
                <div className={styles.instructor}>by {c.instructor}</div>
              )}
              {c.url && (
                <a href={c.url} target="_blank" rel="noreferrer" className={styles.viewLink}>
                  View Certificate ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
