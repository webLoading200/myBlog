import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.scss";
import { withRouter } from "react-router-dom";
//按钮
class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1234,
    };
  }
  render() {
    return (
      <div className={style.navItem}>
        <img
          alt="图片"
          className={style.navitemicon}
          src={this.props.src.icon}
        ></img>
        <Link to={this.props.src.path}>{this.props.src.title}</Link>
      </div>
    );
  }
}
// 导航
class nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "首页",
          path: "/",
          icon: "icon/home.png",
        },
        {
          title: "博客",
          path: "/detail",
          icon: "icon/txt.png",
        },
        {
          title: "案例",
          path: "/detail",
          icon: "icon/expo.png",
        },
        {
          title: "笔记",
          path: "/detail",
          icon: "icon/pent.png",
        },
        {
          title: "关于",
          path: "/detail",
          icon: "icon/avator.png",
        },
      ],
    };
  }

  render() {
    return (
      <div className={style.bg}>
        <div className={style.navleft}>
          <div className={style.icon}></div>
          <div className={style.icontxt}>有志向的猪儿虫的博客</div>
        </div>
        <div className={style.navright}>
          {this.state.list.map((item, index) => {
            return <Btn key={index} src={item}></Btn>;
          })}
        </div>
      </div>
    );
  }
}
export default withRouter(nav);
