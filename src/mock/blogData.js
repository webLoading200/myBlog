const Mock = require("mockjs");

//get请求
module.exports = Mock.mock("/blogList", "get", (options) => {
  const ret = Mock.mock({
    user: { username: "@cname" },
  });
  return {
    status: 200,
    data: ret,
  };
});

//get请求：模拟分页数据
module.exports = Mock.mock("/info", "get", (options) => {
  //接受参数：是JSON格式，需要转换成对象
  const page = JSON.parse(options.body).page;
  const ret = Mock.mock({
    "list|20": [{ "id|+1": 1, name: "@cname" }],
  });

  if (page > 3) {
    return {
      status: 200,
      data: [],
    };
  }
  return {
    status: 200,
    data: ret,
  };
});

//post请求，模拟注册
module.exports = Mock.mock("/add", "post", (options) => {
  return {
    status: 200,
    data: JSON.parse(options.body).data,
  };
});
