var fs = require('fs');
var rs = fs.createReadStream('./demo.html');
rs.on('open', function(){
    console.log("demo file is open")
})

var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on("speak", function(name){
    console.log(name, "is speaking")
})

eventEmitter.emit("speak", "ankit")