import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import Logo from '../../../public/assets/mirex.png'
import Link from 'next/link';
import { Input } from '../ui/Input';
import { IoIosMenu, IoIosArrowDown, IoMdClose, IoIosArrowUp } from "react-icons/io";

import items from './items';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [dropdownStates, setDropdownStates] = useState<{ [key: string]: boolean }>({});


    const handleDropdownClick = (dropdownKey: string) => {
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [dropdownKey]: !prevStates[dropdownKey],
        }));
    };

    function handleNav() {
        setMenuOpen(!menuOpen);
    }

    function closeMenu() {
        setMenuOpen(false)
    }


    return (
        <header className={styles.HeaderContent}>
            <div className={styles.navBarContent}>
                <div className={styles.logoContent}>
                    <Link href={'/'} rel='preload'>
                        <Image alt='Mirex Logo' src={Logo} height={50} width={300} />
                        <h4>Consulado Geral de Angola no Porto</h4>
                    </Link>
                </div>

                <nav className={`${styles.navBarMenu} ${menuOpen ? styles.showNav : ''} `}>
                    <div className={styles.navBarEnd}>
                            {items.map((item, i) => (
                                <li key={i} className={styles.navBarItem}>
                                    {item.items ? (
                                        <div>
                                            <span onClick={() => handleDropdownClick(item.title)}>{item.title} {dropdownStates[item.title] ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                            {dropdownStates[item.title] && (
                                                <ul className={styles.dropdown}>
                                                    {item.items.map((subitem, j) => (
                                                        <li key={j}>
                                                            <div>
                                                                <span onClick={() => handleDropdownClick(subitem.title)}>{subitem.title} {dropdownStates[subitem.title] ? <IoIosArrowUp /> : <IoIosArrowDown />} </span>
                                                                {dropdownStates[subitem.title] && (
                                                                    <ul className={styles.dropdown2}>
                                                                        {subitem.subitem?.map((subitem, sb) => (
                                                                            <li key={sb} className={styles.subItem}>
                                                                                <Link href={subitem.path} >{subitem.title}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link href={item.path} onClick={closeMenu}>{item.title}  </Link>
                                    )}
                                </li>
                            ))}
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
                            menuOpen ? <IoMdClose size={35} /> : <IoIosMenu size={35} />
                        }
                    </div>
                </div>
            </div>
            <hr className={styles._lines} />
        </header>
    )
}

export default Navbar