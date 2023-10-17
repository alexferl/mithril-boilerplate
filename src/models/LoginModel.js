import m from "mithril";

export const LoginModel = {
  response: null,
  error: null,
  login: async (email, password) => {
    try {
      LoginModel.response = await m.request({
        method: "POST",
        url: "https://httpbingo.org/post",
        withCredentials: true,
        body: {
          email,
          password,
        },
      });
    } catch (e) {
      LoginModel.error = e;
    }
  },
};
