import React from 'react';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <img src="glasses.png" alt="Famms" className={styles.logo} />
          <div className={styles.info}>
            <p>
              <strong>ADDRESS:</strong>
          <a href="28 White tower, Street Name New York City, USA">28 White tower, Street Name New York City, USA</a>
           </p> 
            <p>
              <strong>TELEPHONE:</strong>
              <a href="tel:+919876543210">+91 987 654 3210</a>
            </p>
            <p>
              <strong>EMAIL:</strong>
              <a href="usmankhan00020@gmail.com">usmankhan00020@gmail.com</a>
            </p>
          </div>
        </div>
        <div className={styles.footerSection2}>
          <h3>MENU</h3>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Services</h3>
          <h3>Testimonial</h3>
          <h3>Blog</h3>
          <h3>Contact</h3>
        </div>
        <div className={styles.footerSection2}>
          <h3>ACCOUNT</h3>
          <h3>Account</h3>
          <h3>Checkout</h3>
          <h3>Login</h3>
          <h3>Register</h3>
          <h3>Shopping</h3>
          <h3>Widget</h3>
        </div>
        <div className={styles.footerSection1}>
          <h3>NEWSLETTER</h3>
          <p>Subscribe by our newsletter and get update protidin.</p>
          <form className={styles.form}>
            <input className={styles.form} type="email" placeholder="Enter Your Mail" />
            <button className={styles.button} type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2021 All Rights Reserved By Free Html Templates</p>
        <p>Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
};





