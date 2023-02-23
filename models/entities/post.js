"use strict";
module.exports = class post{
    id = 0;
    name = '';
    tagId = 1;
    categoryId = 1;
    createdDate = '';
    updateDate = '';
    postContent = '';
    constructor( name ="", tagId = 1, categoryId = 1, createdDate = '', updatedDate = '', postContent){
        this.name = name;
        this.tagId = tagId;
        this.categoryId = categoryId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.postContent = postContent;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_tagId = () => { return this.tagId; }
    set_tagId = (val) => { this.tagId = val; }
    get_categoryId = () => { return this.categoryId; }
    set_categoryId = (val) => { this.categoryId = val; }
    get_createdDate = () => {return this.createdDate}
    set_createdDate = (val) => {this.createdDate = val}
    get_updatedDate = () => {return this.updatedDate}
    set_updatedDate = (val) => {this.updatedDate = val}
    get_postContent = () => {return this.postContent}
    set_postContent = (val) => {this.postContent = val}

}