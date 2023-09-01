import { setLastUpdate } from "pages/Routing/model/userSlice";
import { protectedApi } from "shared/api";

export async function syncUsers(dispatch) {
  const res = await protectedApi.get("/api/refresh/");
  dispatch(setLastUpdate(res.data));
  return res.data;
}
