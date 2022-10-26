import "./main.scss";
function Main(props) {
  console.log(props);
  return (
    <div className="main">
      <div className="header">hello world</div>
      <div className="discroption">
        欢迎来到我的博客，中国有句古话，叫做来都来了，不然逛逛吧。案例博客里面有一些有意思的东西哦!
      </div>
      <div className="main-title">
        <strong className="strong">webLoading</strong>
        一个正在由使用轮子的人向提供轮子的人进发的程序猿
      </div>
      <div className="botton-box flex flex-x-center-around">
        <div className="btn1-box">
          <div className="btn1 flex flex-x-center-center">
            去逛逛<img alt="图片" className="icon1" src="icon/right.png"></img>
          </div>
        </div>
        <div className="btn2-box">
          <div className="btn2 flex flex-x-center-center">
            github<img alt="图片" className="icon2" src="icon/GitHub.png"></img>
          </div>
        </div>
      </div>
      <footer className="footer">
        {/* 联系我 */}
        <div className="my-info flex flex-x-center-between">
          <div>QQ:1217299814</div>
          <div>微信:webLoading</div>
          <div>电话:15281649765</div>
          <div>邮箱:1217299814@qq.com</div>
        </div>
      </footer>
      <div className="remark">
        此博客既是自己对react的实践也是一个自我介绍以及日常学习和实践的记录场所
      </div>
    </div>
  );
}
export default Main;
