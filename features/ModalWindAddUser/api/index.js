import { fetchUsers } from "pages/AdminLayout/AdminUsers/usersSlice";
import { protectedApi } from "shared/api";

export async function sendUser(newUser, navigate, dispatch) {
  try {
    await protectedApi.post("/auth/users/", newUser);
    dispatch(fetchUsers());
  } catch (e) {
    if (!e.response) {
      throw new Error(e.message);
    }
    switch (e.response.status) {
      case 502:
      case 504:
        navigate("/error");
        break;
      case 400:
        throw e.response.data;
      default:
        throw new Error(e.response.message);
    }
  }
}
