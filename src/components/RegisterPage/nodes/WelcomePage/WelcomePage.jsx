import style from "./WelcomePage.module.css";

export default function WelcomePage({
  loginActive,
  signinActive,
  setLoginActive,
  setSigninActive,
}) {
  return (
    <div
      style={{ display: loginActive || signinActive ? "none" : "flex" }}
      className={style.register_content}
    >
      <div className={style.register_information}>
        <p className={style.register_information_title}>
          Welcome to <span style={{ fontWeight: 800 }}>Flower</span> Garden
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          className={style.register_button}
          onClick={() => setLoginActive(true)}
        >
          LOG IN
        </button>
        <button
          className={style.register_button}
          onClick={() => setSigninActive(true)}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
