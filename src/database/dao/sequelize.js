import { Sequelize } from 'sequelize';

export class SequelizeFactory {
    constructor(uri) {
        this.instance = new Sequelize(String(uri));
        this.models = {};
    }

    defineModel(modelName, attributes) {
        const model = this.instance.define(modelName, attributes);
        this.models[modelName] = model;
        return model;
    }

    getModel(name) {
        return this.models[name];
    }

    // Método para inicializar y agregar los modelos
    setModels(models) {
        Object.entries(models).forEach(([modelName, modelDefinition]) => {
            const model = this.instance.define(modelName, modelDefinition);
            this.models[modelName] = model;
        });
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

    connect = async () => {
        await this.auth();
        await this.sync();
    };

    disconnect = async () => {
        await this.close();
    };

    // **********************************************
    getAll = async (entity, search) => {
        return await this._models[entity].findAll(search);
    };

    getById = async (entity, id, options) => {
        return await this._models[entity].findByPk(id, options);
    };

    getBy = async (entity, data) => {
        return await this._models[entity].findOne({ where: data });
    };

    create = async (entity, data) => {
        return await this._models[entity].create(data);
    };

    update = async (entity, id, data) => {
        return await this._models[entity].update(data, { where: { id } });
    };

    delete = async (entity, id) => {
        return await this._models[entity].destroy({ where: { id } });
    };
}

export const sequelize = new SequelizeFactory(process.env.POSTGRES_URI);

// 'postgres://user:pass@localhost:5432/dbname'
