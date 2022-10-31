import "./main.scss";
import { readMd } from "../../../../tools/readMd";
import "github-markdown-css";
function Main(props) {
  readMd(`http://localhost:8888/uploads/${props.mdData.mkid}.md`).then(
    (res) => {
      console.log(res);
      document.querySelector(".about-main-main").innerHTML = res;
      let d = document.querySelectorAll("id");
      console.log(d);
    }
  );
  return (
    <div className="about-main">
      <div className="about-main-main markdown-body scrollbar-style"></div>
    </div>
  );
}
export default Main;
