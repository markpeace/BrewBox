var http = require("http");

var page = "";
var http = require("http");
http.get("https://rawgit.com/markpeace/BrewBox/master/pages/index.html", function(res) {
  res.on('data', function(data) {
    page=page+data
  });
  res.on('close', function() { console.log(page) })
});

http.createServer(function(req,res){
  res.writeHead(200);
  res.end(page);
}).listen(80);
