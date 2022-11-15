import m from "mithril";
import { LoginModel } from "../../models/LoginModel";

export const Login = () => {
  return {
    email: "",
    password: "",
    view: () => {
      return m(
        "form",
        {
          onsubmit: (e) => {
            e.preventDefault();
            LoginModel().do(Login.email, Login.password);
          },
        },
        [
          m("label.label", "email"),
          m("input.input[type=email][placeholder=email]", {
            oninput: (e) => {
              Login.email = e.target.value;
            },
          }),
          m("label.label", "password"),
          m("input.input[type=password][placeholder=password]", {
            oninput: (e) => {
              Login.password = e.target.value;
            },
          }),
          m("button.button[type=submit]", "Log in"),
        ],
      );
    },
  };
};
