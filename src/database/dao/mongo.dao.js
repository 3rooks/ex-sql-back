import { ENTITIES } from '#constants/entities.js';
import mongoose from 'mongoose';

export class MongoDAO {
    constructor() {
        this.models = {
            [ENTITIES.COACHES]: '',
            [ENTITIES.STUDENTS]: '',
            [ENTITIES.INSTITUTES]: ''
        };
        this.database = undefined;
    }

    async connect(uri) {
        try {
            const db = await mongoose.connect(uri);
            console.log(`persistence/connected-db: ${db.connection.name}`);
            this.database = db;
        } catch (error) {
            console.log(`Failed connection to persistence-db: ${error}`);
        }
    }

    async disconnect() {
        await this.database.disconnect();
        this.database = undefined;
    }

    async getBy(entity, data) {
        return this.mmodels[entity].findOne(data);
    }

    async getAll(entity, search) {
        return await this.models[entity].find(search);
    }

    async getById(entity, id, options) {
        return await this.models[entity].findById(id, options);
    }

    async create(entity, data) {
        return await this.models[entity].create(data);
    }

    async update(entity, id, data) {
        return await this.models[entity].findByIdAndUpdate(id, data);
    }

    async delete(entity, id) {
        return await this.models[entity].findByIdAndDelete(id);
    }
}

export const MONGO_FILE_DAO = import.meta.url;
