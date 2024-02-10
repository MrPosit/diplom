import { useEffect, useState } from "react";
import api from "../../libs/api.json";
import style from "./CountFlowers.module.css";
import { useNavigate } from "react-router-dom";
import { addflower } from "../../libs/functions";
import MenuModal from "../ShoppingPage/nodes/Menu/nodes/MenuModal/MenuModal";
import CountFlowers from "./nodes/CountFlowersAll/CountFlowersAll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FlowersCount() {
  const [data, setData] = useState([]);
  const [flowers, setFlowers] = useState("");
  const [countInput, setCountInput] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [selectValue, setSelectValue] = useState("All");
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  const notify = () => toast.success("Succesfully added to cart!");

  useEffect(() => {
    setData(api);
  }, []);

  useEffect(() => {
    setData(
      selectValue === "All"
        ? api
        : [...data].sort((a, b) =>
          selectValue === "Price"
            ? a.price - b.price
            : a.name.localeCompare(b.name)
        )
    );
  }, [selectValue]);

  useEffect(() => {
    const filteredData = searchInput
      ? api.filter((flowers) =>
        flowers.name.toLowerCase().includes(searchInput.toLowerCase())
      )
      : api;

    setData(filteredData);
    setAlert(searchInput && filteredData.length === 0);
  }, [searchInput]);

  const showFlowers = (id) => {
    const findFlowers = data.find((flowers) => flowers.id === id);
    setFlowers(findFlowers);
  };

  const req_addflower = () => {
    addflower(
      flowers.id,
      countInput,
      flowers.name,
      flowers.price,
      flowers.img,
      setFlowers,
      setCountInput
    );
  };

  return (
    <>
      <div className={style.fullMenu_container}>
        <div className={style.fullMenu_welcome}>
          <p className={style.fullMenu_welcome_title}>Flowers</p>
          <p className={style.fullMenu_welcome_subtitle}>
            Today you will see many different and beautiful flowers
          </p>
        </div>
        <CountFlowers
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSelectValue={setSelectValue}
          data={data}
          showPizzaData={showFlowers}
          alert={alert}
        />
        <div
          className={style.fullMenu_modal}
          style={{ display: flowers ? "block" : "none" }}
        >
          <MenuModal
            setFlowers={setFlowers}
            setInput={setCountInput}
            img={flowers.img}
            name={flowers.name}
            description={flowers.description}
            price={flowers.price}
            input={countInput}
            addflower={req_addflower}
            notify={notify}
          />
        </div>
        <img
          src="./img/allpizzabutton.svg"
          alt="button"
          width="50px"
          height="50px"
          onClick={() => navigate("/shopping")}
          className={style.fullMenu_container_button}
        />
      </div>
    </>
  );
}
