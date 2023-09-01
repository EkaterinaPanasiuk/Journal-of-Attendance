import { PropTypes } from "prop-types";
import { createStringFromArray } from "shared/lib/dom/createStringFromArray";
import styles from "./styles.module.scss";

/* export function Title({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
} */
export function Title({ title, propsClass, size }) {
  const sizeVariant = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  };
  const TitleTag = sizeVariant[size];
  const componentClass = createStringFromArray([styles[size], propsClass]);
  return <TitleTag className={componentClass}>{title}</TitleTag>;
}
Title.propTypes = {
  propsClass: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
};
Title.defaultProps = {
  propsClass: "",
  size: "h1",
  title: "You need add Title",
};
