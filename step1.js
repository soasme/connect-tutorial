// require connect
var connect = require('connect');

// require http
var http = require('http');

// 这是一个`middleware`, 但不要被名字迷惑, middleware 就是一个普通的function.
// 它接受两个参数, 一个是http请求, 一个是http响应(返回给浏览器)
function helloWorld (req, res) {
  res.end('Hello From Connect\n'); // 这里我们给浏览器返回一个字符串.
}

// 新建一个connect实例.
var app = connect();

// app 使用 上面的middleWare: helloWorld.
app.use(helloWorld);

// node 的 http 模块新建一个服务器, 监听 3000 端口
http.createServer(app).listen(3000);

// 打开浏览器, 访问 http://localhost:3000 , 你将会看到浏览器的输出.
