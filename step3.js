var connect = require('connect');

var http = require('http');

var app = connect();

// 现在我们定义了4个middleware
// 访问 http://localhost:3000
// 由于有next, 这个请求先后被4个middleware处理了.
// 可以与 step4.js 对比一下.
app.use(function(req, res, next){
  res.write('soasme love ainesmile.');
  next();
})

app.use(function(req, res, next){
  res.write('ainesmile love soasme.');
  next();
})

app.use(function(req, res, next){
  res.write('~~~');
  next();
})

app.use(function(req, res, next){
  res.end();
})



http.createServer(app).listen(3000);
