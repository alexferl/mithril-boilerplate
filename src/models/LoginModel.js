import m from "mithril";

export const LoginModel = () => {
  return {
    resp: {},
    error: {},
    do: async (email, password) => {
      try {
        const resp = await m.request({
          method: "POST",
          url: "https://httpbin.org/post",
          withCredentials: true,
          body: {
            email,
            password,
          },
        });
        LoginModel.resp = resp;
        return resp;
      } catch (e) {
        LoginModel.error = e;
      }
    },
  };
};
