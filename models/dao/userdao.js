var sql = require("mssql/msnodesqlv8");
const DbConnect = require("../DbConnect");
module.exports = class UserDao {
    constructor() {

    }
    All(callback) {
        var db = new DbConnect();
        const config = db.getConnect();
        sql.connect(config, function (err) {
            if (err) console.log(err);

            let sqlRequest = new sql.Request();
            let sqlQuery = 'SELECT * FROM tblUser';
            sqlRequest.query(sqlQuery, function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    callback(null, data.recordset)
                }
            });

        });
    }

}