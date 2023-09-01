import { PropTypes } from "prop-types";
import { createStringFromArray } from "shared/lib/dom/createStringFromArray";
import styles from "./styles.module.scss";

export function Image({ src, alt, propsClass }) {
  const componentClass = createStringFromArray([styles[propsClass], styles.img]);
  return <img src={src} className={componentClass} alt={alt} />;
}
Image.propTypes = {
  alt: PropTypes.string,
  propsClass: PropTypes.string,
  src: PropTypes.string,
};
Image.defaultProps = {
  alt: "здесь должна быть картинка",
  propsClass: "",
  src: "",
};
