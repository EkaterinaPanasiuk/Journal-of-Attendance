import UserBlockWindow from "widgets/UserBlockWindow/UserBlockWindow";
import { useSelector } from "react-redux";
import { AuthWindow } from "../../widgets/AuthWindow/AuthWindow";
import classes from "./styles.module.scss";

function AuthPage() {
  const isUserBlocked = useSelector((store) => store.auth.isBlocked);
  return <div className={classes.container}>{isUserBlocked ? <UserBlockWindow /> : <AuthWindow />}</div>;
}

export default AuthPage;
