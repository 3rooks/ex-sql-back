import { MODELS } from './models/models.js';

export class Database {
    constructor() {
        this.models = MODELS;
    }

    static async connect(sequelize) {
        try {
            // await sequelize.authenticate();
            // console.log('Connection to the DB successfully.');

            // Sincronizar los modelos con la base de datos
            await sequelize.sync({ force: false });
            console.log('Models synchronized with the database.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    /**
     * Insert a new record in an entity
     * @param {string} entity
     * @param {object} data
     * @returns {Promise<Model>}
     */
    async create(entity, data) {
        return await this.models[entity].create(data);
    }

    /**
     * Obtain all records of an entity
     * @param {string} entity
     * @returns {Promise<Model>}
     */
    async getAll(entity) {
        return await this.models[entity].findAll();
    }

    /**
     * Obtain a record by its ID from an entity
     * @param {string} entity
     * @param {string} id
     * @returns {Promise<Model>}
     */
    async getById(entity, id, options) {
        return await this.models[entity].findByPk(id, options);
    }

    /**
     * Obtain a record by entity-specific criteria
     * @param {string} entity
     * @param {object} data
     * @returns {Promise<Model>}
     */
    async getBy(entity, data) {
        return await this.models[entity].findOne({ where: data });
    }

    /**
     * Update a record by its ID in an entity
     * @param {string} entity
     * @param {string} id
     * @param {object} data
     * @returns {Promise<Model>}
     */
    async updateById(entity, id, data) {
        return await this.models[entity].update(data, { where: { id } });
    }

    /**
     * Delete a record by its entity ID
     * @param {string} entity
     * @param {string} id
     * @returns {Promise<Model>}
     */
    async deleteById(entity, id) {
        return await this.models[entity].destroy({ where: { id } });
    }
}
