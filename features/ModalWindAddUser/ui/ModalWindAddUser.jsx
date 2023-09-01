import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FocusTrap from "focus-trap-react";
import Context from "shared/context/Context";
import { Button } from "shared/ui/Button";
import { InputField } from "shared/ui/InputField";
import { randomPass } from "shared/lib/randomPass/randomPass";
import { patern, required, validation } from "shared/lib/validation";
import { connectClassnames } from "shared/lib/dom";
import { ModalHeader } from "./ModalHeader";
import { ModalRoleSection } from "./ModalSection";
import { RoleButton } from "./RoleButton";
import { PasswordInputWithButton } from "./PasswordInputWithButton";
import { sendUser } from "../api";
import { MSG1, MSG11, MSG2, MSG3, useClearFieldError, useFieldWithError, useKeyControl } from "../model";
import modal from "./modal.module.scss";

export function ModalWindAddUser({ showModal }) {
  const modalContext = useContext(Context);
  const { handleCloseModal } = modalContext;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value: firstname, setValue: setFirstname, error: firstnameError, setError: setFirstnameError } = useFieldWithError("");
  const { value: login, setValue: setLogin, error: loginError, setError: setLoginError } = useFieldWithError("");
  const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useFieldWithError("");
  const { value: lastname, setValue: setLastname, error: lastnameError, setError: setLastnameError } = useFieldWithError("");
  const { value: middlename, setValue: setMiddlename, error: middlenameError, setError: setMiddlenameError } = useFieldWithError("");
  const { value: password, setValue: setPassword, error: passwordError, setError: setPasswordError } = useFieldWithError("");
  const [isMetodist, setIsMetodist] = useState(false);
  const [isSuperuser, setIsSuperuser] = useState(false);
  const [roleError, setRoleError] = useState("");

  useClearFieldError(setRoleError, [isMetodist, isSuperuser]);

  const [isButtonBlock, setIsButtonBlock] = useState(false);

  function onCloseModal() {
    handleCloseModal();
    document.body.style.removeProperty("overflow");
  }

  function validationUser() {
    const roleError = !(isMetodist || isSuperuser) ? MSG11 : "";
    setRoleError(roleError);
    const passwordError = validation(password, [required(MSG1)]);
    setPasswordError(passwordError);
    const loginError = validation(login, [
      required(MSG1),
      patern(/^([a-z]+(-([a-z])+)?)?[.](([a-z])+(-[a-z]+)?([0-9]?)+)?$/i, MSG2),
      patern(/^.{3,60}$/, MSG2),
    ]);
    setLoginError(loginError);
    const emailError = validation(email, [
      required(MSG1),
      patern(/^.{1,32}@.{1,31}$/, MSG2),
      patern(/^(?!.*(--|\.\.|__|\.-|-\.|\._|_\.)).*$/, MSG2),
      patern(/^.{10,64}$/, MSG2),
      patern(/^([a-z0-9]+(?:[a-z0-9._-]+)*)@([a-z0-9]+(?:[a-z0-9.-]+)*\.[a-z]{2,})$/i, MSG2),
    ]);
    setEmailError(emailError);
    const firstnameError = validation(firstname, [required(MSG1), patern(/^.{1,20}$/, MSG2)]);
    setFirstnameError(firstnameError);
    const lastnameError = validation(lastname, [required(MSG1), patern(/^.{1,40}$/, MSG2)]);
    setLastnameError(lastnameError);
    const middlenameError = middlename ? validation(middlename, [patern(/^.{1,19}$/, MSG2)]) : "";
    setMiddlenameError(middlenameError);
    return roleError || firstnameError || loginError || emailError || lastnameError || middlenameError || passwordError;
  }

  async function createNewUser() {
    setIsButtonBlock(true);
    if (!validationUser())
      try {
        await sendUser(
          {
            email,
            first_name: firstname,
            is_metodist: isMetodist,
            is_superuser: isSuperuser,
            last_name: lastname,
            middle_name: middlename,
            password,
            username: login,
          },
          navigate,
          dispatch,
        );
        onCloseModal();
      } catch (error) {
        if ("username" in error) {
          if (error.username[0] === "пользователь с таким username уже существует.") {
            setLoginError(MSG3);
          } else {
            setLoginError(error.username[0]);
          }
        }
        if ("email" in error) setEmailError(error.email[0]);
        if ("password" in error) setPasswordError(password.email[0]);
        if ("first_name" in error) setFirstnameError(error.first_name[0]);
        if ("last_name" in error) setLastnameError(error.last_name[0]);
        if ("first_name" in error) setFirstnameError(error.first_name[0]);
        if ("middle_name" in error) setMiddlenameError(error.middle_name[0]);
      }
    setIsButtonBlock(false);
  }
  useKeyControl(createNewUser, onCloseModal);
  return (
    <FocusTrap>
      <div className={showModal ? modal.modalField : modal.displayNone}>
        <div className={modal.modalWrapper}>
          <ModalHeader title="Добавить нового пользователя" onClose={() => onCloseModal} />
          <ModalRoleSection title="Роль">
            <div className={connectClassnames(modal.userRoleFilter, roleError ? modal.error : null)}>
              <RoleButton
                autofocus
                label="Методист"
                active={isMetodist}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMetodist(!isMetodist);
                }}
              />
              <RoleButton
                label="Администратор"
                active={isSuperuser}
                onClick={(e) => {
                  e.preventDefault();
                  setIsSuperuser(!isSuperuser);
                }}
              />
              {roleError && <div className={modal.errorMsg}>{roleError}</div>}
            </div>
          </ModalRoleSection>
          <main className={modal.userInfo}>
            <section className={modal.userData}>
              <div className={modal.userDataWrapper}>
                <h4 className={modal.dataTitle}>Данные для доступа</h4>
                <div className={modal.userInputs}>
                  <InputField
                    label="Логин"
                    labelClass="userLabel"
                    name="login"
                    value={login}
                    placeholder="Логин"
                    type="text"
                    error={loginError}
                    onChange={(e) => setLogin(e.target.value)}
                    onBlur={(e) => setLogin(e.target.value.trim())}
                  />
                  <InputField
                    label="Email"
                    labelClass="userLabel"
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    error={emailError}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => setEmail(e.target.value.trim())}
                  />
                  <PasswordInputWithButton
                    label="Пароль"
                    labelClass="userLabel"
                    value={password}
                    iconSize={modal.passGeneratorIcon}
                    error={passwordError}
                    onGenerate={() => {
                      setPassword(randomPass());
                    }}
                  />
                </div>
              </div>
              <div className={modal.userDataWrapper}>
                <h4 className={modal.dataTitle}>Личная информация</h4>
                <div className={modal.userInputs}>
                  <InputField
                    label="Фамилия"
                    labelClass="userLabel"
                    name="lastName"
                    value={lastname}
                    placeholder="Фамилия"
                    type="text"
                    error={lastnameError}
                    onChange={(e) => setLastname(e.target.value)}
                    onBlur={(e) => setLastname(e.target.value.trim())}
                  />
                  <InputField
                    label="Имя"
                    labelClass="userLabel"
                    name="firstName"
                    value={firstname}
                    placeholder="Имя"
                    type="text"
                    error={firstnameError}
                    onChange={(e) => setFirstname(e.target.value)}
                    onBlur={(e) => setFirstname(e.target.value.trim())}
                  />
                  <InputField
                    label="Отчество (не обязательно)"
                    labelClass="userLabel"
                    name="middleName"
                    value={middlename}
                    type="text"
                    placeholder="Отчество"
                    error={middlenameError}
                    onChange={(e) => setMiddlename(e.target.value)}
                    onBlur={(e) => setMiddlename(e.target.value.trim())}
                  />
                </div>
              </div>
            </section>
            <section className={modal.rowButtons}>
              <Button type="button" className={modal.cancelBtn} onClick={() => onCloseModal()}>
                Отмена
              </Button>
              <Button
                type="button"
                className={modal.addBtn}
                onClick={() => {
                  createNewUser();
                }}
                disabled={isButtonBlock}
              >
                Добавить
              </Button>
            </section>
          </main>
        </div>
      </div>
    </FocusTrap>
  );
}
