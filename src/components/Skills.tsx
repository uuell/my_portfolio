import { useState } from 'react'
import s from './Section.module.css'
import styles from './Skills.module.css'
import { skills } from '../data/content'

export default function Skills() {
  const [active, setActive] = useState(0)
  const current = skills[active]

  return (
    <>
      <div className={s.divider} />
      <section id="skills" className={s.wrap}>
        <p className={s.label}>02 / Skills</p>
        <h2 className={s.title}>Tech Stack</h2>
        <p className={s.subtitle}>
          The tools and technologies I use to design, build, and ship production applications.
        </p>

        <div className={styles.layout}>
          {/* Tab list */}
          <div className={styles.tabs}>
            {skills.map((sk, i) => (
              <button
                key={sk.category}
                className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabShort}>{sk.short}</span>
                <span className={styles.tabFull}>{sk.category}</span>
              </button>
            ))}
          </div>

          {/* Skill list */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelShort}>{current.short}</span>
              <span className={styles.panelCategory}>{current.category}</span>
            </div>
            <ul className={styles.list}>
              {current.items.map(item => (
                <li key={item} className={styles.item}>
                  <span className={styles.dot} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
