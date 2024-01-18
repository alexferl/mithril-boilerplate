import m from "mithril";
import { LoginModel } from "../../models/LoginModel";

export const Login = {
  email: "",
  password: "",
  view: ({ state }) => {
    if (LoginModel.error) {
      return m("main", [m("h1", "error"), m("p", LoginModel.error.code)]);
    }

    if (!LoginModel.response) {
      return m(
        "form",
        {
          onsubmit: (e) => {
            e.preventDefault();
            LoginModel.login(state.email, state.password);
          },
        },
        [
          m("label", "email"),
          m("input", {
            type: "email",
            placeholder: "email",
            oninput: (e) => {
              state.email = e.target.value;
            },
          }),
          m("label", "password"),
          m("input", {
            type: "password",
            placeholder: "password",
            oninput: (e) => {
              state.password = e.target.value;
            },
          }),
          m("button", { type: "submit" }, "Log in"),
        ],
      );
    }
    return m("main", [
      m("h1", "response"),
      m("label", "email"),
      m("p", LoginModel.response.json.email),
      m("label", "password"),
      m("p", LoginModel.response.json.password),
    ]);
  },
};
