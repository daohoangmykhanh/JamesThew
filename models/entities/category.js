"use strict";
module.exports = class category{
    id = 0;
    name = '';
    constructor(name =""){
        this.name = name;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
}