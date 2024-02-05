import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Banner from '@/components/banner';

export default function Consulado() {
  return (
    <>
      <Banner />
      <section className={styles.ConsuSection}>
        <div className={styles.breadCrumb}>
          <p><Link href={'/'}>Início</Link> {'>'} <Link href={'/consulado'}>Consulado</Link></p>
        </div>

        <section id={styles.compromisso}>
          <h1>O nosso compromisso</h1>
          <h3>Bem-vindos{'(as)'}  à página oficial do <span>Consulado Geral da República de Angola no Porto.</span></h3>
          <p>Visando melhor servir a comunidade angolana, investidores, empresários, turistas e todas as pessoas que desejam melhor conhecer Angola, país com inúmeras potencialidades, oportunidades de negócio e um povo acolhedor.</p>

          <p>Com intuito de contribuir para o reforço da cooperação bilateral entre Angola e Portugal.</p>

          <p>Quero em meu nome pessoal e no do colectivo de funcionários do Consulado Geral da República de Angola no Porto estabelecer o presente compromisso que visa promover um relacionamento construtivo entre o Consulado e os seus utentes, visando uma melhor prestação de serviço.</p>
          <div className={styles.compromisso}>
            <h2>Comprometemo-nos a: </h2>
            <ol>
              <li>Prestar um serviço de qualidade a todos os utentes, sem qualquer tipo de discriminação.</li>
              <li>Tratar os utentes com profissionalismo, respeito e cortesia de forma justa e imparcial.</li>
              <li>Providenciar um ambiente limpo, seguro e confortável, com acessos e instalações disponíveis para satisfazer as necessidades básicas dos utentes, incluindo os portadores de necessidades especiais.</li>
              <li>Prestar informação exacta e actualizada, utilizando uma linguagem clara e simples, por telefone, pessoalmente, ou através do nosso website.</li>
              <li>Proteger a informação recebida dos utentes e os seus dados pessoais e facilitar o acesso a instalações apropriadas para conversas confidenciais.</li>
              <li>Empenharmo-nos em fornecer um serviço eficiente e pontual.</li>
              <li>Colocar ao dispôr dos utentes os meios necessários para a apresentação de comentários sobre os nossos serviços e funcionários; tratar os comentários com seriedade e rapidez, de forma justa e imparcial; e providenciar ao utente a resposta devida.</li>
              <li>Implementar as medidas de avaliação necessárias para a melhoria contínua dos nossos serviços.</li>
            </ol>
          </div>

          <div className={styles.esperamos}>
            <h2>Esperamos de si:</h2>
            <ol>
              <li>A sua colaboração para alcançarmos a qualidade desejada na nossa prestação.</li>
              <li>O respeito e trato educado a todos os funcionários do Consulado Geral, bem como o reconhecimento do direito do funcionário à dignidade no trabalho.</li>
              <li>O respeito pela manutenção da limpeza, segurança e conforto das instalações e a colaboração no apoio aos utentes portadores de necessidades especiais.</li>
              <li>A utilização dos meios disponíveis para recolher a informação necessária para tratar dos seus assuntos.</li>
              <li>O fornecimento de dados autênticos e o respeito à privacidade dos restantes utentes.</li>
              <li>O respeito pelas informações e orientações recebidas e também pelos prazos estabelecidos.</li>
              <li>A utilização dos meios disponíveis para apresentar os seus comentários sobre os nossos serviços e funcionários. Agradecemos a apresentação de reclamações, bem como de soluções.</li>
              <li>O seu contributo para a melhoria dos nossos serviços através da apresentação de sugestões.</li>
            </ol>
          </div>
        </section>

        <div className={styles.sugestão}>
          <button>Sugestões e Reclamações</button>
        </div>

        <section id={styles.equipa}>
          <h2>Equipa</h2>
          <div className={styles.consuTeam}>
            <h2>CÔNSU GERAL</h2>
            <p>Embaixadora Dulce Gomes</p>
          </div>
          <section className={styles.allTeam}>
            <div className={styles.subTeam}>
              <h2>VICE-CÔNSUL</h2>
              <p>ÁLVARO LUTUCUTA</p>
            </div>
            <div className={styles.subTeam}>
              <h2>VICE-CÔNSUL</h2>
              <p>AVELINA LUÍS</p>
            </div>
          </section>
        </section>

        <section id={styles.horario}>
            <h2>Horário</h2>
            <Link href={'localhost:3000/contactos'}>Saiba o nosso horário e onde estamos</Link>
        </section>
      </section>
    </>
  )
}
