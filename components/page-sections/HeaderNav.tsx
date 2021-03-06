import styles from '../../styles/components/Header.module.scss'
import React, { KeyboardEvent, useState } from 'react'
import LinkButton from '../buttons/LinkButton'

const HeaderNav: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  // even though the mobile nav only shows on mobile, let's imagine the possibility someone is using an external keyboard with their device
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>): void => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      setShowMobileNav(false)
    }
  }

  return (
    <header
      className={[styles.header, showMobileNav ? styles['is-open'] : ''].join(' ')}
      onKeyDown={handleKeyDown}
    >
      <img src="/images/logo.svg" alt="Shortly Logo" className={styles.logo} />

      <button
        className={styles['mobile-trigger']}
        onClick={(): void => setShowMobileNav(!showMobileNav)}
      >
        {/* {Array(3)
          .fill(null)
          .map(() => ( */}
        <span className={styles.dash}></span>
        <span className={styles.dash}></span>
        <span className={styles.dash}></span>
        {/* ))} */}
      </button>

      <nav className={`${styles.nav} ${styles['nav__main']}`}>
        <ul>
          <li className={styles['nav-item']}>
            <a href="#">Features</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="#">Pricing</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>

      <nav className={`${styles.nav} ${styles['nav__secondary']}`}>
        <ul>
          <li className={styles['nav-item']}>
            <a href="#">Login</a>
          </li>
          <li className={styles['signup']}>
            <LinkButton sm href="#">
              Sign Up
            </LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
