import axios from "../config.js";
export const uploadMd = (data) => {
  return axios.post("/upload/uploadMd", data, {
    headers: {
      "Content-Type": "multipart/form-data;boundary=" + new Date().getTime(),
    },
  });
};
