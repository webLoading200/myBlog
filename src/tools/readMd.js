import { marked } from "marked";
import { getMdJson } from "../api/modules/upload";

const rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

export const readMd = async (url) => {
  return new Promise((reslove, reject) => {
    fetch(url)
      .then((response) => response.text())
      .then((result) => {
        reslove(marked(result));
      });
  });
};
