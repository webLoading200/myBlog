import React, { Component } from "react";
import "./home.scss";
// import { uploadMd } from "../../api/modules/upload.js";
import Tag from "../../conponents/tag/tag";
import Main from "./main.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagList: [
        {
          id: 1,
          name: "前端开发",
        },
        {
          id: 2,
          name: "性能优化",
        },
        {
          id: 3,
          name: "javaScript",
        },
        {
          id: 4,
          name: "typeScript",
        },
        {
          id: 5,
          name: "vue",
        },
        {
          id: 6,
          name: "react",
        },
        {
          id: 7,
          name: "socket",
        },
        {
          id: 8,
          name: "unionApp",
        },
        {
          id: 9,
          name: "css",
        },
        {
          id: 10,
          name: "es6",
        },
        {
          id: 11,
          name: "node.js koa",
        },
        {
          id: 12,
          name: "sass scss",
        },
        {
          id: 13,
          name: "微信小程序",
        },
        {
          id: 14,
          name: "公众号",
        },
        {
          id: 15,
          name: "微信支付",
        },
        {
          id: 16,
          name: "canvas",
        },
        {
          id: 17,
          name: "echars",
        },
      ],
      programList: [
        {
          id: 1,
          title: "原生js实现画板工具",
          info: "用canvas实现了一个简易的画板工具。包括线条绘制，拖拽，撤销，橡皮擦，颜色填充，清空画板，选择画笔颜色，选择填充颜色，选择笔头粗细等等功能",
          link: "https://github.com/webLoading200/myDaily/tree/master/canvas",
        },
        {
          id: 2,

          title: "原生js实现画板工具",
          info: "用canvas实现了一个简易的画板工具。包括线条绘制，拖拽，撤销，橡皮擦，颜色填充，清空画板，选择画笔颜色，选择填充颜色，选择笔头粗细等等功能",
          link: "https://github.com/webLoading200/myDaily/tree/master/canvas",
        },
        {
          id: 3,

          title: "原生js实现画板工具",
          info: "用canvas实现了一个简易的画板工具。包括线条绘制，拖拽，撤销，橡皮擦，颜色填充，清空画板，选择画笔颜色，选择填充颜色，选择笔头粗细等等功能",
          link: "https://github.com/webLoading200/myDaily/tree/master/canvas",
        },
        {
          id: 4,

          title: "原生js实现画板工具",
          info: "用canvas实现了一个简易的画板工具。包括线条绘制，拖拽，撤销，橡皮擦，颜色填充，清空画板，选择画笔颜色，选择填充颜色，选择笔头粗细等等功能",
          link: "https://github.com/webLoading200/myDaily/tree/master/canvas",
        },
        {
          id: 5,

          title: "vue2响应式原理简易实现",
          info: "数据劫持，双向绑定。发布订阅者模式",
          link: "https://github.com/webLoading200/myDaily/tree/master/vue2%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0",
        },
        {
          id: 6,

          title: "原生js实现图片压缩下载",
          info: "canvas html5 js",
          link: "https://github.com/webLoading200/myDaily/tree/master/%E5%8E%9F%E7%94%9Fjs%E5%AE%9E%E7%8E%B0%E5%9B%BE%E7%89%87%E5%8E%8B%E7%BC%A9%E5%8A%9F%E8%83%BD",
        },
        {
          id: 7,

          title: "一些炫酷的动效",
          info: "css3 loading",
          link: "https://github.com/webLoading200/myDaily/tree/master/%E4%B8%80%E4%BA%9B%E7%82%AB%E9%85%B7%E7%9A%84%E5%8A%A8%E6%95%88",
        },
      ],
      info: {},
    };
  }

  linkClick = (e) => {
    this.setState({
      info: e,
    });
    console.log(123);
  };
  render() {
    console.log(123);
    return (
      <div>
        <Owner
          taglist={this.state.tagList}
          programList={this.state.programList}
          linkClick={this.linkClick}
        ></Owner>
        <Main info={this.state.info}></Main>
      </div>
    );
  }
}
class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div className="aside">
        <img alt="图片" className="asiad_avator" src="static/avator.jpg"></img>
        <h3>有志向的猪儿虫</h3>
        <span className="discription">学习前端的第pending......天</span>
        <div className="link">
          <a
            href="https://github.com/webLoading200"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="图片" className="icon1" src="icon/GitHub.png"></img>
            <img alt="图片" className="icon2" src="icon/gittxt.png"></img>
          </a>
          <a
            className="a1"
            href="https://juejin.cn/user/1201142481290791"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="图片" className="icon3" src="icon/juejin.png"></img>
            <span>掘金</span>
          </a>
        </div>
        <div className="tag-list">
          <div className="title">标签</div>
          <div className="tab-box">
            {this.props.taglist.map((item, index) => {
              return <Tag key={item.id} item={item}></Tag>;
            })}
          </div>
        </div>
        <div className="tag-list">
          <div className="title">简介</div>
          <div className="tab-box">
            2020年毕业，软件工程专业，专业从事前端工作2年。共待过两家软件公司，第一家公司为创业型公司，负责公司主要项目的研发工作，使用到的是uniapp多端开发。附带一些额外的如后台管理系统以及公司网站建设，主要技术栈为vue2。第二家公司担任公司tv视频播放项目的前端研发，使用的是h5+原生app混合开发，附带一些小程序以及支付和视频播放相关工作。
          </div>
        </div>
        <div className="tag-list">
          <div className="title">文章</div>
          <div className="tab-box">
            {this.props.programList.map((item, index) => {
              return (
                <div className="pro-list" key={item.id}>
                  <div
                    className="pro-link"
                    href=""
                    onClick={() => {
                      this.props.linkClick(item);
                    }}
                  >
                    {index + 1 + "." + item.title}
                  </div>
                  <div className="pro-info">{item.info}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

// function upload(e) {
//   console.log(e.target.files[0]);
//   let file = e.target.files[0];
//   let formData = new FormData();
//   formData.append("file", file, file.name);
//   uploadMd(formData)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
