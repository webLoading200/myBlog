import "./app.scss";

import React, { Component, Suspense, useContext } from "react";
// import styles from "./app.module.scss";
import { Route } from "react-router-dom";
import Home from "./home/home";
// import About from "./about/about";
import Nav from "../conponents/nav/nav";
import AuthRouter from "../conponents/authRouter/authRouter";
const About = React.lazy(() => import("./about/about"));
console.log(About);
class App extends Component {
  render() {
    console.log(this.props);
    const AppContext = React.createContext({});
    return (
      <AppContext.Provider value={{ name: "hook测试" }}>
        <div className="main-bg">
          <Nav></Nav>
          <Suspense fallback={<div>loading</div>}>
            <AuthRouter key="1" exact path="/" component={Home} />
            <AuthRouter key="2" exact path="/detail" component={About} />
          </Suspense>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
