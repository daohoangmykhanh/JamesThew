
module.exports = class DbConnect {
    constructor() {
    }
    getConnect() {
        const config = {    
            database: 'jamesthew',
            host: 'localhost',        
            user: 'root',
            password: '123456',
        };
        return config;
    }
};
