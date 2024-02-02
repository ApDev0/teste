import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import styles from './styles.module.scss';
import Image from 'next/image'


function Banner() {

    const data = [
        { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png', titulo: 'Um bom programador mantem a disciplina' },
        { id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png', titulo: 'As reuniões são igualmente importantes' },
        { id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png', titulo: 'A prática leva a perfeição' },
        { id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png', titulo: 'Ter um portfólio atrativo atrai novas oportunidades' }
    ]


    return (
        <div className={styles.Banner}>
            <Swiper modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                pagination={false}
                navigation={false}
                autoplay={{
                    delay: 2000
                }}
                className={styles.sliderContent}
                loop={true}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} >
                        <Image
                            src={item.image}
                            alt='slider'
                            width={80}
                            height={80}
                            layout='responsive'
                            priority={true}
                            rel='preload'
                            className={styles.slide_item}
                        />
                        <div className={styles._BannerTitulo}>
                            <h4>
                                {item.titulo}
                            </h4>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    )
}

export default Banner