import mongoose from 'mongoose';

export class MongooseFactory {
    constructor() {
        this.instance = mongoose;
        this.models = {};
    }

    connect = async (uri) => {
        try {
            const db = await this.instance.connect(uri);
            console.log(`Connected to database: ${db.connection.name}`);
        } catch (error) {
            console.log(`Failed connection to database: ${error}`);
        }
    };

    disconnect = async () => {
        await this.instance.disconnect();
        console.log('Database disconnected.');
    };

    defineModel = (modelName, schema) => {
        const newModel = this.instance.model(modelName, schema);
        this.models[modelName] = newModel;
        return newModel;
    };

    getModel(name) {
        return this.models[name];
    }

    getAll = async (entity, search) => await this.models[entity].find(search);

    getById = async (entity, id, options) =>
        await this.models[entity].findById(id, options);

    getBy = async (entity, data) => await this.models[entity].findOne(data);

    create = async (entity, data) => await this.models[entity].create(data);

    update = async (entity, id, data) =>
        await this.models[entity].findByIdAndUpdate(id, data);

    delete = async (entity, id) =>
        await this.models[entity].findByIdAndDelete(id);
}
