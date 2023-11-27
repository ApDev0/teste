import React, { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import Logo from '../../../public/assets/mirex.png'
import Link from 'next/link';
import { Input } from '../ui/Input';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
function Navbar() {

    const navItems = [
        {
            title: "Inicio",
            path: '/'
        },
        {
            title: "Consulado",
            path: '/consulado'
        },
        {
            title: "Serviços",
            path: '/servicos'
        },
        {
            title: "Angola",
            path: '/angola'
        },
        {
            title: "Contactos",
            path: '/contactos'
        },
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    function handleNav() {
        setMenuOpen(!menuOpen);
    }


    return (
        <>
            <div className={styles.navBarContent}>
                <div className={styles.logoContent}>
                    <Link href={'/'} rel='preload'>
                        <Image alt='Mirex Logo' src={Logo} height={50} width={250} />
                        <h4>Consulado Geral de Angola no Porto</h4>
                    </Link>
                </div>

                <nav className={`${styles.navBarMenu} ${menuOpen ? styles.showNav : ''} `}>
                    <div className={styles.navBarEnd}>
                        <ul>
                            <li className={styles.navBarItem}>
                                {
                                    navItems.map((item, i) => {
                                        return (
                                            <Link  key={i} href={item.path}>{item.title}</Link>
                                        )
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className={styles.SearchArea}>
                    <Input
                        placeholder='Buscar'
                    />
                </div>

                <div id={styles.navBarBurguer} >
                    <div onClick={handleNav} >
                        {
                            menuOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30}/>
                        }
                    </div>
                </div>

            </div>
            <hr className={styles._lines} />
        </>
    )
}

export default Navbar