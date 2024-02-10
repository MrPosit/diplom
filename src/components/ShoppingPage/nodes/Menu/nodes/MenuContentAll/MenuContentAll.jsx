import style from "./MenuContentAll.module.css";
import MenuContent from "../MenuContent/MenuContent";

export default function MenuContentAll({ dataBig, showFlowers }) {
  return (
    <>
      <div className={style.menu_content_big}>
        {dataBig.map((flower) => (
          <MenuContent
            key={flower.id}
            showFlowers={() => showFlowers(flower)} 
            id={flower.id}
            name={flower.name}
            price={flower.price}
            img={flower.img}
          />
        ))}
      </div>
    </>
  );
}
