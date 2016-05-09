var http = require("http");

http.get("https://github.com/markpeace/BrewBox/blob/master/pages/index.html", function(res) {
  res.on('data', function(data) {
    console.log(data);
  });
});


http.createServer(function(req,res){
  res.writeHead(200);
  res.end("Has this worked");
}).listen(80);
