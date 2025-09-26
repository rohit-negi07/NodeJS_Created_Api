var http=require('http');
http.createServer(function(req,res){
    res.write("Hello, Welcome to my world of Coding!");
    res.end();
}).listen(8080);