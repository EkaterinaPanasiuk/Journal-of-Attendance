import PropTypes from "prop-types";
import { connectClassnames } from "shared/lib/dom";
import classes from "./styles.module.scss";

export function Hlink({ href, text, onClick, variant }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={connectClassnames(classes.link, variant ? classes[variant] : null)}>
      {text}
    </a>
  );
}

Hlink.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary"]),
};

Hlink.defaultProps = {
  onClick: null,
  variant: "primary",
};
