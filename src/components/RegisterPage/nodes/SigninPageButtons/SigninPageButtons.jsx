import style from "./SigninPageButtons.module.css";

export default function SigninPageButtons({
  setSigninActive,
  signinUsername,
  signinEmail,
  signinPassword,
  doAddNewUser,
}) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button
        className={style.register_button}
        onClick={() => setSigninActive(false)}
      >
        back
      </button>
      <button
        className={style.register_button}
        disabled={!signinUsername || !signinEmail || !signinPassword}
        onClick={doAddNewUser}
      >
        SIGN IN
      </button>
    </div>
  );
}
