import logoImg from "../../assets/logo.png";
import classes from "./styles.module.scss";
import { Image } from "../Image/Image";

export function Logo() {
  return (
    <div className={classes.logoWrapper}>
      <Image src={logoImg} alt="logo" propsClass="imgLogo" />
    </div>
  );
}
