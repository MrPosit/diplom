import { Link } from "react-scroll";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_content}>
        <ul className={style.footer_navbar}>
          <li>
            <Link
              className={style.footer_navbar_link}
              to="menu"
              spy={true}
              smooth={true}
              offset={1}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              className={style.footer_navbar_link}
              to="footer"
              spy={true}
              smooth={true}
              offset={1}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <Link
          className={style.footer_logo}
          to="header"
          spy={true}
          smooth={true}
          offset={1}
        >
          Flowers shop
        </Link>
        <ul className={style.footer_platforms}>
          <img src="./img/facebook.svg" alt="facebook" />
          <img src="./img/insta.svg" alt="instagram" />
          <img src="./img/twitter.svg" alt="twitter" />
          <img src="./img/youtube.svg" alt="youtube" />
        </ul>
      </div>
    </div>
  );
}
