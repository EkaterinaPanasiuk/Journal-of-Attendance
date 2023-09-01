import { useSelector } from "react-redux";
import { workWithUserRoles } from "../../lib/workWithUserRoles";
import styles from "./styles.module.scss";

export function UserIcon() {
  const { firstName, isActive, isMetodist, isSuperuser, isTeacher, lastName, middleName } = useSelector((state) => state.userInfo);
  const userRoles = {
    isMetodist,
    isSuperuser,
    isTeacher,
  };
  const rolesArr = workWithUserRoles(userRoles);

  const initials = `${lastName ? lastName[0] : "."}${firstName ? firstName[0] : "."}`;

  const givenNames = middleName ? `${firstName} ${middleName}` : firstName;

  return (
    <div className={styles.userItem}>
      <div className={styles.userIcon}>
        <span>{initials}</span>
      </div>
      <div>
        <h4>{lastName ? (lastName.length <= 40 ? lastName : `${lastName.slice(0, 37)}...`) : "User Last Name"}</h4>
        <h4>{givenNames ? (givenNames.length <= 40 ? givenNames : `${givenNames.slice(0, 37)}...`) : "User First Name"}</h4>
        <div className={styles.activeRoleWrapper}>
          {isActive === true ? (
            <div className={styles.active}>
              <span> </span>
              <span>Активен</span>
            </div>
          ) : (
            <div className={styles.notActive}>
              <span> </span>
              <span>Неактивен</span>
            </div>
          )}

          <div className={styles.roleWrapper}>
            <p>{rolesArr}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
