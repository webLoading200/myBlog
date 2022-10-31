import axios from "axios";
const INTER_FACE = axios.create({
  // axios 的 url 的基础路径
  // 用于请求超时的时间，超过timeout的时间后，会直接报错
  timeout: 60000,
});
INTER_FACE.defaults.baseURL = "http://localhost:8888/";
INTER_FACE.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  }, // 拦截到响应对象，将响应对象的 data 属性返回给调用的地方
  (err) => Promise.reject(err)
);
// 响应拦截器
INTER_FACE.interceptors.response.use(
  (res) => res.data, // 拦截到响应对象，将响应对象的 data 属性返回给调用的地方
  (err) => Promise.reject(err)
);
export default INTER_FACE;
