var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"ankit",
    password:"password",
    database:"mydb"
});
con.connect(function(error){
    if(error) throw error;
    con.query('select * from students', function(err, result){
        if(err) throw err;
        console.warn(result);
    })
})