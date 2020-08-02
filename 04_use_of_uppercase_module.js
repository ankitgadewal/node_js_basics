var http = require('http')
var uc = require('upper-case')

http.createServer(function(req, res){
    res.write(uc.upperCase('hello world'));
    res.end()
}).listen(4000)