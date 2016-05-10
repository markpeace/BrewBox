var http = require("http");

http.createServer(function(req,res){
  res.writeHead(200);
  res.write('temp');
  //res.write(coredata.temperature.actual);
  //res.end(coredata.heating_active);
  res.end("finished");
}).listen(80);
