import s from './Section.module.css'
import styles from './About.module.css'

const highlights = [
  { title: 'Full-Stack Development', desc: 'Building complete web applications from UI to database, using React, Flask, and PostgreSQL.' },
  { title: 'AI & Computer Vision', desc: 'Training and deploying YOLOv8 models, building OCR pipelines, and integrating LLM APIs.' },
  { title: 'IoT Engineering', desc: 'Programming Raspberry Pi and ESP32 devices and connecting them to web dashboards via REST APIs.' },
  { title: 'Clean Code & Systems', desc: 'Writing maintainable, well-structured code with proper architecture from day one.' },
]

export default function About() {
  return (
    <>
      <div className={s.divider} />
      <section id="about" className={s.wrap}>
        <p className={s.label}>01 / About</p>
        <h2 className={s.title}>A developer who builds across the whole stack — web, AI, and hardware.</h2>
        <p className={s.subtitle}>
          I'm an Computer Engineering graduate from the Philippines. I build full-stack web apps, train AI models, and program IoT hardware — whatever the problem needs.
        </p>

        <div className={styles.grid}>
          {highlights.map(h => (
            <div key={h.title} className={styles.card}>
              <div className={styles.cardTitle}>{h.title}</div>
              <p className={styles.cardDesc}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
