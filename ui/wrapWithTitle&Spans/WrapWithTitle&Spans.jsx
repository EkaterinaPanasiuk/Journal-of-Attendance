import styles from "./styles.module.scss";

export function WrapWithTitleSpans({ title, emptyText, arr, variant }) {
  const spansArr =
    arr?.length && arr[0]
      ? arr.map((item) => {
          return (
            <span key={item} className={styles[variant]}>
              {item}
            </span>
          );
        })
      : null;

  /*
  if (arr.length !== 0) {
    return (spansArr = arr.map((item) => {
      console.log(item);
      console.log(typeof item);
      if (typeof item === "string") {
        return (
          <span key={item} className={styles[variant]}>
            {item}
          </span>
        );
      } else if (typeof item === "object") {
        return (
          <span key={item[itemKey]} className={styles[variant]}>
            {item[itemKey]}
          </span>
        );
      } else spansArr = "";
    }));
  } else spansArr = ""; */

  return (
    <div className={styles.itemsWrapper}>
      <h6 className={styles.itemTitle}>{title}</h6>
      <div className={spansArr ? styles.itemList : styles.emptyList}>{spansArr || emptyText}</div>
    </div>
  );
}
