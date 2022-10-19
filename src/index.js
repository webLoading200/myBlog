import React from "react";
import ReactDOM from "react-dom";
import { socket } from "./api/socket";
import "./index.css";
import { dev } from "./config/index";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./page/app";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
const chat = new socket(dev.socket, new Date().getTime());
chat.open("game1");
chat.onmessage();
root.render(
  <Router>
    <App />
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
