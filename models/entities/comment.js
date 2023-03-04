"use strict";
module.exports = class post{
    id = 0;
    postId= 1;
    userId = 1;
    statusId= 1;
    content = '';
    createdDate = '';
    constructor( userId = 1, postId = 1,statusId = 1, content = '',  createdDate = ''){
        this.userId = userId;
        this.statusId = statusId;
        this.postId = postId;
        this.createdDate = createdDate;
        this.content = content;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_userId = () => { return this.userId; }
    set_userId = (val) => { this.userId = val; }
    get_statusId = () => { return this.statusId; }
    set_statusId = (val) => { this.statusId = val; }
    get_postId = () => {return this.postId}
    set_postId = (val) => {this.postId = val}
    get_createdDate = () => {return this.createdDate}
    set_createdDate = (val) => {this.createdDate = val}
    get_content = () => {return this.content}
    set_content = (val) => {this.Content = val}

}