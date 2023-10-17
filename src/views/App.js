import m from "mithril";

export const App = {
  view: () =>
    m("main", [
      m("h1", { class: "title" }, "mithril-boilerplate"),
      m("a", { href: "/login" }, "Log in"),
    ]),
};
