var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(req.url);
    res.write('Hello John!');
    // res.end('Hello World!');
    //   res.write('Hello John!'); we can't write after end response

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt); // http://localhost:4000/?year=2017&month=July this is produce 2017 July
}).listen(4000);

// we can run it with [node filename] here http is a inbuilt module