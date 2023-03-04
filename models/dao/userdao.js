const DbConnect = require("../DbConnect");
var mysql = require('mysql2');

module.exports = class UserDao {
    constructor() {
    }
    All(callback) {      
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!!!")
            let query = 'SELECT * FROM tblUser'
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
            let query = "INSERT INTO tblUser (userName,userPassword,userEmail,roleId) VALUES ('"+ item.get_name() +"','"+ item.get_password() +"','"+ item.get_email() +"','"+ item.get_roleId() +"')"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
               console.log(data);
            });
        });
    }
    Delete(id){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "DELETE FROM tblUser WHERE userId = "+ id +""
            con.query(query, function (err) {
                if (err) throw console.log(err)
                console.log('Execute successfully!!!');
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
            let query = "SELECT * FROM tblUser WHERE userId = "+ id +" "
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
        let query;
        con.connect(function (err) {
            if (err) console.log(err)
            console.log("Connect!")
            if (item.get_password() == null) {
                query = "UPDATE tblUser SET userName = '"+ item.get_name() +"', userEmail = '" + item.get_email() +"', roleId = "+ item.get_roleId() +" WHERE userId = "+ id +""
            } else {
                query = "UPDATE tblUser SET userName = '"+ item.get_name() +"', userEmail = '" + item.get_email() +"', userPassword = '" + item.get_password()+ "', roleId = "+ item.get_roleId() +" WHERE userId = "+ id +""
            }
            con.query(query, function (err) {
                if (err) throw console.log(err)
                console.log('Execute successfully!!!');
            });
        
        })
    }
    Account(email, password, callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "SELECT * FROM tblUser WHERE userEmail = '"+ email +"' AND userPassword = '"+ password+"'"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                console.log(data)
                callback(null, data)
                console.log('Execute successfully!!!');
            });
        
        })
    }
    Profile(id, item){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        let query;
        con.connect(function (err) {
            if (err) console.log(err)
            console.log("Connect!")
            if (item.get_password() == null) {
                query = "UPDATE tblUser SET userName = '"+ item.get_name() +"', userEmail = '" + item.get_email() +"' WHERE userId = "+ id +""
            } else {
                query = "UPDATE tblUser SET userName = '"+ item.get_name() +"', userEmail = '" + item.get_email() +"', userPassword = '" + item.get_password()+ "' WHERE userId = "+ id +""
            }
            con.query(query, function (err) {
                if (err) throw console.log(err)
                console.log('Execute successfully!!!');
            });
        
        })
    }
    Count(callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err);
            console.log("Connect!")
            let query = 'SELECT COUNT(*) as count FROM tblUser';
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }
}