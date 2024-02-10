import style from "./MenuModal.module.css";
import { RxCross1 } from "react-icons/rx";

export default function MenuModal({
  notify,
  setFlowers,
  setInput,
  img,
  name,
  description,
  price,
  input,
  addflower,
}) {
  return (
    <div className={style.menu_modal_content}>
      <RxCross1
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        onClick={() => {
          setFlowers("");
          setInput(1);
        }}
      />
      <div className={style.menu_modal_content_inner}>
        <img src={img} alt={name} width="280px" height="280px" />
        <div className={style.menu_modal_content_inner_action}>
          <p className={style.menu_modal_title}>{name}</p>
          <p className={style.menu_modal_subtitle}>{description}</p>
          <p className={style.menu_modal_price}>${price}</p>
          <div className={style.menu_modal_input}>
            <p>Count</p>
            <input
              type="number"
              min={1}
              max={24}
              value={input}
              onChange={(el) => setInput(el.target.value)}
            />
          </div>
          <button
            onClick={() => {
              addflower();
              notify();
            }}
            className={style.menu_modal_button}
          >
            Put In A Cart
          </button>
        </div>
      </div>
    </div>
  );
}
