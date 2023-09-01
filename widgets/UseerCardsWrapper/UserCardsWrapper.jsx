import { useSelector } from "react-redux";
import { UsersList } from "features/UserList/UserList";
import { selectFilteredUsers } from "features/UsersFilter/userFilterSelectors";
import compareRusEngNum from "shared/lib/compareRusEngNum";
import { filterByStudyField, sortUsersByChronoDown, sortUsersByChronoUp, sortUsersByNameUp, sortUsersByNameDown } from "./filterAndSort";
import styles from "./styles.module.scss";

export function UsersCardsWrapper() {
  const directionsArray = useSelector((state) => state.users.directions.map((obj) => Object.keys(obj)[0]));
  const { sort, sortDirection } = useSelector((state) => state.usersSorting);
  directionsArray.sort(compareRusEngNum).push("Без направлений");
  if (!sortDirection) {
    directionsArray.reverse();
  }
  const users = useSelector(selectFilteredUsers);
  return (
    <article className={styles.usersField}>
      {sort === "directions" ? (
        <>
          {directionsArray.map((dir) =>
            filterByStudyField(users, dir).length ? (
              <div className={styles.userCardsDirection} key={dir}>
                <h3 className={styles.userCardsDirectionTitle}>{dir}</h3>
                <UsersList users={sortUsersByNameUp(sortUsersByChronoDown(filterByStudyField(users, dir)))} />
              </div>
            ) : null,
          )}
        </>
      ) : sort === "chrono" ? (
        <UsersList users={sortDirection ? sortUsersByChronoDown(users) : sortUsersByChronoUp(users)} />
      ) : (
        <UsersList
          users={sortDirection ? sortUsersByNameUp(sortUsersByChronoDown(users)) : sortUsersByNameDown(sortUsersByChronoDown(users))}
        />
      )}
    </article>
  );
}
