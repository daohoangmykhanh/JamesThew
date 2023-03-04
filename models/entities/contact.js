"use strict";
module.exports = class user{
    id = 0;
    name = '';
    subject = '';
    email = '';
    message = '';
    constructor( name ="", email = "", subject = "", message = ''){
        this.name = name;
        this.subject = subject;
        this.email = email;
        this.message = message;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_subject = () => { return this.subject; }
    set_subject = (val) => { this.subject = val; }
    get_email = () => { return this.email; }
    set_email = (val) => { this.email = val; }
    get_message = () => {return this.message}
    set_message = (val) => {this.message = val}
}