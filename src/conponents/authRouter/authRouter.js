import React from "react";
import { Route, Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
function sleep() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
}
function showLoading() {
  let dom = document.getElementById("loading");
  if (!dom) {
    dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    dom.classList.add("main-loading");

    for (let i = 0; i < 10; i++) {
      console.log(i);
      let child = document.createElement("div");
      child.classList.add("main-loading-child" + i);
      dom.appendChild(child);
    }
    document.body.appendChild(dom);
    setTimeout(() => {
      document.body.removeChild(document.getElementById("loading"));
    }, 2000);
  }
}
export default function AuthRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("路由守卫");
        showLoading();
        return <Component {...props} />;
        const sid = !!sessionStorage.getItem("sid");
        if (!sid) {
          console.error("请先登录!");
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    ></Route>
  );
}
