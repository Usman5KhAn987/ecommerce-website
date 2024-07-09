// components/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Footer2.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <h2 className={styles.heading}>Reach at..</h2>
                    <p className={styles.info}><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</p>
                    <p className={styles.info}><FontAwesomeIcon icon={faPhoneAlt} /> Call +01 1234567890</p>
                    <p className={styles.info}><FontAwesomeIcon icon={faEnvelope} /> demo@gmail.com</p>
                </div>
                <div className={styles.brand}>
                    <h2 className={styles.heading}>Famms</h2>
                    <p className={styles.description}>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                    <div className={styles.social}>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                © 2024 All Rights Reserved By Free Html Templates Distributed By ThemeWagon
            </div>
        </footer>
    );
};

export default Footer;
