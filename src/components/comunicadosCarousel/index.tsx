import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCards, Pagination, Autoplay, Navigation } from 'swiper/modules'

import Link from 'next/link'
import Image from 'next/image'

import comunImage from '../../../public/comuncados/comunicado.png'
function CaroselComunicados() {

    const [slidesPerView, setSlidesPerView] = useState(4);


    useEffect(() => {
        // Verificar o tamanho da tela e definir o efeito do Swiper
        function handleResize() {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setSlidesPerView(1);
            } else if (screenWidth < 1204) {
                setSlidesPerView(2);
            } else if (screenWidth < 1700) {
                setSlidesPerView(3)
            } else {
                setSlidesPerView(4)
            }

        }

        // Adicionar um ouvinte de redimensionamento
        window.addEventListener('resize', handleResize);

        // Executar a verificação inicial
        handleResize();

        // Remover o ouvinte de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <>
            <section className={styles.Noticias}>
                <h3>Comunicados</h3>
                <hr className={styles._lines} />
                <div className={styles.Carousel_section}>
                    <Swiper
                        modules={[EffectCards, EffectFade, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        pagination={true}
                        autoplay={{
                            delay: 3000
                        }}
                        loop={true}
                        className={styles.sliderStyle}
                    >
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles._CardContent}>
                                <div className={styles.CardImage}>
                                    <Image src={comunImage} alt='Imagem de Isabel dos santos' />
                                </div>
                                <div className={styles.CardBody}>
                                    <div className={styles.CardTitulo}>Ordem de prisão</div>
                                    <div className={styles.CardText}>
                                        Isabel Dos Santos terá prejudicado Estado angolano em mais de 200 milhões de euros.
                                        Empresária acusada de peculato, associação criminosa,
                                        tráfico de influência e lavagem de dinheiro.
                                        os seus advogados concluem que não existe, até ao momento, qualquer referência à emissão de um mandado.
                                    </div>
                                    <Link href={'/'}>
                                        <button>
                                            <p>Ver</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default CaroselComunicados