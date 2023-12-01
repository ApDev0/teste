"use client"
import styles from '../styles/home.module.scss'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
export default function Home() {

  const data = [
    { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png' },
    { id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png' },
    { id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png' },
    { id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png' }
  ]

  return (
    <main className={styles.pageContent}>
      <Head>
        <title>Consulado de Angola no Porto | Inicio</title>
      </Head>
      <div className={styles.Banner}>
        <Swiper
          slidesPerView={1}
          pagination={false}
          navigation={false}
          autoplay={{ delay: 4000 }}
          style={{
            height: '100%',
            
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.image}
                alt='slider'
                layout="responsive"
                width={350}
                height={350}
                className={styles.slide_item}
              />
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </main>
  )
}
