import m from "mithril";

export const LoginModel = {
  response: null,
  error: null,
  login: (email, password) => {
    return m
      .request({
        method: "POST",
        url: "https://httpbingo.org/post",
        withCredentials: true,
        body: {
          email,
          password,
        },
      })
      .then((resp) => {
        LoginModel.response = resp;
      })
      .catch((err) => {
        LoginModel.error = err;
      });
  },
};
