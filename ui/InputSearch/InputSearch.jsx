import styles from "./styles.module.scss";

export function InputSearch() {
  return <input type="text" className={styles.inputSearch} placeholder="Поиск" />;
}
