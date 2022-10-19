import React, { Component } from "react";
// import styles from "./app.module.scss";
import { Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import "./app.scss";
import Nav from "../conponents/nav/nav";
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="main-bg">
        <Nav></Nav>
        <Route key="1" exact path="/" component={Home} />
        <Route key="2" exact path="/detail" component={About} />
      </div>
    );
  }
}

export default App;
