import m from "mithril";
import "./app.css";
import { App } from "./views/App";
import { Login } from "./views/login/Login";

m.route.prefix = "";
m.route(document.body, "/", {
  "/": {
    render: () => m(App),
  },
  "/login": {
    render: () => m(Login),
  },
});
