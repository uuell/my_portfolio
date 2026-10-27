import styles from './Navbar.module.css'
import { personal } from '../data/content'

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar({ theme, toggle }: { theme: string; toggle: () => void }) {
  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>
        <img src="/logo.png" alt="KV" />
      </a>
      <div className={styles.right}>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href={personal.resumeUrl} download className={styles.resumeBtn}>
          Download CV
        </a>
        <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  )
}
