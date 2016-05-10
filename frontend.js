var http = require("http");

http.createServer(function(req,res){
  res.writeHead(200);
  res.write(coredata.temperature.actual);
  res.end(coredata.heating_active);
}).listen(80);
