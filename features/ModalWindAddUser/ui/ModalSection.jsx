import modal from "./modal.module.scss";

export function ModalRoleSection({ title, children }) {
  return (
    <section className={modal.userData}>
      <div className={modal.userDataWrapper}>
        <h4 className={modal.dataTitle}>{title}</h4>
        {children}
      </div>
    </section>
  );
}
