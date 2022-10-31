import React, { Component } from "react";
import "./home.scss";
import { apiGetBlogList } from "../../api/modules/blog.js";
import { apiGetSelf } from "../../api/modules/user.js";

import Tag from "../../conponents/tag/tag";
import Main from "./main.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
    this.linkClick = this.linkClick.bind(this);
  }

  linkClick = async (e) => {
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
    this.state = {
      userInfo: {},
      tagList: [],
      blogList: [],
    };
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  async getUserInfo() {
    let data = await apiGetSelf();
    if (data.code == 200) {
      let tagdata = data.data.tag.split(",");
      let id = 0;
      let list = [];
      console.log(data.data);
      tagdata.forEach((element) => {
        list.push({
          id: id,
          name: element,
        });
        id++;
      });
      this.setState({
        userInfo: data.data,
        tagList: list,
      });
    }
  }
  async getBilogList() {
    let blogData = await apiGetBlogList();
    console.log(blogData);
    if (blogData.code == 200) {
      this.setState({
        blogList: blogData.data,
      });
    }
  }
  async componentDidMount() {
    this.getUserInfo();
    this.getBilogList();
  }
  render() {
    return (
      <div className="aside">
        <img alt="图片" className="asiad_avator" src="static/avator.jpg"></img>
        <h3>{this.state.userInfo.name}</h3>
        <span className="discription">{this.state.userInfo.title}</span>
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
            {this.state.tagList.map((item, index) => {
              return <Tag key={item.id} item={item}></Tag>;
            })}
          </div>
        </div>
        <div className="tag-list">
          <div className="title">简介</div>
          <div className="tab-box">{this.state.userInfo.info}</div>
        </div>
        <div className="tag-list">
          <div className="title">最近更新</div>
          <div className="tab-box">
            {this.state.blogList.map((item, index) => {
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
