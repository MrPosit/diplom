import style from "./HeaderMobAction.module.css";
import { Link } from "react-scroll";

export default function HeaderMobAction({ setModal, modal, navigate }) {
  return (
    <div className={style.header_mob_action}>
      <p className={style.header_mob_logo}>Flowers shop</p>
      <div
        style={{ display: modal ? "flex" : "none" }}
        className={style.header_mob_modal}
      >
        <div className={style.header_mob_modal_content}>
          <ul>
            <li>
              <Link
                className={style.header_mob_navbar_link}
                to="menu"
                spy={true}
                smooth={true}
                offset={1}
                onClick={() => setModal(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className={style.header_mob_navbar_link}
                to="footer"
                spy={true}
                smooth={true}
                offset={1}
                onClick={() => setModal(false)}
              >
                Contacts
              </Link>
            </li>
            <button
              className={style.header_button}
              onClick={() => navigate("/")}
            >
              Log Out
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
