import style from "./SigninPageTextInput.module.css";

export default function SigninPageTextInput({
  signinUsername,
  signinEmail,
  signinPassword,
  setSigninEmail,
  setSigninPassword,
  setSigninUsername,
}) {
  return (
    <div className={style.register_action}>
      <input
        value={signinUsername}
        className={style.register_action_input}
        placeholder="Username..."
        type="text"
        onChange={(t) => setSigninUsername(t.target.value)}
      />
      <input
        value={signinEmail}
        className={style.register_action_input}
        placeholder="Email..."
        type="text"
        onChange={(t) => setSigninEmail(t.target.value)}
      />
      <input
        value={signinPassword}
        className={style.register_action_input}
        placeholder="Password..."
        type="password"
        onChange={(t) => setSigninPassword(t.target.value)}
      />
    </div>
  );
}
