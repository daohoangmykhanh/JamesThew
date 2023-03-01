"use strict";
module.exports = class post{
    id = 0;
    name = '';
    userId = 0;
    constructor( name ="", userId = 1){
        this.name = name;
        this.userId = userId;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_userId = () => { return this.userId; }
    set_userId = (val) => { this.userId = val; }
   

}