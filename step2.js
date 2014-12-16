var connect = require('connect');

var http = require('http');

var app = connect();

// 定义了一个 /soasme 的中间件, 这句话意味着 在浏览器访问 http://localhost:3000/soasme 是由这块代码处理的.
app.use('/soasme', function(req, res, next){
  res.end('Love ainesmile.');
  next();
})

// 同理, 访问 http://localhost:3000/ainesmile, 就由这块代码处理.
app.use('/ainesmile', function(req, res, next){
  res.end('Love soasme.');
  next();
})

http.createServer(app).listen(3000);

// 这里 next 的用法是 connect 好玩的地方.
// 来了一个请求, 这个req对象会经过一个个middleware, 直到 中间件都运行了一遍, 或者某个中间件最后没调用next().
