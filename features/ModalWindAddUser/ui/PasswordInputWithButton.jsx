import { InputField } from "shared/ui/InputField";
import generatePassword from "shared/assets/password-generation-new.svg";
import modal from "./modal.module.scss";

export function PasswordInputWithButton({ label, labelClass, value, error, onGenerate, iconSize }) {
  return (
    <div className={modal.passwordWithBtn}>
      <InputField label={label} labelClass={labelClass} type="text" placeholder="Пароль" value={value} error={error} />
      <button type="button" className={modal.passwordBtn} onClick={onGenerate}>
        <img src={generatePassword} className={iconSize || modal.btnIcon} alt="Генерация пароля" />
      </button>
    </div>
  );
}
