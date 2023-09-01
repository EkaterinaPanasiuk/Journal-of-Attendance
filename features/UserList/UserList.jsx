import { UserCard } from "features/UserCard/ui/UserCard";
import styles from "./styles.module.scss";

export function UsersList({ users }) {
  return (
    <ul className={styles.usersCardsWrapper}>
      {users.map((item) => (
        <li key={item.id}>
          <UserCard userData={{ item }} />
        </li>
      ))}
    </ul>
  );
}
