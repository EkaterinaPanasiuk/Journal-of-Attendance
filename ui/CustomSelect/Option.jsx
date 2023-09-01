import styles from "./styles.module.scss";

export default function Option({ value, onClick }) {
  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <li className={styles.option} onClick={onClick}>
      {value}
    </li>
  );
}
