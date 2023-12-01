import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Logo from '../../../public/assets/footer_angola.png'
function Footer() {
  return (
    <section className={styles.FooterContent}>
      <div className={styles.LogoFooter}>
        <h1>MIREX</h1>
      </div>
    </section>
  )
}

export default Footer