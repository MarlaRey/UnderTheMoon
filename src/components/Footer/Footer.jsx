import styles from './Footer.module.scss'



export const Footer = () => {
    return <footer className={styles.footerWrapper} id='newsletter'>
              <div className={styles.subscribeSection}>
        <h3>SUBSCRIBE TO NEWSLETTER</h3>
        <div className={styles.inputFields}>
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email" />
        </div>
        <button>SIGN UP</button>
      </div>
<div></div>
      <div className={styles.quickLinksSection}>
        <h4>QUICK LINKS</h4>
        <ul>
          <li>Hjem</li>
          <li>Om os</li>
          <li>Prisliste</li>
          <li>Booking</li>
          <li>Newsletter</li>
          <li>Kontakt</li>
        </ul>

      </div>

      <div className={styles.findUsSection}>
        <h4>WHO DID THIS?</h4>
        <div className={styles.contactInfo}>
          <p>Marlene</p>
        </div>
        <div className={styles.followUs}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialLinks}>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>
      
        </footer>
}