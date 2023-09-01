import toggler from "./toggler.module.scss";

function Toggler({ active, setActive }) {
  function handleToggler() {
    setActive(!active);
  }
  function handleKeyUp() {}

  return (
    <div
      onClick={handleToggler}
      role="button"
      tabIndex="0"
      aria-label="toggler button"
      onKeyUp={handleKeyUp}
      className={active ? toggler.containerActive : toggler.containerNotactive}
    >
      <span className={active ? toggler.togglerActive : toggler.togglerNotActive} />
    </div>
  );
}

export default Toggler;
