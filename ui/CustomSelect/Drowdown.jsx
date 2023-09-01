import styles from "./styles.module.scss";
import Option from "./Option";

export default function Dropdown({ options, onSelect }) {
  return (
    <ul className={styles.dropdown}>
      {options.map((option) => (
        <Option key={option.value} value={option.value} onClick={() => onSelect(option)} />
      ))}
    </ul>
  );
}
