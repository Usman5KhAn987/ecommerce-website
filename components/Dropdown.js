// components/Dropdown.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/Dropdown.module.css';

const Dropdown = ({ title, icon, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={toggleDropdown}>
        <span className={styles.bold}>{title}</span> <FontAwesomeIcon icon={icon} />
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {links.map((link, index) => (
            <a key={index} href={link.href} className={styles.dropdownItem}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

