"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'
import { Locale } from '@/i18n.config'

export default function Header({ 
  dict, 
  lang 
}: { 
  dict: any, 
  lang: Locale 
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const switchLang = (target: string) => {
    if (!pathname) return `/${target}`
    const segments = pathname.split('/')
    segments[1] = target
    return segments.join('/')
  }

  const navLinks = [
    { href: `/${lang}/projects`, label: lang === 'el' ? 'Έργα' : 'Works' },
    { href: `/${lang}/renovation`, label: lang === 'el' ? 'Ανακαίνιση' : 'Renovation' },
    { href: `/${lang}/about`, label: lang === 'el' ? 'Πρακτική' : 'Practice' },
    { href: `/${lang}/contact`, label: lang === 'el' ? 'Επικοινωνία' : 'Contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href={`/${lang}`} className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Image 
            src="/images/logo.png" 
            alt="CUBICS Logo" 
            width={120} 
            height={32} 
            style={{ width: 'auto', height: '32px' }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.menu}>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`${styles.menuLink} ${isActive ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className={styles.actions}>
          {/* Phone Link */}
          <a href="tel:+302610222188" className={styles.phoneLink}>
            +30 2610 222188
          </a>

          {/* Language Switcher */}
          <div className={styles.langSwitcher}>
            <Link href={switchLang('el')} className={lang === 'el' ? styles.activeLang : ''}>EL</Link>
            <span className={styles.langSeparator}>|</span>
            <Link href={switchLang('en')} className={lang === 'en' ? styles.activeLang : ''}>EN</Link>
          </div>

          <button className={styles.mobileMenuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href)
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`${styles.mobileMenuLink} ${isActive ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </header>
  )
}
