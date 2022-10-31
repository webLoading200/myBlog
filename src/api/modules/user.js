import INTER_FACE from "../config.js";
export const apiGetUserInfo = (data) => {
  return INTER_FACE.get("users/userInfo", {
    id: "",
  });
};
export const apiGetSelf = (data) => {
  return INTER_FACE.get("users/selfInfo");
};
