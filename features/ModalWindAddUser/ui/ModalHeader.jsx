import { Button } from "shared/ui/Button";
import cross from "shared/assets/cross.svg";
import { useContext } from "react";
import Context from "shared/context/Context";
import modal from "./modal.module.scss";

export function ModalHeader({ title /* , onClose  */ }) {
  const modalContext = useContext(Context);
  const { handleCloseModal } = modalContext;
  function closeModal() {
    handleCloseModal();
    document.body.style.removeProperty("overflow");
  }

  return (
    <header className={modal.header}>
      <h1 className={modal.title}>{title}</h1>
      <Button className={modal.crossBtn} onClick={() => closeModal()}>
        <img src={cross} className={modal.btnIcon} alt="Закрыть" />
      </Button>
    </header>
  );
}
