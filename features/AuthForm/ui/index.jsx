import { InputField } from "shared/ui/InputField";
import { Button } from "shared/ui/Button";
import { useAuthForm } from "../model";
import classes from "./styles.module.scss";

export function AuthForm() {
  const {
    username,
    password,
    nameError,
    isButtonBlock,
    passError,
    formError,
    nameInput,
    passInput,
    setUsername,
    setPassword,
    formSubmitHandler,
  } = useAuthForm();

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h1 className={classes.title}>Добро пожаловать!</h1>
      <div className={classes.nameInputWrapper}>
        <InputField
          id="name-input"
          value={username}
          placeholder="Имя пользователя"
          label="Имя пользователя"
          error={nameError}
          ref={nameInput}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={classes.passwordInputWrapper}>
        <InputField
          id="password-input"
          type="password"
          value={password}
          placeholder="Пароль"
          label="Пароль"
          error={passError}
          ref={passInput}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {formError && <div className={classes.errorMessage}>{formError}</div>}
      <Button type="submit" size="large" variant="warning" content="войти" disabled={isButtonBlock} btnClass="authBtn" />
    </form>
  );
}
