"use strict";
module.exports = class subscribe{
    id = 0;
    name = '';
    userId = 0;
    payment ='';
    createdDate = ''
    price = 0;
    constructor( name ="", userId = 1, payment = '', createdDate ='', price = 0){
        this.name = name;
        this.userId = userId;
        this.payment = payment;
        this.createdDate = createdDate;
        this.price = price;
    }
    get_id = () => { return this.id; }
    set_id = (val) => { this.id = val; }
    get_name = () => { return this.name; }
    set_name = (val) => { this.name = val; }
    get_userId = () => { return this.userId; }
    set_userId = (val) => { this.userId = val; }
    get_payment = () => { return this.payment; }
    set_payment = (val) => { this.payment = val; }
    get_createdDate = () => { return this.createdDate; }
    set_createdDate = (val) => { this.createdDate = val; }
    get_price = () => { return this.price; }
    set_price = (val) => { this.price = val; }
   

}