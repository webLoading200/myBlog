class socket {
  constructor(url, id) {
    this.ws = new WebSocket(url + "?uid=" + id);
  }
  open(name) {
    var that = this;
    this.ws.onopen = function (e) {
      console.log("连接服务器成功");
      that.ws.send(name);
    };
  }
  onclose() {
    this.ws.onclose = function (e) {
      console.log("服务器关闭");
    };
  }
  onerror() {
    this.ws.onerror = function () {
      console.log("连接出错");
    };
  }
  onmessage() {
    this.ws.onmessage = function (e) {
      console.log(e.data);
    };
  }
  sendMessage(name) {
    this.ws.send(name);
  }
}
export { socket };
