import MenuContent from "../../../ShoppingPage/nodes/Menu/nodes/MenuContent/MenuContent";
import style from "./CountFlowersAll.module.css";

export default function FlowersCountAll({
  searchInput,
  setSearchInput,
  setSelectValue,
  data,
  showFlowers,
  alert,
}) {
  return (
    <>
      <div className={style.fullMenu_sorter}>
        <input
          type="text"
          value={searchInput}
          onChange={(el) => setSearchInput(el.target.value)}
          placeholder="Search for flowers..."
        />
        <select onChange={(el) => setSelectValue(el.target.value)}>
          <option value="All">All</option>
          <option value="Price">Price</option>
          <option value="Name">A - Z</option>
        </select>
      </div>

      <div
        className={style.fullMenu_alert}
        style={{ display: alert ? "block" : "none" }}
      >
        <p>Can not find!</p>
      </div>

      <div className={style.fullMenu_content}>
        {data.map((flowers) => {
          return (
            <MenuContent
              key={flowers.id}
              showFlowers={showFlowers}
              data={data}
              id={flowers.id}
              name={flowers.name}
              price={flowers.price}
              img={flowers.img}
            />
          );
        })}
      </div>
    </>
  );
}
