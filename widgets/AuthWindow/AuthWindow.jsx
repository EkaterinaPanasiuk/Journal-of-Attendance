import { AuthForm } from "features/AuthForm";
// import { AuthLink } from "shared/ui/AuthLink/AuthLink";
import { Link } from "react-router-dom";
// import { Hlink } from "shared/ui/Hlink/Hlink";
import { Logo } from "shared/ui/Logo/Logo";
import classes from "./styles.module.scss";

export function AuthWindow() {
  return (
    <div className={classes.authContainer}>
      <Logo />
      <AuthForm />
      {/* <AuthLink /> */}
      <Link to="resetPassword" className={classes.link}>
        Забыли пароль?
      </Link>
    </div>
  );
}
