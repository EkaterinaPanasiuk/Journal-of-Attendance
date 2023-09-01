import { Logo } from "shared/ui/Logo/Logo";
import styles from "./styles.module.scss";

export function Page404() {
  return (
    <div className={styles.wrapper}>
      <header>
        <Logo />
      </header>
      <main>
        <h2>Сервер не отвечает. Повторите позже.</h2>
      </main>
    </div>
  );
}
