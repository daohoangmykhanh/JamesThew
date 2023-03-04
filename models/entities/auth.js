"use strict";
module.exports = class auth{
    id = 0;
    name = '';
    email = '';
    roleId = 2;
    constructor(id, name ="", email = "", roleId = 2){
        this.name = name;
        this.id = id
        this.email = email;
        this.roleId = roleId;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
   
    get_email = () => { return this.email; }
    set_email = (val) => { this.email = val; }
    get_roleId = () => {return this.roleId}
    set_roleId = (val) => {this.roleId = val}
}