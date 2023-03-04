const DbConnect = require("../DbConnect");
var mysql = require('mysql2');
module.exports = class CommentDao {
    constructor() {

    }
    All(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect( function (err) {
            if (err) console.log(err);
            let query = 'SELECT * FROM tblStatus';
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }
}