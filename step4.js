var connect = require('connect');

var http = require('http');

var app = connect();

app.use(function(req, res, next){
  res.write('soasme love ainesmile.');
  next();
})

app.use(function(req, res, next){
  res.write('ainesmile love soasme.');
  next();
})

// 由于第三种中间件没有写 next(); 所以, 请求 http://localhost:3000 并没有到达第四个middleware
// 在这个middleware执行结束后就给浏览器返回了所有内容.
app.use(function(req, res, next){
  res.end('~~~');
})

app.use(function(req, res, next){
  res.end('You shall not pass!');
})



http.createServer(app).listen(3000);

