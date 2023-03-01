const DbConnect = require("../DbConnect");
var mysql = require('mysql2');

module.exports = class CategoryDao {
    constructor() {
    }
    All(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = 'SELECT * FROM tblCategory';
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
            let query = "INSERT INTO tblCategory (categoryName) VALUES ('"+ item.name +"')"
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
            let query = "DELETE FROM tblCategory WHERE categoryId = "+ id +""
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
            let query = "SELECT * FROM tblCategory WHERE categoryId = "+ id +" "
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
            let query = "UPDATE tblCategory SET categoryName = '"+ item.name +"' WHERE categoryId = "+ id +""
            con.query(query, function (err) {
                if (err) throw console.log(err)
                console.log('Execute successfully!!!');
            })
        })
    }
}