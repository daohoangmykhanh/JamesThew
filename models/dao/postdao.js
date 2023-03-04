const DbConnect = require("../DbConnect");
var mysql = require('mysql2');
module.exports = class PostDao {
    constructor() {
    }
    All(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = 'SELECT * FROM tblPost INNER JOIN tblCategory ON tblPost.categoryId = tblCategory.categoryId INNER JOIN tblTag ON tblPost.tagId = tblTag.tagId WHERE postSubscribe = 0  ORDER BY postId DESC'
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }
    Subscribe(callback) {
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = 'SELECT * FROM tblPost INNER JOIN tblCategory ON tblPost.categoryId = tblCategory.categoryId INNER JOIN tblTag ON tblPost.tagId = tblTag.tagId WHERE postSubscribe = 1 ORDER BY postId DESC'
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
            let query = "INSERT INTO tblPost (postName,postImage,postDescription,postContent,tagId,categoryId,postSubscribe,createdDate) VALUES ('"+ item.get_name() +"','"+ item.get_image() +"','"+ item.get_description() +"','"+ item.get_content() +"','"+ item.get_tagId() +"','"+ item.get_categoryId() +"', " + item.get_subscribe() + " ,'"+ item.get_createdDate() +"')"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                console.log(data, 'Insert data successfull !!!');
            });
        });
    }
    Top(callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = 'SELECT * FROM tblPost INNER JOIN tblCategory ON tblPost.categoryId = tblCategory.categoryId INNER JOIN tblTag ON tblPost.tagId = tblTag.tagId WHERE postSubscribe = 0 ORDER BY postId DESC LIMIT 5'
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }
    TopPost(callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = 'SELECT * FROM tblPost WHERE tagId = 6 and postSubscribe = 0  ORDER BY postId DESC LIMIT 5'
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
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
            let query = "DELETE FROM tblPost WHERE postId = "+ id +""
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
            let query = "SELECT * FROM tblPost WHERE postId = "+ id +" "
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
            if (err) throw console.log(err)
            console.log("Connect!")
            if (item.get_image() == null){
                query = "UPDATE tblPost SET postName = '"+ item.get_name() +"', postDescription = '" + item.get_description()+ "', postContent = '"+ item.get_content() +"', tagId = "+ item.get_tagId() +", categoryId = "+ item.get_categoryId() +", updatedDate = '"+ item.get_updatedDate() +"'   WHERE postId = "+ id +""
            } else {
                query = "UPDATE tblPost SET postName = '"+ item.get_name() +"', postImage = '" + item.get_image() +"', postDescription = '" + item.get_description()+ "', postContent = '"+ item.get_content() +"', tagId = "+ item.get_tagId() +", categoryId = "+ item.get_categoryId() +", updatedDate = '"+ item.get_updatedDate() +"', postSubscribe = "+ item.get_subscribe() +"  WHERE postId = "+ id +""
            }    
            con.query(query, function (err) {
                if (err) throw console.log(err)
                console.log('Execute successfully!!!');
            });
        })
    }
    Detail(id,callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "SELECT * FROM tblPost INNER JOIN tblCategory ON tblPost.categoryId = tblCategory.categoryId INNER JOIN tblTag ON tblPost.tagId = tblTag.tagId WHERE postId = "+ id +" "
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data);
            });
        })
    }
    Recipe(callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
                console.log("Connect!")
            let query = "SELECT * FROM tblPost WHERE categoryId = 1 ORDER BY postId DESC"
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data);
            });
        })
    }
    Category(id,callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "SELECT * FROM tblPost WHERE categoryId = "+ id +" "
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data);
            });
        })
    }
    Tag(id,callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "SELECT * FROM tblPost WHERE tagId = "+ id +" "
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data);
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
            let query = 'SELECT COUNT(*) as count FROM tblPost';
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data)
            });
        });
    }
    Search(input,callback){
        var db = new DbConnect();
        var config = db.getConnect();
        var con = mysql.createConnection(config);
        con.connect(function (err) {
            if (err) throw console.log(err)
            console.log("Connect!")
            let query = "SELECT * FROM tblPost INNER JOIN tblCategory ON tblPost.categoryId = tblCategory.categoryId INNER JOIN tblTag ON tblPost.tagId = tblTag.tagId WHERE postName LIKE '%"+ input +"%' "
            con.query(query, function (err, data) {
                if (err) throw console.log(err)
                callback(null, data);
            });
        })
    }
    
}