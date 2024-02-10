import style from "./HeaderAction.module.css";
import { Link } from "react-scroll";

export default function HeaderAction({ navigate }) {
  return (
    <div className={style.header_action}>
      <p className={style.header_logo}>Flowers shop</p>

      <ul className={style.header_navbar}>
        <li>
          <Link
            className={style.header_navbar_link}
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
            className={style.header_navbar_link}
            to="footer"
            spy={true}
            smooth={true}
            offset={1}
          >
            Contacts
          </Link>
        </li>
      </ul>

      <div style={{ display: "flex", gap: "20px" }}>
        <button className={style.header_button} onClick={() => navigate("/")}>
          Log Out
        </button>
      </div>
    </div>
  );
}
