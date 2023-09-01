import styles from "./styles.module.scss";

export function SortButton({ value, handler, active }) {
  return (
    <button
      type="button"
      onClick={(e) => handler(e.target.value)}
      value={value}
      className={active ? styles.active : styles.unactive}
      style={{
        backgroundColor: "transparent",
        borderBottom: "1px dotted black",
      }}
    >
      {value === "alphabet" ? "По алфавиту" : value === "directions" ? "По направлениям" : "По хронологии"}
    </button>
  );
}
