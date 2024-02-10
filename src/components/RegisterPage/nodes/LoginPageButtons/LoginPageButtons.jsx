import style from "./LoginPageButtons.module.css";

export default function LoginPageButtons({
  setLoginActive,
  loginPassword,
  loginUsername,
  doEnterShop,
}) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button
        className={style.register_button}
        onClick={() => setLoginActive(false)}
      >
        back
      </button>
      <button
        className={style.register_button}
        disabled={!loginUsername || !loginPassword}
        onClick={doEnterShop}
      >
        LOG IN
      </button>
    </div>
  );
}
