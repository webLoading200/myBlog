import INTER_FACE from "../config.js";
export const apiGetBlogList = (data) => {
  return INTER_FACE.get("/blog/getBlogList");
};
