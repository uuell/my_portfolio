import s from './Section.module.css'
import styles from './Experience.module.css'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <>
      <div className={s.divider} />
      <section id="experience" className={s.wrap}>
        <p className={s.label}>04 / Experience</p>
        <h2 className={s.title}>Work & Projects</h2>

        <div className={styles.list}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.left}>
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.type}>{exp.type}</span>
              </div>
              <div className={styles.right}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <p className={styles.desc}>{exp.description}</p>
                <ul className={styles.highlights}>
                  {exp.highlights.map(h => (
                    <li key={h} className={styles.highlight}>
                      <span className={styles.bullet}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
