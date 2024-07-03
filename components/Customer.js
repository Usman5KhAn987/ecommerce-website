import React, { useState } from 'react';
import styles from '@/styles/Custmer.module.css';

const Customer = [
  {
    name: 'Anna Trevor',
    role: 'Customer',
    image: 'slide.jpg',
    text: 'Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.'
  },
  {
    name: 'John Doe',
    role: 'Customer',
    image: 'p3.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
  },
  {
    name: 'Jane Smith',
    role: 'Customer',
    image: 'p8.png',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % Customer.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + Customer.length) % Customer.length);
  };

  const { name, role, image, text } = Customer[currentIndex];

  return (
      <div className={styles.testimonialSection}>
      <h2 className={styles.title}>Customer's Testimonial</h2>
      <div className={styles.separator}></div>
      <div className={styles.testimonialContainer}>
        <button className={styles.arrowButton} onClick={handlePrev}>←</button>
        <div className={styles.testimonialContent}>
          <img src={image} alt={name} className={styles.image} />
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
          <div className={styles.box}>
          <p className={styles.text}>{text}</p>
          </div>
        </div>
        <button className={styles.arrowButton} onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Testimonial;



