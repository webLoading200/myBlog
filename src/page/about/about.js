import React from "react";
import "./about.scss";
import Nav from "./components/nav/nav";
import Main from "./components/main/main";
import { apiGetBlogList } from "../../api/modules/blog";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.setMdUrl = this.setMdUrl.bind(this);
    this.state = {
      blogList: [],
      mdData: "",
    };
  }
  componentDidMount() {
    //console.log(this.props.match.params);
    console.log(this.props.history);
    this.getBilogList();
  }
  async getBilogList() {
    let blogData = await apiGetBlogList();
    console.log(blogData);
    if (blogData.code == 200) {
      this.setState({
        blogList: blogData.data,
        mdData: blogData.data[0],
      });
    }
  }
  setMdUrl(data) {
    console.log(data);
    this.setState({
      mdData: data,
    });
  }
  render() {
    return (
      <div className="about-bg flex flex-x-center-center">
        <Nav navClick={this.setMdUrl} blogList={this.state.blogList}></Nav>
        <Main mdData={this.state.mdData}></Main>
      </div>
    );
  }
}
