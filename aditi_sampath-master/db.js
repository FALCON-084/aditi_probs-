const mysql = require('mysql2');
var pool = mysql.createPool(
{
    host: 'aditi-admin.mysql.database.azure.com',
    user: 'aditi.admin@aditi-admin',
    password: 'Bot@1234',
    database: 'aditi_dashboard',
    port: 3306,
    ssl: true
});

//const conn = new mysql.createConnection(config);

/*module.exports = [
    function (session,results,next){
        conn.connect();
        var sql = "SELECT * FROM client_details ORDER BY id DESC LIMIT 1";
        conn.query(sql, function (err,results,fields) {
            if(err) throw err;
            else{
                console.log('db '+JSON.stringify(results));
                session.userData.name = results[0].client;
                session.userData.poc = results[0].primary_poc;
                console.log(session.userData.name);
                console.log(session.userData.poc);
                session.endDialog();
            }
        });
    }
];*/
exports.insert = (session,text) => {
    pool.getConnection(function(err, connection) {
        var post  = {id: session.userData.id, question: text};
        connection.query('INSERT INTO client_questions SET ?',post,function (err, result) {
          if (err) throw err;
          console.log(JSON.stringify(result));
          connection.release();
        });
    });
} 
/*exports.select = (session,table) => {
    var sql = "SELECT * FROM "+table;
    pool.query(sql,function (err, result) {
      if (err) throw err;
      console.log(JSON.stringify(result));
    });
} */