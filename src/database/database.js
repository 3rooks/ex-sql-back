import { FactoryDAO } from './dao/factory.js';

class Database {
    constructor(factory) {
        this.factory = factory;
        this.database = undefined;
    }

    async setPersistence(persistence) {
        const db = await this.factory.createDAO(persistence);
        this.database = db;
    }

    async connection(uri) {
        await this.database.connect(uri);
    }

    async disconnect() {
        await this.database.disconnect();
        this.database = undefined;
    }

    getInstance() {
        return this.database;
    }
}

export const db = new Database(new FactoryDAO());
