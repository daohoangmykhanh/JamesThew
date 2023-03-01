"use strict";
module.exports = class auth{
    name = '';
    email = '';
    roleId = 2;
    constructor( name ="", email = "", roleId = 2){
        this.name = name;
        this.email = email;
        this.roleId = roleId;
    }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_email = () => { return this.email; }
    set_email = (val) => { this.email = val; }
    get_roleId = () => {return this.roleId}
    set_roleId = (val) => {this.roleId = val}
}