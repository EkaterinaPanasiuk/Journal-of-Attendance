import { Link } from "react-router-dom";
import { connectClassnames } from "shared/lib/dom";
import { workWithUserName } from "../model/workWithUserName/workWithUserName";
import { workWithUserRoles } from "../../../shared/lib/workWithUserRoles";
import { workWithUserSubjects } from "../model/workWithUserSubjects/workWithUserSubjects";
import styles from "./styles.module.scss";

export function UserCard({ userData }) {
  const name = workWithUserName(userData.item);
  const lastName = name.row1;
  const firstName = name.row2;
  const roles = workWithUserRoles(userData.item);

  const userSubject = workWithUserSubjects(userData.item);
  const subject = userSubject.map((item) => (
    <span key={item + userData.item.id} className={styles.subject}>
      {item}
    </span>
  ));
  const userCardClassName =
    userData.item.is_active === false
      ? connectClassnames(styles.notActive, styles.userCardWrapper)
      : userData.item.is_active === null
      ? connectClassnames(styles.readyToAtive, styles.userCardWrapper)
      : styles.userCardWrapper;

  return (
    <Link to={userData.item.is_active === null ? `/users/${userData.item.id}/edit` : `/users/${userData.item.id}`}>
      <section className={userCardClassName}>
        <div className={styles.userTitle}>
          <h4>{lastName}</h4>
          <h6>{firstName}</h6>
          <div className={styles.roleWrapper}>
            <p>{roles}</p>
          </div>
        </div>
        <div className={styles.subjectWrapper}>{subject}</div>
      </section>
    </Link>
  );
}
