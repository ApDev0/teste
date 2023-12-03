import { useEffect, useState } from 'react'
import styles from '../styles/home.module.scss'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'

import comunImage from '../../public/comuncados/isabel.jpg'
import { Button } from '@/components/ui/Button'
export default function Home() {
  const [sliderPerView, setSliderPerView] = useState(1)
  const data = [
    { id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png', titulo: 'Um bom programador mantem a disciplina' },
    { id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png', titulo: 'As reuniões são igualmente importantes' },
    { id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png', titulo: 'A prática leva a perfeição' },
    { id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png', titulo: 'Ter um portfólio atrativo atrai novas oportunidades' }
  ]

  useEffect(() => {

    function handleResize(){
      if(window.innerWidth < 720){
        setSliderPerView(1)
      }if(window.innerWidth > 720 && window.innerWidth <= 960){
        setSliderPerView(3)
      }else{
        setSliderPerView(4)
      }
    }

    handleResize();
  })


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

      <section className={styles.Comunicados}>
        <h3>Noticias</h3>
        <hr className={styles._lines} />
        <Swiper
          modules={[EffectCards, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={250}
          slidesPerView={4}
          navigation={false}
          pagination={false}
          autoplay={{ delay: 6000 }}
          style={{
            marginTop: "2rem",
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
                <Button>
                  <Link href={'/'} >
                    Ver
                  </Link>
                </Button>
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
                <Button>
                  <Link href={'/'} >
                    Ver
                  </Link>
                </Button>
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
                <Button>
                  <Link href={'/'} >
                    Ver
                  </Link>
                </Button>
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
                <Button>
                  <Link href={'/'} >
                    Ver
                  </Link>
                </Button>
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
                <Button>
                  <Link href={'/'} >
                    Ver
                  </Link>
                </Button>
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
                <Button>
                  <Link href={'/'} >
                    Ver
                  </Link>
                </Button>
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
                <Button>
                  <Link href={'/'} >
                    Ver
                  </Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </section>
    </main>
  )
}
