var http = require("http");

var request_pages = ["index"]
var page = {}

request_pages.forEach(function(request_page) {
  http.get("https://rawgit.com/markpeace/BrewBox/master/pages/"+request_page+".html", function(res) {
    res.on('data', function(data) { page[request_page]+=data })
    res.on('close', function() {
      console.warn(request_page)
      console.log(page)
    })
  })
})

http.createServer(function(req,res){
  res.writeHead(200);
  res.end(page);
}).listen(80);
