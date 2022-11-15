import m from "mithril";
import { App } from "./App";

const mountNode = document.querySelector("#app");

m.route.prefix = ''
m.route(mountNode, '/', {
    '/': App,
})
