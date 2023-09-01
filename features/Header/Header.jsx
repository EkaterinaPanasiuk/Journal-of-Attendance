import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLogout } from "features/AuthForm/model/authSlice";
import { ToolTip } from "shared/ui/ToolTip/ToolTip";
import styles from "./styles.module.scss";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const name = `${user.lastName ? user.lastName[0] : "."}${user.firstName ? user.firstName[0] : "."}`;
  return (
    <div className={styles.header}>
      <ToolTip
        text={`${user.lastName || ""} ${user.firstName || ""} ${user.middleName || ""}`.trim() || "Гость"}
        btnText="Выйти"
        btnClick={() => {
          dispatch(fetchLogout(navigate));
        }}
      >
        <div className={styles.user}>{name}</div>
      </ToolTip>
    </div>
  );
}
