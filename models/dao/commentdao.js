const DbConnect = require("../DbConnect");
var mysql = require('mysql2');
module.exports = class CommentDao {
    constructor() {

    }
    All(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) console.log(err);
            let query = 'SELECT * FROM tblComment INNER JOIN tblUser ON tblUser.userId = tblComment.userId INNER JOIN tblPost ON tblPost.postId = tblComment.postId INNER JOIN tblStatus ON tblStatus.statusId = tblComment.statusId' ;
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
            let query = "INSERT INTO tblComment (userId,postId,statusId,commentContent,createdDate) VALUES ("+ item.get_userId() +","+ item.get_postId() +","+ item.get_statusId() +",'"+ item.get_content() +"','"+ item.get_createdDate() +"')"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                console.log(data, 'Insert commnet successfull !!!');
            });
        });
    }
    Post(id,callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "SELECT * FROM tblComment INNER JOIN tblUser ON tblUser.userId = tblComment.userId INNER JOIN tblStatus ON tblStatus.statusId = tblComment.statusId WHERE postId=" + id + " ";
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        })
    }
    Count(id,callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err);
            console.log("Connect!")
            let query = "SELECT COUNT(*) as count FROM tblComment WHERE postId = "+ id +" ";
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }
}