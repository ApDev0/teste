import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import consu from '../../../public/banner/consu.jpg'
import rui from '../../../public/banner/rui.jpg'
import Link from 'next/link'

const NoticiaSection = () => {
    return (
        <section className={styles.NoticiasSection}>
            <div className={styles.divInfo}>
                <h3>Noticias</h3>
                <hr className={styles._lines} />
            </div>

            <div className={styles.noticiasBanners}>

                <div className={styles.bannerPrincipal}>
                    <Link href={'/noticias/id=1'}>
                        <div className={styles.bannerImage}>
                            <Image src={consu} alt="Foto de isabel dos santos do jornal de noticias" className={styles.bannerImg} />
                        </div>
                        <div className={styles.BannerBody}>
                            <div className={styles.bannerTitulo}>
                                <h2>Novo Site</h2>
                            </div>
                            <div className={styles.bannerText}>
                                <p>O Consulado de Angola no Porto,
                                    apresenta o novo website consular,
                                    onde os utentes já poderão agendar as vistas consultar os documentos que
                                    precisam para resolver qualquer questão que tenham</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.bannersSecundarios}>
                    <div className={styles.banerMenor}>
                        <Link href={'noticias/id=2'}>
                            <div className={styles.bannerImage}>
                                <Image src={rui} alt="noticias" className={styles.bannerImg} />
                            </div>
                            <div className={styles.BannerBody}>
                                <div className={styles.bannerTitulo}>
                                    <h2>Morreu Rui Mingas</h2>
                                </div>
                                <div className={styles.bannerText}>
                                    <p>Morreu em Lisboa Ruy Mingas, antigo embaixador de Angola em Portugal,
                                        conhecido músico da resistência angolana,
                                        um dos autores da conhecida canção "Meninos do Huambo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.banerMenor}>
                        <Link href={'noticias/id=2'}>
                            <div className={styles.bannerImage}>
                                <Image src={rui} alt="noticias" className={styles.bannerImg} />
                            </div>
                            <div className={styles.BannerBody}>
                                <div className={styles.bannerTitulo}>
                                    <h2>Morreu Rui Mingas</h2>
                                </div>
                                <div className={styles.bannerText}>
                                    <p>Morreu em Lisboa Ruy Mingas, antigo embaixador de Angola em Portugal,
                                        conhecido músico da resistência angolana,
                                        um dos autores da conhecida canção "Meninos do Huambo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.banerMenor}>
                        <Link href={'noticias/id=2'}>
                            <div className={styles.bannerImage}>
                                <Image src={rui} alt="noticias" className={styles.bannerImg} />
                            </div>
                            <div className={styles.BannerBody}>
                                <div className={styles.bannerTitulo}>
                                    <h2>Morreu Rui Mingas</h2>
                                </div>
                                <div className={styles.bannerText}>
                                    <p>Morreu em Lisboa Ruy Mingas, antigo embaixador de Angola em Portugal,
                                        conhecido músico da resistência angolana,
                                        um dos autores da conhecida canção "Meninos do Huambo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.banerMenor}>
                        <Link href={'noticias/id=2'}>
                            <div className={styles.bannerImage}>
                                <Image src={rui} alt="noticias" className={styles.bannerImg} />
                            </div>
                            <div className={styles.BannerBody}>
                                <div className={styles.bannerTitulo}>
                                    <h2>Morreu Rui Mingas</h2>
                                </div>
                                <div className={styles.bannerText}>
                                    <p>Morreu em Lisboa Ruy Mingas, antigo embaixador de Angola em Portugal,
                                        conhecido músico da resistência angolana,
                                        um dos autores da conhecida canção "Meninos do Huambo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.banerMenor}>
                        <Link href={'noticias/id=2'}>
                            <div className={styles.bannerImage}>
                                <Image src={rui} alt="noticias" className={styles.bannerImg} />
                            </div>
                            <div className={styles.BannerBody}>
                                <div className={styles.bannerTitulo}>
                                    <h2>Morreu Rui Mingas</h2>
                                </div>
                                <div className={styles.bannerText}>
                                    <p>Morreu em Lisboa Ruy Mingas, antigo embaixador de Angola em Portugal,
                                        conhecido músico da resistência angolana,
                                        um dos autores da conhecida canção "Meninos do Huambo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.banerMenor}>
                        <Link href={'noticias/id=2'}>
                            <div className={styles.bannerImage}>
                                <Image src={rui} alt="noticias" className={styles.bannerImg} />
                            </div>
                            <div className={styles.BannerBody}>
                                <div className={styles.bannerTitulo}>
                                    <h2>Morreu Rui Mingas</h2>
                                </div>
                                <div className={styles.bannerText}>
                                    <p>Morreu em Lisboa Ruy Mingas, antigo embaixador de Angola em Portugal,
                                        conhecido músico da resistência angolana,
                                        um dos autores da conhecida canção "Meninos do Huambo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </section>)
}

export default NoticiaSection