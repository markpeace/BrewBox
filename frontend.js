var http = require("http");

var request_pages = ["index"]
var page = {}

request_pages.forEach(function(request_page) {
  http.get("https://rawgit.com/markpeace/BrewBox/master/pages/"+request_page+".html", function(res) {
    page[request_page]=""
    res.on('data', function(data) { page[request_page]+=data })
  })
})

http.createServer(function(req,res){
  res.writeHead(200);
  res.end(page.index);
}).listen(80);
