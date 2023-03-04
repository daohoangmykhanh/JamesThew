var mysql = require('mysql2');
const DbConnect = require("../DbConnect");
module.exports = class SubscribeDao {
    constructor() {
    }
    All(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err);
            console.log("Connect!")
            let query = 'SELECT * FROM tblSubscribe INNER JOIN tblUser ON tblUser.userId = tblSubscribe.userId ';
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
            let query = "INSERT INTO tblSubscribe (subscribeName,userId,subscribePayment,createdDate,subscribePrice) VALUES ('"+ item.get_name() +"',"+ item.get_userId() +",'"+ item.get_payment() +"','"+ item.get_createdDate() +"', " + item.get_price()+")"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                console.log(data, 'Insert commnet successfull !!!');
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
            let query = 'SELECT COUNT(*) as count FROM tblSubscribe';
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }


}