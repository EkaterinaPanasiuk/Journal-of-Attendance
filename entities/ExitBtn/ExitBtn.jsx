import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchLogout } from "features/AuthForm/model/authSlice";
import { clearFilter } from "features/UsersFilter/userFilterSlice";
import { clearSorting } from "features/UsersSorting/usersSortingSlice";

export function ExitBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function exitHandler() {
    dispatch(fetchLogout(navigate));
    dispatch(clearSorting());
    dispatch(clearFilter());
  }

  return (
    <button type="button" onClick={exitHandler}>
      <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 0.0292969C2.01472 0.0292969 0 2.04402 0 4.5293V13.4705C0 15.9558 2.01472 17.9705 4.5 17.9705H10.5C10.7761 17.9705 11 17.7466 11 17.4705C11 17.1943 10.7761 16.9705 10.5 16.9705H4.5C2.567 16.9705 1 15.4035 1 13.4705V4.5293C1 2.5963 2.567 1.0293 4.5 1.0293H10.5C10.7761 1.0293 11 0.805439 11 0.529297C11 0.253154 10.7761 0.0292969 10.5 0.0292969H4.5ZM14.3536 8.64633L11.1716 5.46435C10.9763 5.26909 10.6597 5.26909 10.4645 5.46435C10.2692 5.65961 10.2692 5.9762 10.4645 6.17146L12.7929 8.49989H4.5C4.22386 8.49989 4 8.72374 4 8.99989C4 9.27603 4.22386 9.49989 4.5 9.49989H12.7929L10.4645 11.8283C10.2692 12.0236 10.2692 12.3402 10.4645 12.5354C10.6597 12.7307 10.9763 12.7307 11.1716 12.5354L14.3536 9.35344C14.5488 9.15818 14.5488 8.84159 14.3536 8.64633Z"
          fill="currentColor"
        />
      </svg>
      Выйти
    </button>
  );
}
