import m from "mithril";
import { LoginModel } from "../../models/LoginModel";

export const Login = () => {
  return {
    email: "",
    password: "",
    view: () => {
      if (typeof LoginModel.error !== "undefined") {
        return m("main", [m("h1", "error"), m("p", LoginModel.error.code)]);
      }

      if (typeof LoginModel.resp === "undefined") {
        return m(
          "form",
          {
            onsubmit: (e) => {
              e.preventDefault();
              LoginModel().do(Login.email, Login.password);
            },
          },
          [
            m("label", "email"),
            m("input[type=email][placeholder=email]", {
              oninput: (e) => {
                Login.email = e.target.value;
              },
            }),
            m("label", "password"),
            m("input[type=password][placeholder=password]", {
              oninput: (e) => {
                Login.password = e.target.value;
              },
            }),
            m("button[type=submit]", "Log in"),
          ],
        );
      } else {
        return m("main", [
          m("h1", "response"),
          m("label", "email"),
          m("p", LoginModel.resp.json.email),
          m("label", "password"),
          m("p", LoginModel.resp.json.password),
        ]);
      }
    },
  };
};
