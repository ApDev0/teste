import { useEffect, useState } from 'react'
import styles from '../styles/home.module.scss'
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

import { FaPassport } from "react-icons/fa";
import { HiOutlineIdentification, HiPhone } from "react-icons/hi2";
import { GiAirplaneDeparture } from "react-icons/gi";
import { CiSearch, CiCalendarDate, CiCircleChevRight, CiLocationOn } from "react-icons/ci";

import Link from 'next/link'
import Image from 'next/image'

import location from '../../public/assets/location(5).jpg'

import NoticiaSection from '@/components/NoticiasSection';

import CaroselComunicados from '@/components/comunicadosCarousel';
import Banner from '@/components/banner';

export default function Home() {



  return (
    <main className={styles.pageContent}>
      <Head>
        <title>Consulado de Angola no Porto | Inicio</title>
      </Head>
      <Banner />
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
      <CaroselComunicados />

      <section className={styles.aboutUs}>
        <div className={styles.TimeAtend}>
          <div className={styles.TimeSec}>
            <h2>Horario de atendimento</h2>
            <CiCalendarDate size={100} />
          </div>

          <div className={styles.Horario}>
            <div className={styles.util}>
              <h2 >Segunda a Sexta </h2><CiCircleChevRight size={24} color={'green'} />  <p>09H30 Às 12H00</p>
            </div>
            <div className={styles.fds}>
              <h2>Sabados e Domingos </h2><CiCircleChevRight size={24} color={'red'} />  <p>Encerrados</p>
            </div>
            <div className={styles.feriados}>
              <h2>Feriados</h2><CiCircleChevRight size={24} color={'red'} />  <p>Encerrados</p>
            </div>
          </div>

          <button>
            Agendar Visita
          </button>
        </div>
        <p>Por favor, para sua comodidade evite deslocar-se ao Consulado Geral sem antes verificar os requisitos necessarios para o serviço que pretenda.</p>
      </section>

      <NoticiaSection />

      <section className={styles.Location}>
        <div className={styles.adress}>
          <Image src={location} alt='ponto de localização do consulado' width={350} className={styles.locationImg} />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CiLocationOn size={50} className={styles.svg} />
            <h1>ENDEREÇO: RUA DOUTOR CARLOS CAL BRANDÃO <br />
              132/138  C.P. 4050-160 PORTO</h1>

          </div>
        </div>

        <div className={styles.contactos}>
          <h3>Contactos</h3>
          <div className={styles.numberp}>
            <HiPhone /><p> 222 058 902 </p>
          </div>
          <div className={styles.numberp}>
            <HiPhone /><p>  926 542 574 / 911 145 731 (Urgencias)</p>
          </div>
        </div>
      </section>

    </main >
  )
}