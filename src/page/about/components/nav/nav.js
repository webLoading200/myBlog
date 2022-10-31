import "./nav.scss";
import { apiGetBlogList } from "../../../../api/modules/blog";

import React, { useState, useEffect } from "react";
function Nav(props) {
  return (
    <div className="about-nav">
      <div className="title">更新日志</div>
      <div className="tab-box  scrollbar-style">
        {props.blogList.map((item, index) => {
          return (
            <div className="pro-list" key={item.id}>
              <div
                className="pro-link"
                href=""
                onClick={() => {
                  props.navClick(item);
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
  );
}
export default Nav;
// import { uploadMd } from "../../../../api/modules/upload";
// import { readMd } from "../../../../tools/readMd";
// function getFile(e) {
//   console.log(e.target.files);
//   let file = e.target.files[0];
//   let form = new FormData();
//   form.append("file", file);
//   uploadMd(form);
// }
