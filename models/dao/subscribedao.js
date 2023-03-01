var mysql = require('mysql2');
const DbConnect = require("../DbConnect");
module.exports = class SubscribeDao {
    constructor() {
    }
    All(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(config, function (err) {
            if (err) throw console.log(err);
            console.log("Connect!")
            let query = 'SELECT * FROM tblSubscribe';
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }

}