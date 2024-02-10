import style from "./Menu.module.css";
import api from "../../../../libs/api.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addflower } from "../../../../libs/functions";
import MenuModal from "./nodes/MenuModal/MenuModal";
import MenuContentAll from "./nodes/MenuContentAll/MenuContentAll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Menu() {
  const [dataBig, setDataBig] = useState([]);
  const [dataMid, setDataMid] = useState([]);
  const [dataSmall, setDataSmall] = useState([]);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [input, setInput] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setDataBig(api.slice(0, 8));
    setDataMid(api.slice(0, 4));
    setDataSmall(api.slice(0, 3));
  }, []);

  const req_addflower = () => {
    addflower(
      selectedFlower.id,
      input,
      selectedFlower.name,
      selectedFlower.price,
      selectedFlower.img,
      setSelectedFlower,
      setInput
    );
  };

  const showFlowers = (flower) => {
    setSelectedFlower(flower);
  };

  const notify = () => toast.success("Successfully added to cart!");

  return (
    <div className={style.menu_container}>
      <div className={style.menu_welcome}>
        <p className={style.menu_welcome_title}>Flowers</p>
        <p className={style.menu_welcome_subtitle}>
          Today you will see many different and beautiful flowers
        </p>
      </div>

      <MenuContentAll
        dataBig={dataBig}
        dataMid={dataMid}
        dataSmall={dataSmall}
        showFlowers={showFlowers}
      />

      {selectedFlower && (
        <div className={style.menu_modal}>
          <MenuModal
            setFlowers={setSelectedFlower}
            setInput={setInput}
            img={selectedFlower.img}
            name={selectedFlower.name}
            price={selectedFlower.price}
            description={selectedFlower.description}
            input={input}
            addflower={req_addflower}
            notify={notify}
          />
        </div>
      )}

      <img
        src="./img/allpizzabutton.svg"
        alt="button"
        width="50px"
        height="50px"
        onClick={() => navigate("/fullmenu")}
        className={style.menu_container_button}
      />
    </div>
  );
}
