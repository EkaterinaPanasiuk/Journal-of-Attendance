import { useEffect, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalWindAddUser } from "features/ModalWindAddUser/ui/ModalWindAddUser";
import { Navigate } from "react-router-dom";
import { Button } from "shared/ui/Button";
import { UserFilter } from "features/UsersFilter";
import { UsersSorting } from "features/UsersSorting";
import { UsersCardsWrapper } from "widgets/UseerCardsWrapper/UserCardsWrapper";
import { InputSearch } from "shared/ui/InputSearch/InputSearch";
import Context from "shared/context/Context";
import { fetchDirections, fetchUsers, removeError, removeUsers } from "./usersSlice";
import styles from "./styles.module.scss";

export function AdminUsers() {
  const root = document.getElementById("root");
  const [showModal, setShowModal] = useState(false);
  function handleCloseModal() {
    setShowModal(false);
  }
  const modalValue = useMemo(() => {
    return { handleCloseModal, showModal };
  }, [showModal]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchDirections());
    return () => {
      dispatch(removeError());
      dispatch(removeUsers());
    };
  }, [dispatch]);
  const error = useSelector((state) => state.users.error);

  return error === 502 || error === "Failed to fetch" ? (
    <Navigate to="/error" />
  ) : error === 403 ? (
    <Navigate to="/home" />
  ) : (
    <Context.Provider value={modalValue}>
      <div id="adminPage" className={showModal ? styles.disableScroll : styles.pageWrapper}>
        <div className={styles.userBlock}>
          <div className={styles.firstRow}>
            <div className={styles.userAddBlock}>
              <h1 className={styles.usersTitle}>Пользователи</h1>
              <InputSearch />
            </div>
            <Button
              onClick={() => {
                setShowModal(true);
                document.body.style.setProperty("overflow", "hidden");
              }}
              variant="warning"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.3999V13.5999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.40039 8H13.6004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Добавить
            </Button>
          </div>
        </div>
        <div className={styles.filtersBlock}>
          <UserFilter />
          <UsersSorting />
        </div>
        <UsersCardsWrapper />
        {showModal && createPortal(<ModalWindAddUser showModal={showModal} />, root)}
      </div>
    </Context.Provider>
  );
}
