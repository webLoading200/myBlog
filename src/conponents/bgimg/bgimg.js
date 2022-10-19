import React, { Component } from "react";
import style from "./bgimg.module.scss";
export default class bgimg extends Component {
  render() {
    return (
      <div className={style.space}>
        <div className={style.stars}>
          <div className={style.star}></div>
          <div className={`${style.star} ${style.pink}`}></div>
          <div className={`${style.star} ${style.blue}`}></div>
          <div className={`${style.star} ${style.yellow}`}></div>
        </div>
      </div>
    );
  }
}
