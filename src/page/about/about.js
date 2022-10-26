import React from "react";
import "./about.scss";
import Nav from "./components/nav/nav";
import Main from "./components/main/main";

export default class About extends React.Component {
  render() {
    console.log(document);
    return (
      <div className="about-bg flex flex-x-center-center">
        <Nav></Nav>
        <Main></Main>
      </div>
    );
  }
  componentDidMount() {
    //console.log(this.props.match.params);
    console.log(this.props.history);
  }
}
