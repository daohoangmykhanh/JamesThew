module.exports = class DbConnect {
    constructor() {
    }
    getConnect() {
        this.config = {
            user: 'sa',
            password: '123456',
            server: 'AUGSEC',
            database: 'JamesThew',
            port:1433
        };
        return this.config;
    }
};
