import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
  url: "http://127.0.0.1:1337",
  prefix: "/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});

strapi.axios.defaults.headers.common["Authorization"] =
  process.env.NEXT_PUBLIC_STRAPI_TOKEN || "";
export { strapi };
