import { Image } from "shared/ui/Image/Image";
import { Button } from "shared/ui/Button";
import { Link } from "react-router-dom";
import img from "../../../shared/assets/logo.png";
import styles from "./resetPasswordBlock.module.scss";

function ResetPasswordBlock() {
  return (
    <div className={styles.wrapper}>
      <header>
        <Image propsClass="imgLogo" src={img} alt="Logo" />
      </header>
      <main className={styles.main}>
        <h2>
          Для восстановления пароля
          <br />
          обратитесь к Администратору
        </h2>

        <Link className={styles.linkBtn} to="/authorization">
          <Button size="large" variant="warning">
            На страницу входа
          </Button>
        </Link>
      </main>
    </div>
  );
}

export default ResetPasswordBlock;
