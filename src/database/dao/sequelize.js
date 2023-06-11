import { Sequelize } from 'sequelize';

class SequelizeFactory {
    constructor(uri) {
        this.instance = new Sequelize(String(uri));
        this.models = {};
    }

    defineModel(name, attributes) {
        const model = this.instance.define(name, attributes);
        this.models[name] = model;
        return model;
    }

    getModel(name) {
        return this.models[name];
    }

    async auth() {
        await this.instance.authenticate();
        console.log('Connection to the database successfully.');
    }

    async sync() {
        await this.instance.sync({ force: false });
        console.log('Models synchronized with the database.');
    }

    async close() {
        await this.instance.close();
        console.log('Database Disconnected.');
    }
}

export const sequelize = new SequelizeFactory(process.env.POSTGRES_URI);

// 'postgres://user:pass@localhost:5432/dbname'
