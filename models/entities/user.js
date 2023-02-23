"use strict";
module.exports = class user{
    id = 0;
    name = '';
    password = '';
    email = '';
    roleId = 2;
    constructor( name ="", password = "", email = "", roleId = 2){
        this.name = name;
        this.password = password;
        this.email = email;
        this.roleId = roleId;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_password = () => { return this.password; }
    set_password = (val) => { this.password = val; }
    get_email = () => { return this.email; }
    set_email = (val) => { this.email = val; }
    get_roleId = () => {return this.roleId}
    set_roleId = (val) => {this.roleId = val}
}