import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toggler from "shared/ui/Toggler/Toggler";
import { Button } from "shared/ui/Button";
import { InputField } from "shared/ui/InputField";
import { PasswordInputWithButton } from "features/ModalWindAddUser/ui/PasswordInputWithButton";
import { RoleButton } from "features/ModalWindAddUser/ui/RoleButton";
import { MSG1, MSG11, MSG2, useFieldWithError } from "features/ModalWindAddUser/model";
import { randomPass } from "shared/lib/randomPass/randomPass";
import { connectClassnames } from "shared/lib/dom";
import { patern, required, validation } from "shared/lib/validation";
import edit from "./styles.module.scss";
import { fetchEditUser } from "../api";

export function EditUserCard() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo);
  const { value: firstname, setValue: setFirstname, error: firstnameError, setError: setFirstnameError } = useFieldWithError("");
  const { value: login, setValue: setLogin, error: loginError, setError: setLoginError } = useFieldWithError("");
  const { value: email, setValue: setEmail, error: emailError, setError: setEmailError } = useFieldWithError("");
  const { value: lastname, setValue: setLastname, error: lastnameError, setError: setLastnameError } = useFieldWithError("");
  const { value: middlename, setValue: setMiddlename, error: middlenameError, setError: setMiddlenameError } = useFieldWithError("");
  const { value: password, setValue: setPassword, error: passwordError, setError: setPasswordError } = useFieldWithError("");
  const [isTeacher, setIsTeacher] = useState(false);
  const [isMetodist, setIsMetodist] = useState(false);
  const [isSuperuser, setIsSuperuser] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [roleError, setRoleError] = useState("");
  const [isButtonBlock, setIsButtonBlock] = useState(false);

  useEffect(() => {
    setFirstname(user.firstName);
    setLogin(user.username);
    setEmail(user.email);
    setLastname(user.lastName);
    setMiddlename(user.middleName);
    setIsTeacher(user.isTeacher);
    setIsMetodist(user.isMetodist);
    setIsSuperuser(user.isSuperuser);
    setIsActive(user.isActive);
  }, [user]);

  function validationUser() {
    const roleError = !(isMetodist || isSuperuser || isTeacher) ? MSG11 : "";
    setRoleError(roleError);
    const loginError = validation(login, [
      required(MSG1),
      patern(/^([a-z]+(-([a-z])+)?)?[.](([a-z])+(-[a-z]+)?([0-9]?)+)?$/i, MSG2),
      patern(/^.{3,60}$/, MSG2),
    ]);
    setLoginError(loginError);
    const emailError = isTeacher
      ? ""
      : validation(email, [
          required(MSG1),
          patern(/^.{1,32}@.{1,31}$/, MSG2),
          patern(/^(?!.*(--|\.\.|__|\.-|-\.|\._|_\.)).*$/, MSG2),
          patern(/^.{10,64}$/, MSG2),
          patern(/^([a-z0-9]+(?:[a-z0-9._-]+)*)@([a-z0-9]+(?:[a-z0-9.-]+)*\.[a-z]{2,})$/i, MSG2),
        ]);
    setEmailError(emailError);
    const firstnameError = !isTeacher ? validation(firstname, [required(MSG1), patern(/^.{1,20}$/, MSG2)]) : "";
    setFirstnameError(firstnameError);
    const lastnameError = !isTeacher ? validation(lastname, [required(MSG1), patern(/^.{1,40}$/, MSG2)]) : "";
    setLastnameError(lastnameError);
    const middlenameError = !isTeacher && middlename ? validation(middlename, [patern(/^.{1,19}$/, MSG2)]) : "";
    setMiddlenameError(middlenameError);
    const passwordError = isActive === null ? validation(password, [required(MSG1)]) : "";
    setPasswordError(passwordError);
    return roleError || firstnameError || loginError || emailError || lastnameError || middlenameError || passwordError;
  }

  async function editUser() {
    if (!validationUser()) {
      setIsButtonBlock(true);
      try {
        const newUser = isTeacher
          ? {
              is_active: isActive === null ? true : isActive,
              is_metodist: isMetodist,
              is_superuser: isSuperuser,
              username: login,
            }
          : {
              email,
              first_name: firstname,
              is_active: isActive,
              is_metodist: isMetodist,
              is_superuser: isSuperuser,
              last_name: lastname,
              middle_name: middlename,
              username: login,
            };
        if (password) newUser.password = password;
        await fetchEditUser(newUser, user.id, navigate);
      } catch (error) {
        if ("username" in error) setLoginError(error.username[0]);
        if ("email" in error) setEmailError(error.email[0]);
        if ("password" in error) setPasswordError(error.password[0]);
        if ("first_name" in error) setFirstnameError(error.first_name[0]);
        if ("last_name" in error) setLastnameError(error.last_name[0]);
        if ("first_name" in error) setFirstnameError(error.first_name[0]);
        if ("middle_name" in error) setMiddlenameError(error.middle_name[0]);
      }
      setIsButtonBlock(false);
    }
  }

  return (
    user.id && (
      <div className={edit.content}>
        <div className={edit.userInfo}>
          <div className={edit.titleRrow}>
            <h1 className={edit.userTitle}>Редактирование нового преподавателя</h1>
            {isActive !== null && (
              <div className={connectClassnames(edit.toggleBlock, !isActive ? edit.deactive : null)}>
                <span> {isActive ? "Активирован" : "Деактивирован"}</span>
                <Toggler active={isActive} setActive={setIsActive} />
              </div>
            )}
          </div>
          <div className={edit.infoWrapper}>
            <span className={edit.cardTitle}>Роль</span>
            <div className={edit.userRoles}>
              <RoleButton label="Преподаватель" active={isTeacher} />
              <RoleButton
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
              {roleError && <div className={edit.errorMsg}>{roleError}</div>}
            </div>
          </div>
          <div className={edit.userInputs}>
            <div className={edit.infoWrapper}>
              <span className={edit.cardTitle}>Личная информация</span>
              <div className={edit.inputWrapper}>
                <InputField
                  label="Фамилия"
                  labelClass="userLabel"
                  value={lastname}
                  disabled={isTeacher}
                  placeholder="Фамилия"
                  readonly
                  type="text"
                  error={lastnameError}
                  onChange={(e) => setLastname(e.target.value)}
                  onBlur={(e) => setLastname(e.target.value.trim())}
                />
                <InputField
                  label="Имя"
                  labelClass="userLabel"
                  value={firstname}
                  disabled={isTeacher}
                  placeholder="Имя"
                  readonly
                  type="text"
                  error={firstnameError}
                  onChange={(e) => setFirstname(e.target.value)}
                  onBlur={(e) => setFirstname(e.target.value.trim())}
                />
                <InputField
                  label="Отчество (не обязательно)"
                  labelClass="userLabel"
                  value={middlename}
                  disabled={isTeacher}
                  placeholder="Отчество"
                  readonly
                  type="text"
                  error={middlenameError}
                  onChange={(e) => setMiddlename(e.target.value)}
                  onBlur={(e) => setMiddlename(e.target.value.trim())}
                />
              </div>
            </div>
            <div className={edit.infoWrapper}>
              <span className={edit.cardTitle}>Данные для доступа</span>
              <div className={edit.inputWrapperWithBtn}>
                <InputField
                  label="Логин"
                  labelClass="userLabel"
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
                  disabled={isTeacher}
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
                  iconSize={edit.passGeneratorIcon}
                  error={passwordError}
                  onGenerate={() => {
                    setPassword(randomPass());
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={edit.rowBtns}>
          <div>{isActive !== null && <Button className={edit.deleteBtn}>Удалить</Button>}</div>
          <div className={edit.rightPosition}>
            <Button type="button" className={edit.cancelBtn} onClick={() => navigate(-1)}>
              Отмена
            </Button>
            <Button type="button" className={edit.saveBtn} onClick={() => editUser()} disabled={isButtonBlock}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
