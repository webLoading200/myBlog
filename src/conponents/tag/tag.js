import style from "./tag.module.scss";

function Tag(props) {
  let color = ["#FF83A4", "#FF7744", "#FE9F88", "#15BC84", "#0060F7"];
  let i = Math.floor(Math.random() * 4);
  return (
    <span style={{ backgroundColor: color[i] }} className={style.tag}>
      {props.item.name}
    </span>
  );
}
export default Tag;
