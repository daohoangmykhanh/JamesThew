const DbConnect = require("../DbConnect");
var mysql = require('mysql2');

module.exports = class ContactDao {
    constructor() {
    }
    All(callback) {      
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!!!")
            let query = 'SELECT * FROM tblContact'
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });

        });
    }
    Create(item){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!!!")
            let query = "INSERT INTO tblContact (contactName,contactEmail,contactSubject,contactMessage) VALUES ('"+ item.get_name() +"','"+ item.get_email() +"','"+ item.get_subject() +"','"+ item.get_message() +"')"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
               console.log(data);
            });
        });
    }
    Count(callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err);
            console.log("Connect!")
            let query = 'SELECT COUNT(*) as count FROM tblContact';
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }
}