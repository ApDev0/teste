import { useEffect, useState } from 'react'
import styles from '../styles/home.module.scss'
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCards, Pagination } from 'swiper/modules'

import { FaPassport } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi2";
import { GiAirplaneDeparture } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

import Link from 'next/link'
import Image from 'next/image'

import comunImage from '../../public/comuncados/isabel.jpg'
import { Button } from '@/components/ui/Button'
import Layout from '../components/layouts/index';


export default function Home() {

  const [swiperEffect, setSwiperEffect] = useState('fade');
  const [slidesPerView, setSlidesPerView] = useState(4);

  const data = [
    { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png', titulo: 'Um bom programador mantem a disciplina' },
    { id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png', titulo: 'As reuniões são igualmente importantes' },
    { id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png', titulo: 'A prática leva a perfeição' },
    { id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png', titulo: 'Ter um portfólio atrativo atrai novas oportunidades' }
  ]

  useEffect(() => {
    // Verificar o tamanho da tela e definir o efeito do Swiper
    function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setSwiperEffect('cards');
        setSlidesPerView(1);
      } else {
        setSwiperEffect('fade');
        setSlidesPerView(4);
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
    <main className={styles.pageContent}>
      <Head>
        <title>Consulado de Angola no Porto | Inicio</title>
      </Head>
      <div className={styles.Banner}>
        <Swiper
          slidesPerView={1}
          pagination={false}
          navigation={false}
          autoplay={false}
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
      <div className={styles.wonerServices}>
        <ul className={styles.ServiceList}>
          <li>
            <div className={styles.Icon}>
              <FaPassport size={24} className={styles.svg} />
            </div>
            <Link href={'/'}>  Passaporte no estrangeiro</Link>
          </li>
          <li>
            <div className={styles.Icon}>
              <HiOutlineIdentification size={24} className={styles.svg} />
            </div>
            <Link href={'/'}>Bilhete de Identidade no Estrangeiro</Link>
          </li>
          <li>
            <div className={styles.Icon}>
              <GiAirplaneDeparture size={24} className={styles.svg} />
            </div>
            <Link href={'/'}>Alertas de Viagens</Link>
          </li>
          <li>
            <div className={styles.Icon}>
              <CiSearch size={24} className={styles.svg} />
            </div>
            <Link href={'/'}>Consultar estado do pedido</Link>
          </li>
        </ul>
      </div>

      <section className={styles.Noticias}>
        <h3>Noticias</h3>
        <hr className={styles._lines} />
        <div className={styles.Carousel_section}>
          <Swiper
            modules={[EffectCards, EffectFade, Pagination]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            pagination={true}
            loop={true}
            style={{
              "height": "28rem"
            }}
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


      <section className={styles.aboutUs}>

      </section>
    </main >
  )
}
