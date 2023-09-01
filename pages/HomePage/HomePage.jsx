import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "features/AuthForm/model/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { removeError } from "pages/AdminLayout/AdminUsers/usersSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lastName, firstName, middleName } = useSelector((state) => state.user);
  useEffect(
    () => () => {
      dispatch(removeError());
    },
    [dispatch],
  );

  return (
    <div>
      <h1>{`${lastName || ""} ${firstName || ""} ${middleName || ""}`.trim() || "Гость"}, Welcome to Home page!!!</h1>
      <button
        type="button"
        onClick={() => {
          dispatch(fetchLogout(navigate));
        }}
      >
        Log out
      </button>
    </div>
  );
}
