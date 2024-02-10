import { useState } from "react";
import style from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";
import { addNewUser, enterShop } from "../../libs/Register_functions";
import WelcomePage from "./nodes/WelcomePage/WelcomePage";
import LoginPage from "./nodes/LoginPage/LoginPage";
import SigninPage from "./nodes/SigninPage/SigninPage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const [loginActive, setLoginActive] = useState(false);
  const [signinActive, setSigninActive] = useState(false);

  const [signinUsername, setSigninUsername] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const notify = (text, type) => {
    if (type === "err") {
      toast.error(text);
    } else {
      toast.success(text);
    }
  };

  const doAddNewUser = () => {
    addNewUser(
      signinUsername,
      signinEmail,
      signinPassword,
      setSigninPassword,
      setSigninEmail,
      setSigninUsername,
      notify
    );
  };

  const doEnterShop = () => {
    enterShop(
      loginUsername,
      loginPassword,
      navigate,
      setLoginPassword,
      setLoginUsername,
      notify
    );
  };

  return (
    <>
      <div className={style.register_container}>
        <WelcomePage
          loginActive={loginActive}
          signinActive={signinActive}
          setLoginActive={setLoginActive}
          setSigninActive={setSigninActive}
        />

        <LoginPage
          loginActive={loginActive}
          loginUsername={loginUsername}
          loginPassword={loginPassword}
          setLoginActive={setLoginActive}
          setLoginPassword={setLoginPassword}
          setLoginUsername={setLoginUsername}
          doEnterShop={doEnterShop}
        />

        <SigninPage
          signinActive={signinActive}
          signinUsername={signinUsername}
          signinEmail={signinEmail}
          signinPassword={signinPassword}
          setSigninActive={setSigninActive}
          setSigninUsername={setSigninUsername}
          setSigninEmail={setSigninEmail}
          setSigninPassword={setSigninPassword}
          doAddNewUser={doAddNewUser}
        />
      </div>
    </>
  );
}
