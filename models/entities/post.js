"use strict";
module.exports = class post{
    id = 0;
    name = '';
    tagId = 1;
    image = ''
    categoryId = 1;
    createdDate = '';
    updatedDate = '';
    content = '';
    description ='';
    constructor( name = '',image = '',description ='', content = '', tagId = 1, categoryId = 1, createdDate = '', updatedDate = ''){
        this.name = name;
        this.tagId = tagId;
        this.categoryId = categoryId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.content = content;
        this.image = image;
        this.description = description
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
    get_content = () => {return this.content}
    set_content = (val) => {this.content = val}
    get_image = () => { return this.image; }
    set_image = (val) => { this.image = val; }
    get_description = () => { return this.description; }
    set_description = (val) => { this.description = val; }
}