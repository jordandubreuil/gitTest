var http = require('http');
var url = require('url');
var fs = require('fs');
var timestamp = require('./timeStamp');
var nodeEvents = require('./nodeevents');

http.createServer(function(req,res){
    //file system response
    /*
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
    */
    nodeEvents.nodeevents();
    res.write("<h1>Welcome to the Homepage!</h1>");
    res.write("The day and time is:" + timestamp.timeStamp() + "<br>");
    res.write("this is the url you requested" + req.url + "<br>");
    var q  = url.parse(req.url, true).query;
    var resTxt = q.id + " " + q.user;
    var qList = url.parse(req.url,true);
   /* console.log(qList.host);//localhost:3030
    console.log(qList.pathname);///users.html
    console.log(qList.search);//id and user*/
    res.end(resTxt);
}).listen(3030);