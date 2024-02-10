import SigninPageButtons from "../SigninPageButtons/SigninPageButtons";
import SigninPageTextInput from "../SigninPageTextInput/SigninPageTextInput";
import style from "./SigninPage.module.css";

export default function SigninPage({
  signinActive,
  signinUsername,
  signinEmail,
  signinPassword,
  setSigninActive,
  setSigninUsername,
  setSigninEmail,
  setSigninPassword,
  doAddNewUser,
}) {
  return (
    <div
      style={{ display: signinActive ? "flex" : "none" }}
      className={style.register_content}
    >
      <SigninPageTextInput
        signinUsername={signinUsername}
        signinEmail={signinEmail}
        signinPassword={signinPassword}
        setSigninEmail={setSigninEmail}
        setSigninPassword={setSigninPassword}
        setSigninUsername={setSigninUsername}
      />

      <SigninPageButtons
        setSigninActive={setSigninActive}
        signinUsername={signinUsername}
        signinEmail={signinEmail}
        signinPassword={signinPassword}
        doAddNewUser={doAddNewUser}
      />
    </div>
  );
}
