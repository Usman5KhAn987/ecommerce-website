import React from 'react';
import styles from '@/styles/Cards.module.css';
import Image from 'next/image';

export default function Cards() {
  return (
    <>
      <div className={styles.header}>
        <h3>Why Shop With Us</h3>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
        <Image
        src="/qua.webp"
        width={100}
        height={80}
      />
          <h1>Fast Delivery</h1>
          <p>Variations of passages of Lorem Ipsum available</p>
        </div>
        <div className={styles.card}>
        <Image
        src="/qua.webp"
        width={100}
        height={80}
      />
          <h1>Best Quality</h1>
          <p>We provide the best quality products</p>
        </div>
        <div className={styles.card}>
        <Image
        src="/qua.webp"
        width={100}
        height={80}
      />
          <h1>24/7 Support</h1>
          <p>We offer 24/7 customer support</p>
        </div>
      </div>
    </>
  );
}
