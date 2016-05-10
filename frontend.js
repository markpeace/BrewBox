var http = require("http");

var http = require("http");
http.get("https://rawgit.com/markpeace/BrewBox/master/pages/index.html", function(res) {
  res.on('data', function(data) {
    console.log(data);
  });
});

http.createServer(function(req,res){
  res.writeHead(200);
  res.write(coredata.temperature.actual);
  res.end(coredata.heating_active);
}).listen(80);
