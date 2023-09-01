import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { BackButton } from "entities/BackButton/BackButton";
import { clearUserInfo, fetchUserInfo } from "./model/userInfoSlice";
import classes from "./styles.module.scss";

export default function UserInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo({ id, navigate }));
    return () => {
      dispatch(clearUserInfo());
    };
  }, [dispatch, id, navigate]);

  return (
    <div className={classes.pageWrapper}>
      <BackButton />
      <Outlet />
    </div>
  );
}
