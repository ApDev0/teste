import React from 'react'
import styles from '../styles/home.module.scss'
import Head from 'next/head'
export default function Home() {
  return (
    <main className={styles.pageContent}>
      <Head>
        <title>Consulado de Angola no Porto | Inicio</title>
      </Head>
        <h1>Página Inicial</h1>
    </main>
  )
}
