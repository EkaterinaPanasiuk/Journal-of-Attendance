import { protectedApi } from "shared/api";

export async function fetchEditUser(user, id, navigate) {
  try {
    await protectedApi.patch(`/auth/users/${id}/`, user);
    navigate(-1);
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
