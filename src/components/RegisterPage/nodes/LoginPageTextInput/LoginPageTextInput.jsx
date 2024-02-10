import style from "./LoginPageTextInput.module.css";

export default function LoginPageTextInput({
  loginUsername,
  setLoginUsername,
  loginPassword,
  setLoginPassword,
}) {
  return (
    <div className={style.register_action}>
      <input
        value={loginUsername}
        className={style.register_action_input}
        placeholder="Username..."
        type="text"
        onChange={(t) => setLoginUsername(t.target.value)}
      />
      <input
        value={loginPassword}
        className={style.register_action_input}
        placeholder="Password..."
        type="password"
        onChange={(t) => setLoginPassword(t.target.value)}
      />
    </div>
  );
}
