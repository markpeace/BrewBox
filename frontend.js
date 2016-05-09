var http = require("http");

var page = ""

http.get("https://github.com/markpeace/BrewBox/blob/master/pages/index.html", function(res) {
  res.on('data', function(data) {
    page=page+data
  });
});


http.createServer(function(req,res){
  res.writeHead(200);
  res.end(data);
}).listen(80);
