import React from 'react';
import styles from '@/styles/Products.module.css';
import Image from 'next/image';

export default function Products() {
  return (
    <>
      <div>
        <div className={styles.h1}>Our <span className={styles.pro}>products</span></div>
        <div className={styles.productconatiner}>
        <div className={styles.cards}>
              <Image src="/p3.png" width={200} height={200} />
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add To Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
          <div className={styles.cards}>
              <Image src="/p8.png" width={200} height={200} />
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add To Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
          <div className={styles.cards}>
              <Image src="/shirt.png" width={200} height={200} />
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add To Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
        </div>
        <div className={styles.productconatiner}>
          <div className={styles.cards}>
              <Image src="/shirt.png" width={200} height={200} />
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add To Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
          <div className={styles.cards}>
            <Image src="/p8.png" width={200} height={200} />
            <div className={styles.overlay}>
              <button className={styles.addToCart}>Add To Cart</button>
              <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
          <div className={styles.cards}>
            <Image src="/p3.png" width={200} height={200} />
            <div className={styles.overlay}>
              <button className={styles.addToCart}>Add To Cart</button>
              <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
        </div>
        <div className={styles.productconatiner}>
        <div className={styles.cards}>
            
              <Image src="/p3.png" width={200} height={200} />
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add To Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
          <div className={styles.cards}>
           
              <Image src="/shirt.png" width={200} height={200} />
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add To Cart</button>
                <button className={styles.buyNow}>Buy Now</button>
             
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
          <div className={styles.cards}>
            <Image src="/p3.png" width={200} height={200} />
            <div className={styles.overlay}>
              <button className={styles.addToCart}>Add To Cart</button>
              <button className={styles.buyNow}>Buy Now</button>
            </div>
            <div className={styles.detailbox}>
            <h5>$88</h5>
            <h6>khan</h6>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>View All Products</button>
        </div>
      </div>
    </>
  );
}
