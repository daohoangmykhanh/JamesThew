const DbConnect = require("../DbConnect");
var mysql = require('mysql2');
module.exports = class TagDao {
    constructor() {
    }
    All(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = 'SELECT * FROM tblTag';
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
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "INSERT INTO tblTag (tagName) VALUES ('"+ item.name +"')"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                console.log(data);
            });
        
        })
    };
    Delete(id){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "DELETE FROM tblTag WHERE tagId = "+ id +""
            con.query(query, function (err) {
                if (err) throw console.log(err)
                console.log('Execute delete successfully!!!');
            });
        
        })
    }
    Edit(id,callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "SELECT * FROM tblTag WHERE tagId = "+ id +" "
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data);
            });
        
        })
    }
    Update(id, item){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw  console.log(err)
            console.log("Connect!")
            let query = "UPDATE tblTag SET tagName = '"+ item.name +"' WHERE tagId = "+ id +""
            con.query(query, function (err) {
                if (err) throw console.log(err)
                console.log('Execute successfully!!!');
            })
        })
    }
}