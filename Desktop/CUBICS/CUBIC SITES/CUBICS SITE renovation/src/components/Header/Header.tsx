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
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.menu}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.menuLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.mobileMenuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={styles.mobileMenuLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
