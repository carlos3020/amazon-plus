import Image from "next/image";
import logo from "../images/logo.png";
import styles from  './Footer.module.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from 'next/link'

const Footer = () => {
  return (
    // <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
    //   <Image className="w-24" src={logo} alt="logo" />
    //   <p className="text-sm -mt-4">
    //     All rights reserved{" "}
    //   </p>
    // </div>
    <footer>
      <div className={styles.footer__container}>
        <div className={styles.footer__items__container}>
          <div className={styles.footer__help__container}>
            <div className={styles.footer__help__header}>
              <h1>Help</h1>
            </div>
            <ul className={styles.fotter__help__links}>
              <li className={styles.help__link}>
                <Link href="/" >Shipping</Link>
                {/* <a href="/"> </a> */}
              </li>
              <li className={styles.help__link}>
                <Link href="/" >Refund</Link>
                {/* <a href="/"></a> */}
              </li>
              <li className={styles.help__link}>
                {/* <a href="/"></a> */}
                <Link href="/" >FAQ</Link>
              </li>
              <li className={styles.help__link}>
                {/* <a href="/"></a> */}
                <Link href="/" >Accessiblity</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__contact__container}>
            <div className={styles.footer__contact__header}>
              <h1>Contact Us</h1>
            </div>
            <ul className={styles.footer__contacts}>
              <li className={styles.footer__contact}>
                <LocalPhoneIcon /> <span>+123 4567 890</span>
              </li>
              <li className={styles.footer__contact}>
                <EmailIcon /> <span>shop@amazon.com</span>
              </li>
              <li className={styles.footer__contact}>
                <LocationOnIcon /> <span>Bogota, Colombia</span>
              </li>
            </ul>
          </div>
          <div className={styles.footer__social__link__container}>
            <div className={styles.footer__social__link__header}>
              <h1>Stay Connected</h1>
            </div>
            <ul className={styles.footer__social__links}>
              <li className={styles.social__link}>
                <TwitterIcon />
              </li>
              <li className={styles.social__link}>
                <InstagramIcon />
              </li>
              <li className={styles.social__link}>
                <YouTubeIcon />
              </li>
              <li className={styles.social__link}>
                <TelegramIcon />
              </li>
              <li className={styles.social__link}>
                <PinterestIcon />
              </li>
            </ul>
          </div>
        </div>
        {/* <div className={styles.fotter__copyright__container}>
          <ul className={styles.nav}>
            <li className={styles.footer__copyright}>©2022 KVS. |</li>
            <li className={styles.footer__terms__condition}> | Terms & Condition |</li>
            <li className={styles.footer__privacy__policy}>| Privacy Policy</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
