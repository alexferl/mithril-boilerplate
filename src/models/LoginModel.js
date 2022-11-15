import m from "mithril";

export const Login = () => {
  return {
    do: (email, password) => {
      return m
        .request({
          method: "POST",
          url: "https://httpbin.org/post",
          withCredentials: true,
          body: {
            email,
            password
          }
        })
        .then((result) => {
          console.log(result);
        })
        .catch((e) => {
          console.log(JSON.stringify(e));
        });
    }
  };
};
