import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchUserInfo } from "pages/AdminLayout/UserInfo/model/userInfoSlice";
import { fetchUsers } from "pages/AdminLayout/AdminUsers/usersSlice";
import { connectClassnames } from "shared/lib/dom";
import { localeDate } from "shared/lib/formatDateTime/formatDateTime";
import { syncUsers } from "../api";
import styles from "./styles.module.scss";

export function SyncBtn() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [syncTimeMsg, setSyncTimeMsg] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [syncError, setSyncError] = useState(false);
  const syncLastTimeStr = useSelector((state) => state.user.lastSync);

  useEffect(() => {
    setSyncTimeMsg(
      syncError
        ? "Ошибка синхронизации"
        : syncLastTimeStr === null
        ? "Не синхронизировано"
        : `Синхронизировано: ${localeDate(syncLastTimeStr)}`,
    );
  }, [syncError, syncLastTimeStr]);

  async function syncHandler() {
    try {
      setSyncing(true);
      await syncUsers(dispatch);
      switch (pathname) {
        case "/users":
          dispatch(fetchUsers());
          break;
        case `/users/${id}`:
          dispatch(fetchUserInfo({ id, navigate }));
          break;
        case `/users/${id}/edit`:
          dispatch(fetchUserInfo({ id, navigate }));
          break;
        default:
          break;
      }
      setSyncError(false);
    } catch (error) {
      setSyncError(true);
    } finally {
      setSyncing(false);
    }
  }

  return (
    <button
      className={connectClassnames(styles.btn, styles.syncBtn, syncing ? styles.syncBtnAnim : null)}
      type="button"
      onClick={syncHandler}
      disabled={syncing}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.167 3.3335V8.3335H14.167" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0.833008 16.6665V11.6665H5.83301" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M2.92467 7.49998C3.34731 6.30564 4.06562 5.23782 5.01256 4.39616C5.95951 3.55451 7.10423 2.96645 8.33991 2.68686C9.5756 2.40727 10.862 2.44527 12.079 2.79729C13.296 3.14932 14.4041 3.80391 15.2997 4.69998L19.1663 8.33331M0.833008 11.6666L4.69967 15.3C5.5953 16.1961 6.70332 16.8506 7.92035 17.2027C9.13738 17.5547 10.4238 17.5927 11.6594 17.3131C12.8951 17.0335 14.0398 16.4455 14.9868 15.6038C15.9337 14.7621 16.652 13.6943 17.0747 12.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <div>Синхронизировать</div>
        <div className={styles.syncTime}>{syncTimeMsg}</div>
      </span>
    </button>
  );
}
