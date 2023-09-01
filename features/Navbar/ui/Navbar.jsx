import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ExitBtn } from "entities/ExitBtn/ExitBtn";
import { SyncBtn } from "entities/SyncBtn/ui/SyncBtn";
import logo from "shared/assets/logo.png";
import abbreviatedWord from "shared/lib/abbreviatedWord/abbreviatedWord";
import { navItems, userSelector } from "../model";
import styles from "./styles.module.scss";

export function Navbar() {
  const { lastName, firstName } = useSelector(userSelector);

  const initials = `${lastName ? lastName[0] : ""}${firstName ? firstName[0] : ""}`;

  return (
    <nav className={styles.nav}>
      <div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          {navItems.map(({ path, text, icon }) => (
            <li key={path} className={styles.navItem}>
              <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : "")}>
                {icon}
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles.navItem}>
          <SyncBtn />
        </div>
        <div className={styles.userItem}>
          <div className={styles.userIcon}>{initials}</div>
          <div>
            <div className={styles.userName}>{abbreviatedWord(lastName, 20)}</div>
            <div className={styles.userName}>{abbreviatedWord(firstName, 20)}</div>
          </div>
        </div>
        <div className={styles.navItem}>
          <ExitBtn />
        </div>
      </div>
    </nav>
  );
}
