import LoginPageButtons from "../LoginPageButtons/LoginPageButtons";
import LoginPageTextInput from "../LoginPageTextInput/LoginPageTextInput";
import style from "./LoginPage.module.css";

export default function LoginPage({
  loginActive,
  loginUsername,
  loginPassword,
  setLoginUsername,
  setLoginPassword,
  setLoginActive,
  doEnterShop,
}) {
  return (
    <div
      style={{ display: loginActive ? "flex" : "none" }}
      className={style.register_content}
    >
      <LoginPageTextInput
        setLoginUsername={setLoginUsername}
        setLoginPassword={setLoginPassword}
        loginUsername={loginUsername}
        loginPassword={loginPassword}
      />

      <LoginPageButtons
        setLoginActive={setLoginActive}
        loginPassword={loginPassword}
        loginUsername={loginUsername}
        doEnterShop={doEnterShop}
      />
    </div>
  );
}
