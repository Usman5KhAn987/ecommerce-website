// components/Hero.js
import React, { useState } from 'react';
import styles from '@/styles/Newcloths.module.css';
import Link from 'next/link';

export default function Newcloths()  {
  const [activeIndex] = useState(0);

  return (
    <>
    <section className={styles.hero}>
      <div className={styles.content}>
       <h1 className={styles.title}>#New Arrival</h1>
            <p className={styles.description}>
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
            <Link href="/shop">
              <button className={styles.button}>Shop Now</button>
            </Link>
      </div>
    </section>
    </>
  );
};


