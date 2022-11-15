import m from "mithril";
import { Login } from "../../models/LoginModel";

export const LoginForm = () => {
  return {
    email: "",
    password: "",
    view: () => {
      return m(
        "form",
        {
          onsubmit: (e) => {
            e.preventDefault();
            Login().do(LoginForm.email, LoginForm.password);
          }
        },
        [
          m("label.label", "email"),
          m("input.input[type=email][placeholder=email]", {
            oninput: (e) => {
              LoginForm.email = e.target.value;
            }
          }),
          m("label.label", "password"),
          m("input.input[type=password][placeholder=password]", {
            oninput: (e) => {
              LoginForm.password = e.target.value;
            }
          }),
          m("button.button[type=submit]", "Log in")
        ]
      );
    }
  };
};
