import "./main.scss";
function Main(props) {
  console.log(props);
  return (
    <div className="main">
      <h1>{props.info.title}</h1>
    </div>
  );
}
export default Main;
