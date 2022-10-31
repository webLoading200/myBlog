import INTER_FACE from "../config.js";
export const uploadMd = (data) => {
  return INTER_FACE.post("upload/uploadMd", data, {
    "Content-type": "multipart/form-data",
  });
};
export const getMdJson = (url) => {
  return INTER_FACE.get("upload/getMd", {
    params: {
      url: url,
    },
  });
};
