import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Banner from '@/components/banner';

export default function Consulado() {
  return (
    <>
      <Banner />
      <div className={styles.ConsuSection}>
        <div className={styles.breadCrumb}>
          <p><Link href={'/'}>Início</Link> {'>'} <Link href={'/consulado'}>Consulado</Link></p>
        </div>

        <section id={styles.compromisso}>
          <h1>O nosso compromisso</h1>
          <h3>Bem-vindos{'(as)'}  à página oficial do <span>Consulado Geral da República de Angola no Porto.</span></h3>
          <p>Visando melhor servir a comunidade angolana, investidores, empresários, turistas e todas as pessoas que desejam melhor conhecer Angola, país com inúmeras potencialidades, oportunidades de negócio e um povo acolhedor.</p>

          <p>Com intuito de contribuir para o reforço da cooperação bilateral entre Angola e Portugal.</p>

          <p>Quero em meu nome pessoal e no do colectivo de funcionários do Consulado Geral da República de Angola no Porto estabelecer o presente compromisso que visa promover um relacionamento construtivo entre o Consulado e os seus utentes, visando uma melhor prestação de serviço.</p>
          <h2>Comprometemo-nos a: </h2>
          
        </section>
      </div>
    </>
  )
}
