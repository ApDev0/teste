import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import foto from '../../../../../public/assets/insc.jpg'
export default function inscricao_consular() {
    return (
        <div>
            <div className={styles.banner}>
                <Image src={foto} alt='Quedas de Calandula angola' />
                <h3>Inscrição Consular</h3>
            </div>
            <div className={styles.breadCrumb}>
                <p><Link href={'#'}>Serviços</Link> {'>'} <Link href={'#'}>Registos</Link> {'>'} <Link href={'/servicos/registos/inscricao_consular'}>Inscrição Consular</Link></p>
            </div>
            <div className={styles.info}>
                <p>A Inscrição Consular é o primeiro acto consular que se pratica a favor de um nacional
                 que esteja a residir no estrangeiro. É um acto voluntário, 
                 mas obrigatório para a prática de qualquer outro acto consular,
                  nomeadamente para emissão de passaporte, transcrição de nascimento, obtenção de procuração, entre outros documentos.</p>
            </div>
            <div className={styles.tratar}>
                <h3>Quer pedir a inscrição consular?</h3>
                <Link href={'servicos/registos/iscricao_consular/inscricao_consular_1_vez'}>1ª Vez</Link>
                <Link href={'servicos/registos/iscricao_consular/renovacao_ou-2a-via'}>Renovação e 2ª Via</Link>
            </div>
        </div>
    )
}
