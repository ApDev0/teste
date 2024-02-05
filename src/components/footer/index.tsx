import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import mirexLogo from '../../../public/assets/footer_angola.png'
import Logo from '../../../public/assets/footer-logo.png'
import Link from 'next/link'

function Footer() {
  return (
    <section className={styles.FooterContent}>
      <div className={styles.LogoFooter}>
        <Image src={Logo} alt='Logo do governo de angola' className={styles.logoImg} />
        <hr className={styles.line} />
        <Image src={mirexLogo} alt='Logo do mirex angola' className={styles.mirexlogo} />
      </div>
      <div className={styles.textFooter}>
        <p>© 2024 CONSULADO GERAL DA REPÚBLICA DE ANGOLA NO PORTO</p>
        <p>Designed By <Link href={'https://www.apdev.com'}>DevSembo</Link></p>
      </div>

    </section>
  )
}

export default Footer