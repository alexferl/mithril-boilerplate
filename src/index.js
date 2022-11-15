import m from "mithril";
import "./app.css";
import { App } from "./views/App";
import { LoginForm } from "./views/login/Login";

const mountNode = document.querySelector("#app");

m.route.prefix = "";
m.route(mountNode, "/", {
  "/": App,
  "/login": LoginForm
});
