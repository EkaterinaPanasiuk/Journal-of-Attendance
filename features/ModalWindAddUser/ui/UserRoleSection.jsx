// import styles from "./modal.module.scss";
import styles from "./userRoleSection.module.scss";

function UserRoleSection({ form }) {
  const ar1 = [
    { active: true, name: "Преподаватель", role: "teacher" },
    { active: false, name: "Методист", role: "methodist" },
    { active: false, name: "Администратор", role: "admin" },
  ];

  /*   const ar2 = [
    { name: "Методист", role: "methodist" },
    { name: "Администратор", role: "admin" },
  ]; */
  const inner = function (arr) {
    const newArr = arr.map((item) => {
      return (
        <div className={styles.rolItem}>
          <input className={styles.input} type="radio" id={item.role} name={item.role} htmlFor={form} />
          <label className={item.active ? styles.active : styles.label} htmlFor={item.role}>
            {item.name}
          </label>
        </div>
      );
    });
    return newArr;
  };
  return (
    <>
      <h4 className={styles.title}>Роль</h4>
      <div className={styles.roleRow}>{inner(ar1)}</div>
    </>
  );
}

export default UserRoleSection;
