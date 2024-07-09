// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navabr.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarimage}>
        <Image src="/glasses.png" alt="Glasses" width={300} height={60} />
      </div>
      <div className={styles.navmenu} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </div>
      <ul className={`${styles.navlist} ${isOpen ? styles.active : ''}`}>
        <li className={styles.navitem}>
          <div className={styles.navlink} onClick={toggleMenu}>
            <strong>Home</strong>
          </div>
        </li>
        <li className={styles.navitem}>
          <div className={styles.navlink} onClick={toggleMenu}>
           <strong><a href='/Product2'>Product</a></strong>
          </div>
        </li>
        <li className={styles.navitem}>
          <div className={styles.navlink} onClick={toggleMenu}>
          <strong>Sales</strong>
          </div>
        </li>
        <li className={styles.navitem}>
          <div className={styles.navlink} onClick={toggleMenu}>
            <strong><a href='/Contacts'>Contact</a></strong>
          </div>
        </li>
        <li className={`${styles.icon} ${styles.cart}`}>
          <Link href="/cart" passHref>
            <FontAwesomeIcon icon={faShoppingCart} size={25} />
          </Link>
        </li>
        <li className={`${styles.icon} ${styles.home}`}>
          <Link href="/Cards" passHref>
            <FontAwesomeIcon icon={faHome} width={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
