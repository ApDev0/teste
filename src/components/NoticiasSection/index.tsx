import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import consu from '../../../public/banner/consu.jpg'

import Link from 'next/link'

const NoticiaSection = () => {
    return (
        <section className={styles.NoticiasSection}>
            <div className={styles.bannerPrincipal}>
                <Link href={'/noticias/id=1'}>
                    <div className={styles.bannerImage}>
                        <Image src={consu} alt='Foto de isabel dos santos do jornal de noticias' className={styles.bannerImg} />
                    </div>
                    <div className={styles.BannerBody}>
                        <div className={styles.bannerTitulo}>
                            <h2>Novo Site</h2>
                        </div>
                        <div className={styles.bannerText}>
                            <p>O Consulad de Angola no Porto,
                                apresenta o novo website consular,
                                onde os utentes já poderão agendar as vistas consultar os documentos que
                                precisam para resolver qualquer questão que tenham</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.bannersSecundarios}>
                <div className={styles.banerMenor}>

                </div>
            </div>
        </section>)
}

export default NoticiaSection